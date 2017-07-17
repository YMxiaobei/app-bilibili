import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'video', component: VideoComponent },
  { path: '', redirectTo: '/video', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot ( appRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
