import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { GachaItem } from '../../../gacha/interface/gacha-item';

const typeText = {
  'stigmata': 'lv 1',
  'weapon': 'lv 1',
  'fragment': 'x 5',
  'equipment': 'x 3',
  'character': 'x 1',
};

@Component({
  selector: 'app-overview-item-chip',
  templateUrl: './overview-item-chip.component.html',
  styleUrls: ['./overview-item-chip.component.less']
})
export class OverviewItemChipComponent implements OnInit {
  @Input() item: GachaItem = {};
  typeText = typeText;
  constructor() { }
  ngOnInit() {
  }
}
