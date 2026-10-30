import { inject, Service, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../models/login-form';
import { UserTokenDto } from '../models/user-dto';
import { tap } from 'rxjs';

@Service()
export class AuthService {
  private readonly _http : HttpClient = inject(HttpClient);

  connectedUser: WritableSignal<UserTokenDto | undefined>;

  constructor() {
    console.log("Yabadabadooooo");
    let json = localStorage.getItem('connectedUser');
    this.connectedUser = signal(json ? JSON.parse(json) : undefined);
  }

  login(form: LoginForm) {
    return this._http.post<UserTokenDto>('http://localhost:8080/login', form)
      .pipe(
        tap((user) => {
          this.connectedUser.set(user)
          localStorage.setItem('connectedUser', JSON.stringify(user));
        })
      );
  }

  logout() {
    this.connectedUser.set(undefined)
    localStorage.removeItem('connectedUser');
  }
}
