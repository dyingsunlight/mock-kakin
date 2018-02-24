import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../service/loading.service';
import { url } from '../../../config';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
  loadingIcon = url.icons + '/loading.png';
  constructor(public state: LoadingService) { }

  ngOnInit() {
  }

}
