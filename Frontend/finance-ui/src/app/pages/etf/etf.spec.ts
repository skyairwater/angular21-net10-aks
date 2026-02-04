import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfSymbols } from './etf';

describe('EtfSymbols', () => {
  let component: EtfSymbols;
  let fixture: ComponentFixture<EtfSymbols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtfSymbols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtfSymbols);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
