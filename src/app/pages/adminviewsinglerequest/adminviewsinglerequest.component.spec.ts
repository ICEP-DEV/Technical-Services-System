import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewsinglerequestComponent } from './adminviewsinglerequest.component';

describe('AdminviewsinglerequestComponent', () => {
  let component: AdminviewsinglerequestComponent;
  let fixture: ComponentFixture<AdminviewsinglerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewsinglerequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewsinglerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
