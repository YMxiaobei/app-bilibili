import { 
  Component, 
  OnInit, 
  Input, 
  AfterViewInit, 
  ViewChild, 
  ElementRef, 
  AfterContentChecked, 
  EventEmitter, 
  Output 
} from '@angular/core';

import { 
  getOffsetLeft, 
  getOffsetTop, 
  getScrollTop, 
  getScrollLeft 
} from 'public/function';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements OnInit, AfterContentChecked {
  @Input() width: number; 
  @Input() height: number;
  @Input() length: number = 100;
  @Input() dir: string = "H";
  @Input() state: number = 0;
  @Input() slide_styles: any;
  @Input() guild_styles: any;
  @Input() fill_styles: any;
  @Input() reverse: boolean = false;
  @Input() default_state: number;

  @Output() change: EventEmitter<number> = new EventEmitter ();

  @ViewChild( 'main' ) el_main: ElementRef;
  
  slide_active: boolean = false;
  position_save: number;

  constructor() { }

  getFill ( style_name: string ): string {
  	if ( ( this.dir === "H" && style_name === "height" ) || ( this.dir === "V" && style_name === "width" ) )
  	return "100%"	
  	else 
  	return this.reverse ? 100 - ( this.state  / this.length ) * 100 + "%" : ( this.state  / this.length ) * 100 + "%";
  }

  setState ( new_state ) {
  	this.state = new_state;
  }

  getSlideStyles () {
  	if ( this.dir === "H" ) {
  	  if ( this.slide_styles ) {
  	  	this.slide_styles[ 'left' ] = this.getFill ( 'width' );
  	  }
  	  else {
  	  	this.slide_styles = {};
  	  	this.slide_styles[ 'left' ] = this.getFill ( 'width' );
  	  }
  	  return this.slide_styles;
  	}
  	else if ( this.dir === "V" ) {
        if ( this.slide_styles ) {
        	this.slide_styles[ 'top' ] = this.getFill ( 'height' );
        }
        else {
        	this.slide_styles = {};
        	this.slide_styles[ 'top' ] = this.getFill ( 'height' );
        }
        return this.slide_styles;
  	}
  }

  getFillStyles () {
  	if ( this.dir === "H" ) {
  	  if ( this.fill_styles ) {
  	  	this.fill_styles[ 'width' ] = this.getFill ( 'width' );
  	  }
  	  else {
  	  	this.fill_styles = {};
  	  	this.fill_styles[ 'width' ] = this.getFill ( 'width' );
  	  }
  	  return this.fill_styles;
  	}
  	else if ( this.dir === "V" ) {
        if ( this.fill_styles ) {
        	this.fill_styles[ 'height' ] = this.getFill ( 'height' );
        }
        else {
        	this.fill_styles = {};
        	this.fill_styles[ 'height' ] = this.getFill ( 'height' );  
        }

        return this.fill_styles;
  	}
  }

  getGuildStyles () {
  	if ( this.guild_styles ) {
  		return this.guild_styles;
  	}
  }

  onslideMove: any = ( function (e) {
  	if ( this.slide_active === false ) return;

    if ( this.dir === "H" ) {
      var distance = e.clientX - this.position_save;
      var step = this.width / this.length;
    }
    else if ( this.dir === "V" ) {
      var distance = e.clientY - this.position_save;
      var step = this.height / this.length; 
    }



  	this.state = this.reverse ? this.length - distance / step : distance / step ;
  	this.state = this.state < 0 ? 0 : this.state > this.length ? this.length : this.state;
  } ).bind ( this );

  onmousedown ( e ) {
  	this.slide_active = true;

    this.getPosition ();
  	
  	window.addEventListener ( 'mousemove', this.onslideMove );
  }

  getPosition () {
    if ( this.dir === "H" ) {
      this.position_save = getOffsetLeft ( this.el_main.nativeElement ) - getScrollLeft ();
    }
    else if ( this.dir === "V" ) {
      this.position_save = getOffsetTop ( this.el_main.nativeElement ) - getScrollTop ();
    }
  }

  onclick ( e ) {
    this.getPosition ();

    if ( this.dir === "H" ) {
      var distance = e.clientX - this.position_save;
      var step = this.width / this.length;
    }
    else if ( this.dir === "V" ) {
      var distance = e.clientY - this.position_save;
      var step = this.height / this.length; 
    }
  	
  	this.state = this.reverse ? this.length - distance / step : distance / step ;
	  this.state = this.state < 0 ? 0 : this.state > this.length ? this.length : this.state;
  }
 
  ngOnInit() {
    this.state = this.default_state;

  	window.addEventListener ( 'mouseup', ( function ( e ) {
      this.slide_active = false;

  	  window.removeEventListener ( 'mousemove', this.onslideMove );
  	} ).bind ( this ) );
  }

  ngAfterViewInit () {
    this.getPosition ();

  	if ( this.guild_styles ) {
  	  if ( this.guild_styles.width ) {
  	  	this.width = parseFloat ( this.guild_styles.width ); 
  	  }

  	  if ( this.guild_styles.height ) {
  	  	this.height = parseFloat ( this.guild_styles.width );
  	  }
  	}
  }

  ngAfterContentChecked () {
    if ( this.slide_active ) {
      this.change.emit ( this.state );
    }
  }
}
