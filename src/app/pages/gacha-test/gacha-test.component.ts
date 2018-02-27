import { Component, OnInit } from '@angular/core';
import { getStatistics } from '../../gacha/index';
import { prettyPrint } from '../../core/library/json-pretty';
import { StateService } from '../../core/service/state.service';

const translateDictionary = {
  'times': '实际抽取物品数量',
  'stigmata': '圣痕',
  'weapon': '武器',
  'character': '角色',
  'fragment': '角色碎片',
  'equipment': '装备/经验',
  'category': '按照分类',
  'detail': '按照物品',
  '"1"': '1星',
  '"2"': '2星',
  '"4"': '初始4星',
  '"3"': '初始3星',
  '"11"': 'B级角色卡',
  '"12"': 'A级角色卡',
  '"13"': 'S级角色卡',
};

@Component({
  selector: 'app-gacha-test',
  templateUrl: './gacha-test.component.html',
  styleUrls: ['./gacha-test.component.less']
})
export class GachaTestComponent implements OnInit {
  times = 10000;
  current = 'standard';
  output = '';
  constructor(
    protected state: StateService
  ) { }

  ngOnInit() {
  }
  start() {
    this.output = '';
    this.output += prettyPrint(getStatistics(this.times, this.current, this.state.enableProtection), ' ');
    for (const key of Object.keys(translateDictionary)) {
      this.output = this.output.replace(new RegExp(key, 'g'), translateDictionary[key]);
    }
  }
}
