import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-controllor',
  templateUrl: './video-controllor.component.html',
  styleUrls: ['./video-controllor.component.scss']
})
export class VideoControllorComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;

  getLineHeight ( container ) {
  	return container.offsetHeight;
  }

  constructor() { }

  ngOnInit() {
  }

}
