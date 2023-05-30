import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileDroppableConfig } from '../file-dropper/file-dropper-config';

@Component({
  selector: 'cps2-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

  @Input({ required: true }) fileDropperConfig!: FileDroppableConfig;

  fileDropperForm = this.fb.group({
    fileDropper: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

}
