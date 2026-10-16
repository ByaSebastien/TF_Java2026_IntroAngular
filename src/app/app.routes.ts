import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./pages/product-index/product-index').then(m => m.ProductIndex),
  },
  {
    path: 'chrono',
    loadComponent: () =>
      import('./pages/chrono/chrono').then(m => m.Chrono),
  },
  {
    path: 'cart-exo',
    loadComponent: () =>
      import('./pages/cart-exo/cart-exo').then(m => m.CartExo),
  },
];
