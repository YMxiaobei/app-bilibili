import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.scss']
})
export class HeadNavComponent {

  qrcode_status: string = "hide";
  historyDetail_status: string = "hide";
  contributeMore_status: string = "hide";

  show ( component: string ) {
  	switch ( component ) {
  	  case "qrcode": {
  	  	this.qrcode_status = "show";
  	  	break;
  	  }
  	  case "historyDetail": {
  	  	this.historyDetail_status = "show";
  	  	break;
  	  }
  	  case "contributeMore": {
  	  	this.contributeMore_status = "show";
  	  	break;
  	  }
  	  default: {
  	  	break;
  	  }
  	}
  }

  hide ( component: string ) {
    let _self = this;

  	switch ( component ) {
  	  case "qrcode": {
  	  	this.qrcode_status = "hide";
  	  	break;
  	  }
  	  case "historyDetail": {
  	  	this.historyDetail_status = "hide";
  	  	break;
  	  }
  	  case "contributeMore": {
  	  	this.contributeMore_status = "hide";
  	  	break;
  	  }
  	  default: {
  	  	break;
  	  }
  	}
  }

  constructor() { }

}
