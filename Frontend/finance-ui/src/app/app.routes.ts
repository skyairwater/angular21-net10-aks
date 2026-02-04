import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'stocksymbols', pathMatch: 'full' },
  {
    path: 'stocksymbols',
    loadComponent: () =>
      import('./pages/stock-symbols/stock-symbols').then(m => m.StockSymbols)
  }
];
