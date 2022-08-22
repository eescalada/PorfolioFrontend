import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPreviosComponent } from './proyectos-previos.component';

describe('ProyectosPreviosComponent', () => {
  let component: ProyectosPreviosComponent;
  let fixture: ComponentFixture<ProyectosPreviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosPreviosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosPreviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
