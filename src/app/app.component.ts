import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProcessedPatchFiles } from './models/rom';
import { LogService } from './services/log/log.service';
import { RomService } from './services/rom/rom.service';
import { FileUtil } from './utilities/file-util';

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
  
  combinedEncryptedBinary = new Uint8Array();
  // combinedDecryptedBinary = new Uint8Array();
  // combinedDecryptedModifiedBinary = new Uint8Array();
  combinedEncryptedModifiedBinary = new Uint8Array();
  dumps = false;
  error = '';

  constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private log: LogService, private romService: RomService) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
  }

  async gotProcessedFiles(processedPatchFiles: ProcessedPatchFiles): Promise<void> {
    if (processedPatchFiles) {
      const concatenatedFiles = await FileUtil.concatenateFilesToUint8Array(processedPatchFiles.processedRomFiles.executableRomFiles);
      this.combinedEncryptedBinary = concatenatedFiles;
    } else {
      this.combinedEncryptedBinary = new Uint8Array();
    }
  }

  async gotPatchedBinary(patchedBinaryFiles: File[]): Promise<void> {
    if (patchedBinaryFiles) {
      const concatenatedFiles = await FileUtil.concatenateFilesToUint8Array(patchedBinaryFiles);
      this.combinedEncryptedModifiedBinary = concatenatedFiles;
    } else {
      this.combinedEncryptedModifiedBinary = new Uint8Array();
    }
  }

}
