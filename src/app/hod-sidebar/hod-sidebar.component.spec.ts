import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodSidebarComponent } from './hod-sidebar.component';

describe('HodSidebarComponent', () => {
  let component: HodSidebarComponent;
  let fixture: ComponentFixture<HodSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
