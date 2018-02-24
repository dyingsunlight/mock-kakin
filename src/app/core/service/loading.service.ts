import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  isLoading = false;
  text = '';
  subtext = '';
  constructor() {}

  show(text = '', subtext = '') {
    this.isLoading = true;
    this.text = text;
    this.subtext = subtext;
  }
  close() {
    this.isLoading = false;
    this.text = '';
  }
  update(text: string, subtext = '') {
    this.text = text;
    this.subtext = subtext;

  }
}
