/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImgSlide2Component } from './img-slide2.component';

describe('ImgSlide2Component', () => {
  let component: ImgSlide2Component;
  let fixture: ComponentFixture<ImgSlide2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSlide2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSlide2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
