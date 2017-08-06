import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-footer',
  templateUrl: './video-footer.component.html',
  styleUrls: ['./video-footer.component.scss']
})
export class VideoFooterComponent implements OnInit {

  @Input() video: any = {};	

  constructor() { }

  ngOnInit() {
  }

}
