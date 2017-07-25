import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformAmount'
})
export class TransformAmountPipe implements PipeTransform {

  transform(value: number, args?: any): string { 
  	if ( value >= 100000  ) {
  	  return value / 10000 + "万";
  	}
    else {
      return value + "";
    }
  }

}
