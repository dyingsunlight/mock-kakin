import {Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter, OnDestroy} from '@angular/core';
import { GachaItem } from '../../../gacha/interface/gacha-item';
import { url } from '../../../config';
import { getItemLevel } from '../../../gacha/library/item-level';

const typeText = {
  'stigmata': '圣痕',
  'weapon': '武器',
  'equipment': '装备/材料',
  'fragment': '碎片',
  'character': '角色卡'
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
  typeText = typeText;
  itemLevel = 2;
  maxItemLevel = 3;
  forceUpdateStar = 0;
  constructor() { }
  ngOnInit() {
    this.weaveEffectImagePath = `${url.gachaBasePath}/effect/frame-weave.png`;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.reloadItem(changes.item.currentValue);
      this.updateStar();
    }
  }
  reloadItem(item: GachaItem) {
    // this.nextStage(0);
    this.weaveFrameEffectImagePath = `${url.gachaBasePath}effect/${this.item.type}.png`;
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
}

