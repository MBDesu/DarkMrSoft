import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/app/directives/file-droppable/file-handle';

@Component({
  selector: 'cps2-file-dropper',
  templateUrl: './file-dropper.component.html',
  styleUrls: ['./file-dropper.component.scss']
})
export class FileDropperComponent {
  @Output() fileDropped: EventEmitter<FileHandle[]> = new EventEmitter();
  files: FileHandle[] = [];
  error = '';

  constructor(private sanitizer: DomSanitizer) {}

  filesDropped(event: FileHandle[]): void {
    if (event.length < 2) {
      this.files.push(event[0]);
    } else {
      this.files = event;
    }
    this.fileDropped.emit(this.files);
    this.error = '';
  }

  filesPicked(event: Event): void {
    const el = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = el.files;
    if (fileList) {
      let fileHandles: FileHandle[] = [];
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList.item(i);
        if (file) {
          const extension = file.name.split('.').pop();
          if (extension === 'mra' || extension === 'zip') {
            const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
            fileHandles.push({ file: file, url: url })
          }
        }
      }
      const zip = fileHandles.find((fileHandle) => fileHandle.file.name.split('.').pop() === 'zip');
      const mra = fileHandles.find((fileHandle) => fileHandle.file.name.split('.').pop() === 'mra');
      fileHandles = [];
      if (zip) fileHandles.push(zip);
      if (mra) fileHandles.push(mra);
      if (fileHandles.length) this.filesDropped(fileHandles);
    }
  }
  
  gotError(event: string): void {
    this.error = event;
  }

}
