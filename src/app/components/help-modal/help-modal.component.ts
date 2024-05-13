import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SupportedRomsModalComponent } from '../supported-roms-modal/supported-roms-modal.component';

@Component({
  selector: 'cps2-help-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './help-modal.component.html',
  styleUrl: './help-modal.component.scss'
})
export class HelpModalComponent {
  protected dialogRef = inject(MatDialogRef<HelpModalComponent>);
  protected dialog = inject(MatDialog);

  protected close = () => {
    this.dialogRef.close();
  }

  protected openSupportModal(): void {
    this.dialog.open(SupportedRomsModalComponent, {});
  }
}
