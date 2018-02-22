import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { GachaItem } from '../../gacha/interface/gacha-item';
import { RevealService } from '../../core/service/reveal.service';
import { startGaCha, getStatistics } from '../../gacha/index';
import { PreloadService } from '../../core/service/preload.service';

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
      banner: 'GachaPic_1',
      bannerText: '标配补给中不含灵魂觉醒角色(如圣仪装·今祥) 十回补给必定有A级或以上女武神降临，抽到重复女武神会自动分解为碎片。',
      bannerTitleImage: 'standard-supplement',
      cardStyle: 'standrad-card',
      itemTips: '可获得物品：女武神或2-4星装备、材料',
      itemDecoration: 'valkyrja-tip'
    },
    equipment: {
      banner: 'GachaPic_2',
      bannerText: '装备补给测试版。',
      bannerTitleImage: 'equipment-supplement',
      cardStyle: 'equipment-card',
      itemTips: '可获得物品：2-4星装备、材料',
      itemDecoration: 'weapon-tip'
    },
  };
  mode: string;
  currentList: GachaItem[] = [];
  preloadedList: GachaItem[] = [];
  preloadLock = false;
  constructor(
    private route: ActivatedRoute,
    private reveal: RevealService,
    private router: Router,
    private preload: PreloadService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.mode = params.get('mode') || 'standard';
    });
  }
  switchMode(mode: string) {
    // this.mode =  mode;
    this.router.navigate(['./', {mode: mode === 'equipment' ? 'standard' : 'equipment'}]);
  }
  start(times: number) {
    this.preload.gacha(times , this.mode).subscribe(list => {
      this.currentList = list;
      this.reveal.show(this.currentList);
    });
  }
}

