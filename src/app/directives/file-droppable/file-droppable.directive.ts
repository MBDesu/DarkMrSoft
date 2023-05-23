import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './file-handle';

@Directive({
  selector: '[cps2FileDroppable]'
})
export class FileDroppableDirective {
  @Output() files: EventEmitter<FileHandle[]> = new EventEmitter();
  @Output() didError: EventEmitter<string> = new EventEmitter();
  private validFileExtensions = [ '.zip', '.mra' ];

  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const files: FileHandle[] = [];
    if (event.dataTransfer) {
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        if (!this.isValidFileExtension(file.name)) {
          this.didError.emit('Please choose a .zip or .mra file')
          return;
        }
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        files.push({ file: event.dataTransfer.files[i], url: url });
      }
    }
  
    if (files.length > 0) {
      this.files.emit(files);
    }
  }

  private isValidFileExtension(name: string): boolean {
    return this.validFileExtensions.some((extension: string) => name.endsWith(extension));
  }

}
