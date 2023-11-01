import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEkycNomineeComponent } from './form-ekyc-nominee.component';

describe('FormEkycNomineeComponent', () => {
  let component: FormEkycNomineeComponent;
  let fixture: ComponentFixture<FormEkycNomineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEkycNomineeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEkycNomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
