import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { url } from '../../../config';

@Component({
  selector: 'app-gacha-banner',
  templateUrl: './gacha-banner.component.html',
  styleUrls: ['./gacha-banner.component.less']
})
export class GachaBannerComponent implements OnInit, OnChanges {
  @Input() basePath = url.icons;
  @Input() title = '';
  @Input() banner = '';
  @Input() text = '';
  constructor() { }
  path = '';
  imagePath = '';
  ngOnInit() {
  }
  reloadAllParameters() {
    this.path = `url(${this.basePath}${this.banner}.png)`;
    this.imagePath = `${this.basePath}${this.title}.png`;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.title || changes.banner) {
      this.reloadAllParameters();
    }
  }
}
