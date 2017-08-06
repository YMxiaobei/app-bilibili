import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { strToSecond } from 'public/function';

@Component({
  selector: 'app-danmuku',
  templateUrl: './danmuku.component.html',
  styleUrls: ['./danmuku.component.scss']
})
export class DanmukuComponent implements OnInit, AfterViewInit {
  @Input() width: number  = 860;
  @Input() height: number = 569; 
  @Input() opacity: number = 0.2;
  @Input() sizeZoom: number = 1;
  @Input() fontWeight: string = "bold";
  @Input() filter: any = {
  	users: [ '000001', '000002' ],
  	words: [],
  	regexp: [ '跪了' ],
  	types: [ 'colorful' ],
  	fandangzimu: false
  };
  @Input() fps: number = 60;
  @Input() fontFamily: string = "黑体";
  @Input() pass_time: number = 6;
  @Input() delay: number = 1;
  @Input() max_delay: number = 3;
  @Input() set playSpeed ( value: number ) {
    this.pass_time = this.pass_time / value; 
  };
  @Input() set trigger ( value ) {
  	if ( value && this.danmus ) {
  	  this.play ();
  	}
  	else {
  	  this.pause ();	
  	}
  }
  @Input() set currentTime ( value ) {
  	if ( this._current_time !== Math.round ( value ) ) {
  	  this.checkInStage ();	
  	}

  	this._current_time = Math.round ( value );
  };

  @Input() danmus: any;	

  @ViewChild( 'canvas' ) canvas: ElementRef;

  ctx: any;
  inStage: any = {
  	scroll: [],
  	immediate: [],
  	top: [],
  	bottom: []
  };
  delayArr: any = [];
  interval: any;
  speed: number;
  top_record: number = 0;
  _current_time: number = 0;
  isPaused: boolean = true;
  requestId: any;
  text_height: number = 30;

  constructor() { }

  private addToStage ( danmu: any ) {

  	if ( danmu.type === "top" ) {
  	  this.topShow ( danmu );
  	  return;
  	}
  	else if ( danmu.type === "bottom" ) {
  	  this.bottomShow ( danmu );
  	  return;
  	}

  	danmu.left = this.width;
  	let textM = this.ctx.measureText ( danmu.content );
  	let text_height = this.text_height * this.sizeZoom + 5;
  	let textWidth = textM.width;

  	danmu.speed = ( textWidth + this.width ) / ( this.fps * this.pass_time );

    let top = this.getTop ( danmu.speed, textWidth, text_height );

    if ( top <= text_height * 4 + 10 ) {
      danmu.top = top;
      this.inStage.scroll.push ( danmu );	
    } 	
    else if ( !danmu.delay || this.max_delay > danmu.delay ) {
      this.delayShow ( danmu );		
      return;
    }
    else if ( top <= this.height - text_height ) {
      danmu.top = top;
      this.inStage.scroll.push ( danmu );
    }
    else {	
      if ( danmu.delay ) {
      	danmu.delayCopy = danmu.delay;
      }	
      this.immediateShow ( danmu );
    }

    danmu.new = true;
    if ( danmu.delay ) {
      danmu.delay = 0; 	
    }
  }

  private getTop ( speed, width, height ) {
  	let top;	

  	let result = this.inStage.scroll.some ( function ( value ) {
  	  if ( !value.new ) {
  	  	return false;	
  	  }	
  	  	
  	  let width = this.ctx.measureText ( value.content ).width;

  	  if ( 
  	  	( this.width - width - 10 > value.left  && speed <= value.speed ) ||
  	  	( this.width - value.left - width > this.width - value.speed * this.width / speed && speed > value.speed )
  	  ) {

  	  	top = value.top;
  	    value.new = false;
  	  	return true; 
  	  }
  	  else {
  	  	return false;
  	  }
  	}, this );

  	if ( !result ) {  
  	  let max_top = 0;
  	  this.inStage.scroll.forEach ( function ( value ) {
  	  	if ( !value.immediate && value.top > max_top ) {
  	  	  max_top = value.top;
  	  	} 
  	  }, this );

  	  if ( max_top === 0 ) {
  	  	top = 10;
  	  }
  	  else {
  	  	top = max_top + height;
  	  }
    } 

    return top;
  }

  private delayShow ( danmu:any ) {
    if ( danmu.delay && danmu.delay > 0 ) {
      danmu.delay = Math.min ( this.max_delay, danmu.delay + this.delay );
    }   
    else {
      danmu.delay = this.delay;
      this.delayArr.push ( danmu );
    } 
  }

  private topShow ( danmu: any ) {
    let len = this.inStage.top.length;
  	let last_top = this.inStage.top[ len -1 ].top;
  	let text_height = this.text_height * this.sizeZoom + 5;

  	if ( !last_top || last_top + text_height > this.height - text_height ) {
  	  danmu.top = 10;
  	}
  	else {
  	  danmu.top = last_top + text_height;
  	}

    this.inStage.top.push ( danmu );
  }

  private bottomShow ( danmu: any ) {
    let len = this.inStage.bottom.length;

    if ( len = 0 ) {
      danmu.top = 10;	
      this.inStage.bottom.push ( danmu );
      return;
    }

  	let last_top = this.inStage.bottom[ len -1 ].top;
  	let text_height = this.text_height * this.sizeZoom + 5;

  	if ( !last_top || last_top + text_height > this.height - text_height ) {
  	  danmu.top = 10;
  	}
  	else {
  	  danmu.top = last_top + text_height;
  	}

    this.inStage.bottom.push ( danmu );
  }

  private immediateShow ( danmu: any ) {
  	let len = this.inStage.immediate.length;
  	let last_top;
  	let width = this.ctx.measureText ( danmu.content ).width;

  	if ( len > 0 ) {
  	  last_top = this.inStage.immediate[ len -1 ].top;	
  	}
  	
  	let text_height = this.text_height * this.sizeZoom + 5;

  	if ( !last_top || last_top + text_height > this.height - text_height ) {
  	  danmu.top = 10;
  	}
  	else {
  	  danmu.top = last_top + text_height;
  	}

  	danmu.left = ( this.width - width ) / 2;
    this.inStage.immediate.push ( danmu );
  }

  private recycle () {
  	let arr1 = [];
  	for ( let i = 0, len = this.delayArr.length; i < len; i++ ) {
  	  if ( this.delayArr[ i ].delay > 0 ) {
  	  	arr1.push ( this.delayArr[ i ] );
  	  }	
  	}
  	this.delayArr = arr1;

  	let arr2 = [];
  	for ( let i = 0, len = this.inStage.scroll.length; i < len; i++ ) {
      let width = this.ctx.measureText ( this.inStage.scroll[ i ].content ).width;

	  if ( this.inStage.scroll[ i ].left > 0 - width  ) {
	  	 arr2.push ( this.inStage.scroll[ i ] );
	  }
	  else {
	  	 this.inStage.scroll[ i ].new = false;
	  }
    }
    this.inStage.scroll = arr2;

    let arr3 = [];
    for ( let i = 0, len = this.inStage.immediate.length; i < len; i++ ) {
      let value = this.inStage.immediate[ i ];
      let time = strToSecond ( value.apearance_time );
      let apearance_time;

      if ( value.delayCopy ) {
      	apearance_time = time + value.delayCopy;
      	value.delayCopy = 0;
      }
      else {
		apearance_time = time;
      }

      if ( this._current_time - apearance_time < this.pass_time ) {
      	arr3.push ( value );
      }
      else {
      	this.inStage.immediate[ i ].new = false;
      }

    }
    this.inStage.immediate = arr3;

    let arr4 = [];
    for ( let i = 0, len = this.inStage.top.length; i < len; i++ ) {
      let value = this.inStage.top[ i ];
      let time = strToSecond ( value.apearance_time );
      let apearance_time = time;

      if ( this._current_time - apearance_time > this.pass_time ) {
      	arr4.push ( value );
      }

    }
    this.inStage.top = arr4;

    let arr5 = [];
    for ( let i = 0, len = this.inStage.bottom.length; i < len; i++ ) {
      let value = this.inStage.bottom[ i ];
      let time = strToSecond ( value.apearance_time );
      let apearance_time = time;

      if ( this._current_time - apearance_time > this.pass_time ) {
      	arr5.push ( value );
      }

    }
    this.inStage.bottom = arr5;
  }

  checkInStage () {
  	if ( !this.danmus ) {
  	  return;
  	}

  	this.danmus.forEach ( function ( value ) {	
  	  if ( strToSecond ( value.apearance_time ) === this._current_time && !this.checkFilter ( value ) ) {
  	  	this.addToStage ( value );
  	  }	
  	}, this );

  	this.delayArr.forEach ( function ( value )  {
  	  if ( strToSecond ( value.apearance_time ) + value.delay === this._current_time ) {
  	  	this.addToStage ( value );
  	  }
  	}, this );

  	this.recycle ();
  }

  play () {
  	this.isPaused = false;	

  	if ( requestAnimationFrame ) {
  	  let fn = ( function () {
  	    for ( let i = 0, len = this.inStage.scroll.length; i < len; i++ ) {
  	    	  this.inStage.scroll[ i ].left -= this.inStage.scroll[ i ].speed;	
  	    }	
  
    	this.drawAll ();

    	if ( !this.isPaused ) {
    	  this.requestId = requestAnimationFrame( fn );
    	}
  		else {
  		  if ( this.requestId && cancelAnimationFrame ) {
  		  	cancelAnimationFrame ( this.requestId );

  		  	this.requestId = null;
  		  }
  		}
    	
      } ).bind ( this );
  
  	  requestAnimationFrame( fn );	
  	}
  	else {
  	  this.interval = setInterval ( ( function () {  	  
	  	for ( let i = 0, len = this.inStage.length; i < len; i++ ) {
	  	  	this.inStage[ i ].left -= this.inStage[ i ].speed;
	  	}	

	  	this.drawText ();
	  } ).bind( this ), 1000 / this.fps )		
  	}
  }

  private checkFilter ( danmu: any ) {
  	let result1 = this.filter.users.some ( function ( value ) {
  	  if ( danmu.author.id === value ) {
  	  	return true
  	  }
  	  else {
  	  	return false;
  	  }
  	}, this );

  	if ( result1 ) {
  	  return true;
  	}

  	let result2 = this.filter.words.some ( function ( value ) {
      let p = new RegExp ( value );

      if ( p.test ( danmu.content ) ) {
      	return true
      }
      else {
      	return false;
      }
  	}, this );

  	if ( result2 ) {
  	  return true;
  	}

  	let result3 = this.filter.regexp.some ( function ( value ) {
  	  let p = new RegExp ( value );

  	  if ( p.test ( danmu.content ) ) {
  	  	return true;
  	  }
  	  else {
  	  	return false;
  	  }
  	}, this );

  	if ( result3 ) {
  	  return true;
  	}

  	let result4 = this.filter.types.some ( function ( value ) {
  	  let p = new RegExp ( value );

  	  if ( p.test ( danmu.type ) ) {
  	  	return true;
  	  }
  	  else {
  	  	return false;
  	  }
  	}, this );

  	if ( result4 ) {
  	  return true;
  	}
  	else {
  	  return false;
  	}
  }

  pause () {
  	this.isPaused = true;

  	if ( this.interval ) {
  	  clearInterval ( this.interval );
  	  this.interval = null;
  	}
  }
 
  private drawAll () {
  	this.ctx.clearRect ( 0, 0, this.width, this.height );

  	this.draw ( this.inStage.scroll );
  	this.draw ( this.inStage.immediate );
  	this.draw ( this.inStage.top );
  	this.draw ( this.inStage.bottom );
  }

  private draw ( arr: any ) {
  	for ( let i = 0, len = arr.length; i < len; i++ ) {
      this.ctx.font = "normal " + this.fontWeight + " " + arr[ i ].style.size * this.sizeZoom + "px " + this.fontFamily;
  	  this.ctx.fillStyle = 	arr[ i ].style.fillColor;
  	  this.ctx.strokeStyle = arr[ i ].style.strokeColor;
  	  this.ctx.strokeText ( arr[ i ].content, arr[ i ].left, arr[ i ].top );
  	  this.ctx.fillText ( arr[ i ].content, arr[ i ].left, arr[ i ].top );
  	}
  }

  ngOnInit() {
  	
  }

  ngAfterViewInit () {
  	this.ctx = this.canvas.nativeElement.getContext ( '2d' );
  	this.ctx.font = "normal bold 30px 黑体";
	this.ctx.textBaseline = "top";
	this.ctx.lineWidth = 1.0;
	this.ctx.strokeStyle = "black";
	this.ctx.fillStyle="#ddd";
  	this.play (); 	
  }

}
