import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

import { StateService } from './core/service/state.service';
import { RevealService } from './core/service/reveal.service';
import { PreloadService } from './core/service/preload.service';
import { LoadingService } from './core/service/loading.service';

import { AppComponent } from './app.component';
import { GachaRevealItemComponent } from './core/components/gacha-reveal-item/reveal-item.component';
import { GachaRevealComponent } from './core/components/gacha-reveal/gacha-reveal.component';

import { OverviewItemsComponent } from './core/components/overview-items/overview-items.component';
import { OverviewItemChipComponent } from './core/components/overview-item-chip/overview-item-chip.component';
import { LoadingComponent } from './core/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    GachaRevealComponent,
    GachaRevealItemComponent,
    OverviewItemsComponent,
    OverviewItemChipComponent,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
  ],
  providers: [
    RevealService,
    PreloadService,
    LoadingService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
