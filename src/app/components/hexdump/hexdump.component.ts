import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ByteUtil } from 'src/app/utilities/byte-util';
import { HexDumpEntry } from './models/hex-dump-entry';

@Component({
  selector: 'cps2-hexdump',
  templateUrl: './hexdump.component.html',
  styleUrls: ['./hexdump.component.scss']
})
export class HexdumpComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;
  @Input({ required: true }) binary!: Uint8Array;
  @Input() bytesPerLine = 16;
  @Input() startingOffset = 0x0;
  workingBinary!: Uint8Array;
  hexdumpRows: HexDumpEntry[] = [];
  endianness = '';
  machineEndianness = '';

  ngOnInit(): void {
    this.machineEndianness = ByteUtil.getMachineEndianness();
    this.endianness = this.machineEndianness;
    if (this.machineEndianness == 'little') {
      this.workingBinary = ByteUtil.swapBytePairs(this.binary);
    } else {
      this.workingBinary = new Uint8Array(this.binary);
    }
    this.hexdump();
  }

  onEndiannessChange(change: MatButtonToggleChange): void {
    this.endianness = change.value;
    this.workingBinary = ByteUtil.swapBytePairs(this.workingBinary);
    this.hexdump();
  }

  onOffsetChange(event: Event): void {
    const el = event.target as HTMLInputElement;
    const value = Number(`0x${el.value}`);
    const index = this.hexdumpRows.findIndex((row) => {
      const rowOffset = Number(`0x${row.offset}`);
      return rowOffset <= value && value < rowOffset + this.bytesPerLine;
    });
    if (index > -1) {
      this.viewport.scrollToIndex(index);
    }
  }

  onBytesPerLineChange(event: Event): void {
    const el = event.target as HTMLInputElement;
    const value = el.value;
    this.bytesPerLine = Number(value) || 16;
    this.hexdump();
  }

  trackHex(_: number, entry: HexDumpEntry): string {
    return entry.offset;
  }

  private hexdump(binary: Uint8Array = this.workingBinary, bytesPerLine: number = this.bytesPerLine, startingOffset: number = this.startingOffset): void {
    const array = new Uint8Array(binary);
    this.hexdumpRows = [];
    for (let i = startingOffset; i < array.length; i += bytesPerLine) {
      const lineBytes = array.slice(i, i + bytesPerLine);
      const hexLine = Array.from(lineBytes)
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join(' ');
  
      const asciiLine = Array.from(lineBytes)
        .map((byte) => (byte >= 32 && byte <= 126) ? String.fromCharCode(byte) : '.')
        .join('');

      const offset = i.toString(16).padStart(6, '0');
      this.hexdumpRows.push({ offset: offset, hex: hexLine.padEnd(bytesPerLine * 3 - 1), ascii: asciiLine });
    }
  }

}
