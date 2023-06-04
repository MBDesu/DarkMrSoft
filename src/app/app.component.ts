import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProcessedPatchFiles } from './models/rom';
import { FileUtil } from './utilities/file-util';
import { SupportedRomsModalComponent } from './components/supported-roms-modal/supported-roms-modal.component';

@Component({
  selector: 'cps2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // TODO: verify that the ROM files' CRCs, SHA1s, etc. match what is in the
  // .mra file. Maybe display a warning if something doesn't match? Or error
  // out. I dunno.

  // TODO: add .ips to .mra conversion

  // below *sort of* done... sort of. Needs revision.
  // TODO: re-regex the MAME ROM definitions so that we can patch non-executable
  // regions (graphics, etc.)

  title = 'Dark Mr. Soft - CPS2 ROM Patcher';
  
  combinedEncryptedBinary = new Uint8Array();
  // combinedDecryptedBinary = new Uint8Array();
  // combinedDecryptedModifiedBinary = new Uint8Array();
  combinedEncryptedModifiedBinary = new Uint8Array();
  dumps = false;
  error = '';

  constructor(private dialog: MatDialog, private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
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

  openSupportModal(): void {
    this.dialog.open(SupportedRomsModalComponent, {});
  }

}
