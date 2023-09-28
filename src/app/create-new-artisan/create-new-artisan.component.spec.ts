import { ComponentFixture, TestBed } from '@angular/core/testing';

 import { CreateNewArtisanComponent } from './create-new-artisan.component';
 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 

describe('CreateNewArtisanComponent', () => {
  let component: CreateNewArtisanComponent;
  let Component: FormGroup;
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
