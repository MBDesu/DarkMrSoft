import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Patch } from './models/mra';
import { RomMap } from './models/rom-map';
import { LogService } from './services/log/log.service';
import { RomService } from './services/rom/rom.service';
import { ByteUtil } from './utilities/byte-util';
import { FileUtil } from './utilities/file-util';
import { FileDroppableConfig } from './components/file-dropper/file-dropper-config';

@Component({
  selector: 'cps2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // TODO: verify that the ROM files' CRCs, SHA1s, etc. match what is in the
  // .mra file. Maybe display a warning if something doesn't match? Or error
  // out. I dunno.

  // TODO: add .mra to .ips (or vice versa) conversion

  // TODO: add Darksoft file format generation

  // TODO: consider some refactoring to get rid of some of these state variables

  title = 'Dark Mr. Soft - CPS2 ROM Patcher';
  
  appliedPatch = false;
  combinedEncryptedBinary = new Uint8Array();
  combinedDecryptedBinary = new Uint8Array();
  // combinedDecryptedModifiedBinary = new Uint8Array();
  combinedEncryptedModifiedBinary = new Uint8Array();
  downloadLink: SafeUrl = '';
  dumps = false;
  error = '';
  files: File[] = [];

  fileDropperConfig: FileDroppableConfig = {
    allowedFileExtensions: [ 'mra', 'zip' ],
    maxFiles: 2,
    minFiles: 2,
    uniqueExtensions: true,
  };

  filesUploaded = false;
  isApplyingPatch = false;
  // outputFormat: 'mame' | 'darksoft' = 'mame';
  patches: Patch[] = [];
  zipFilename = '';

  private eeprom = new Uint8Array();
  private executableRomFiles: File[] = [];
  private modifiedRomFiles: File[] = [];
  private romFiles: File[] = [];
  private romMap!: RomMap;

  constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private log: LogService, private romService: RomService) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
  }

  async filesAdded(event: File[]): Promise<void> {
    this.files = event;
    await this.processFiles();
  }

  private async processFiles(): Promise<void> {
    const zipFile = this.files.find((file) => FileUtil.fileHasExtension(file, 'zip'));
    const mraFile = this.files.find((file) => FileUtil.fileHasExtension(file, 'mra'));

    if (zipFile && mraFile) {
      this.zipFilename = zipFile.name;

      try {
        this.romFiles = await FileUtil.readZipFile(zipFile);
      } catch(error) {
        this.log.error('Error reading ROM zip file.');
        this.error = 'Error reading ROM zip file. Refresh and try again with a valid one.';
        return;
      }

      try {
        this.romMap = this.romService.mapRom(FileUtil.getFileName(zipFile), this.romFiles);
      } catch(error) {
        if (error instanceof Error) {
          this.log.error(error.message);
          this.error = error.message;
          return;
        }
      }

      this.executableRomFiles = this.processRomParts(this.romMap);
      this.filesUploaded = true;
      this.combinedEncryptedBinary = await FileUtil.concatenateFilesToUint8Array(this.executableRomFiles);
      // const crypter = new Cps2Crypto(this.combinedEncryptedBinary, new Uint8Array(await FileUtil.readFile(this.romMap.key)));
      // this.combinedDecryptedBinary = crypter.cps2Crypt();
      await this.processMraFile(mraFile);
    } else {
      this.log.error('Missing ' + zipFile ? '.mra' : '.zip' + ' file.')
      this.error = 'Missing ' + zipFile ? '.mra' : '.zip' + ' file.';
      return;
    }
  }

  // can't remember if ES2015+ respects insertion order or not and cba to look
  // atm, so we're assuring that these are ordered with an order property
  private processRomParts(romMap: RomMap): File[] {
    const orderedRomFiles = new Array<File>(Object.keys(romMap.parts).length);
    for (const part of Object.values(romMap.parts)) {
      orderedRomFiles[part.order] = part.file;
    }
    return orderedRomFiles;
  }

  // TODO: move this
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
        const offset = Number(patch.getAttribute('offset')) - 0x40;
        const bytes = ByteUtil.convertDelimitedHexStringToUint8Array(patch.textContent ?? '');
        this.patches.push({ offset: offset, bytes: bytes });
      });
    } catch (error) {
      this.error = 'Invalid .mra file. Refresh and try again with a valid one.'
    }
  }

  async applyPatch(): Promise<void> {
    this.isApplyingPatch = true;
    const modifiedRomParts = await this.romService.applyPatch(this.romMap, this.patches);
    // perhaps the data structure refactor was a little short sighted...
    const unmodifiedRomParts = this.romFiles.filter((file) => !modifiedRomParts.some((modifiedFile) => file.name === modifiedFile.name));
    this.modifiedRomFiles = modifiedRomParts.concat(unmodifiedRomParts);
    this.combinedEncryptedModifiedBinary = await FileUtil.concatenateFilesToUint8Array(modifiedRomParts);

    if (this.eeprom.length) {
      this.modifiedRomFiles.push(FileUtil.createFileFromUint8Array(this.eeprom, 'eeprom'));
    }

    const zipFile = await FileUtil.createZipFile(this.modifiedRomFiles);
    this.downloadLink = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(zipFile));
    this.isApplyingPatch = false;
    this.appliedPatch = true;
    return Promise.resolve();
  }

}
