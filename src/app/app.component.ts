import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ROM_DEFINITIONS } from './constants/rom-definitions';
import { FileHandle } from './directives/file-droppable/file-handle';
import { Patch } from './models/mra';
import { RomExecutableRegion, RomProgramSpace } from './models/rom-map';
import { LogService } from './services/log/log.service';
import { ByteUtil } from './utilities/byte-util';
import { FileUtil } from './utilities/file-util';

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
  downloadLink: SafeUrl = '';
  dumps = false;
  error = '';
  files: FileHandle[] = [];
  isApplyingPatch = false;
  patches: Patch[] = [];
  zipFilename = '';

  private eeprom = new Uint8Array();
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
      const hasZip = this.files.some((fileHandle) => FileUtil.fileHandleHasExtension(fileHandle, 'zip'));
      const hasMra = this.files.some((fileHandle) => FileUtil.fileHandleHasExtension(fileHandle, 'mra'));
      return hasZip && hasMra;
    }
    return false;
  }

  // please don't look at this
  private async processFiles(): Promise<void> {
    const zipFile = this.files.find((fileHandle: FileHandle) => FileUtil.fileHandleHasExtension(fileHandle, 'zip'));
    const mraFile = this.files.find((fileHandle: FileHandle) => FileUtil.fileHandleHasExtension(fileHandle, 'mra'));
    if (zipFile && mraFile) {
      this.zipFilename = zipFile.file.name;
      this.romData = ROM_DEFINITIONS[FileUtil.getFileHandleName(zipFile)];

      if (this.romData) {
        try {
          this.romFiles = await FileUtil.readZipFile(zipFile.file);
        } catch(error) {
          this.log.error('Error reading ROM.');
          this.error = 'Error reading ROM. Refresh and try again with a valid one.';
          return;
        }
        await this.processZipFile();
        await this.processMraFile(mraFile.file);
      } else {
        this.log.error('Invalid ROM name');
        this.error = 'Invalid ROM. Please upload a MAME ROM with its original name and file extension (.zip).'
        return;
      }
    } else {
      this.log.error('Missing ' + zipFile ? '.mra' : '.zip' + ' file.')
      this.error = 'Missing ' + zipFile ? '.mra' : '.zip' + ' file.';
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
      this.combinedEncryptedBinary = await FileUtil.concatenateFilesToUint8Array(this.executableRomFiles);
      this.isApplyingPatch = false;
      this.log.debug(`ROM size: 0x${this.combinedEncryptedBinary.length.toString(16)}`)
    } else {
      this.isApplyingPatch = false;
      this.error = 'ROM is missing files. Please upload a MAME ROM with its original name and file extension (.zip).'
      return;
    }
  }

  private async processMraFile(mraFile: File): Promise<void> {
    const domParser = new DOMParser();
    try {
      const xmlDoc = (domParser.parseFromString(await mraFile.text(), 'text/xml') as XMLDocument);
      const nvramIndex = xmlDoc.querySelector('nvram')?.getAttribute('index');
      let eepromString = '';
      if (nvramIndex !== null) {
        xmlDoc.querySelectorAll('rom').forEach((rom) => {
          if (rom.getAttribute('index') && rom.getAttribute('index') === nvramIndex) {
            rom.childNodes.forEach((child) => {
              if (child && child.nodeName === 'part') {
                eepromString += child.textContent ?? '';
              }
            });
          }
        });
        if (eepromString) {
          this.log.debug('eeprom modifications found:', eepromString);
          this.eeprom = ByteUtil.convertDelimitedHexStringToUint8Array(eepromString);
        }
      }
      this.log.debug('patches:');
      xmlDoc.querySelectorAll('patch').forEach((patch) => {
        this.log.debug(`0x${(Number(patch.getAttribute('offset')) - 0x40).toString(16)}: ${patch.textContent}`);
        const offset = Number(patch.getAttribute('offset') ?? 0);
        const bytes = ByteUtil.convertDelimitedHexStringToUint8Array(patch.textContent ?? '');
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
        let fileData = new Uint8Array(await file!.arrayBuffer());

        for (let j = 0; j < this.patches[i].bytes.length; j++) {
          this.log.debug(`patching ${file!.name} @ 0x${(fileRelativeOffset + j).toString(16).padStart(6, '0')} (ROM + 0x${(this.patches[i].offset + j).toString(16).padStart(6, '0')}) from ${fileData[fileRelativeOffset+j].toString(16).padStart(2, '0')} to ${this.patches[i].bytes[j].toString(16).padStart(2, '0')}`);
          fileData[fileRelativeOffset + j] = this.patches[i].bytes[j];
        }
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

      this.combinedEncryptedModifiedBinary = await FileUtil.concatenateFilesToUint8Array(this.executableRomFiles);

      if (this.eeprom.length) {
        this.romFiles.push(FileUtil.createFileFromUint8Array(this.eeprom, 'eeprom'));
      }
      const zipFile = await FileUtil.createZipFile(this.romFiles);

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

}
