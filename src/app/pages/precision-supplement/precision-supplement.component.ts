import {Component, OnInit} from '@angular/core';
import {PreloadService} from '../../core/service/preload.service';
import {RevealService} from '../../core/service/reveal.service';
import {LoadingService} from '../../core/service/loading.service';
import { HistoryService } from '../../core/service/history.service';
import { StateService } from '../../core/service/state.service';

@Component({
  selector: 'app-precision-supplement',
  templateUrl: './precision-supplement.component.html',
  styleUrls: ['./precision-supplement.component.less']
})
export class PrecisionSupplementComponent implements OnInit {

  constructor(private preload: PreloadService,
              private reveal: RevealService,
              private loading: LoadingService,
              public history: HistoryService,
              public state: StateService
              ) {
  }

  ngOnInit() {
  }

  start(times: number) {
    this.loading.show('加载资源中...', `0/${times * 4}`);
    this.preload.gacha(times,
      'precision',
      ({complete, total}) => this.loading.update('加载资源中...', `${complete}/${total}`))
      .subscribe(list => {
        this.reveal.show(list);
        this.loading.close();
      });
  }
}
