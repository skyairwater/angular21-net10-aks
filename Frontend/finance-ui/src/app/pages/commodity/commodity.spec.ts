import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditySymbols } from './commodity';

describe('CommoditySymbols', () => {
  let component: CommoditySymbols;
  let fixture: ComponentFixture<CommoditySymbols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommoditySymbols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommoditySymbols);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
