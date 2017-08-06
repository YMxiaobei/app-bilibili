import { Component, OnInit } from '@angular/core';
import { getMockData } from './mockData/videoData';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  private video: any;
  private user: any;

  constructor ( 
    private videoService: VideoService
  ) { }
  
  ngOnInit() {
    this.video = this.videoService.getVideo ();
    this.user = this.videoService.getUser ();
  }

}
