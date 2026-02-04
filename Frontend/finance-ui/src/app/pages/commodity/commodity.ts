import { Component, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

import { FinanceService } from '../../services/finance.service';
import { StockDetail } from '../../models/stock-detail';

@Component({
  selector: 'app-commodity',
  imports: [CommonModule],
  templateUrl: './commodity.html'
})
export class Commodity {
private service = inject(FinanceService);

  error = signal<string | null>(null);

  // pagination state
  pageSize = signal(10);
  page = signal(1); // 1-based

  // full dataset (loaded once)
  allSymbols = toSignal(
    this.service.getCommoditySymbols().pipe(
      catchError((err) => {
        console.error(err);
        this.error.set('Failed to load commodity symbols.');
        return of([] as StockDetail[]);
      })
    ),
    { initialValue: [] as StockDetail[] }
  );

  totalItems = computed(() => this.allSymbols().length);

  totalPages = computed(() => {
    const size = this.pageSize();
    const total = this.totalItems();
    return Math.max(1, Math.ceil(total / size));
  });

  pagedSymbols = computed(() => {
    const items = this.allSymbols();
    const size = this.pageSize();
    const currentPage = this.page();

    const start = (currentPage - 1) * size;
    return items.slice(start, start + size);
  });

  canPrev = computed(() => this.page() > 1);
  canNext = computed(() => this.page() < this.totalPages());

  prev(): void {
    if (this.canPrev()) this.page.set(this.page() - 1);
  }

 next(): void {
    if (this.canNext()) this.page.set(this.page() + 1);
  }

  goTo(p: number): void {
    const clamped = Math.min(Math.max(1, p), this.totalPages());
    this.page.set(clamped);
  }
}
