import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { url } from '../../../config';

@Component({
  selector: 'app-gacha-type-selection',
  templateUrl: './gacha-type-selection.component.html',
  styleUrls: ['./gacha-type-selection.component.less']
})
export class GachaTypeSelectionComponent implements OnInit, OnChanges {
  @Input() basePath = url.icons;
  @Input() bgName = '';
  @Input() textName = '';
  @Input() suffix = 'activated/inactivated';
  @Input() active = false;
  wrapperImagePath = '';
  innerImagePath = '';

  constructor() { }
  ngOnInit() {
  }
  reloadAllParameters() {
    const bg = `${this.basePath}${this.bgName}.png`;
    const activeImage = `${this.basePath}${this.textName}-${this.suffix.split('/')[0]}.png`;
    const inActiveImage = `${this.basePath}${this.textName}-${this.suffix.split('/')[1]}.png`;
    this.wrapperImagePath = `url('${bg}')`;
    this.innerImagePath = this.active ? `url('${activeImage}')` : `url('${inActiveImage}')`;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.bgName || changes.textName || changes.active) {
      this.reloadAllParameters();
    }
  }
}
