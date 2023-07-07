import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodViewProgressComponent } from './hod-view-progress.component';

describe('HodViewProgressComponent', () => {
  let component: HodViewProgressComponent;
  let fixture: ComponentFixture<HodViewProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodViewProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodViewProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
