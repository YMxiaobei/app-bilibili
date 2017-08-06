import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-comment',
  templateUrl: './video-comment.component.html',
  styleUrls: ['./video-comment.component.scss']
})
export class VideoCommentComponent implements OnInit {
  @Input() comment: any;

  constructor() { }

  ngOnInit() {
  }

}
