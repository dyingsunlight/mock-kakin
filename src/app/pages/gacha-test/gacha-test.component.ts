import { Component, OnInit } from '@angular/core';
import { getStatistics } from '../../gacha/index';
import { prettyPrint } from '../../core/library/json-pretty';

const translateDictionary = {
  'times': '总次数',
  'stigmata': '圣痕',
  'weapon': '武器',
  'character': '角色',
  'fragment': '角色碎片',
  'equipment': '装备/经验',
  'category': '类别分布（数字为星级）',
  'detail': '具体分布物品'
}
@Component({
  selector: 'app-gacha-test',
  templateUrl: './gacha-test.component.html',
  styleUrls: ['./gacha-test.component.less']
})
export class GachaTestComponent implements OnInit {
  times = 10000;
  current = 'standard';
  output = '';
  constructor() { }

  ngOnInit() {
  }
  start() {
    this.output = '';
    this.output += prettyPrint(getStatistics(this.times, this.current), ' ');
    for (const key of Object.keys(translateDictionary)) {
      this.output = this.output.replace(new RegExp(key, 'g'), translateDictionary[key]);
    }
  }

}
