import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCommentComponent } from './video-comment.component';

describe('VideoCommentComponent', () => {
  let component: VideoCommentComponent;
  let fixture: ComponentFixture<VideoCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
