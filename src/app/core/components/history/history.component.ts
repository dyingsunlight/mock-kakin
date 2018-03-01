import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { HistoryService } from '../../service/history.service';
import {GachaItem} from '../../../gacha/interface/gacha-item';

const dictionary = {
  'precision': '精准补给',
  'standard': '标配补给',
  'equipment': '装备补给',
};

const typeText = {
  'character': '[角色] ',
  'stigmata': '[圣痕] ',
  'weapon': '[武器] ',
  'fragment': '[碎片] ',
  'equipment': '[材料] '
};

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  list: GachaItem[] = [];
  isActive = false;
  typeText = typeText;
  dictionary = dictionary;
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
