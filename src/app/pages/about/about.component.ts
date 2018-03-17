import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/service/state.service';
import { strRes } from '../../language';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  aboutApplication = strRes.components.aboutPage.aboutApplication;
  aboutSyntax = strRes.components.aboutPage.aboutSyntax;
  constructor(public state: StateService) { }

  ngOnInit() {
  }

}
