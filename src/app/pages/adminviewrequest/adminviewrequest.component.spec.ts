import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewrequestComponent } from './adminviewrequest.component';

describe('AdminviewrequestComponent', () => {
  let component: AdminviewrequestComponent;
  let fixture: ComponentFixture<AdminviewrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
