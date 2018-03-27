import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {
  private handle: Function;
  constructor() {}
  setHandle(fnc: Function) {
    // 设置控制反转控制权
    this.handle = fnc;
  }
  show(...params) {
    this.handle(...params);
  }
}
