import { Routes } from '@angular/router';

export const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },

  {
    path: 'stock',
    loadComponent: () =>
      import('./pages/stock/stock').then(m => m.StockSymbols)
  },

  {
    path: 'international',
    loadComponent: () =>
      import('./pages/international/international').then(m => m.International)
  },
  
  {
    path: 'commodity',
    loadComponent: () =>
      import('./pages/commodity/commodity').then(m => m.Commodity)
  },

  {
    path: 'etf',
    loadComponent: () =>
      import('./pages/etf/etf').then(m => m.Etf)
  },

  {
    path: 'otc',
    loadComponent: () =>
      import('./pages/otc/otc').then(m => m.OtcSymbols)
  }
];
