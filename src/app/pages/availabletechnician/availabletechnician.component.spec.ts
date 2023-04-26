import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabletechnicianComponent } from './availabletechnician.component';

describe('AvailabletechnicianComponent', () => {
  let component: AvailabletechnicianComponent;
  let fixture: ComponentFixture<AvailabletechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabletechnicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabletechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
