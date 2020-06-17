import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeEstablecimientosComponent } from './select-de-establecimientos.component';

describe('SelectDeEstablecimientosComponent', () => {
  let component: SelectDeEstablecimientosComponent;
  let fixture: ComponentFixture<SelectDeEstablecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDeEstablecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDeEstablecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
