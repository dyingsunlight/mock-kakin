import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandradSupplementComponent } from './standrad-supplement/standrad-supplement.component';
import { CustomizeSupplementComponent } from './customize-supplement/customize-supplement.component';
import { CustomizeConfigComponent } from './customize-config/customize-config.component';
import { GachaTestComponent } from './gacha-test/gacha-test.component';
import { PrecisionSupplementComponent } from './precision-supplement/precision-supplement.component';
import { url } from '../config';

const routes: Routes = [
  {
    path: 'standard',
    component: StandradSupplementComponent
  },
  {
    path: 'customize',
    component: CustomizeSupplementComponent
  },
  {
    path: 'precision',
    component: PrecisionSupplementComponent
  },
  {
    path: 'customize-config',
    component: CustomizeConfigComponent
  },
  {
    path: 'test',
    component: GachaTestComponent
  },
  {
    path: '**',
    component: StandradSupplementComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
