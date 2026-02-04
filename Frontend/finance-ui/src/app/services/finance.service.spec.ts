import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { StockDetail } from '../models/stock-detail';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<StockDetail[]> {
    return this.http.get<StockDetail[]>(`${this.baseUrl}/api/StockDetail/GetAll`);
  }
}
