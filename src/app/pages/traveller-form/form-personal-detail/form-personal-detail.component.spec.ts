import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonalDetailComponent } from './form-personal-detail.component';

describe('FormPersonalDetailComponent', () => {
  let component: FormPersonalDetailComponent;
  let fixture: ComponentFixture<FormPersonalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPersonalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPersonalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
