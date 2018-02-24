import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { url } from '../../../config';
@Component({
  selector: 'app-gacha-card-indicator',
  templateUrl: './gacha-card-indicator.component.html',
  styleUrls: ['./gacha-card-indicator.component.less']
})
export class GachaCardIndicatorComponent implements OnInit, OnChanges {
  @Input() text = '';
  @Input() card = '';
  @Input() basePath = url.icons;
  path = '';
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.card) {
      this.path = `${this.basePath}${this.card}.png`;
    }
  }
}
