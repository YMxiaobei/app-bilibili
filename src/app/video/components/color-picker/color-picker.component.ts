import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  selected: string = "ffffff";
  colors_left: string[] = [ '000000', '333333', '666666', '999999', 'CCCCCC', 'FFFFFF', 'FF0000', 
  '00FF00', '0000FF', 'FFFF00','00FFFF','FF00FF' ];
  codes_right: any;

  @Output() change: EventEmitter<string> = new EventEmitter ();

  constructor() { }

  getColorCodes () {
  	var codes: any = [];

  	for ( let i = 0; i < 6; i++  ) {
  	  var arr = [];		

  	  for ( let a = 0; a < 6; a++ ) {
  	  	for ( let j = 0; j < 6; j++ ) {
  	  		var r = ( i * 51 ).toString ( 16 );
  	  		var g = ( j * 51 ).toString ( 16 );
  	  		var b = ( a * 51 ).toString ( 16 );

  	  		r = r === "0" ? r + "0" : r;
  	  		g = g === "0" ? g + "0" : g;
  	  		b = b === "0" ? b + "0" : b;

  	  		arr.push ( r + g + b );
  	  	}
  	  }

  	  codes.push ( arr ); 	
  	}
  	return codes;
  }

  colorChange ( e ) {
    if ( e.target.className === 'color-cell' ) {
  	  this.selected = e.target.title;
    }
  }

  onChange () {
  	this.change.emit ( this.selected );
  }

  ngOnInit() {
  	this.codes_right = this.getColorCodes (); 
  }

}
