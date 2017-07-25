import { Component, OnInit } from '@angular/core';

let mockVideo: any = {
  paths: [ "主页", "动画", "短片·手书·配音" ],
  update_time: "2017-07-11 22:20",
  play_amount: 2000,
  recomand_amount: 2000,
  coin_amount: 2000,
  star_amount: 2000,
  title: "【手书/安雷】妄想感傷代償連盟",
  audience_amount: 345,
  share_count: 1000,
  srcs: [
    {
      name: "超清",
      src: ""
    },
    {
      name: "高清",
      src: ""
    },
    {
      name: "标清",
      src: ""
    },
    {
      name: "流畅",
      src: ""
    }
  ],
  danmus: [
    {
      apearance_time: "00:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "超好听的",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "抱起女神就跑",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "66666",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "没毛病",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "声音太可爱啦！！！",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "可爱，想日",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "up你是个干大事的人",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪！！！",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "前方高能",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "不好听，我也就循环了几百遍",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    },
    {
      apearance_time: "02:20",
      content: "开口跪",
      update_time: "07-18 15:02",
      author: "齐天大吊"
    }
  ],
  recomends: [
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    },
    {
      src: "",
      title: "【熊叔实验室】如何在水面点火",
      play_amount:  100000,
      commond_amount: 100000
    }
  ]
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
