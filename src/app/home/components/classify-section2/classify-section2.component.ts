import { Component, OnInit, Input } from '@angular/core';

let mockNavData: any = [
	{
		title: "最新",
		url: "javascript:;"
	},
	{
		title: "一",
		url: "javascript:;"
	},
	{
		title: "二",
		url: "javascript:;"
	},
	{
		title: "三",
		url: "javascript:;"
	},
	{
		title: "四",
		url: "javascript:;"
	},
	{
		title: "五",
		url: "javascript:;"
	},
	{
		title: "六",
		url: "javascript:;"
	},
	{
		title: "日",
		url: "javascript:;"
	}

]

@Component({
  selector: 'classify-section2',
  templateUrl: './classify-section2.component.html',
  styleUrls: ['./classify-section2.component.scss']
})
export class ClassifySection2Component implements OnInit {

  navData: any = mockNavData;
  nav_selected: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
