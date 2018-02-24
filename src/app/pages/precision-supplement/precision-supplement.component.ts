import { Component, OnInit } from '@angular/core';
import { PreloadService } from '../../core/service/preload.service';
import { RevealService } from '../../core/service/reveal.service';
import { LoadingService } from '../../core/service/loading.service';

@Component({
  selector: 'app-precision-supplement',
  templateUrl: './precision-supplement.component.html',
  styleUrls: ['./precision-supplement.component.less']
})
export class PrecisionSupplementComponent implements OnInit {

  constructor(
    private preload: PreloadService,
    private reveal: RevealService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
  }

  start(times: number) {
    this.loading.show();
    this.preload.gacha(times , 'precision').subscribe(list => {
      this.reveal.show(list);
      this.loading.close();

    });
  }
}
