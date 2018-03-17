import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RevealService } from '../../service/reveal.service';
import { url } from '../../../url-config';
import { GachaItem } from '../../../gacha/interface/gacha-item';
import { sortItems } from '../../../gacha/library/util/item-sort';

@Component({
  selector: 'app-gacha-reveal',
  templateUrl: './gacha-reveal.component.html',
  styleUrls: ['./gacha-reveal.component.less']
})
export class GachaRevealComponent implements OnInit, OnChanges {
  @Input() bg = '#';
  active = false;
  item1: GachaItem;
  item2: GachaItem;
  // isRevealInterfaceOn = false;
  isOverviewActive = false;
  lastItemID: number;
  itemList: GachaItem[] = [];
  isRevealed = false;
  constructor(
    private reveal: RevealService
  ) { }
  ngOnInit() {
    this.reveal.setHandle(this.show.bind(this));
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.bg) {
      this.bg = `${url.backgrounds}/${this.bg}.png`;
    }
  }
  nextItem(stage = 0) {
    if (stage === 0) {
      // 第一次点击，不切换物品，只切换显示
      this.isRevealed = true;
    }
    if (stage === 1) {
      // 第二次点击，切换物品并且关闭显示
      this.isRevealed = false;
      this.loadNextItem();
    }
  }
  loadNextItem() {
    this.item1 = this.itemList.length > this.lastItemID ++ ? this.itemList[this.lastItemID] : undefined;
    this.item2 = this.itemList.length > this.lastItemID ++ ? this.itemList[this.lastItemID] : undefined;
    // 高星级在左侧
    if (this.item2 && this.item1 && this.item2.level > this.item1.level) {
      const tmp = this.item2;
      this.item2 = this.item1;
      this.item1 = tmp;
    }
    if (!this.item1 && !this.item2) {
      this.itemList = sortItems(this.itemList);
      this.isOverviewActive = true;
    }
  }
  show(list: GachaItem[] ) {
    this.itemList = list;
    this.lastItemID = -1;
    this.loadNextItem();
  }
  closeOverview() {
    this.isOverviewActive = false;
  }
}

