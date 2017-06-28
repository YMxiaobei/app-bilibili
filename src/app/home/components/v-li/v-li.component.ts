import { Component, OnInit, Input } from '@angular/core';

let mockData: any = {
	img_path: "/assets/img/c1.jpg",
	title: "爱丽丝与藏六",
	latest_episode: 12,
	url: "javascript:;"
}

@Component({
  selector: 'v-li',
  templateUrl: './v-li.component.html',
  styleUrls: ['./v-li.component.scss']
})
export class VLiComponent implements OnInit {

  @Input() data: any = mockData; 

  constructor() { }

  ngOnInit() {
  }

}
