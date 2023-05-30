import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileDroppableConfig } from '../file-dropper/file-dropper-config';

@Component({
  selector: 'cps2-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

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
      minFiles: 2,
      maxFiles: 2,
      allowedFileExtensions: [ 'mra', 'ips' ],
      uniqueExtensions: true,
    },
    'mra_to_ips': {
      minFiles: 2,
      maxFiles: 2,
      allowedFileExtensions: [ 'mra', 'ips' ],
      uniqueExtensions: true,
    }
  };

  fileDropperConfig!: FileDroppableConfig;

  operationForm = this.fb.group({
    operation: ['', Validators.required]
  });
  fileDropperForm = this.fb.group({
    fileDropper: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

}
