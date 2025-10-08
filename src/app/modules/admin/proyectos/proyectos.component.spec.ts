import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosComponentAdmin } from './proyectos.component';

describe('ProyectosComponentAdmin', () => {
  let component: ProyectosComponentAdmin;
  let fixture: ComponentFixture<ProyectosComponentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosComponentAdmin]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectosComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
