import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiPazienteComponent} from './aggiungi-paziente';

describe('AggiungiPaziente', () => {
  let component: AggiungiPazienteComponent;
  let fixture: ComponentFixture<AggiungiPazienteComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiPazienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiPazienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
