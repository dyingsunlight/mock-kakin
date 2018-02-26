import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {GachaItem} from '../../../gacha/interface/gacha-item';
import { url } from '../../../config';

@Component({
  selector: 'app-stigmata-indicator',
  templateUrl: './stigmata-indicator.component.html',
  styleUrls: ['./stigmata-indicator.component.less']
})
export class StigmataIndicatorComponent implements OnInit, OnChanges {
  @Input() item: GachaItem;
  indicator: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.item) {
      this.getIndicator(changes.item.currentValue.name);
    }
  }

  getIndicator(name: string) {
    switch (name.slice(-3)) {
      case '(上)':
        this.indicator = `${url.gacha}/effect/stigmata-top.png`;
        break;
      case '(中)':
        this.indicator = `${url.gacha}/effect/stigmata-mid.png`;
        break;
      case '(下)':
        this.indicator = `${url.gacha}/effect/stigmata-bottom.png`;
        break;
    }
  }
}
