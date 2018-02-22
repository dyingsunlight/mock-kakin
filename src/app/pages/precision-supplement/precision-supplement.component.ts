import { Component, OnInit } from '@angular/core';
import { PreloadService } from '../../core/service/preload.service';
import { RevealService } from '../../core/service/reveal.service';

@Component({
  selector: 'app-precision-supplement',
  templateUrl: './precision-supplement.component.html',
  styleUrls: ['./precision-supplement.component.less']
})
export class PrecisionSupplementComponent implements OnInit {

  constructor(
    private preload: PreloadService,
    private reveal: RevealService
  ) { }

  ngOnInit() {
  }

  start(times: number) {
    this.preload.gacha(times , 'precision').subscribe(list => {
      this.reveal.show(list);
    });
  }
}
