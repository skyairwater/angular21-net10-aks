import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class FinanceService 
{
    private http = inject(HttpClient);    

    stockSymbolGetAll(): Observable<any> {
      return this.http.get(`${environment.apiBaseUrl}/api/StockSymbol/GetAll`);
    }

    getInternationalSymbols(): Observable<any> {
      return this.http.get(`${environment.apiBaseUrl}/api/StockSymbol/GetInternationalSymbols`);
    }

     getEtfSymbols(): Observable<any> {
      return this.http.get(`${environment.apiBaseUrl}/api/StockSymbol/GetEtfSymbols`);
    }

     getCommoditySymbols(): Observable<any> {
      return this.http.get(`${environment.apiBaseUrl}/api/StockSymbol/GetCommoditySymbols`);
    }

     getOverTheCounterSymbols(): Observable<any> {
      return this.http.get(`${environment.apiBaseUrl}/api/StockSymbol/GetOverTheCounterSymbols`);
    }
}
