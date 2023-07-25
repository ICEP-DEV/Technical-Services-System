import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodgeneratereportsComponent } from './hodgeneratereports.component';

describe('HodgeneratereportsComponent', () => {
  let component: HodgeneratereportsComponent;
  let fixture: ComponentFixture<HodgeneratereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodgeneratereportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodgeneratereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
