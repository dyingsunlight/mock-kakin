import { Injectable } from '@angular/core';
import { GachaItem } from '../../gacha/interface/gacha-item';
import { gachaWithAppendant } from '../../gacha/index';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cache } from '../library/cache';
import { StateService } from './state.service';

@Injectable()
export class PreloadService {
  constructor(
    protected http: HttpClient,
    protected state: StateService
  ) {
  }
  cache = new Cache();

  gacha(times: number, type: string, onUpdate ?: Function): Observable<GachaItem[]> {
    const list: GachaItem[] = gachaWithAppendant(times, type, this.state.enableProtection);
    return Observable.create(observer => {
      this.waitForPreload(list, onUpdate).subscribe(res => {
        this.cache.setHistory(list);
        observer.next(list);
        observer.complete();
      });
    });
  }
  waitForPreload(list: GachaItem[], onUpdate ?: Function) {
    const observableList: Observable<any>[] = [];
    const progress = {complete: 0, total: list.length * 2};
    for (const item of this.cache.checkHistory(list)) {
      observableList.push(this.http.get(item.image,  { responseType: 'blob'})
        .retry(3)
        // 更新进度
        .map( res => typeof onUpdate === 'function' && progress.complete ++ && onUpdate(progress))
        .catch(err => {
          console.log('预加载数据时发生错误! 物品信息: ', item);
          return Observable.of(err);
      }));
      observableList.push(this.http.get(item.icon, { responseType: 'blob' })
        .retry(3)
        .map( res => typeof onUpdate === 'function' && progress.complete ++ && onUpdate(progress))
        .catch(err => {
          console.log('预加载数据时发生错误! 物品信息: ', item);
          return Observable.of(err);
        }));
    }

    return Observable.forkJoin(observableList);
  }
}

