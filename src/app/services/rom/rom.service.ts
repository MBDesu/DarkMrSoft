import { Injectable } from '@angular/core';
import { ROM_DEFINITIONS } from 'src/app/constants/rom-definitions';
import { ROM_DEFINITIONS_V2 } from 'src/app/constants/rom-definitions-v2';
import { Patch, PatchMap } from 'src/app/models/mra';
import { RomMap, RomMapV2, RomProgramSpaceV2 } from 'src/app/models/rom-map';
import { ByteUtil } from 'src/app/utilities/byte-util';
import { FileUtil } from 'src/app/utilities/file-util';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class RomService {

  constructor(private log: LogService) { }

  // HACK: if I'd had foresight when regexing the ROM data from MAME's cps2.cpp,
  // I would have constructed the data like a `RomMap` in the first place; alas,
  // this service operation is necessary now. However, if we want to add `File`s
  // to the mapping, this is also an acceptable way.

  mapRom(romName: string, romFiles: File[]): RomMap {
    const romProgramSpace = ROM_DEFINITIONS[romName];
    if (!romProgramSpace) {
      throw new Error(`'${romName}' is not a valid ROM.`);
    }

    const keyFile = romFiles.find((file) => file.name === romProgramSpace.key.filename && file.size === romProgramSpace.key.size);
    if (!keyFile) {
      throw new Error(`Key for '${romName}' is invalid.`)
    }

    const romMap: RomMap = {
      totalSize: romProgramSpace.totalSize,
      parts: {},
      key: keyFile
    };

    for (let i = 0; i < romProgramSpace.executableRegions.length; i++) {
      const executableRegion = romProgramSpace.executableRegions[i];
      const executableFilename = executableRegion.filename;
      const file = romFiles.find((file) => file.name === executableFilename);
      if (!file) {
        throw new Error(`'${romName}' is missing ${executableFilename}`);
      }

      const offset = executableRegion.offset;
      const size = executableRegion.size;
      const end = offset + size;

      romMap.parts[executableRegion.filename] = {
        order: i,
        offset: executableRegion.offset,
        size: executableRegion.size,
        end: end,
        file: file
      };

    }
    return romMap;
  }

  getFullRomMap(romName: string, romFiles: File[]): RomMapV2 {
    const romMap = ROM_DEFINITIONS_V2[romName];
    if (!romMap) {
      throw new Error(`'${romName}' is not a valid ROM.`);
    }
    const missingFile = this.populateFullRomMapFiles(romMap, romFiles);
    if (missingFile) {
      throw new Error(`'${romName}' is missing ${missingFile}`);
    }
    return romMap;
  }

  private populateFullRomMapFiles(romMap: RomMapV2, romFiles: File[]): string {
    const regions = Object.keys(romMap.regions);
    for (const region of regions) {
      const regionFilenames = Object.keys(romMap.regions[region].files);
      for (const filename of regionFilenames) {
        const file = romFiles.find((file) => file.name === filename);
        if (!file) return filename;
        romMap.regions[region].files[filename].file = file;
      }
    }
    return '';
  }

  /**
   * Maps .mra patches to file relative offsets and filenames
   * 
   * For use with converting .mra patches to .ips, but prob useful for other
   * stuff too.
   * @param romMap 
   * @param patches 
   */
   mapMraPatchToFiles(romMap: RomMap, patches: Patch[]): PatchMap {
    if (!patches.length) {
      throw new Error('.mra file contains no patches.');
    }
    const patchMap: { [filename: string]: Patch[] } = {};
    for (let i = 0; i < patches.length; i++) {
      const romPart = this.findExecutableRomPartByRomOffset(romMap, patches[i].offset);
      const filename = romPart.file.name;
      const fileRelativeOffset = patches[i].offset - romPart.start;
      const patch = { offset: fileRelativeOffset, bytes: patches[i].bytes };

      if (patchMap[filename]) {
        patchMap[filename].push(patch);
      } else {
        patchMap[filename] = [ patch ];
      }
    }

    return patchMap;
  }

  async convertMameRomToDarksoft(romMap: RomMapV2): Promise<File[]> {
    const files: File[] = [];
    for (const region in romMap.regions) {
      switch (region) {
        case 'audiocpu':
          await this.formatAudiocpuForDarksoft(romMap.regions[region]).then((flashFile) => {
            files.push(flashFile);
          });
          break;
        case 'maincpu':
          await this.formatMaincpuForDarksoft(romMap.regions[region]).then((flashFile) => {
            files.push(flashFile);
          });
          break;
        case 'qsound':
          await this.formatQsoundForDarksoft(romMap.regions[region]).then((flashFiles) => {
            flashFiles.forEach((file) => files.push(file));
          });
          break;
        case 'gfx':
          await this.formatGfxForDarksoft(romMap.regions[region]).then((flashFiles) => {
            flashFiles.forEach((file) => files.push(file));
          });
          break;
        case 'key':
          await this.formatKeyForDarksoft(romMap.regions[region]).then((keyFile) => {
            files.push(keyFile);
          });
          break;

        default:
          break;
      }
    }
    return files;
  }

  private async formatAudiocpuForDarksoft(audiocpuRegion: RomProgramSpaceV2): Promise<File> {
    const audiocpuBytes = ByteUtil.getFFBytes(0x400000);
    const files = this.getRegionFiles(audiocpuRegion);
    let bytesOffset = 0;

    for (const file of files) {
      const fileBytes = await FileUtil.convertFileToUint8Array(file);
      audiocpuBytes.set(fileBytes, bytesOffset);
      bytesOffset += fileBytes.length;
    }
    return FileUtil.createFileFromUint8Array(audiocpuBytes, 'flash.01');
  }

  private async formatMaincpuForDarksoft(maincpuRegion: RomProgramSpaceV2): Promise<File> {
    const maincpuBytes = ByteUtil.getFFBytes(0x400000);
    const files = this.getRegionFiles(maincpuRegion);
    let bytesOffset = 0;

    for (const file of files) {
      const fileBytes = await FileUtil.convertFileToUint8Array(file);
      maincpuBytes.set(fileBytes, bytesOffset);
      bytesOffset += fileBytes.length;
    }
    return FileUtil.createFileFromUint8Array(maincpuBytes, 'flash.02');
  }

  private async formatQsoundForDarksoft(qsoundRegion: RomProgramSpaceV2): Promise<File[]> {
    const flashBytes = ByteUtil.getFFBytes(0x800000);
    const files = this.getRegionFiles(qsoundRegion);
    const combinedQsoundFiles = await FileUtil.concatenateFilesToUint8Array(files);

    flashBytes.set(combinedQsoundFiles);
    const result: File[] = [];
    result.push(FileUtil.createFileFromUint8Array(flashBytes.slice(0, 0x400000), 'flash.03'))
    if (combinedQsoundFiles.length > 0x400000) {
      result.push(FileUtil.createFileFromUint8Array(flashBytes.slice(0x400000), 'flash.04'));
    }
    return result;
  }

  // TODO: really need to test this thoroughly for correctness
  private async formatGfxForDarksoft(gfxRegion: RomProgramSpaceV2): Promise<File[]> {
    const files = this.getRegionFiles(gfxRegion);

    const result: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file1 = files[i];
      const file2 = files[i + 1];
      let file1Bytes = await FileUtil.convertFileToUint8Array(file1);
      let file2Bytes = await FileUtil.convertFileToUint8Array(file2);
      let resultFile1: File;
      let resultFile2: File;
      if (file1Bytes.length === 0x800000) {
        file1Bytes = file1Bytes.slice(0, 0x400000);
        file2Bytes = file1Bytes.slice(0x400000);
        resultFile1 = FileUtil.createFileFromUint8Array(file1Bytes, `flash.${(i + 5).toString().padStart(2, '0')}`);
        resultFile2 = FileUtil.createFileFromUint8Array(file2Bytes, `flash.${(i + 6).toString().padStart(2, '0')}`);
        result.push(resultFile1, resultFile2);
        continue;
      } else if (file1Bytes.length === 0x400000) {
        resultFile1 = FileUtil.createFileFromUint8Array(file1Bytes, `flash.${(i + 5).toString().padStart(2, '0')}`);
        const resultFile2Bytes = ByteUtil.getFFBytes(0x400000);
        resultFile2Bytes.set(file2Bytes);
        resultFile2 = FileUtil.createFileFromUint8Array(resultFile2Bytes, `flash.${(i + 6).toString().padStart(2, '0')}`);
        result.push(resultFile1, resultFile2);
        i++;
        continue;
      } else if (file1Bytes.length <= 0x200000) {
        const resultFile1Bytes = ByteUtil.getFFBytes(0x200000);
        const resultFile2Bytes = ByteUtil.getFFBytes(0x200000);
        const resultBytes = ByteUtil.getFFBytes(0x400000);
        resultFile1Bytes.set(file1Bytes);
        resultFile2Bytes.set(file2Bytes);
        resultBytes.set(resultFile1Bytes);
        resultBytes.set(resultFile2Bytes, 0x200000);
        resultFile1 = FileUtil.createFileFromUint8Array(resultBytes, `flash.${(i + 5).toString().padStart(2, '0')}`);
        result.push(resultFile1);
        i++;
        continue;
      }
    }
    return result;
  }

  private async formatKeyForDarksoft(keyRegion: RomProgramSpaceV2): Promise<File> {
    const keyFilename = Object.keys(keyRegion.files);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const keyFile = keyRegion.files[keyFilename[0]].file!;
    const keyFileBytes = await FileUtil.convertFileToUint8Array(keyFile);
    return FileUtil.createFileFromUint8Array(keyFileBytes, 'key');
  }

  // lexicographically sorts the files by name
  private getRegionFiles(region: RomProgramSpaceV2): File[] {
    const result: File[] = [];
    for (const file in region.files) {
      // we know file is set here because the rom service would throw an error
      // if it wasn't when the rom map was being constructed
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      result.push(region.files[file].file!);
    }
    FileUtil.orderRomFilesByNumericExtension(result);
    return result;
  }

  async applyMraPatch(romMap: RomMap, patches: Patch[]): Promise<File[]> {
    if (!patches.length) {
      throw new Error('.mra file contains no patches.');
    }
    const modifiedFiles: { [filename: string]: File } = {};
    for (let i = 0; i < patches.length; i++) {
      const romPart = this.findExecutableRomPartByRomOffset(romMap, patches[i].offset);
      let fileData;
      // HACK: yeah we didn't think this through
      if (modifiedFiles[romPart.file.name]) fileData = new Uint8Array(await modifiedFiles[romPart.file.name].arrayBuffer());
      else fileData = new Uint8Array(await romPart.file.arrayBuffer());

      const relativeOffset = patches[i].offset - romPart.start;
      
      for (let j = 0; j < patches[i].bytes.length; j++) {
        this.log.debug(`patching ${romPart.file.name} @ 0x${(relativeOffset + j).toString(16).padStart(6, '0')} (ROM + 0x${(patches[i].offset + j).toString(16).padStart(6, '0')}) from ${fileData[relativeOffset+j].toString(16).padStart(2, '0')} to ${patches[i].bytes[j].toString(16).padStart(2, '0')}`);
        fileData[relativeOffset + j] = patches[i].bytes[j];
      }
      modifiedFiles[romPart.file.name] = FileUtil.createFileFromUint8Array(fileData, romPart.file.name);
    }
    return Promise.resolve(Object.values(modifiedFiles));
  }

  private findExecutableRomPartByRomOffset(romMap: RomMap, offset: number): { file: File, start: number, end: number } {
    if (offset > romMap.totalSize) {
      throw new Error(`offset cannot exceed ROM size`);
    }
    for (const part of Object.values(romMap.parts)) {
      if (part.offset <= offset && offset < part.end) {
        return { file: part.file, start: part.offset, end: part.end };
      }
    }
    throw new Error(`offset not in executable range`);
  }

}
