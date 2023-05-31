export interface ProcessedMraFile {
  patches: Patch[];
  eepromBytes: Uint8Array;
}

export interface Patch {
  offset: number;
  bytes: Uint8Array;
}