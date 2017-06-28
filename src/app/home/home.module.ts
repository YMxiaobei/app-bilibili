import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ImgSlidComponent } from './components/img-slid/img-slid.component';
import { VExhibitionComponent } from './components/v-exhibition/v-exhibition.component';
import { ImgSlideComponent } from './components/img-slide/img-slide.component';
import { TopRecommendComponent } from './components/top-recommend/top-recommend.component';
import { VExhibitionEnhanceComponent } from './components/v-exhibition-enhance/v-exhibition-enhance.component';
import { PopularizeSectionComponent } from './components/popularize-section/popularize-section.component';
import { ClassifySectionComponent } from './components/classify-section/classify-section.component';
import { VLiComponent } from './components/v-li/v-li.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ClassifySection2Component } from './components/classify-section2/classify-section2.component';
import { ImgSlide2Component } from './components/img-slide2/img-slide2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ImgSlidComponent, VExhibitionComponent, ImgSlideComponent, TopRecommendComponent, VExhibitionEnhanceComponent,  PopularizeSectionComponent, ClassifySectionComponent, VLiComponent, RankingComponent, ClassifySection2Component, ImgSlide2Component]
})
export class HomeModule { }
