import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { url } from '../../../config';
const rankFile = {
  11: 'b',
  12: 'a',
  13: 's',
  14: 'ss',
  15: 'sss',
};
@Component({
  selector: 'app-character-rank-exhibition',
  templateUrl: './character-rank-exhibition.component.html',
  styleUrls: ['./character-rank-exhibition.component.less']
})
export class CharacterRankExhibitionComponent implements OnInit, OnChanges {
  @Input() current = 0;
  @Input() animate = true;
  rank = `${url.gacha}/effect/${rankFile[this.current]}.png`;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.current && rankFile.hasOwnProperty(changes.current.currentValue)) {
      this.rank = `${url.gacha}/effect/${rankFile[changes.current.currentValue]}.png`;
    }
  }

}
