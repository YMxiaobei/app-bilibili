import { Component, Input } from '@angular/core';

@Component({
  selector: 'serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.scss']
})
export class SerchComponent {

  @Input () _placeholder: string;

  serch_hover: boolean = false;

  _alert ( value ){
    alert ( value );
  }

  constructor() { }

}
