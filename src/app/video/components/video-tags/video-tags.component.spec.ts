import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTagsComponent } from './video-tags.component';

describe('VideoTagsComponent', () => {
  let component: VideoTagsComponent;
  let fixture: ComponentFixture<VideoTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
