import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateIconComponent } from './animate-icon.component';

describe('AnimateIconComponent', () => {
  let component: AnimateIconComponent;
  let fixture: ComponentFixture<AnimateIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
