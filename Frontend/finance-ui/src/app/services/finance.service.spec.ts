import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { StockDetail } from '../models/stock-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  getAll(): Observable<StockDetail[]> {
    return this.http.get<StockDetail[]>(`${this.baseUrl}/api/StockSymbol/GetAll`);
  }
}
