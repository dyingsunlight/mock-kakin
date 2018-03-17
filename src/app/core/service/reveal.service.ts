import { Injectable } from '@angular/core';

@Injectable()
export class RevealService {
  private handle: Function;
  constructor() {}
  setHandle(fnc: Function) {
    // 由展示界面设置操作句柄
    this.handle = fnc;
  }
  show(...params) {
    // 调用展示界面预设好的操作句柄
    this.handle(...params);
  }
}
