import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GachaTypeSelectionComponent } from './components/gacha-type-selection/gacha-type-selection.component';
import { GachaBannerComponent } from './components/gacha-banner/gacha-banner.component';
import { GachaControlBoxComponent } from './components/gacha-control-box/gacha-control-box.component';
import { GachaCardIndicatorComponent } from './components/gacha-card-indicator/gacha-card-indicator.component';
import { ImageInButtonComponent } from './components/image-in-button/image-in-button.component';
import { StarExhibitionComponent } from './components/star-exhibition/star-exhibition.component';
import { RouterModule } from '@angular/router';
import { CharacterRankExhibitionComponent } from './components/character-rank-exhibition/character-rank-exhibition.component';

@NgModule({
  declarations: [
  GachaTypeSelectionComponent,
  GachaBannerComponent,
  GachaControlBoxComponent,
  GachaCardIndicatorComponent,
  ImageInButtonComponent,
  StarExhibitionComponent,
  CharacterRankExhibitionComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    GachaTypeSelectionComponent,
    GachaBannerComponent,
    GachaControlBoxComponent,
    GachaCardIndicatorComponent,
    ImageInButtonComponent,
    StarExhibitionComponent,
    CharacterRankExhibitionComponent
  ],
  providers: [],
  bootstrap: []
})

export class SharedModule { }
