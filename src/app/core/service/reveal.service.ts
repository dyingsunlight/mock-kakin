import { Injectable } from '@angular/core';

@Injectable()
export class RevealService {
  private handle: Function;
  constructor() {}
  setHandle(fnc: Function) {
    this.handle = fnc;
  }
  show(...params) {
    this.handle(...params);
  }
}
