export class FileUtil {

  /**
   * To be passed as a predicate.
   * @param fileHandle 
   */
  static fileHasExtension(file: File, extension: string): boolean {
    return this.getFileExtension(file) === extension.toLowerCase();
  }

  static getFileExtension(file: File): string {
    return file.name.split('.').pop()?.toLowerCase() || '';
  }

  static createFileFromUint8Array(arr: Uint8Array, filename: string): File {
    return new File([new Blob([arr])], filename);
  }

}