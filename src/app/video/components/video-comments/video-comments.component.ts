import { Component, OnInit } from '@angular/core';

let mockComents: any = [
	{
		author: {
			img_path: "",
			name: "小小霞",
			rank: "LV1"
		},
		content: "666",
		floor: "#567",
		update_time: "2017-05-15 12:00:00",
		thumb_down_amount: 100,
		thumb_up_amount: 0,
		replys: [
			{
				author: {
					img_path: "",
					name: "小小霞",
					rank: "LV1"
				},
				content: "666",
				floor: "#567",
				update_time: "2017-05-15 12:00:00",
				thumb_down_amount: 100,
				thumb_up_amount: 0
			},
			{
				author: {
					img_path: "",
					name: "小小霞",
					rank: "LV1"
				},
				content: "666",
				floor: "#567",
				update_time: "2017-05-15 12:00:00",
				thumb_down_amount: 100,
				thumb_up_amount: 0
			}
		]
	}
];

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {
  comment_amount: number = 500;
  comments: any = [] = mockComents;

  constructor() { }

  c () {
  	console.log ( 222 );
  }

  ngOnInit() {
  }

}
