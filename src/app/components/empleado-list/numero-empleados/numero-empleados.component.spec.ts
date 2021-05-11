import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroEmpleadosComponent } from './numero-empleados.component';

describe('NumeroEmpleadosComponent', () => {
  let component: NumeroEmpleadosComponent;
  let fixture: ComponentFixture<NumeroEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
