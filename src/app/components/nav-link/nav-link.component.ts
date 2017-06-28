import { Component, OnInit, Input } from '@angular/core';

let mockData: any = {
  url: "javascript:;",
  txt: "动画",
  statistics: 100,
  children: [
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
    },
    {
      txt: "动画",
      url: "javascript:;"
    }
  ]
}

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
  children_link_active: any;
  children_link_reset: any;	
  active: boolean = false;

  @Input() data: any;  

  constructor() { }

}
