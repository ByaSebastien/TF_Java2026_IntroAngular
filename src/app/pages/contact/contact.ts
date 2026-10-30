import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactForm, MeetingType } from '../../models/contact-form';
import { CustomValidators } from '../../validators/custom.validator';
import { FormError } from '../../components/form-error/form-error';
import { KeyValuePipe } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, FormError, KeyValuePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly _fb: FormBuilder = inject(FormBuilder);

  protected readonly MeetingType = MeetingType;

  availabilities = this._fb.array([
    new FormControl(
      '',
      Validators.compose([Validators.required, CustomValidators.afterOneWeek]),
    ),
  ]);

  contactForm = this._fb.group({
    firstname: ['', [Validators.required, Validators.maxLength(50)]],
    lastname: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    meetingType: ['', [Validators.required]],
    description: ['', [Validators.required]],
    availabilities: this.availabilities,
    atHome: [false, [Validators.required]],
  });

  addressForm = this._fb.group({
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
  });

  globalForm = this._fb.group({
    contact: this.contactForm,
    address: this.addressForm,
  });

  constructor() {
    this.addressForm.disable();

    this.contactForm.controls.atHome.valueChanges.subscribe((c) => {
      c ? this.addressForm.enable() : this.addressForm.disable();
    });
  }

  addAvailability() {
    if (this.availabilities.length >= 5) return;

    this.availabilities.push(
      new FormControl(
        '',
        Validators.compose([
          Validators.required,
          CustomValidators.afterOneWeek,
        ]),
      ),
    );
  }

  removeAvailability(index: number) {
    if (this.availabilities.length <= 1) return;

    this.availabilities.removeAt(index);
  }

  submit() {
    this.contactForm.markAllAsTouched();

    if (this.globalForm.invalid) {
      console.log('Formulaire non valide');
      return;
    }

    let value: ContactForm = this.globalForm.value as any;
    console.log('Formulaire valide');
    console.log(value);
  }
}
