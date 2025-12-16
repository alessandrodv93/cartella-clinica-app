import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPazienti } from './lista-pazienti';

describe('ListaPazienti', () => {
  let component: ListaPazienti;
  let fixture: ComponentFixture<ListaPazienti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPazienti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPazienti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
