import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-tags',
  templateUrl: './video-tags.component.html',
  styleUrls: ['./video-tags.component.scss']
})
export class VideoTagsComponent implements OnInit {
  @Input() tags: any;

  add_tag: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
