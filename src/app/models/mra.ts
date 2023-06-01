export interface ProcessedMraFile {
  patches: Patch[];
  eepromBytes: Uint8Array;
}

export interface Patch {
  offset: number;
  bytes: Uint8Array;
}

export type PatchMap = { [filename: string]: Patch[] };