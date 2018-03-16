import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StandradSupplementComponent } from './standrad-supplement/standrad-supplement.component';
import { CustomizeConfigComponent } from './customize-config/customize-config.component';
import { GachaTestComponent } from './gacha-test/gacha-test.component';
import { PrecisionSupplementComponent } from './precision-supplement/precision-supplement.component';
import { AboutComponent } from './about/about.component';
import { ExtensionSupplementComponent } from './extension-supplement/extension-supplement.component';

@NgModule({
  declarations: [
    StandradSupplementComponent,
    CustomizeConfigComponent,
    GachaTestComponent,
    PrecisionSupplementComponent,
    AboutComponent,
    ExtensionSupplementComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})

export class PagesModule { }
