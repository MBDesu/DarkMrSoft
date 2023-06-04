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

export interface RomMapV2 {
  regions: { [regionName: string]: RomProgramSpaceV2 };
}

export interface RomProgramSpaceV2 {
  size: number;
  files: { [fileName: string]: RomFileV2 };
}

export interface RomFileV2 {
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
