import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { GachaItem } from '../../gacha/interface/gacha-item';
import { RevealService } from '../../core/service/reveal.service';
import { PreloadService } from '../../core/service/preload.service';
import { LoadingService } from '../../core/service/loading.service';

interface UIConfig {
  banner: string;
  bannerText: string;
  bannerTitleImage: string;
  cardStyle: string;
  itemTips: string;
  itemDecoration: string;
}
@Component({
  selector: 'app-standrad-supplement',
  templateUrl: './standrad-supplement.component.html',
  styleUrls: ['./standrad-supplement.component.less']
})
export class StandradSupplementComponent implements OnInit {
  uiConfig: {[key: string]: UIConfig} = {
    standard: {
      banner: 'GachaPic_banner_1',
      bannerText: '标配补给中不含灵魂觉醒角色(如圣仪装·今祥) 十回补给必定有A级或以上女武神降临，抽到重复女武神会自动分解为碎片。',
      bannerTitleImage: 'standard-supplement',
      cardStyle: 'standrad-card',
      itemTips: '可获得物品：女武神或2-4星装备、材料',
      itemDecoration: 'valkyrja-tip'
    },
    equipment: {
      banner: 'GachaPic_banner_2',
      bannerText: '装备补给测试版。',
      bannerTitleImage: 'equipment-supplement',
      cardStyle: 'equipment-card',
      itemTips: '可获得物品：2-4星装备、材料',
      itemDecoration: 'weapon-tip'
    },
  };
  mode: string;
  currentList: GachaItem[] = [];
  constructor(
    private route: ActivatedRoute,
    private reveal: RevealService,
    private router: Router,
    private preload: PreloadService,
    private loading: LoadingService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.mode = params.get('mode') || 'standard';
    });
  }
  switchMode(mode: string) {
    // this.mode =  mode;
    this.mode = mode === 'equipment' ? 'standard' : 'equipment';
    try {
      this.router.navigate(['./', {mode: this.mode}]);
    } catch (err) {
      console.log(err);
    }
  }
  start(times: number) {
    this.loading.show('加载资源中...', `0/${times * 4}`);
    this.preload.gacha(times , this.mode, ({complete, total}) => this.loading.update('加载资源中...', `${complete}/${total}`))
      .subscribe(list => {
      this.loading.close();
      this.currentList = list;
      this.reveal.show(this.currentList);
    });
  }
}

