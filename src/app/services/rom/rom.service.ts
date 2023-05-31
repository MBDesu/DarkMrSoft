import { Injectable } from '@angular/core';
import { ROM_DEFINITIONS } from 'src/app/constants/rom-definitions';
import { Patch } from 'src/app/models/mra';
import { RomMap } from 'src/app/models/rom-map';
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

  async applyMraPatch(romMap: RomMap, patches: Patch[]): Promise<File[]> {
    if (!patches.length) {
      throw new Error(`.mra file contains no patches.`);
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
