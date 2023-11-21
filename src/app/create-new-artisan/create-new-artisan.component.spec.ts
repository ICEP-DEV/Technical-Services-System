import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewArtisanComponent } from './create-new-artisan.component';

describe('CreateNewArtisanComponent', () => {
  let component: CreateNewArtisanComponent;
  let fixture: ComponentFixture<CreateNewArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewArtisanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
