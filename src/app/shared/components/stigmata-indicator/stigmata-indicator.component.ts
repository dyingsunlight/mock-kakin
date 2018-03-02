import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GachaItem } from '../../../gacha/interface/gacha-item';
import { url } from '../../../config';
import { stigmataSlot } from '../../../gacha/enum/stigmata-slot';

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
      this.getIndicator(changes.item.currentValue);
    }
  }

  getIndicator(item: GachaItem) {
    switch (item.extra.suffix) {
      case stigmataSlot.top:
        this.indicator = `${url.gacha}/effect/stigmata-top.png`;
        break;
      case stigmataSlot.mid:
        this.indicator = `${url.gacha}/effect/stigmata-mid.png`;
        break;
      case stigmataSlot.bottom:
        this.indicator = `${url.gacha}/effect/stigmata-bottom.png`;
        break;
    }
  }
}
