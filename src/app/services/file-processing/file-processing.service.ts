import { Injectable } from '@angular/core';
import { Patch, ProcessedMraFile } from 'src/app/models/mra';
import { ProcessedPatchFiles, ProcessedRomFiles } from 'src/app/models/rom';
import { RomMap, RomMapV2 } from 'src/app/models/rom-map';
import { ByteUtil } from 'src/app/utilities/byte-util';
import { FileUtil } from 'src/app/utilities/file-util';
import { LogService } from '../log/log.service';
import { RomService } from '../rom/rom.service';

@Injectable({
  providedIn: 'root'
})
export class FileProcessingService {

  constructor(private romService: RomService, private log: LogService) { }

  async processPatchFiles(files: File[]): Promise<ProcessedPatchFiles> {
    const zipFile = files.find((file) => FileUtil.fileHasExtension(file, 'zip'));
    const mraFile = files.find((file) => FileUtil.fileHasExtension(file, 'mra'));
    if (zipFile && mraFile) {
      const processedRomFiles = await this.processRomFilesForPatching(zipFile);
      const processedMraFile = await this.processMraFile(mraFile);
      return { processedRomFiles: processedRomFiles, processedMraFile: processedMraFile };
    } else {
      throw new Error(`Missing ${zipFile ? '.mra' : '.zip'} file.`);
    }
  }

  private async processRomFilesForPatching(zipFile: File): Promise<ProcessedRomFiles> {
    const romFiles = await FileUtil.readZipFile(zipFile);
    const romMap = this.romService.mapRom(FileUtil.getFileName(zipFile), romFiles);
    const executableRomFiles = this.processRomParts(romMap);
    // no need to validate ROM parts as the ROM service does this already as
    // part of the mapRom operation.
    return {
      romFiles: romFiles,
      romMap: romMap,
      executableRomFiles: executableRomFiles,
    };
  }

  async processRomFilesForDarksoftConversion(zipFile: File): Promise<RomMapV2> {
    const romFiles = await FileUtil.readZipFile(zipFile);
    const romName = FileUtil.getFileName(zipFile);
    return this.romService.getFullRomMap(romName, romFiles);
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

  private async processMraFile(mraFile: File): Promise<ProcessedMraFile> {
    const patches: Patch[] = [];
    let eeprom = new Uint8Array();
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
          eeprom = ByteUtil.convertDelimitedHexStringToUint8Array(eepromString);
        }
      }
      this.log.debug('patches:');
      xmlDoc.querySelectorAll('patch').forEach((patch) => {
        this.log.debug(`0x${(Number(patch.getAttribute('offset')) - 0x40).toString(16)}: ${patch.textContent}`);
        const offset = Number(patch.getAttribute('offset')) - 0x40;
        const bytes = ByteUtil.convertDelimitedHexStringToUint8Array(patch.textContent ?? '');
        patches.push({ offset: offset, bytes: bytes, });
      });
    } catch (error) {
      throw new Error('Invalid .mra file. Refresh and try again with a valid one.');
    }
    return {
      patches: patches,
      eepromBytes: eeprom,
    };
  }

}
