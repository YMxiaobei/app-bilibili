import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sToTimeStr'
})
export class SToTimeStrPipe implements PipeTransform {

  transform(value: any): any {
  	var _value = Math.round ( value );
  	var r1 = _value % 3600;
  	var r2 = r1 % 60;
  	var h: any = ( _value - r1 ) / 3600;
  	var m: any = ( r1 - r2 ) / 60;
  	var s: any = r2;

  	m = m < 10 ? "0" + m : m + "";
  	s = s < 10 ? "0" + s : s + "";

  	if ( h === 0 ) {
  		return m + ":" + s;
  	}
  	else {
  		return h + ":" + m + ":" + s;
  	}

    
  }

}
