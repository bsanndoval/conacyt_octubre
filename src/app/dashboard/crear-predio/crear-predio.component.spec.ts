import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPredioComponent } from './crear-predio.component';

describe('CrearPredioComponent', () => {
  let component: CrearPredioComponent;
  let fixture: ComponentFixture<CrearPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPredioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
