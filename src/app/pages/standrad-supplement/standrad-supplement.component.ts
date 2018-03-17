import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { GachaItem } from '../../gacha/interface/gacha-item';
import { RevealService } from '../../core/service/reveal.service';
import { PreloadService } from '../../core/service/preload.service';
import { LoadingService } from '../../core/service/loading.service';
import { HistoryService } from '../../core/service/history.service';
import { StateService } from '../../core/service/state.service';

@Component({
  selector: 'app-standrad-supplement',
  templateUrl: './standrad-supplement.component.html',
  styleUrls: ['./standrad-supplement.component.less']
})
export class StandradSupplementComponent implements OnInit {
  mode: string;
  currentList: GachaItem[] = [];
  constructor(
    private route: ActivatedRoute,
    private reveal: RevealService,
    private router: Router,
    private preload: PreloadService,
    private loading: LoadingService,
    public history: HistoryService,
    public state: StateService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.mode = params.get('mode') || 'standard';
    });
  }
  switchMode(mode: string) {
    // this.mode =  mode;
    this.mode = mode === 'equipment' ? 'standard' : 'equipment';
    try {
      this.router.navigate(['./', {mode: this.mode}]);
    } catch (err) {
      console.log(err);
    }
  }
  start(times: number) {
    this.loading.show('加载资源中...', `0/${times * 4}`);
    this.preload.gacha(times , this.mode, ({complete, total}) => this.loading.update('加载资源中...', `${complete}/${total}`))
      .subscribe(list => {
      this.loading.close();
      this.currentList = list;
      this.reveal.show(this.currentList);
    });
  }
}

