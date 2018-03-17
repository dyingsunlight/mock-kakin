import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/service/state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor(public state: StateService) { }

  ngOnInit() {
  }

}
