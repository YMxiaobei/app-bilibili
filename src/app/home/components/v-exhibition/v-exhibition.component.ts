import { Component, OnInit, Input } from '@angular/core';

import { VideoExhibition } from '../../classes/video-exhibition';


let mockData: any = {
	url: "javascript:;",
	img_path: "/assets/img/a1.jpg",
	title: "【凹凸世界手书/腐向】M/a/b/e/l【安雷】",
	up: "DDDDoran",
	play_amount: "1.7万"
}

@Component({
  selector: 'v-exhibition',
  templateUrl: './v-exhibition.component.html',
  styleUrls: ['./v-exhibition.component.scss']
})
export class VExhibitionComponent implements OnInit {

  @Input () data: any = mockData;

  active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
