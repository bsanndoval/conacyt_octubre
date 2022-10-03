import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPredioComponent } from './listar-predio.component';

describe('ListarPredioComponent', () => {
  let component: ListarPredioComponent;
  let fixture: ComponentFixture<ListarPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPredioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
