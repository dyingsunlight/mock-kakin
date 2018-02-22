import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { url } from '../../../config';

/**
 * 使用从0-num的所有整数填充数组并且返回
 * @param {number} num
 * @returns {Array}
 */
const fillWithNumber = function (num: number) {
  const output = [];
  for (let i = 0; i < num; i++) {
    output.push(i);
  }
  return output;
};

@Component({
  selector: 'app-star-exhibition',
  templateUrl: './star-exhibition.component.html',
  styleUrls: ['./star-exhibition.component.less']
})
export class StarExhibitionComponent implements OnInit, OnChanges, OnDestroy {
  @Input() max = 4;
  @Input() current = 0;
  @Input() size = 25;
  @Input() animate = true;
  protected timerID: number;
  emptyStarGraph = `${url.gachaBasePath}/effect/empty-star.png`;
  starGraph = `${url.gachaBasePath}/effect/star.png`;
  maxStarMap: number[] = [];
  currentStarMap: number[] = [];
  constructor() { }
  ngOnInit() {
    this.timerID = setInterval(this.starAnimate.bind(this), 200);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.current) {
      this.resetStarMap(changes.current.currentValue);
    }
    if (changes.max) {
      this.maxStarMap = fillWithNumber(changes.max.currentValue);
      this.resetStarMap(this.current);
    }
  }
  ngOnDestroy() {
    clearInterval(this.timerID);
  }
  resetStarMap (current: number) {
    this.currentStarMap = this.animate ? [] : fillWithNumber(current);
  }
  starAnimate() {
    if (this.current > this.currentStarMap.length) {
      // 填充任何数据都可以，目的在于触发for渲染
      this.currentStarMap.push(0);
    }
  }
}
