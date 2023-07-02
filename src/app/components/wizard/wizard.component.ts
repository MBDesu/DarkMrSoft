import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { ProcessedPatchFiles } from 'src/app/models/rom';
import { FullRomMap } from 'src/app/models/rom-map';
import { FileProcessingService } from 'src/app/services/file-processing/file-processing.service';
import { OperationsService } from 'src/app/services/operations/operations.service';
import { FileUtil } from 'src/app/utilities/file-util';
import { FileDroppableConfig } from '../file-dropper/file-dropper-config';

@Component({
  selector: 'cps2-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

  @Output() gotProcessedFiles = new EventEmitter<ProcessedPatchFiles>();
  @Output() gotPatchedBinary = new EventEmitter<File[]>();
  @Output() gotBinaryAndKey = new EventEmitter<{ binary: Uint8Array, keyBytes: Uint8Array }>();

  dropperConfigs: { [key: string]: FileDroppableConfig } = {
    'decrypt_opcodes': {
      minFiles: 1,
      maxFiles: 1,
      allowedFileExtensions: [ 'zip' ],
      uniqueExtensions: true,
    },
    'to_mame': {
      minFiles: 2,
      maxFiles: 2,
      allowedFileExtensions: [ 'mra', 'zip' ],
      uniqueExtensions: true,
    },
    'to_darksoft': {
      minFiles: 1,
      maxFiles: 1,
      allowedFileExtensions: [ 'zip' ],
      uniqueExtensions: true,
    },
    'ips_to_mra': {
      minFiles: 1,
      maxFiles: 1,
      allowedFileExtensions: [ 'ips' ],
      uniqueExtensions: true,
    },
    'mra_to_ips': {
      minFiles: 2,
      maxFiles: 2,
      allowedFileExtensions: [ 'mra', 'zip' ],
      uniqueExtensions: true,
    }
  };

  helpText: { [operation: string]: string } = {
    'to_mame':         'Upload a MAME ROM and a .mra file that contains the patches you wish to apply. The output will be a patched MAME format ROM.',
    'to_darksoft':     'Upload a MAME ROM to convert to the Darksoft file format. The output will be a .zip file containing all of a Darksoft converted ROM. You must create your own NAME file.',
    'decrypt_opcodes': 'Upload a MAME ROM that you wish to decrypt the opcodes of',
    'ips_to_mra':      'Upload a MAME ROM and a .ips file that contains the patches you wish to convert to .mra format. The output will be a .mra file that contains only the <patch>es (you must complete the file yourself).',
    'mra_to_ips':      'Upload a MAME ROM and a .mra file that contains the patches you wish to convert to .ips format. The output will be a .zip containing .ips files named the same as the ROM parts you need to apply the patches to.',
  }

  operationButtonText: { [operation: string]: string } = {
    'to_mame':         'Apply Patch',
    'to_darksoft':     'Convert MAME to Darksoft',
    'decrypt_opcodes': 'Decrypt opcodes',
    'ips_to_mra':      'Convert .ips to .mra',
    'mra_to_ips':      'Convert .mra to .ips',
  };

  binaryAndKey!: { binary: Uint8Array, keyBytes: Uint8Array };
  downloadLink: SafeUrl = '';
  fileDropperConfig!: FileDroppableConfig;
  fileProcessingError = '';
  gotFileProcessingError = new Subject<string>();
  outputFilename = '';
  processedPatchFiles!: ProcessedPatchFiles;
  processedRomMap!: FullRomMap;
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
    private operationsService: OperationsService,
    private domSanitizer: DomSanitizer
  ) { }

  filesAdded(files: File[]): void {
    this.fileProcessingError = '';
    const operation = this.operationForm.get('operation')?.value || 'none';

    switch (operation) {
      case 'decrypt_opcodes':
        this.processing = true;
        this.fileProcessingService.getEncryptedBinaryAndKeyBytes(files[0]).then((binaryAndKey) => {
          this.downloadLink = '';
          this.gotBinaryAndKey.emit(binaryAndKey);
          this.binaryAndKey = binaryAndKey;
          this.outputFilename = FileUtil.getFileName(files[0], false) + '.bin';
          this.processing = false;
        }, (error) => {
          this.fileProcessingError = error.message;
          this.gotFileProcessingError.next(this.fileProcessingError);
          this.processing = false;
        });
        break;
      case 'to_mame':
      case 'mra_to_ips':
        this.processing = true;
        this.fileProcessingService.processPatchFiles(files).then((processedPatchFiles) => {
          this.downloadLink = '';
          this.gotFileProcessingError.next('');
          this.gotProcessedFiles.emit();
          this.gotPatchedBinary.emit();

          this.processedPatchFiles = processedPatchFiles;
          this.outputFilename = files.find((file) => FileUtil.fileHasExtension(file, 'zip'))?.name || 'rom.zip';
          this.gotProcessedFiles.emit(this.processedPatchFiles);
          this.processing = false;
        }, (error) => {
          this.fileProcessingError = error.message;
          this.gotFileProcessingError.next(this.fileProcessingError);
          this.processing = false;
        });
        break;

      case 'to_darksoft':
        this.processing = true;
        this.fileProcessingService.processRomFilesForDarksoftConversion(files[0]).then((fullRomMap) => {
          this.downloadLink = '';
          this.gotFileProcessingError.next('');
          this.gotProcessedFiles.emit();
          this.gotPatchedBinary.emit();

          this.outputFilename = files[0].name;
          this.processedRomMap = fullRomMap;
          this.processing = false;
        }, (error) => {
          this.fileProcessingError = error.message;
          this.gotFileProcessingError.next(this.fileProcessingError);
          this.processing = false;
        });
        break;

      default:
        break;
    }
  }

  async performOperation(): Promise<void> {
    const operation = this.operationForm.get('operation')?.value || 'to_mame';
    if (operation === 'to_mame') {
      this.processing = true;
      const result = await this.operationsService.applyMraPatch(this.processedPatchFiles);
      this.downloadLink = result.downloadLink;
      this.gotPatchedBinary.emit(result.modifiedRomFiles);
      this.processing = false;
    } else if (operation === 'to_darksoft') {
      this.processing = true;
      const result = await this.operationsService.convertMameToDarksoft(this.processedRomMap);
      this.downloadLink = result;
      this.processing = false;
    } else if (operation === 'mra_to_ips') {
      this.processing = true;
      const result = await this.operationsService.convertMraToIps(this.processedPatchFiles);
      this.downloadLink = result;
      this.processing = false;
    } else if (operation === 'decrypt_opcodes') {
      this.processing = true;
      const result = await this.operationsService.decryptOpcodes(this.binaryAndKey.binary, this.binaryAndKey.keyBytes, this.outputFilename);
      this.downloadLink = result;
      this.processing = false;
    }
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
