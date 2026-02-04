import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalSymbols } from './international-symbols';

describe('InternationalSymbols', () => {
  let component: InternationalSymbols;
  let fixture: ComponentFixture<InternationalSymbols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalSymbols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationalSymbols);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
