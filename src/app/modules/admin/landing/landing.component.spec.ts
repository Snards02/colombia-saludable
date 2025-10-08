import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponentAdmin } from './landing.component';

describe('LandingComponentAdmin', () => {
  let component: LandingComponentAdmin;
  let fixture: ComponentFixture<LandingComponentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComponentAdmin]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
