import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'omitString'
})
export class OmitStringPipe implements PipeTransform {

  transform(value: string, length: number): string {
    let len = value.length;

    if ( len > length ) {
      return value.substr ( 0, length ) + "...";
    } 
    else {
      return value;
    }
  }

}
