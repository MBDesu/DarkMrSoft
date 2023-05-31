import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { ProcessedPatchFiles } from 'src/app/models/rom';
import { FileProcessingService } from 'src/app/services/file-processing/file-processing.service';
import { RomService } from 'src/app/services/rom/rom.service';
import { FileDroppableConfig } from '../file-dropper/file-dropper-config';
import { FileUtil } from 'src/app/utilities/file-util';

@Component({
  selector: 'cps2-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

  @Output() gotProcessedFiles = new EventEmitter<ProcessedPatchFiles>();
  @Output() gotPatchedBinary = new EventEmitter<File[]>();

  dropperConfigs: { [key: string]: FileDroppableConfig } = {
    'to_mame': {
      minFiles: 2,
      maxFiles: 2,
      allowedFileExtensions: [ 'mra', 'zip' ],
      uniqueExtensions: true,
    },
    'to_darksoft': {
      minFiles: 2,
      maxFiles: 2,
      allowedFileExtensions: [ 'mra', 'zip' ],
      uniqueExtensions: true,
    },
    'ips_to_mra': {
      minFiles: 1,
      maxFiles: 1,
      allowedFileExtensions: [ 'ips' ],
      uniqueExtensions: true,
    },
    'mra_to_ips': {
      minFiles: 1,
      maxFiles: 1,
      allowedFileExtensions: [ 'mra' ],
      uniqueExtensions: true,
    }
  };

  downloadLink: SafeUrl = '';
  fileDropperConfig!: FileDroppableConfig;
  fileProcessingError = '';
  gotFileProcessingError = new Subject<string>();
  operationButtonText = '';
  outputFilename = '';
  processedPatchFiles!: ProcessedPatchFiles;
  processing = false;

  operationForm = this.fb.group({
    operation: ['', Validators.required]
  });
  fileDropperForm = this.fb.group({
    fileDropper: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private fileProcessingService: FileProcessingService,
    private romService: RomService,
    private domSanitizer: DomSanitizer
  ) { }

  filesAdded(files: File[]): void {
    this.fileProcessingError = '';
    const operation = this.operationForm.get('operation')?.value || 'none';
    if (operation === 'to_mame') {
      this.processing = true;
      this.fileProcessingService.processPatchFiles(files).then((processedPatchFiles) => {
        this.downloadLink = '';
        this.gotFileProcessingError.next('');
        this.gotProcessedFiles.emit();
        this.gotPatchedBinary.emit();

        this.operationButtonText = 'Apply Patch';
        this.processedPatchFiles = processedPatchFiles;
        this.outputFilename = files.find((file) => FileUtil.fileHasExtension(file, 'zip'))?.name || 'rom.zip';
        this.gotProcessedFiles.emit(this.processedPatchFiles);
        // apply patch; set download link to patched ROM
        this.processing = false;
      }, (error) => {
        this.fileProcessingError = error.message;
        this.gotFileProcessingError.next(this.fileProcessingError);
        this.processing = false;
      });
    }
  }

  async performOperation(): Promise<void> {
    const operation = this.operationForm.get('operation')?.value || 'none';
    switch (operation) {
      case 'to_mame':
        await this.applyMraPatch(this.processedPatchFiles);
        break;
    }
  }

  private async applyMraPatch(processedPatchFiles: ProcessedPatchFiles): Promise<void> {
    this.processing = true;
    const modifiedRomParts = await this.romService.applyMraPatch(processedPatchFiles.processedRomFiles.romMap, processedPatchFiles.processedMraFile.patches);
    // perhaps the data structure refactor was a little short sighted...
    const unmodifiedRomParts = processedPatchFiles.processedRomFiles.romFiles.filter((file) => !modifiedRomParts.some((modifiedFile) => file.name === modifiedFile.name));
    const modifiedRomFiles = modifiedRomParts.concat(unmodifiedRomParts);
    this.gotPatchedBinary.emit(modifiedRomFiles.filter((file) => !!processedPatchFiles.processedRomFiles.romMap.parts[file.name]));

    const eeprom = processedPatchFiles.processedMraFile.eepromBytes;
    if (eeprom.length) {
      modifiedRomFiles.push(FileUtil.createFileFromUint8Array(eeprom, 'eeprom'));
    }

    const zipFile = await FileUtil.createZipFile(modifiedRomFiles);
    this.downloadLink = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(zipFile));
    this.processing = false;
    return Promise.resolve();
  }

  getErrors(form: FormGroup): string[] {
    const errors: string[] = [];
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors | null | undefined = form.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          errors.push(controlErrors[keyError].error);
        });
      }
    });
    return errors;
  }

}
