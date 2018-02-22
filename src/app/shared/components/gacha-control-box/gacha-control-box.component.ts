import {Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import { url } from '../../../config';
@Component({
  selector: 'app-gacha-control-box',
  templateUrl: './gacha-control-box.component.html',
  styleUrls: ['./gacha-control-box.component.less']
})
export class GachaControlBoxComponent implements OnInit, OnChanges {
  @Input() text = '';
  @Input() tip = '';
  @Input() card = '';
  @Input() basePath = url.imageBasePath;
  @Output() update = new EventEmitter<number>();
  cardPath = '';
  constructor() { }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.card) {
      this.cardPath = `${this.basePath}${this.card}.png`;
    }
    if (changes.tip) {
      this.tip = `${this.basePath}${this.tip}.png`;
    }
  }
  trigger(times: number) {
    this.update.emit(times);
  }
}
