import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf, JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, JsonPipe],
  templateUrl: './app.html',
})
export class App implements OnInit {
  symbols: any[] = [];
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://localhost:7112/api/StockSymbol/GetAll')
      .subscribe({
        next: (res) => {
          this.symbols = res ?? [];
          console.log('Symbols:', this.symbols);
        },
        error: (err) => {
          this.error = 'Failed to load data';
          console.error(err);
        },
      });
  }
}
