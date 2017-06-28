import { Component, OnInit,  Input } from '@angular/core';

import { getOffsetTop, getOffsetLeft, strToSecond } from 'public/function';

import { mockData } from './mockData';

@Component({
  selector: 'v-exhibition-enhance',
  templateUrl: './v-exhibition-enhance.component.html',
  styleUrls: ['./v-exhibition-enhance.component.scss']
})
export class VExhibitionEnhanceComponent implements OnInit {

  @Input() data = mockData ();

  width: number = 160;
  left = "0px";

  fill_program_bar: string = "30%";
  active: boolean = false;
  offsetLeft: number;
  handle_left: number;

  _getOffsetLeft ( element ) {
  	this.offsetLeft = getOffsetLeft ( element );
  }

  fillProgramBar ( event ) {
  	if ( !this.offsetLeft ) {
  	  return;
  	}

  	this.fill_program_bar = ( event.clientX - this.offsetLeft ) / this.width * 100 + "%";
  }

  getDanmuOffsetLeft ( time:string ):string {
  	let second = strToSecond ( time );
  	let duration = strToSecond ( this.data.duration );

  	let result = ( second / duration ) * 100 + "%";

  	return result;
  }

  constructor() {

  }

  ngOnInit() {

  }

}
