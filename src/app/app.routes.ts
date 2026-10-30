import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/is-authenticated-guard';
import { areYouSureGuard } from './guards/are-you-sure-guard';
import { gameResolver } from './resolvers/game-resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./pages/product-index/product-index').then((m) => m.ProductIndex),
  },
  {
    path: 'chrono',
    loadComponent: () => import('./pages/chrono/chrono').then((m) => m.Chrono),
  },
  {
    path: 'cart-exo',
    loadComponent: () =>
      import('./pages/cart-exo/cart-exo').then((m) => m.CartExo),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'game',
    loadComponent: () =>
      import('./pages/game-index/game-index').then((m) => m.GameIndex),
    resolve: {
      page: gameResolver,
    },
  },
  {
    path: 'game/:id',
    loadComponent: () =>
      import('./pages/game-details/game-details').then((m) => m.GameDetails),
  },
  {
    path: 'game-create',
    loadComponent: () =>
      import('./pages/game-create/game-create').then((m) => m.GameCreate),
    canActivate: [isAuthenticatedGuard],
    canDeactivate: [areYouSureGuard],
  },
];
