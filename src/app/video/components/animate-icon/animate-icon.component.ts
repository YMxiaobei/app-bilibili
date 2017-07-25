import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animate-icon',
  templateUrl: './animate-icon.component.html',
  styleUrls: ['./animate-icon.component.scss']
})
export class AnimateIconComponent implements OnInit {
  @Input() set frames ( value: any ) {
    let distance = value.distance;
    let num = value.num;
    let y = value.y;
    let frames = [];

    for ( let i = 0; i < num; i++ ) {
      frames.push ( { x: i * distance, y: y } );
    }

    this._frames = frames;
  }; 

  @Input() width: number;
  @Input() height: number;
  @Input() src: string;
  @Input() fps: number;
  @Input() status: number = 3;

  positionX: number;
  positionY: number;
  interval: any;
  index: number = 0;
  _frames: any;
 
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
  	  _self.positionX = 0 - _self._frames[ _self.index ].x;
  	  _self.positionY = 0 - _self._frames[ _self.index ].y;

  	  _self.index += 1;

  	  if ( _self.index > _self._frames.length - 1 ) {
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
  	this.positionX = this._frames[ 0 ].x;
  	this.positionY = this._frames[ 0 ].y;
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
