import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadNavComponent } from './components/head-nav/head-nav.component';
import { ContributeMoreComponent } from './components/contribute-more/contribute-more.component';
import { QRcodeComponent } from './components/qrcode/qrcode.component';
import { HistoryDetailComponent } from './components/history-detail/history-detail.component';
import { SerchComponent } from './components/serch/serch.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadNavComponent,
    ContributeMoreComponent,
    QRcodeComponent,
    HistoryDetailComponent,
    SerchComponent,
    MainNavComponent,
    NavLinkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AppRoutingModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
