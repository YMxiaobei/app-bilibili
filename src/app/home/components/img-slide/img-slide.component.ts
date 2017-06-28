import { Component, Input } from '@angular/core';
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
  },
  {
  	img_path: "/assets/img/4.jpg",
  	introduce: "dddddddddd"
  },
  {
  	img_path: "/assets/img/5.jpg",
  	introduce: "eeeeeeeeee"
  }
];

function myAnimation ( position: number, state_save: any, fps: number, duration: number ) {

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
  selector: 'img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.scss']
})
export class ImgSlideComponent  {
  @Input () data: Poster[];  

  selected: number;
  poster_num: number;
  i: number;

  setting: any = {
    fps: 60,
    duration: 200,
    width: 440,
    interval_time: 5000
  };	

  select ( item: number ) {
  	this.selected = item;

  	if ( this.state_save.interval ) {
  	  clearInterval ( this.state_save.interval );
  	}

  	myAnimation ( 
  	  -( this.setting.width * ( this.selected - 1 ) ),
  	  this.state_save,
  	  this.setting.fps,
  	  this.setting.duration
    )

  }

  state_save: any = { state: 0 };

  constructor() { 
  	this.data = mockData;
    this.selected = 1;
    this.poster_num = this.data.length;

    let _self = this;

  	let interval2 = setInterval ( ()=>{
  	  
  	  _self.selected += 1;

  	  if ( _self.selected > this.poster_num ) {
  	  	_self.selected = 1;
  	  }

      if ( _self.state_save.interval ) {
        clearInterval ( _self.state_save.interval )
      }
      
  	  myAnimation ( 
  	  	-( _self.setting.width * ( _self.selected - 1 ) ),
  	  	_self.state_save,
  	  	_self.setting.fps,
  	  	_self.setting.duration
  	  )

  	}, _self.setting.interval_time )
  }
}
