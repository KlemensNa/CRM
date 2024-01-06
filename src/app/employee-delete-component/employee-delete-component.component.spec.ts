import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteComponentComponent } from './employee-delete-component.component';

describe('EmployeeDeleteComponentComponent', () => {
  let component: EmployeeDeleteComponentComponent;
  let fixture: ComponentFixture<EmployeeDeleteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDeleteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDeleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
