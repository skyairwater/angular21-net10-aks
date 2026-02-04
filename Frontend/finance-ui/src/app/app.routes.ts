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
      import('./pages/stock-symbols/stock-symbols').then(m => m.StockSymbols)
  },

  {
    path: 'international',
    loadComponent: () =>
      import('./pages/international-symbols/international-symbols').then(m => m.InternationalSymbols)
  },
  
  {
    path: 'commodity',
    loadComponent: () =>
      import('./pages/commodity-symbols/commodity-symbols').then(m => m.CommoditySymbols)
  },

  {
    path: 'etf',
    loadComponent: () =>
      import('./pages/etf-symbols/etf-symbols').then(m => m.EtfSymbols)
  },

  {
    path: 'otc',
    loadComponent: () =>
      import('./pages/otc-symbols/otc-symbols').then(m => m.OtcSymbols)
  }
];
