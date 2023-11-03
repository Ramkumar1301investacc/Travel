import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMedicalDetailsComponent } from './form-medical-details.component';

describe('FormMedicalDetailsComponent', () => {
  let component: FormMedicalDetailsComponent;
  let fixture: ComponentFixture<FormMedicalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMedicalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMedicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
