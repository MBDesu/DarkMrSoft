import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cps2Utils } from 'cps2-utils';

@Component({
  selector: 'cps2-supported-roms-modal',
  templateUrl: './supported-roms-modal.component.html',
  styleUrls: ['./supported-roms-modal.component.scss']
})
export class SupportedRomsModalComponent implements OnInit, AfterViewInit {
  displayedColumns = [ 'name', 'supported' ];
  romDefinitions: { name: string, supportsPatching: string }[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: any;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialogRef: MatDialogRef<SupportedRomsModalComponent>) { }

  ngOnInit(): void {
    for (const romName of Cps2Utils.getSupportedRoms()) {
      this.romDefinitions.push({ name: romName, supportsPatching: '✅' });
    }
    this.dataSource = new MatTableDataSource(this.romDefinitions);
  }

  ngAfterViewInit(): void {
    this.sort.sort(({ id: 'name', start: 'asc' }) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  close(): void {
    this.dialogRef.close();
  }
}
