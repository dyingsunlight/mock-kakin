import { Injectable } from '@angular/core';
import { GachaItem } from '../../gacha/interface/gacha-item';
import { startGaCha } from '../../gacha/index';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch'; // don't forget this, or you'll get a runtime error
import { Cache } from '../library/cache';

@Injectable()
export class PreloadService {
  constructor(
    protected http: HttpClient
  ) {
  }
  cache = new Cache();

  gacha(times: number, type: string): Observable<GachaItem[]> {
    const list: GachaItem[] = startGaCha(times, type);
    return Observable.create(observer => {
      this.waitForPreload(list).subscribe(res => {
        this.cache.setHistory(list);
        observer.next(list);
        observer.complete();
      });
    });
  }
  waitForPreload(list: GachaItem[]) {
    const observableList: Observable<any>[] = [];
    for (const item of this.cache.checkHistory(list)) {
      observableList.push(this.http.get(item.image,  { responseType: 'blob'}).retry(3).catch(err => {
        console.log('预加载数据时发生错误! 物品信息: ', item);
        return Observable.of(err);
      }));
      observableList.push(this.http.get(item.icon, { responseType: 'blob' }).retry(3).catch(err => {
        console.log('预加载数据时发生错误! 物品信息: ', item);
        return Observable.of(err);
      }));
    }

    return Observable.forkJoin(observableList);
  }
}

