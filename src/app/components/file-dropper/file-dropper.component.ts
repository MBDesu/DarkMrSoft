/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { FileDroppableConfig } from 'src/app/components/file-dropper/file-dropper-config';
import { FileUtil } from 'src/app/utilities/file-util';

@Component({
  selector: 'cps2-file-dropper',
  templateUrl: './file-dropper.component.html',
  styleUrls: ['./file-dropper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileDropperComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: FileDropperComponent,
    },
  ]
})
export class FileDropperComponent implements OnInit, ControlValueAccessor {
  @Input() config!: FileDroppableConfig;
  @Output() filesAdded = new EventEmitter<File[]>();

  isDisabled = false;
  error = '';
  files: File[] = [];
  filesCommitted = false;
  filesReady = false;
  fileTypesEncountered: string[] = [];
  onChange!: (_: any) => void;
  onTouched!: any;
  touched = false;

  // lifecycle hooks
  ngOnInit(): void {
    if (!this.config) {
      this.config = {
        allowedFileExtensions: []
      };
    }
  }

  // ControlValueAccessor implementation
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  writeValue(_: any): void {
    return;
  }

  // validation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(_: AbstractControl): ValidationErrors | null {
    const errors: { error: string; }[] = [];
    if (this.error) {
      errors.push({ error: this.error });
    }
    if (this.config.maxFiles && this.files.length > this.config.maxFiles) {
      errors.push({ error: 'Somehow you have too many files.' });
    }
    if (this.config.minFiles && this.files.length < this.config.minFiles) {
      errors.push({ error: `Need $(this.config.minFiles - this.files.length) more files.` });
    }
    if (!this.filesCommitted) {
      errors.push({ error: 'Click the upload files button.'} );
    }
    return errors.length ? errors : null;
  }


  // events
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
    if (!this.isDisabled && event.dataTransfer) {
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        if (!this.addFile(event.dataTransfer.files[i])) {
          break;
        }
      }
    }
  }

  filesPicked(event: Event): void {
    if (!this.isDisabled) {
      const el = event.currentTarget as HTMLInputElement;
      const fileList = el.files;

      if (fileList) {
        for (let i = 0; i < fileList.length; i++) {
          if (!this.addFile(fileList[i])) break;
        }
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
    this.filesCommitted = true;
    this.filesAdded.emit(this.files);
  }

  private addFile(file: File): boolean {
    this.error = '';
    if (!this.areFilesReady()) {
      if (this.fileExtensionIsValid(file)) {
        this.fileTypesEncountered.push(FileUtil.getFileExtension(file));
        this.files.push(file);
        this.onChange(file);
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
