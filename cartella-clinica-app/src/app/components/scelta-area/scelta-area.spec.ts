import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaArea } from './scelta-area';

describe('SceltaArea', () => {
  let component: SceltaArea;
  let fixture: ComponentFixture<SceltaArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceltaArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceltaArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
