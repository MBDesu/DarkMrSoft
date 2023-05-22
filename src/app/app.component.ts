import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import JSZip from 'jszip';
import { ROM_DEFINITIONS } from './constants/rom-definitions';
import { FileHandle } from './directives/file-droppable/file-handle';
import { Patch } from './models/mra';
import { RomExecutableRegion, RomProgramSpace } from './models/rom-map';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // TODO: refactor file dropper stuff. Deleting files from the app component is
  // a nightmare. Need to be able to do so without much trouble in case the user
  // decides they want to do more than one thing or they make a mistake.

  // TODO: move the file processing stuff into its own services/helpers. It
  // doesn't do much here except really make things awful.

  // TODO: simplify data structures to be more conducive to what we're actually
  // doing here. Constructing all these maps and arrays and iterating over them
  // a thousand times shouldn't be necessary.

  // TODO: verify that the ROM files' CRCs, SHA1s, etc. match what is in the
  // .mra file. Maybe display a warning if something doesn't match? Or error
  // out. I dunno.

  // FIXME: this whole thing is just full of filthy code.

  title = 'Dark Mr. Soft - CPS2 ROM Patcher';

  combinedEncryptedBinary = new Uint8Array();
  combinedDecryptedBinary = new Uint8Array();
  combinedDecryptedModifiedBinary = new Uint8Array();
  combinedEncryptedModifiedBinary = new Uint8Array();
  downloadLink: any;
  dumps = false;
  error = '';
  files: FileHandle[] = [];
  isApplyingPatch = false;
  patches: Patch[] = [];
  zipFilename = '';

  private eepromString = '';
  private executableRomFiles: File[] = [];
  private romData: RomProgramSpace | undefined = undefined;
  private romFiles: File[] = [];
  private romPartNames: string[] = [];
  private romPartNameToRomFileMap = new Map<string, File>();
  private romPartNameToRomExecutableRegionmap = new Map<string, RomExecutableRegion>();

  constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private log: LogService) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
  }

  onFileDrop(event: FileHandle[]): void {
    this.files = event;
    if (this.fileTypesAreValid()) {
      this.error = '';
      this.processFiles();
    } else {
      // ??????????????????????
    }
  }

  private fileTypesAreValid(): boolean {
    if (this.files.length === 2) {
      const hasZip = this.files.some((fileHandle) => fileHandle.file.name.split('.').pop() === 'zip');
      const hasMra = this.files.some((fileHandle) => fileHandle.file.name.split('.').pop() === 'mra');
      return hasZip && hasMra;
    }
    return false;
  }

  // please don't look at this
  private async processFiles(): Promise<void> {
    const zipFile = this.files.find((fileHandle: FileHandle) => fileHandle.file.name.split('.').pop() === 'zip');
    const mraFile = this.files.find((fileHandle: FileHandle) => fileHandle.file.name.split('.').pop() === 'mra');
    if (zipFile && mraFile) {
      this.zipFilename = zipFile.file.name;
      this.romData = ROM_DEFINITIONS[zipFile.file.name.split('.')[0]];

      if (this.romData) {
        this.romFiles = await this.readZipFile(zipFile.file);
        await this.processZipFile();
        await this.processMraFile(mraFile.file);
      } else {
        this.error = 'Invalid ROM. Please upload a MAME ROM with its original name and file extension (.zip).'
        return;
      }
    } else {
      this.error = 'Please upload a MAME ROM with its original name and file extension (.zip) and a .mra file.';
      return;
    }
  }

  // especially don't look at this
  // FIXME: see the fixme at the top of this file
  private async processZipFile(): Promise<void> {
    this.isApplyingPatch = true;
    this.romPartNames = this.romData!.executableRegions.map((romPart) => romPart.filename);
    
    if (this.romPartNames.every((romPartName) => this.romFiles.some((file) => file.name === romPartName))) {
      this.romPartNames.forEach((romPartName) => {
        this.romPartNameToRomFileMap.set(romPartName, this.romFiles.find((romFile) => romFile.name === romPartName)!);
        this.romPartNameToRomExecutableRegionmap.set(romPartName, this.romData!.executableRegions.find((region) => region.filename === romPartName)!);
        if (this.romPartNameToRomExecutableRegionmap.get(romPartName)) {
          this.executableRomFiles.push(this.romPartNameToRomFileMap.get(romPartName)!);
        }
      });
      this.combinedEncryptedBinary = await this.concatenateFiles(this.executableRomFiles);
      this.isApplyingPatch = false;
      this.log.debug(`ROM size: 0x${this.combinedEncryptedBinary.length.toString(16)}`)
    } else {
      this.isApplyingPatch = false;
      this.error = 'ROM is missing files. Please upload a MAME ROM with its original name and file extension (.zip).'
      return;
    }
  }

  private async readZipFile(zipFile: File): Promise<File[]> {
    const zip = new JSZip();

    try {
      const zipData = await this.readFile(zipFile);
      const loadedZip = await zip.loadAsync(zipData);
      const files: Promise<File>[] = [];

      loadedZip.forEach((_: string, zipEntry: JSZip.JSZipObject) => {
        if (!zipEntry.dir) {
          const filePromise = zipEntry.async('uint8array').then((fileData: Uint8Array) => {
            const blob = new Blob([fileData]);
            return new File([blob], zipEntry.name);
          });
          files.push(filePromise);
        }
      });
      return Promise.all(files);
    } catch (error) {
      this.log.error('Error reading .zip file:', error);
      return [];
    }
  }

  private async createZipFile(filesToZip: File[]): Promise<Blob> {
    const zip = new JSZip();
    const filePromises: Promise<void>[] = [];

    if (this.eepromString) {
      const eepromBytes: number[] = [];
      this.eepromString.split(' ').forEach((byteAsString) => eepromBytes.push(Number('0x'+byteAsString)));
      const buffer = new Uint8Array(eepromBytes);
      zip.file('eeprom', buffer);
    }

    filesToZip.forEach(async (file) => {
      const filePromise = this.readFile(file).then((fileData) => {
        zip.file(file.name, fileData);
      });
      filePromises.push(filePromise);
    });

    await Promise.all(filePromises);

    return zip.generateAsync({ type: 'blob' });
  }

  private async readFile(file: File): Promise<ArrayBuffer> {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
      fileReader.onerror = () => reject(fileReader.error);
      fileReader.readAsArrayBuffer(file);
    });
  }

  private async processMraFile(mraFile: File): Promise<void> {
    const domParser = new DOMParser();
    try {
      const xmlDoc = (domParser.parseFromString(await mraFile.text(), 'text/xml') as XMLDocument);
      const nvramIndex = xmlDoc.querySelector('nvram')?.getAttribute('index');
      if (nvramIndex !== null) {
        xmlDoc.querySelectorAll('rom').forEach((rom) => {
          if (rom.getAttribute('index') && rom.getAttribute('index') === nvramIndex) {
            rom.childNodes.forEach((child) => {
              if (child && child.nodeName === 'part') {
                this.eepromString += child.textContent;
              }
            });
          }
          if (this.eepromString) {
            this.log.debug('eeprom modifications found:', this.eepromString);
          }
        });
      }
      this.log.debug('patches:');
      xmlDoc.querySelectorAll('patch').forEach((patch) => {
        this.log.debug(`0x${(Number(patch.getAttribute('offset')) - 0x40).toString(16)}: ${patch.textContent}`);
        const offset = Number(patch.getAttribute('offset') ?? 0);
        const patchBytes = patch.textContent?.split(' ');
        const bytes = new Uint8Array(patchBytes?.length ?? 0);
        for (let i = 0; i < (patchBytes?.length ?? 0); i++) {
          bytes[i] = Number('0x'+patchBytes![i]);
        }
        this.patches.push({ offset: offset, bytes: bytes });
      });
    } catch (error) {
      this.error = 'Invalid .mra file. Refresh and try again with a valid one.'
    }
  }

  async applyPatch(): Promise<void> {
    this.isApplyingPatch = true;
    if (this.romData && this.patches.length && this.romPartNames.length) {
      const fileToRangeMap = this.constructFileToRangeMapping();
      for (let i = 0; i < this.patches.length; i++) {
        const offset = this.patches[i].offset - 0x40;
        const range = fileToRangeMap.find((range) => range.start <= this.patches[i].offset && this.patches[i].offset <= range.end)!;
        const fileRelativeOffset = offset - range.start;
        let file = this.romPartNameToRomFileMap.get(range.filename);
        // let fileData = ByteUtil.swapBytePairs(new Uint8Array(await file!.arrayBuffer()));
        let fileData = new Uint8Array(await file!.arrayBuffer());

        for (let j = 0; j < this.patches[i].bytes.length; j++) {
          this.log.debug(`patching ${file!.name}@0x${fileRelativeOffset+j} (ROM+0x${this.patches[i].offset}) from ${fileData[fileRelativeOffset+j].toString(16)} to ${this.patches[i].bytes[j].toString(16)}`);
          fileData[fileRelativeOffset + j] = this.patches[i].bytes[j];
        }
        // fileData = ByteUtil.swapBytePairs(fileData);
        this.romPartNameToRomFileMap.set(range.filename, new File([new Blob([fileData])], range.filename));
      }
      this.executableRomFiles = [];

      for (const romPart of this.romPartNames) {
        this.executableRomFiles.push(this.romPartNameToRomFileMap.get(romPart)!);
      }
      for (let i = 0; i < this.romFiles.length; i++) {
        this.executableRomFiles.find((file) => {
          if (file.name === this.romFiles[i].name) {
            this.romFiles[i] = file;
          }
        });
      }

      this.combinedEncryptedModifiedBinary = await this.concatenateFiles(this.executableRomFiles);

      const zipFile = await this.createZipFile(this.romFiles);

      this.downloadLink = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(zipFile));
      this.isApplyingPatch = false;
      return Promise.resolve();
    } else {
      this.isApplyingPatch = false;
      return Promise.resolve();
    }
  }

  private constructFileToRangeMapping(): { filename: string, start: number, end: number }[] {
    const fileToRangeMapping: { filename: string, start: number, end: number }[] = [];
    if (this.romData) {
      for (const region of this.romData.executableRegions) {
        fileToRangeMapping.push({ filename: region.filename, start: region.offset, end: region.offset + region.size });
      }
    }
    return fileToRangeMapping;
  }

  private async concatenateFiles(files: File[]): Promise<Uint8Array> {
    let len = 0;
    for (const file of files) {
      len += file.size;
    }
    const result = new Uint8Array(len);
    let offset = 0;
    for (const file of files) {
      const fileBuffer = await file.arrayBuffer();
      result.set(new Uint8Array(fileBuffer), offset);
      offset += file.size;
    }
    return Promise.resolve(result);
  }

}
