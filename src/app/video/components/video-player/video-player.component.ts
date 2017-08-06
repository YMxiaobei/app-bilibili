import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: any;	

  _log ( value ) {
    console.log ( value )
  }

  show_player_setting2: boolean = false;

  controllor_position: number = -30;

  constructor() { }

  fullscreenChange ( fullscreenStatus ) {
  	if ( fullscreenStatus === "exitFullscreen" ) {
  	  this.controllor_position = -30;
  	}
  	else if ( fullscreenStatus === "requestFullscreen" ) {
  	  this.controllor_position = 0;
  	}
  }

  ngOnInit() {
  }

}
