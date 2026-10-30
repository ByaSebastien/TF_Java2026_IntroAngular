import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-form-error',
  styleUrl: './form-error.scss',
  templateUrl: './form-error.html',
})
export class FormError {

  control = input.required<AbstractControl>();

  get errors() {
    return this.control().errors;
  }
}
