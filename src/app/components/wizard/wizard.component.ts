import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Cps2Crypto, Cps2Rom, Cps2Utils } from 'cps2-utils';
import { Subject } from 'rxjs';
import { FileUtil } from 'src/app/utilities/file-util';
import { FileDroppableConfig } from '../file-dropper/file-dropper-config';
import { WIZARD_CONFIG } from './wizard.constants';

@Component({
  selector: 'cps2-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

  @Output() gotBinary = new EventEmitter<{ binary: Uint8Array, title: string, description: string }>();

  config = WIZARD_CONFIG;
  cps2Rom!: Cps2Rom;

  // TODO: figure out how to maybe programmatically set these as well
  doOperation: { [operation: string]: { go: () => Promise<void> } } = {
    'to_mame': {
      go: () => this.applyMraPatch(),
    },
    'to_darksoft': {
      go: () => this.convertToDarksoft(),
    },
    'concatenate': {
      go: () => this.concatenateExecutableRegions(),
    },
    'split': {
      go: () => this.splitExecutableBin(),
    },
    'decrypt_zip_opcodes': {
      go: () => this.decryptZipOpcodes(),
    },
    'decrypt_bin_opcodes': {
      go: () => this.decryptBinOpcodes(),
    },
    'encrypt_opcodes': {
      go: () => this.encryptOpcodes(),
    },
  };

  downloadLink: SafeUrl = '';
  fileDropperConfig!: FileDroppableConfig;

  fileDropperForm = this.fb.group({
    fileDropper: ['', Validators.required]
  });

  fileProcessingError = '';
  files!: File[];
  gotFileProcessingError = new Subject<string>();

  operationForm = this.fb.group({
    operation: ['', Validators.required]
  });

  operations = Object.keys(this.config.operations);
  outputFilename = '';
  patchFile!: File;
  processing = false;

  constructor(
    private fb: FormBuilder,
    private domSanitizer: DomSanitizer,
  ) { }

  async filesAdded(files: File[]): Promise<void> {
    this.gotBinary.emit();
    this.downloadLink = '';
    this.outputFilename = '';
    this.fileProcessingError = '';
    const operation = this.operationForm.get('operation')?.value || 'none';

    if (this.config.operations[operation] && this.config.operations[operation].metadata.hasRom) {
      const romFile = files.find((file) => FileUtil.fileHasExtension(file, 'zip')); // has to exist
      if (!romFile) { // impossible
        throw new Error('Somehow, ROM zip not found');
      }
      this.cps2Rom = new Cps2Rom(romFile);
      await this.processRom();
    }
    if (this.config.operations[operation] && this.config.operations[operation].metadata.hasMra) {
      const mraFile = files.find((file) => FileUtil.fileHasExtension(file, 'mra'));
      if (!mraFile) { // impossible
        throw new Error('Somehow, .mra not found');
      }
      this.patchFile = mraFile;
    }
    this.files = files;
  }

  async performOperation(): Promise<void> {
    const operation = this.operationForm.get('operation')?.value || '';
    if (this.doOperation[operation]) {
      await this.doOperation[operation].go();
    }
  }

  private async applyMraPatch(): Promise<void> {
    this.processing = true;
    const modifiedObject = await this.cps2Rom.patchWith(this.patchFile);
    const modifiedBinary = this.cps2Rom.getModifiedBinary();
    const modifiedRom = modifiedObject.getModifiedRom();
    if (!modifiedRom || !modifiedBinary) {
      this.processing = false;
      return Promise.reject(new Error('Somehow, something went wrong with patching'));
    }
    this.gotBinary.emit({ binary: modifiedBinary, title: 'Encrypted ROM', description: 'Encrypted, modified' });
    this.setDownloadLink(modifiedRom);
    this.processing = false;
  }

  private async convertToDarksoft(): Promise<void> {
    this.processing = true;
    await this.cps2Rom.convertToDarksoft();
    const darksoftRom = this.cps2Rom.getDarksoftRom();
    if (!darksoftRom) {
      throw new Error('Somehow, something went wrong with Darksoft conversion');
    }
    this.setDownloadLink(darksoftRom);
    this.processing = false;
  }

  private async concatenateExecutableRegions(): Promise<void> {
    this.processing = true;
    const concatenatedBinary = this.cps2Rom.getBinary();
    if (!concatenatedBinary) {
      throw new Error('Somehow, the concatenated binary doesn\'t exist');
    }
    const concatenatedBinaryFile = FileUtil.createFileFromUint8Array(concatenatedBinary, this.cps2Rom.getName() + '.bin');
    this.setDownloadLink(concatenatedBinaryFile);
    this.processing = false;
  }

  private async splitExecutableBin(): Promise<void> {
    this.processing = true;
    const binFile = this.files.find((file) => FileUtil.fileHasExtension(file, 'bin'));
    if (!binFile) {
      return Promise.reject('Somehow missing .bin file');
    }
    const zip = await Cps2Utils.splitExecutableBinToFiles(binFile, this.cps2Rom);
    this.setDownloadLink(zip);
    this.processing = false;
  }

  private async decryptZipOpcodes(): Promise<void> {
    this.processing = true;
    const decryptedOpcodes = (await this.cps2Rom.decryptOpcodes()).getDecryptedOpcodes();
    if (!decryptedOpcodes) { // unlikely
      this.processing = false;
      return Promise.reject(new Error('Somehow, something went wrong with decryption'));
    }
    this.gotBinary.emit({ binary: decryptedOpcodes, title: 'Decrypted ROM', description: 'Decrypted, unmodified' });
    const decryptedBinaryFile = FileUtil.createFileFromUint8Array(decryptedOpcodes, this.cps2Rom.getName() + '.bin');
    this.setDownloadLink(decryptedBinaryFile);
    this.processing = false;
  }

  private async decryptBinOpcodes(): Promise<void> {
    this.processing = true;
    const binFile = this.files.find((file) => FileUtil.fileHasExtension(file, 'bin'));
    if (!binFile) {
      return Promise.reject('Somehow missing .bin file');
    }
    const decryptedBinaryFile = await Cps2Crypto.decryptBinOpcodes(binFile, this.cps2Rom);
    this.setDownloadLink(decryptedBinaryFile);
    this.processing = false;
  }

  private async encryptOpcodes(): Promise<void> {
    this.processing = true;
    const binFile = this.files.find((file) => FileUtil.fileHasExtension(file, 'bin'));
    if (!binFile) {
      return Promise.reject('Somehow missing .bin file');
    }
    const encryptedBinaryFile = await Cps2Crypto.encryptBinOpcodes(binFile, this.cps2Rom);
    this.setDownloadLink(encryptedBinaryFile);
    this.processing = false;
  }

  private async processRom(): Promise<void> {
    this.processing = true;
    try {
      await this.cps2Rom.read();
      await this.cps2Rom.processExecutable();
      this.gotBinary.emit({ binary: this.cps2Rom.getBinary() ?? new Uint8Array(), title: 'Encrypted ROM', description: 'Encrypted, unmodified' });
      this.downloadLink = '';
    } catch (error) {
      this.gotError(error);
    } finally {
      this.processing = false;
    }
  }

  private gotError(error: any): void {
    this.fileProcessingError = error.message;
    this.gotFileProcessingError.next(this.fileProcessingError);
  }

  private setDownloadLink(file: File): void {
    this.outputFilename = file.name;
    this.downloadLink = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
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
