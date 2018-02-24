import { StandradSupplementComponent } from './standrad-supplement/standrad-supplement.component';
import { CustomizeSupplementComponent } from './customize-supplement/customize-supplement.component';
import { CustomizeConfigComponent } from './customize-config/customize-config.component';
import { GachaTestComponent } from './gacha-test/gacha-test.component';
import { PrecisionSupplementComponent } from './precision-supplement/precision-supplement.component';


export const PagesRouting = [
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
  }
];
