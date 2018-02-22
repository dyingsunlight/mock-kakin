import { Component, OnInit } from '@angular/core';
import { startGaCha } from '../../gacha/index';
import { RevealService } from '../../core/service/reveal.service';

@Component({
  selector: 'app-customize-supplement',
  templateUrl: './customize-supplement.component.html',
  styleUrls: ['./customize-supplement.component.less']
})
export class CustomizeSupplementComponent implements OnInit {

  constructor(
    private reveal: RevealService
  ) { }

  ngOnInit() {
  }
  start(times: number) {
    const list = startGaCha(times);
    startGaCha(times);
    this.reveal.show(list);
  }
}
