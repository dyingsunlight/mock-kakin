import { StandradSupplementComponent } from './standrad-supplement/standrad-supplement.component';
import { CustomizeConfigComponent } from './customize-config/customize-config.component';
import { GachaTestComponent } from './gacha-test/gacha-test.component';
import { PrecisionSupplementComponent } from './precision-supplement/precision-supplement.component';
import { AboutComponent } from './about/about.component';

export const PagesRouting = [
  {
    path: 'standard',
    component: StandradSupplementComponent
  },
  {
    path: 'customize',
    component: CustomizeConfigComponent
  },
  {
    path: 'precision',
    component: PrecisionSupplementComponent
  },
  {
    path: 'test',
    component: GachaTestComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
