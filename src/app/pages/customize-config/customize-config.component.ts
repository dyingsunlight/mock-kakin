import { Component, OnInit } from '@angular/core';
import { standardSupplementPossibility } from '../../gacha/config/standard-supplement';
import { equipmentSupplementPossibility } from '../../gacha/config/equipment-supplement';
import { precisionSupplementPossibility } from '../../gacha/config/precision-supplement';
import { prettyPrint } from '../../core/library/json-pretty';
import {Possibility} from '../../gacha/interface/possibility';

const deepClone = function (from: {[key: string]: any}, to: {[key: string]: any} = {}, overwrite = true) {
  for (const key of Object.keys(from)) {
    const fromType = typeof from[key];
    if (fromType === 'object' && from[key]) {
      if (!to.hasOwnProperty(key)) {
        to[key] = {};
      }
      if (overwrite && (typeof to[key] !== 'object' || !to[key])) {
        // is value
        to[key] = {};
      } else {
        deepClone(from[key], to[key], overwrite);
      }
    }
    if (fromType !== 'object' || !from[key]) {
      if (!to.hasOwnProperty(key) ||　overwrite) {
        //  to没有或者复写启用
        to[key] = from[key];
      }
    }
  }
};

@Component({
  selector: 'app-customize-config',
  templateUrl: './customize-config.component.html',
  styleUrls: ['./customize-config.component.less']
})
export class CustomizeConfigComponent implements OnInit {
  config = {
    standard: standardSupplementPossibility,
    precision: precisionSupplementPossibility,
    equipment: equipmentSupplementPossibility
  };
  current = 'standard';
  text = '';
  constructor() { }
  ngOnInit() {
    this.loadConfig('standard');
  }
  loadConfig(name: string) {
    this.current = name;
    this.text = prettyPrint(this.config[name], ' ');
  }
  confirm() {
    deepClone(JSON.parse(this.text), this.config[this.current], true);
  }
  showPossibility() {
    // 只统计第二级的
    const p: Possibility[] = this.config[this.current].possibility;
    const report: {[key: string]: string} = {};
    const total = p.reduce( (prev, item) => item.factor + prev, 0);
    p.forEach( item => report[item.name] = (item.factor / total * 100).toFixed(2) + '%');
    alert(prettyPrint(report, ' '));
  }
}

