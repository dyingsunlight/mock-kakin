import { Component, OnInit } from '@angular/core';
import { getStatistics } from '../../gacha/index';
import { prettyPrint } from '../../core/library/json-pretty';
import { StateService } from '../../core/service/state.service';
import { toArray } from '../../core/library/object';
import { GachaStatisticsItem } from '../../gacha/interface/gacha-statistics';
import { strRes } from '../../language';

@Component({
  selector: 'app-gacha-test',
  templateUrl: './gacha-test.component.html',
  styleUrls: ['./gacha-test.component.less']
})
export class GachaTestComponent implements OnInit {
  times = 10000;
  current = 'standard';
  output = '';
  strRes = strRes;
  itemList: GachaStatisticsItem[] = [];
  sortDirection = -1;
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
    console.log(result.category);
    this.sortBy('possibility');
    this.output = prettyPrint(result.category, '');
  }
}
