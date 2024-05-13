import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HelpModalComponent } from './components/help-modal/help-modal.component';
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

  title = 'Dark Mr. Soft - CPS2 ROM Patcher';

  protected binaries: { binary: Uint8Array, title: string, description: string }[] = [];
  protected dumps = false;
  protected error = '';

  constructor(private dialog: MatDialog, private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
  }

  protected async gotBinary(binary: { binary: Uint8Array, title: string, description: string }): Promise<void> {
    if (binary) {
      this.binaries.push(binary);
    } else {
      this.binaries = [];
    }
  }

  protected openSupportModal(): void {
    this.dialog.open(SupportedRomsModalComponent, {});
  }

  protected openHelpModal(): void {
    this.dialog.open(HelpModalComponent, {});
  }

}
