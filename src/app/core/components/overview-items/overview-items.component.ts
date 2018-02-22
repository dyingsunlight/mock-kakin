import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { GachaItem } from '../../../gacha/interface/gacha-item';

interface TrackableItem extends GachaItem {
  id: number;
}

@Component({
  selector: 'app-overview-items',
  templateUrl: './overview-items.component.html',
  styleUrls: ['./overview-items.component.less']
})
export class OverviewItemsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() background = '#';
  @Input() items: GachaItem[] = [];
  @Output() close = new EventEmitter<void>();
  trackableItems: TrackableItem[] = [];
  currentIndex = -1;
  timerID: number;
  constructor() { }
  ngOnInit() {
    this.timerID = setInterval(this.putNextItem.bind(this), 300);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.trackableItems = [];
      this.currentIndex = -1;
    }
  }
  ngOnDestroy() {
    clearInterval(this.timerID);
  }
  putNextItem() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex ++;
      const item = this.items[this.currentIndex];
      this.trackableItems.push({
        name: item.name,
        file: item.file,
        type: item.type,
        level: item.level,
        icon: item.icon,
        image: item.image,
        id: this.currentIndex
      });
    }
  }
  trackById(item: TrackableItem) {
    return item.id;
  }
  closeInterface() {
    this.close.emit();
  }
}
