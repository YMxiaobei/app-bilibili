/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VExhibitionEnhanceComponent } from './v-exhibition-enhance.component';

describe('VExhibitionEnhanceComponent', () => {
  let component: VExhibitionEnhanceComponent;
  let fixture: ComponentFixture<VExhibitionEnhanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VExhibitionEnhanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VExhibitionEnhanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
