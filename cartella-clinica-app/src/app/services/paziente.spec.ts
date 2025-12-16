import { TestBed } from '@angular/core/testing';

import { Paziente } from './paziente';

describe('Paziente', () => {
  let service: Paziente;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Paziente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
