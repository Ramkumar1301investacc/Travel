import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerFormComponent } from './traveller-form.component';

describe('TravellerFormComponent', () => {
  let component: TravellerFormComponent;
  let fixture: ComponentFixture<TravellerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
