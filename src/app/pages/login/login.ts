import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  private readonly _fb: FormBuilder = inject(FormBuilder);

  loginForm = this._fb.group({
    login: [null, [Validators.required, Validators.maxLength(50)]],
    password: [null, [Validators.required]],
  });

  globalForm = this._fb.group({
    login: this.loginForm
  });

  constructor() {}

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      console.log('Invalid');
      return;
    }

    console.log('Valid');
    console.log(this.loginForm.value);
    // Todo Contacter servie d'auth qui lui contactera notre back end
  }
}
