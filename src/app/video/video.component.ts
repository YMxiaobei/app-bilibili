import { Component, OnInit } from '@angular/core';

let mockVideo: any = {
  paths: [ "主页", "动画", "短片·手书·配音" ],
  update_time: "2017-07-11 22:20",
  play_amount: 2000,
  recomand_amount: 2000,
  coin_amount: 2000,
  star_amount: 2000,
  title: "【手书/安雷】妄想感傷代償連盟"
}

let mockUser: any = {
  name: "小北的蛀牙",
  introduction: "兴趣使然的休闲向up，ask点图提问：https://ask.fm/xiemuge 微博也叫@切肤子 但是很懒所以不怎么活动",
  contribute_amount: 22,
  fans_amount: 200000,
  id_img: "/assets/img/id_img.jpg"
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video: any = mockVideo;
  user: any = mockUser;

  constructor() { }
  
  ngOnInit() {
  }

}
