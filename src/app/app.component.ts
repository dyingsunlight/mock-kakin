import { url } from './url-config';
import { Component, OnInit } from '@angular/core';
import { StateService } from './core/service/state.service';
import { strRes } from './language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  url = url;
  strRes = strRes;
  constructor(
    public state: StateService,
  ) {}
  ngOnInit() {
  }
  updateProtection(status: boolean) {
    this.state.enableProtection = status;
  }
}

