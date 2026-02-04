import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private url = 'https://localhost:7112/api/StockSymbol/GetAll';

  constructor(private http: HttpClient) {}

  stockSymbolGetAll(): Observable<any> {
    return this.http.get(this.url);
  }
}
