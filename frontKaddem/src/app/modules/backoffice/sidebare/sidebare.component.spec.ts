/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SidebareComponent } from './sidebare.component';

describe('SidebareComponent', () => {
  let component: SidebareComponent;
  let fixture: ComponentFixture<SidebareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
