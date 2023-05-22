import { FileHandle } from '../directives/file-droppable/file-handle';
import JSZip from 'jszip';

export class FileUtil {

  static getFileHandleName(fileHandle: FileHandle, withExtension = false): string {
    if (withExtension) return fileHandle.file.name;
    const fullFilenameDotDelimited = fileHandle.file.name.split('.');
    return fullFilenameDotDelimited.slice(0, fullFilenameDotDelimited.length - 1).join('');
  }

  static getFileName(file: File, withExtension = false): string {
    if (withExtension) return file.name;
    const fullFilenameDotDelimited = file.name.split('.');
    return fullFilenameDotDelimited.slice(0, fullFilenameDotDelimited.length - 1).join('');
  }

  static getFileHandleExtension(fileHandle: FileHandle): string {
    return fileHandle.file.name.split('.').pop()?.toLowerCase() || '';
  }

  /**
   * To be passed as a predicate.
   * @param fileHandle 
   */
  static fileHandleHasExtension(fileHandle: FileHandle, extension: string): boolean {
    return this.getFileHandleExtension(fileHandle) === extension.toLowerCase();
  }

  static async concatenateFilesToUint8Array(files: File[]): Promise<Uint8Array> {
    let len = 0;
    for (const file of files) {
      len += file.size;
    }
    const result = new Uint8Array(len);
    let offset = 0;
    for (const file of files) {
      const fileBuffer = await file.arrayBuffer();
      result.set(new Uint8Array(fileBuffer), offset);
      offset += file.size;
    }
    return Promise.resolve(result);
  }

  static async createZipFile(filesToZip: File[]): Promise<Blob> {
    const zip = new JSZip();
    const filePromises: Promise<void>[] = [];

    filesToZip.forEach(async (file) => {
      const filePromise = this.readFile(file).then((fileData) => {
        zip.file(file.name, fileData);
      });
      filePromises.push(filePromise);
    });

    await Promise.all(filePromises);

    return zip.generateAsync({ type: 'blob' });
  }

  static async readFile(file: File): Promise<ArrayBuffer> {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
      fileReader.onerror = () => reject(fileReader.error);
      fileReader.readAsArrayBuffer(file);
    });
  }

  static createFileFromUint8Array(arr: Uint8Array, filename: string): File {
    return new File([new Blob([arr])], filename);
  }

  static async readZipFile(zipFile: File): Promise<File[]> {
    const zip = new JSZip();

    try {
      const zipData = await this.readFile(zipFile);
      const loadedZip = await zip.loadAsync(zipData);
      const files: Promise<File>[] = [];

      loadedZip.forEach((_: string, zipEntry: JSZip.JSZipObject) => {
        if (!zipEntry.dir) {
          const filePromise = zipEntry.async('uint8array').then((fileData: Uint8Array) => {
            return this.createFileFromUint8Array(fileData, zipEntry.name);
          });
          files.push(filePromise);
        }
      });
      return Promise.all(files);
    } catch (error) {
      // don't enjoy catching to throw, but I don't wanna do DI in a util class
      throw error;
    }
  }

}