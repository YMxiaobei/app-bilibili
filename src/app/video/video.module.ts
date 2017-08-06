import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { FormsModule } from '@angular/forms';
import { VideoHeaderComponent } from './components/video-header/video-header.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { AnimateIconComponent } from './components/animate-icon/animate-icon.component';
import { VideoControllorComponent } from './components/video-controllor/video-controllor.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { DanmuEditorComponent } from './components/danmu-editor/danmu-editor.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { PlayerSettingComponent } from './components/player-setting/player-setting.component';
import { OmitStringPipe } from './omit-string.pipe';
import { TransformAmountPipe } from 'app/pipes/transform-amount.pipe';
import { PlayerSetting2Component } from './components/player-setting2/player-setting2.component';
import { BottomToolbarComponent } from './components/bottom-toolbar/bottom-toolbar.component';
import { VideoFooterComponent } from './components/video-footer/video-footer.component';
import { VideoCommentsComponent } from './components/video-comments/video-comments.component';
import { PaginationControllorComponent } from './components/pagination-controllor/pagination-controllor.component';
import { VideoCommentComponent } from './components/video-comment/video-comment.component';
import { SentMyCommentComponent } from './components/sent-my-comment/sent-my-comment.component';
import { VideoTagsComponent } from './components/video-tags/video-tags.component';
import { VideoService } from './video.service';
import { SToTimeStrPipe } from 'app/pipes/s-to-time-str.pipe';
import { DanmukuComponent } from './components/danmuku/danmuku.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ VideoService ],
  declarations: [
  	VideoComponent, 
  	VideoHeaderComponent, 
  	VideoPlayerComponent, 
  	AnimateIconComponent, 
  	VideoControllorComponent, 
  	ScrollBarComponent, 
  	DanmuEditorComponent, 
  	ColorPickerComponent, 
  	PlayerSettingComponent, 
  	OmitStringPipe,
  	TransformAmountPipe,
  	PlayerSetting2Component,
  	BottomToolbarComponent,
  	VideoFooterComponent,
  	VideoCommentsComponent,
  	PaginationControllorComponent,
  	VideoCommentComponent,
  	SentMyCommentComponent,
  	VideoTagsComponent,
    SToTimeStrPipe,
    DanmukuComponent
  ]
})
export class VideoModule { }
