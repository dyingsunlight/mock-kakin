import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StandradSupplementComponent } from './standrad-supplement/standrad-supplement.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CustomizeSupplementComponent } from './customize-supplement/customize-supplement.component';
import { CustomizeConfigComponent } from './customize-config/customize-config.component';
import { GachaTestComponent } from './gacha-test/gacha-test.component';
import { PrecisionSupplementComponent } from './precision-supplement/precision-supplement.component';

@NgModule({
  declarations: [
    StandradSupplementComponent,
    CustomizeSupplementComponent,
    CustomizeConfigComponent,
    GachaTestComponent,
    PrecisionSupplementComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    PagesRoutingModule
  ],
  providers: [],
  bootstrap: []
})

export class PagesModule { }
