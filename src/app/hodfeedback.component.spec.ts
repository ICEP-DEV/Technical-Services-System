import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodfeedbackComponent } from './hodfeedback.component';

describe('HodfeedbackComponent', () => {
  let component: HodfeedbackComponent;
  let fixture: ComponentFixture<HodfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
