import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMyCommentComponent } from './sent-my-comment.component';

describe('SentMyCommentComponent', () => {
  let component: SentMyCommentComponent;
  let fixture: ComponentFixture<SentMyCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentMyCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentMyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
