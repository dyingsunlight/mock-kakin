import { url } from './config';
import { Component, OnInit } from '@angular/core';
import { StateService } from './core/service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  url = url;
  constructor(
    public state: StateService,
  ) {}
  ngOnInit() {
  }
  updateProtection(status: boolean) {
    this.state.enableProtection = status;
  }
}

