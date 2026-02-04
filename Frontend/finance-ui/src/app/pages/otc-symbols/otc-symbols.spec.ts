import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcSymbols } from './otc-symbols';

describe('OtcSymbols', () => {
  let component: OtcSymbols;
  let fixture: ComponentFixture<OtcSymbols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtcSymbols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtcSymbols);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
