import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const authService: AuthService = inject(AuthService);

  const user = authService.connectedUser();

  if(user){

    const clone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });

    return next(clone);
  }

  return next(req);
};
