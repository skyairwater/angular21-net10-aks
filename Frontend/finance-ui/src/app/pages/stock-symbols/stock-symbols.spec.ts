import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSymbols } from './stock-symbols';

describe('StockSymbols', () => {
  let component: StockSymbols;
  let fixture: ComponentFixture<StockSymbols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSymbols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSymbols);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
