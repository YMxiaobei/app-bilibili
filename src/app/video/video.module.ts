import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { VideoHeaderComponent } from './components/video-header/video-header.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { AnimateIconComponent } from './components/animate-icon/animate-icon.component';
import { VideoControllorComponent } from './components/video-controllor/video-controllor.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoComponent, VideoHeaderComponent, VideoPlayerComponent, AnimateIconComponent, VideoControllorComponent, ScrollBarComponent]
})
export class VideoModule { }
