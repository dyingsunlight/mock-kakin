import { Component, OnInit } from '@angular/core';
import { standardSupplementPossibility } from '../../gacha/config/standard-supplement';
import { equipmentSupplementPossibility } from '../../gacha/config/equipment-supplement';
import { precisionSupplementPossibility } from '../../gacha/config/precision-supplement';
import { prettyPrint } from '../../core/library/json-pretty';

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
    // standardSupplementPossibility.factor = 890
    // this.config[this.current] = JSON.parse(this.text);
    deepClone(JSON.parse(this.text), standardSupplementPossibility, true);
    console.log(standardSupplementPossibility);
  }
}
