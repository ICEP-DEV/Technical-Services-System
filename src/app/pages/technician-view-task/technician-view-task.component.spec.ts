import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianViewTaskComponent } from './technician-view-task.component';

describe('TechnicianViewTaskComponent', () => {
  let component: TechnicianViewTaskComponent;
  let fixture: ComponentFixture<TechnicianViewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianViewTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
