import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-controllor',
  templateUrl: './video-controllor.component.html',
  styleUrls: ['./video-controllor.component.scss']
})
export class VideoControllorComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() video: any;

  current_volume: number = 50;
  default_volume: number = 50;
  current_src: string = "超清";
  danmu_opacity: number = 100;

  getLineHeight ( container ) {
  	return container.offsetHeight;
  }

  volumeChange ( newVolume: number ): void {

  	this.current_volume = Math.round ( newVolume );
  }

  danmuOpacityChange ( newOpacity: number ): void {
  	this.danmu_opacity = Math.round ( newOpacity );
  }

  constructor() { }

  ngOnInit() {
  }

}
