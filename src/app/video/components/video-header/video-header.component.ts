import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-header',
  templateUrl: './video-header.component.html',
  styleUrls: ['./video-header.component.scss']
})
export class VideoHeaderComponent implements OnInit {
  @Input() video: any;
  @Input() user: any;

  coin_frames: any = { distance: 60, num: 25, y: 60 };
  star_frames: any = { distance: 60, num: 21, y: 0 };
  coin_anim_play: number = 3;
  star_anim_play: number = 3;

  constructor() { }

  ngOnInit() {
  	console.log ( this.coin_frames[2] );
  }

}
