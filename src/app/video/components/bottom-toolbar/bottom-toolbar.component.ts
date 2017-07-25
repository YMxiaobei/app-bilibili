import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss']
})
export class BottomToolbarComponent implements OnInit {
  @Input() video: any;

  coin_anim_play: number = 3;
  mark_anim_play: number = 3;
  app_anim_play: number = 3;
  star_anim_play: number = 3; 	
  battery_anim_play: number = 3;

  constructor() { }

  ngOnInit() {
  }

}
