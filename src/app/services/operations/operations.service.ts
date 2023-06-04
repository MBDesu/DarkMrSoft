import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ProcessedPatchFiles } from 'src/app/models/rom';
import { ByteUtil } from 'src/app/utilities/byte-util';
import { FileUtil } from 'src/app/utilities/file-util';
import { RomService } from '../rom/rom.service';
import { FullRomMap } from 'src/app/models/rom-map';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private romService: RomService, private domSanitizer: DomSanitizer) { }

  async applyMraPatch(processedPatchFiles: ProcessedPatchFiles): Promise<{ modifiedRomFiles: File[], downloadLink: SafeUrl }> {
    const modifiedRomParts = await this.romService.applyMraPatch(processedPatchFiles.processedRomFiles.romMap, processedPatchFiles.processedMraFile.patches);
    // perhaps the data structure refactor was a little short sighted...
    const unmodifiedRomParts = processedPatchFiles.processedRomFiles.romFiles.filter((file) => !modifiedRomParts.some((modifiedFile) => file.name === modifiedFile.name));
    const modifiedRomFiles = modifiedRomParts.concat(unmodifiedRomParts);

    const eeprom = processedPatchFiles.processedMraFile.eepromBytes;
    if (eeprom.length) {
      modifiedRomFiles.push(FileUtil.createFileFromUint8Array(eeprom, 'eeprom'));
    }

    const zipFile = await FileUtil.createZipFile(modifiedRomFiles);
    return {
      modifiedRomFiles: modifiedRomFiles.filter((file) => !!processedPatchFiles.processedRomFiles.romMap.parts[file.name]),
      downloadLink: this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(zipFile)),
    };
  }

  // romMap must have its files filled out from the zip
  async convertMameToDarksoft(romMap: FullRomMap): Promise<SafeUrl> {
    const convertedRomFiles = await this.romService.convertMameRomToDarksoft(romMap);
    const zipFile = await FileUtil.createZipFile(convertedRomFiles);
    return this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(zipFile));
  }

  async convertMraToIps(processedPatchFiles: ProcessedPatchFiles): Promise<SafeUrl> {
    const patches = processedPatchFiles.processedMraFile.patches;
    const romMap = processedPatchFiles.processedRomFiles.romMap;
    const patchMap = this.romService.mapMraPatchToFiles(romMap, patches);
    const modifiedFilenames = Object.keys(patchMap);
    const ipsFiles: File[] = [];

    for (const filename of modifiedFilenames) {
      let ipsFileOffset = 0;
      const ipsBytes = new Uint8Array(ByteUtil.calculateIpsBufferSize(patchMap[filename]));
      ipsBytes.set([ 0x50, 0x41, 0x54, 0x43, 0x48 ], ipsFileOffset);
      ipsFileOffset += 5;

      for (const patch of patchMap[filename]) {
        const patchOffset = ByteUtil.convertNumberToUint8Array(patch.offset, 3, 0);
        const length = ByteUtil.convertNumberToUint8Array(patch.bytes.length, 2, 0);

        ipsBytes.set(patchOffset, ipsFileOffset);
        ipsFileOffset += patchOffset.length;
        ipsBytes.set(length, ipsFileOffset);
        ipsFileOffset += length.length;
        ipsBytes.set(patch.bytes, ipsFileOffset);
        ipsFileOffset += patch.bytes.length;
      }

      ipsBytes.set([ 0x45, 0x4F, 0x46 ], ipsFileOffset);
      ipsFiles.push(FileUtil.createFileFromUint8Array(ipsBytes, filename + '.ips'));
    }

    const zipFile = await FileUtil.createZipFile(ipsFiles);
    return this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(zipFile));
  }

}
