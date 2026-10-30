import { Component, inject, Signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserTokenDto } from '../../models/user-dto';

@Component({
  imports: [RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router)

  connectedUser: Signal<UserTokenDto | undefined> = this._authService.connectedUser;

  logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}

