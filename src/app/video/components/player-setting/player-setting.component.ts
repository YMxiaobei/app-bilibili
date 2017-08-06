import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-setting',
  templateUrl: './player-setting.component.html',
  styleUrls: ['./player-setting.component.scss']
})
export class PlayerSettingComponent implements OnInit {
  @Input() video: any; 

  filter: any = {
    users: [],
    txts: [
      {
      	txt: "666",
      	type: "txt",
      	state: true
      }
    ],
    types: []
  }

  show_ignore_list: boolean = true;
  slide_left: number = 0;
  content_show: string = "recommend-videos";
  show_ignore_list_type: string = 'words';

  ignore_txt_type: string = "txt";
  ignore_txt: string;

  constructor() { };

  setIgnoreTxt() {
    let obj: any = {};

    obj.txt = this.ignore_txt;
    obj.type = this.ignore_txt_type;
    obj.state = true;

    this.filter.txts.push( obj );
  }

  ignoreUser ( userId: string ) {
  	for ( let i = 0, len = this.filter.users.length; i < len; i++ ) {
  	  if ( userId === this.filter.users[ i ].id ) {
  	  	return false;
  	  }
  	}

  	let obj: any = {};

  	obj.id = userId;
  	obj.state = true;

  	this.filter.users.push ( obj );

  	return true;
  }

  setIgnoreType ( type ) {
  	for ( let i = 0, len = this.filter.types.length; i < len; i++ ) {
  	  if ( type === this.filter.types[ i ] ) {
      	this.filter.types.splice ( i, 1 );
      	return false;
      }
  	}
  	this.filter.types.push ( type );
  	return true;
  }

  cancelIgnoreUser ( userId: string ) {
  	for ( let i = 0, len = this.filter.users.length; i < len; i++ ) {
  	  if ( userId === this.filter.users[ i ].id ) {
  	  	this.filter.users.splice ( i, 1 );
  	  	return true
  	  }
  	}

  	return false;
  }

  beIgnored ( userId: string ) {
  	for ( let i = 0, len = this.filter.users.length; i < len; i++ ) {
  	  if ( userId === this.filter.users[ i ].id ) {
  	  	return true
  	  }
  	}

  	return false;
  }

  typeBeIgnored ( type: string ) {
    for ( let i = 0, len = this.filter.types.length; i < len; i++ ) {
      if ( type === this.filter.types[ i ] ) {
      	return true;
      }
    }

    return false;
  }

  ngOnInit() {
  }

}
