import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnlTestigoComponent } from './pnl-testigo.component';

describe('PnlTestigoComponent', () => {
  let component: PnlTestigoComponent;
  let fixture: ComponentFixture<PnlTestigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnlTestigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnlTestigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
