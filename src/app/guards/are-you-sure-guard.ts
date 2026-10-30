import { CanActivateFn } from '@angular/router';

export const areYouSureGuard: CanActivateFn = (route, state) => {
  return confirm("Etes vous sure de vouloir quitter la page?");
};
