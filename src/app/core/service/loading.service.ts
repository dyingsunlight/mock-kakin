import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  isLoading = false;
  text = '';
  constructor() {}

  show(text = '') {
    this.isLoading = true;
    this.text = text;
  }
  close() {
    this.isLoading = false;
    this.text = '';
  }
}
