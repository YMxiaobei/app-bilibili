import { Component, OnInit, Input } from '@angular/core';

interface Frame {
  x: number;
  y: number;
}

function getFrames ( distance, num, y ) {
	let frames = [];

	for ( let i = 0; i < num; i++ ) {
	  frames.push ( { x: i * distance, y: y } );
	}

	return frames
}

@Component({
  selector: 'app-video-header',
  templateUrl: './video-header.component.html',
  styleUrls: ['./video-header.component.scss']
})
export class VideoHeaderComponent implements OnInit {
  @Input() video: any;
  @Input() user: any;

  coin_frames: Frame[] = getFrames ( 60, 25, 60 );
  star_frames: Frame[] = getFrames ( 60, 21, 0 );
  coin_anim_play: number = 3;
  star_anim_play: number = 3;

  constructor() { }

  ngOnInit() {
  	console.log ( this.coin_frames[2] );
  }

}
