import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { url } from '../../../config';

@Component({
  selector: 'app-gacha-banner',
  templateUrl: './gacha-banner.component.html',
  styleUrls: ['./gacha-banner.component.less']
})
export class GachaBannerComponent implements OnInit, OnChanges {
  @Input() title = '';
  @Input() banner = '';
  @Input() text = '';
  constructor() { }
  titleImage = '';
  bannerImage = '';
  ngOnInit() {
  }
  reloadAllParameters() {
    this.titleImage = `url(${url.icons}${this.title}.png)`;
    this.bannerImage = `${url.backgrounds}${this.banner}.png`;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.title || changes.banner) {
      this.reloadAllParameters();
    }
  }
}
