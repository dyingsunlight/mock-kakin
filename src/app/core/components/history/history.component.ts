import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { HistoryService } from '../../service/history.service';
import {GachaItem} from '../../../gacha/interface/gacha-item';
import { strRes } from '../../../language';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  list: GachaItem[] = [];
  isActive = false;
  typeText = strRes.commons;
  dictionary = strRes.supplementNames;
  strRes = strRes;
  mode = '';
  constructor(
    protected state: StateService,
    protected history: HistoryService
  ) { }

  ngOnInit() {
    this.history.setHandle(this.showHistory.bind(this));
  }
  closeHistory() {
    this.isActive = false;
  }
  showHistory(mode) {
    this.mode = mode;
    this.list = this.state.cache.getHistory(mode, 20);
    this.isActive = true;
  }
}
