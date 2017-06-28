/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VLiComponent } from './v-li.component';

describe('VLiComponent', () => {
  let component: VLiComponent;
  let fixture: ComponentFixture<VLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
