/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClassifySection2Component } from './classify-section2.component';

describe('ClassifySection2Component', () => {
  let component: ClassifySection2Component;
  let fixture: ComponentFixture<ClassifySection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifySection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifySection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
