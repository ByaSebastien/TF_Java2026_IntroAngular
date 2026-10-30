import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router)

  loginForm = this._fb.group({
    username: [null, [Validators.required, Validators.maxLength(50)]],
    password: [null, [Validators.required]],
  });

  constructor() {}

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      console.log('Invalid');
      return;
    }

    this._authService.login(this.loginForm.value as any).subscribe({
      next: (result) => {
        console.log("Ok");
        console.log(result);
        this._router.navigate(['game'])
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log("Complete");
      }
    });
  }
}
