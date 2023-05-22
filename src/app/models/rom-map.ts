export interface RomExecutableRegion {
  filename: string;
  offset: number;
  size: number;
};

export interface RomProgramSpace {
  totalSize: number;
  executableRegions: RomExecutableRegion[];
  key: RomKey;
};

export interface RomKey {
  filename: string;
  offset: number;
  size: number;
}
