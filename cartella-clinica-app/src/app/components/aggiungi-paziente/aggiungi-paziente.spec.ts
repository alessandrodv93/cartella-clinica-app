import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiPaziente } from './aggiungi-paziente';

describe('AggiungiPaziente', () => {
  let component: AggiungiPaziente;
  let fixture: ComponentFixture<AggiungiPaziente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiPaziente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiPaziente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
