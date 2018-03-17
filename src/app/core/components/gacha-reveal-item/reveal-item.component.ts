import {Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter, OnDestroy} from '@angular/core';
import { GachaItem } from '../../../gacha/interface/gacha-item';
import { url } from '../../../url-config';
import { strRes } from '../../../language';

const rankTitle = {
  1: `${url.gacha}/effect/rank-2.png`,
  2: `${url.gacha}/effect/rank-2.png`,
  3: `${url.gacha}/effect/rank-3.png`,
  4: `${url.gacha}/effect/rank-4.png`,
};

@Component({
  selector: 'app-reveal-item',
  templateUrl: './reveal-item.component.html',
  styleUrls: ['./reveal-item.component.less']
})
export class GachaRevealItemComponent implements OnInit, OnDestroy, OnChanges {
  @Output() update = new EventEmitter<number>();
  @Input() item: GachaItem = {};
  @Input() isRevealed = false;
  weaveEffectImagePath = '';
  weaveFrameEffectImagePath = '';
  timerID: number;
  typeText = strRes.commons;
  itemLevel = 2;
  maxItemLevel = 3;
  forceUpdateStar = 0;
  isImageLoading = false;
  rankTitle: string = rankTitle[1];
  constructor() { }
  ngOnInit() {
    this.weaveEffectImagePath = `${url.gacha}/effect/frame-weave.png`;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.reloadItem(changes.item.currentValue);
      this.updateStar();
      this.updateRankTitle();
    }
  }
  reloadItem(item: GachaItem) {
    // this.nextStage(0);
    this.weaveFrameEffectImagePath = `${url.gacha}effect/${this.item.type}.png`;
    // this.isImageLoading = true;
    clearTimeout(this.timerID);
    // this.timerID = setTimeout(this.nextStage.bind(this), 2000);
  }
  ngOnDestroy() {
    clearInterval(this.timerID);
  }
  nextStage(stage: number) {
    this.update.emit(stage);
  }
  updateStar() {
    this.itemLevel = this.item.level;
    this.maxItemLevel = this.itemLevel + 1;
    this.forceUpdateStar ++;
  }
  updateRankTitle() {
    this.rankTitle = this.item.level < 4 ? rankTitle[this.item.level] :  rankTitle[4];
  }
  imageLoadComplete() {
    this.isImageLoading = false;
  }
}

