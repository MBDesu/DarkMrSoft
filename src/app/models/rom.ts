import { ProcessedMraFile } from './mra';
import { RomMap } from './rom-map';

export interface ProcessedPatchFiles {
  processedRomFiles: ProcessedRomFiles;
  processedMraFile: ProcessedMraFile;
}

export interface ProcessedRomFiles {
  executableRomFiles: File[];
  romFiles: File[];
  romMap: RomMap;
}