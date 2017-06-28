import { Component, OnInit, Input } from '@angular/core';
import { getMockNav } from './mockNav';

let mockLinks: any[] = [
   {
	  url: "javascript:;",
	  txt: "动画",
	  statistics: 100,
	  children: [
	    {
	      txt: "MAD",
	      url: "javascript:;"
	    },
	    {
	      txt: "动画",
	      url: "javascript:;"
	    },
	    {
	      txt: "动画",
	      url: "javascript:;"
	    },
	    {
	      txt: "动画",
	      url: "javascript:;"
	    }
	  ]
	}
]

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  @Input () links: any[] = getMockNav ();

  constructor() { }

  ngOnInit() {
  }

}
