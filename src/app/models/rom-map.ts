export interface RomMap {
  totalSize: number;
  parts: {
    [partName: string]: {
      order: number,
      offset: number,
      size: number,
      end: number,
      file: File
    }
  };
  key: File;
}

export interface FullRomMap {
  regions: { [regionName: string]: FullyMappedProgramSpace };
}

export interface FullyMappedProgramSpace {
  size: number;
  files: { [fileName: string]: RomFile };
}

export interface RomFile {
  offset: number;
  size: number;
  file?: File;
}

export interface RomProgramSpace {
  totalSize: number;
  executableRegions: RomExecutableRegion[];
  key: RomKey;
}

export interface RomExecutableRegion {
  filename: string;
  offset: number;
  size: number;
}

export interface RomKey {
  filename: string;
  offset: number;
  size: number;
}
