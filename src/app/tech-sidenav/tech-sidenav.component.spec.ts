import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSidenavComponent } from './tech-sidenav.component';

describe('TechSidenavComponent', () => {
  let component: TechSidenavComponent;
  let fixture: ComponentFixture<TechSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
