import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FileDroppableConfig } from 'src/app/components/file-dropper/file-dropper-config';
import { FileUtil } from 'src/app/utilities/file-util';

@Component({
  selector: 'cps2-file-dropper',
  templateUrl: './file-dropper.component.html',
  styleUrls: ['./file-dropper.component.scss']
})
export class FileDropperComponent implements OnInit {
  @Input() config!: FileDroppableConfig;
  @Output() filesAdded = new EventEmitter<File[]>();
  error = '';
  files: File[] = [];
  filesReady = false;
  fileTypesEncountered: string[] = [];

  ngOnInit(): void {
    if (!this.config) {
      this.config = {
        allowedFileExtensions: []
      };
    }
  }

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

    if (event.dataTransfer) {
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        if (!this.addFile(event.dataTransfer.files[i])) {
          break;
        }
      }
    }
  }

  filesPicked(event: Event): void {
    const el = event.currentTarget as HTMLInputElement;
    const fileList = el.files;

    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        console.log(fileList[i].name);
        if (!this.addFile(fileList[i])) break;
      }
    }
  }

  fileDeleted(i: number): void {
    this.error = '';
    const deletedFile = this.files.splice(i, 1);
    if (this.config.uniqueExtensions) {
      this.fileTypesEncountered.splice(this.fileTypesEncountered.indexOf(FileUtil.getFileExtension(deletedFile[0]), 1));
    }
    this.areFilesReady();
  }

  commitFiles(): void {
    this.filesAdded.emit(this.files);
  }

  private addFile(file: File): boolean {
    console.log(this.filesReady);
    this.error = '';
    if (!this.areFilesReady()) {
      if (this.fileExtensionIsValid(file)) {
        this.fileTypesEncountered.push(FileUtil.getFileExtension(file));
        this.files.push(file);
        this.areFilesReady();
        return true;
      }
    }
    return false;
  }

  private areFilesReady(): boolean {
    this.filesReady = (this.config.maxFiles || 0) >= this.files.length && this.files.length >= (this.config.minFiles || 0);
    return this.filesReady;
  }

  private fileExtensionIsValid(file: File): boolean {
    if (!(this.config.allowedFileExtensions?.length || this.config.uniqueExtensions)) {
      return true;
    }

    const fileExtension = FileUtil.getFileExtension(file);
    if (this.config.uniqueExtensions && this.fileTypesEncountered.indexOf(fileExtension) >= 0) {
      this.error = `Only one ${fileExtension} file allowed.`;
      return false;
    }
    if (this.config.allowedFileExtensions?.length && this.config.allowedFileExtensions.indexOf(fileExtension) < 0) {
      const extensions = this.config.allowedFileExtensions.join(', ')
      this.error = 'Invalid file extension. Allowed extensions are: ' + extensions;
      return false;
    }
    return true;
  }

}
