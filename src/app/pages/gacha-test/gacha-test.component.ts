import { Component, OnInit } from '@angular/core';
import { getStatistics } from '../../gacha/index';
import { prettyPrint } from '../../core/library/json-pretty';
import { StateService } from '../../core/service/state.service';
import { toArray } from '../../core/library/object';
import { GachaStatisticsItem } from '../../gacha/interface/gacha-statistics';

const translateDictionary = {
  'times': '实际抽取物品数量',
  'stigmata': '圣痕',
  'weapon': '武器',
  'character': '角色',
  'fragment': '角色碎片',
  'equipment': '装备/经验',
  'category': '按照分类',
  'detail': '按照物品',
  '1': '1星',
  '2': '2星',
  '4': '初始4星',
  '3': '初始3星',
  '11': 'B级角色卡',
  '12': 'A级角色卡',
  '13': 'S级角色卡',
};

@Component({
  selector: 'app-gacha-test',
  templateUrl: './gacha-test.component.html',
  styleUrls: ['./gacha-test.component.less']
})
export class GachaTestComponent implements OnInit {
  times = 10000;
  current = 'standard';
  output = '未执行抽取';
  itemList: GachaStatisticsItem[] = [];
  sortDirection = -1;
  typeText = translateDictionary;
  constructor(
    protected state: StateService
  ) { }

  ngOnInit() {
  }
  sortBy(key: string) {
    const arr = this.itemList;
    this.sortDirection = this.sortDirection * -1;
    const mapped = arr.map((el, i) => ({ index: i, value: el[key]}));
    mapped.sort((a, b) => this.sortDirection * (+(a.value > b.value) || +(a.value === b.value) - 1));
    this.itemList = mapped.map(el => arr[el.index]);
  }
  start() {
    this.output = '';
    const result = getStatistics(this.times, this.current, this.state.enableProtection, this.state.possibility[this.current]);
    this.itemList = toArray(result.detail);
    this.sortBy('possibility');
    this.output = prettyPrint(result.category, '');
  }
}
