import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { url } from '../../../url-config';

@Component({
  selector: 'app-image-in-button',
  templateUrl: './image-in-button.component.html',
  styleUrls: ['./image-in-button.component.less']
})

export class ImageInButtonComponent implements OnInit, OnChanges {
  @Input() icon = '';
  @Input() link = '';
  @Input() width = 80;

  @Input() active = false;
  @Input() basePath = url.icons;
  path = '';
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.icon) {
      this.path = `${this.basePath}${this.icon}.png`;
    }
  }
}
