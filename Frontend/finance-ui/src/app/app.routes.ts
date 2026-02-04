import { Routes } from '@angular/router';

export const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },

  {
    path: 'stocksymbols',
    loadComponent: () =>
      import('./pages/stock-symbols/stock-symbols').then(m => m.StockSymbols)
  }
];
