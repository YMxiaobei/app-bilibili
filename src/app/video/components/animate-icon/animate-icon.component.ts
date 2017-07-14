import { Component, OnInit, Input } from '@angular/core';

interface Frame {
	x: number;
	y: number;
}

@Component({
  selector: 'app-animate-icon',
  templateUrl: './animate-icon.component.html',
  styleUrls: ['./animate-icon.component.scss']
})
export class AnimateIconComponent implements OnInit {
  @Input() frames: Frame[]; 
  @Input() width: number;
  @Input() height: number;
  @Input() src: string;
  @Input() fps: number;
  @Input() status: number = 3;

  positionX: number;
  positionY: number;
  interval: any;
  index: number = 0;
 
  constructor() { }

  getStatus () {
  	if ( this.status===1 ) {
  	  this.status = 3;
  	  this.play();
  	}
  	else if ( this.status===2 ) {
  	  this.status = 3;
  	  this.reset ();
  	}

  	return true;
  }

  play () {
  	let _self = this;

  	this.interval = setInterval ( function () {
  	  _self.positionX = 0 - _self.frames[ _self.index ].x;
  	  _self.positionY = 0 - _self.frames[ _self.index ].y;

  	  _self.index += 1;

  	  if ( _self.index > _self.frames.length - 1 ) {
  	  	_self.index = 0;
  	  }
  	}, 1000 / this.fps );
  }

  pause () {
  	if ( this.interval ) {
  	  clearInterval ( this.interval );

  	  this.interval = null;
  	}
  }

  reset () {
  	if ( this.interval ) {
  	  clearInterval ( this.interval );

  	  this.interval = null;
  	}

  	this.index = 0
  	this.positionX = this.frames[ 0 ].x;
  	this.positionY = this.frames[ 0 ].y;
  }

  getPropBgImg (): string {
  	let src = this.src;

  	return `url(${src})`;
  } 

  getPropBgPosition () {
  	let positionX = this.positionX;
  	let positionY = this.positionY;

  	let data = `${positionX}px ${positionY}px`

  	return `${positionX}px ${positionY}px`;
  }

  ngOnInit() {	

  }

}
