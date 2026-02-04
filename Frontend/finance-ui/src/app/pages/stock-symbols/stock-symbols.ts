import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-4">
      <h2>Stock Symbols</h2>

      <div *ngIf="error()" class="alert alert-danger">
        {{ error() }}
      </div>

      <div *ngIf="!error()">
        <div class="alert alert-info">
          <b>Items:</b> {{ symbols().length }}
        </div>

        <pre class="p-3 border rounded bg-light">{{ symbols() | json }}</pre>
      </div>
    </div>
  `
})
export class StockSymbols {
  private http = inject(HttpClient);

  error = signal<string | null>(null);

  symbols = toSignal(
    this.http.get<any[]>('https://localhost:7112/api/StockSymbol/GetAll').pipe(
      catchError((err) => {
        this.error.set(`${err.status} ${err.statusText || 'Error'}`.trim());
        return of([]);
      })
    ),
    { initialValue: [] }
  );
}
