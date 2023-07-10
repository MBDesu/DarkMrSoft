import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
  
  binaries: { binary: Uint8Array, title: string, description: string }[] = [];
  dumps = false;
  error = '';

  constructor(private dialog: MatDialog, private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
  }

  async gotBinary(binary: { binary: Uint8Array, title: string, description: string }): Promise<void> {
    if (binary) {
      this.binaries.push(binary);
    } else {
      this.binaries = [];
    }
  }

  openSupportModal(): void {
    this.dialog.open(SupportedRomsModalComponent, {});
  }

}
