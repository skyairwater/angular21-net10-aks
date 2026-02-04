import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'stocks', pathMatch: 'full' },
  {
    path: 'stocks',
    loadComponent: () =>
      import('./pages/stock-symbols/stock-symbols').then(m => m.StockSymbols)
  }
];
