import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarParcelaComponent } from './listar-parcela.component';

describe('ListarParcelaComponent', () => {
  let component: ListarParcelaComponent;
  let fixture: ComponentFixture<ListarParcelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarParcelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
