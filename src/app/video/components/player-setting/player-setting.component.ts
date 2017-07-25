import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-setting',
  templateUrl: './player-setting.component.html',
  styleUrls: ['./player-setting.component.scss']
})
export class PlayerSettingComponent implements OnInit {
  @Input() video: any; 

  content_show: string = "recommend-videos";

  constructor() { }

  ngOnInit() {
  }

}
