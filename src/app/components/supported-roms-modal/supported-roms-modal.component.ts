import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ROM_DEFINITIONS } from 'src/app/constants/rom-definitions';
import { ROM_DEFINITIONS_V2 } from 'src/app/constants/rom-definitions-v2';

type RomDefinition = { name: string, supportsPatching: string, supportsConvertingToDarksoft: string };

@Component({
  selector: 'cps2-supported-roms-modal',
  templateUrl: './supported-roms-modal.component.html',
  styleUrls: ['./supported-roms-modal.component.scss']
})
export class SupportedRomsModalComponent implements OnInit, AfterViewInit {
  displayedColumns = [ 'name', 'patchable', 'convertible' ];
  romDefinitions: RomDefinition[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: any;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialogRef: MatDialogRef<SupportedRomsModalComponent>) { }

  ngOnInit(): void {
    const patchableRoms = Object.keys(ROM_DEFINITIONS);
    const convertibleRoms = Object.keys(ROM_DEFINITIONS_V2);
    for (const romName of patchableRoms) {
      const isConvertible = convertibleRoms.indexOf(romName) > -1;
      this.romDefinitions.push({ name: romName, supportsPatching: '✅', supportsConvertingToDarksoft: isConvertible ? '✅' : '❌' });
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
