import { Component, OnInit, Input } from '@angular/core';

import { Poster } from '../../classes/poster';

let mockData: Poster[] = [
  {
  	img_path: "/assets/img/1.jpg",
  	introduce: "aaaaaaaaaa"
  },
  {
  	img_path: "/assets/img/2.jpg",
  	introduce: "bbbbbbbbbb"
  },
  {
  	img_path: "/assets/img/3.jpg",
  	introduce: "cccccccccc"
  }
];

function myAnimation ( position: number, state_save: any, fps: number, duration: number ) {
  if ( state_save.interval ) {
  	clearInterval ( state_save.interval );
  }

  if ( position === state_save.state ) {
    return;  
  }

  let time_per_fps = 1000 / fps;
  let distance_per_fps = Math.abs ( position - state_save.state ) / ( duration / time_per_fps );

  if ( position > state_save.state  ) {
  	state_save.interval = setInterval ( ()=>{
  	   state_save.state += distance_per_fps;

  	   if ( state_save.state >= position ) {
  	     state_save.state = position;
  	     clearInterval ( state_save.interval ); 
  	   }
  	}, time_per_fps );
  }
  else {
    state_save.interval = setInterval ( ()=>{
  	   state_save.state -= distance_per_fps;

  	   if ( state_save.state <= position ) {
  	     state_save.state = position;
  	     clearInterval ( state_save.interval ); 
  	   }
  	}, time_per_fps)
  }
}

@Component({
  selector: 'img-slide2',
  templateUrl: './img-slide2.component.html',
  styleUrls: ['./img-slide2.component.scss']
})
export class ImgSlide2Component implements OnInit {

  @Input () data: Poster[];  

  selected: number;
  poster_num: number;
  i: number;

  setting: any = {
    fps: 30,
    duration: 200,
    width: 260,
    interval_time: 5000
  };	

  select ( item: number ) {
  	this.selected = item;

  	myAnimation ( 
  	  -( this.setting.width * ( this.selected - 1 ) ),
  	  this.state_save,
  	  this.setting.fps,
  	  this.setting.duration
    )

    for ( let i = 0, len = this.controll_state_save.length; i < len; i++ ) {
      if ( i + 1 === item ) {
      	myAnimation ( 
  		  30, 
  		  this.controll_state_save[ i ], 
  		  this.setting.fps,
		  this.setting.duration 
		)
      }
      else {
      	myAnimation ( 
  		  9, 
  		  this.controll_state_save[ i ], 
  		  this.setting.fps,
		  this.setting.duration 
		)
      }
    }
  }

  state_save: any = { state: 0 };
  controll_state_save: any[] = [
  	{ state: 30 },
  	{ state: 9 },
  	{ state: 9 }
  ]; 

  constructor() { 
  	this.data = mockData;
    this.selected = 1;
    this.poster_num = this.data.length;

    let _self = this;

  	setInterval ( ()=>{
  	  
  	  _self.selected += 1;

  	  if ( _self.selected > this.poster_num ) {
  	  	_self.selected = 1;
  	  }

      if ( _self.state_save.interval ) {
        clearInterval ( _self.state_save.interval )
      }
      
  	  this.select ( _self.selected );

  	}, _self.setting.interval_time )
  }

  ngOnInit() {
  }

}
