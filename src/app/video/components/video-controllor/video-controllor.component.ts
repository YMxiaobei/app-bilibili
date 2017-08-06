import { Component, OnInit, Input, enableProdMode, ViewChild, ElementRef, AfterViewChecked, EventEmitter, Output } from '@angular/core';

import { launchFullscreen, exitFullscreen, isFullscreen, setFullscreenChangeListener } from 'public/function';
enableProdMode ();

@Component({
  selector: 'app-video-controllor',
  templateUrl: './video-controllor.component.html',
  styleUrls: ['./video-controllor.component.scss']
})
export class VideoControllorComponent implements OnInit, AfterViewChecked {
  @Input() set width ( value: string ) {
    this._width = value;
    this.save_width = value;
  };
  @Input() height: string;
  @Input() video: any;
  @Input() player: any;
  @ViewChild( 'main' ) mainEl: ElementRef;
  @ViewChild( 'timer' ) timerEl: ElementRef;
  @ViewChild( 'src_change' ) srcChangeEl: ElementRef; 
  @Output() fullscreenChange: EventEmitter<string> = new EventEmitter ();

  volume: number = 50;
  default_volume: number = 50;
  current_src: string = "超清";
  danmu_opacity: number = 100;
  duration: number;
  show_volume: boolean = false;
  current_time: number = 0;
  isFullscreen: boolean = false;
  scroll_bar_length: number = 400; 
  save_width: string;
  _width: string;
  bottom: number;
  timeOut: any;

  getLineHeight ( container ) {
  	return container.offsetHeight;
  }

  volumeChange ( newVolume: number ): void {

  	this.volume = Math.round ( newVolume );

    this.player.volume = this.volume / 100;
  }

  changePlayerMode () {
    if ( isFullscreen () ) {
      exitFullscreen ( this.player.parentNode );
    }
    else {
      launchFullscreen( this.player.parentNode );
      this.isFullscreen = true;
    }
  }

  danmuOpacityChange ( newOpacity: number ): void {
  	this.danmu_opacity = Math.round ( newOpacity );
  }

  currentTimeChange ( new_cur_time ) {
    this.player.currentTime = new_cur_time;
  } 

  constructor() { }

  playOrPause () {
    if ( this.player.paused  ) {
      this.player.play ();
    }
    else {
      this.player.pause ();
    }
  }

  ngOnInit() {
    let _self = this;

    setFullscreenChangeListener ( function () {
      if ( isFullscreen () ) {
        _self.isFullscreen = true;
        _self.timeOut = setTimeout ( function () {
          _self.bottom = 0;
          _self.player.parentNode.style.cssText = "cursor:none";
        }, 3000 );
      }
      else {
        _self.bottom = null;
        _self.isFullscreen = false;

        if ( _self.timeOut ) {
          clearTimeout ( _self.timeOut );
          _self.timeOut = null;
          _self.player.parentNode.style.cssText = "cursor:normal";
        }
      }

      if ( _self.player.paused ) {
        _self.player.currentTime = _self.player.currentTime;
      }
    } );

    this.player.parentNode.addEventListener ( "mousemove", function () {
      if ( !isFullscreen () ) {
        return;
      }

      if ( _self.timeOut ) {
        clearTimeout ( _self.timeOut );
        _self.timeOut = null;
      }

      _self.player.parentNode.style.cssText = "cursor:normal";
      _self.bottom = 30;

      _self.timeOut = setTimeout ( function () {
        _self.bottom = 0;
        _self.player.parentNode.style.cssText = "cursor:none";
      }, 3000 );
    } )

    this.volume = this.player.volume * 100;

    this.player.ontimeupdate = function () {
      _self.current_time = this.currentTime; 
    }
  }

  ngAfterViewChecked () {
    //console.log ( this.mainEl.nativeElement.offsetWidth );
  }

}
