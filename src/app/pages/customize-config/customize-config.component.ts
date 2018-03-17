import { Component, OnInit } from '@angular/core';
import { prettyPrint } from '../../core/library/json-pretty';
import { Possibility } from '../../gacha/interface/possibility';
import { deepMigrate } from '../../core/library/object';
import { StateService } from '../../core/service/state.service';

@Component({
  selector: 'app-customize-config',
  templateUrl: './customize-config.component.html',
  styleUrls: ['./customize-config.component.less']
})
export class CustomizeConfigComponent implements OnInit {
  current = 'standard';
  text = '';
  constructor(
    private state: StateService
  ) { }
  ngOnInit() {
    this.loadConfig('standard');
  }
  loadConfig(name: string) {
    this.current = name;
    this.text = prettyPrint(this.state.possibility[name], ' ');
  }
  confirm() {
    deepMigrate(JSON.parse(this.text), this.state.possibility[this.current], true);
  }
  showPossibility() {
    // 只统计第二级的
    const p: Possibility[] = this.state.possibility[this.current].possibility;
    const report: {[key: string]: string} = {};
    const total = p.reduce( (prev, item) => item.factor + prev, 0);
    p.forEach( item => report[item.name] = (item.factor / total * 100).toFixed(2) + '%');
    alert('以下为单抽概率，不包含保底\r' + prettyPrint(report, ' '));
  }
}

