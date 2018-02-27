import { url } from './config';
import { Component } from '@angular/core';
import { StateService } from './core/service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  url = url;
  constructor(
    public state: StateService
  ) {}
  updateProtection(status: boolean) {
    this.state.enableProtection = status;
  }
}

