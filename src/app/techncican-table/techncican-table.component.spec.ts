import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechncicanTableComponent } from './techncican-table.component';

describe('TechncicanTableComponent', () => {
  let component: TechncicanTableComponent;
  let fixture: ComponentFixture<TechncicanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechncicanTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechncicanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
