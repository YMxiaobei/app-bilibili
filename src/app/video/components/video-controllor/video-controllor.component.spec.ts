import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoControllorComponent } from './video-controllor.component';

describe('VideoControllorComponent', () => {
  let component: VideoControllorComponent;
  let fixture: ComponentFixture<VideoControllorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoControllorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoControllorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
