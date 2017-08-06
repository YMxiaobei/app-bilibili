import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanmukuComponent } from './danmuku.component';

describe('DanmukuComponent', () => {
  let component: DanmukuComponent;
  let fixture: ComponentFixture<DanmukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanmukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanmukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
