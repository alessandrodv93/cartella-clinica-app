import { TestBed } from '@angular/core/testing';

// Importa il SERVIZIO (la classe reale)
import { PazienteService } from './paziente.service';

describe('PazienteService', () => {
  let service: PazienteService; // Usa PazienteService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PazienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
