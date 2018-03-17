import {Injectable} from '@angular/core';
import {GachaItem} from '../../gacha/interface/gacha-item';
import {gachaWithAppendant} from '../../gacha/index';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {StateService} from './state.service';

@Injectable()
export class PreloadService {
  constructor(
    protected http: HttpClient,
    protected state: StateService
  ) {
  }

  /**
   * 带有预载的抽取函数
   * @param {number} times 抽取的次数，实际一次抽取中含有2件物品
   * @param {string} mode 抽取模式，根据模式在StateService中取得相应的可能性列表进行抽取
   * @param {Function} onUpdate 每个物品预载完成时的回调函数
   * @returns {Observable<GachaItem[]>} 返回所有预载完成的物品列表
   */
  gacha(times: number, mode: string, onUpdate ?: Function): Observable<GachaItem[]> {
    const list: GachaItem[] = gachaWithAppendant(times, mode, this.state.enableProtection, this.state.possibility[mode]);
    return Observable.create(observer => {
      this.waitForPreload(list, onUpdate).subscribe({
        complete: () => {
          this.state.cache.setCache(list);
          this.state.cache.setHistory(list, mode);
          observer.next(list);
          observer.complete();
        },
      });
    });
  }
  /**
   * 预载执行函数
   * @param {GachaItem[]} list 需要预载的物品列表
   * @param {Function} onUpdate 每个物品预载完成时，调用此回调函数
   * @returns {Observable<any[]>}
   */
  waitForPreload(list: GachaItem[], onUpdate ?: Function) {
    const observableList: Observable<any>[] = [];
    const progress = {complete: 0, total: list.length * 2};
    // 通过缓存对象检查物品是否已经被加载过了
    for (const item of this.state.cache.checkCache(list)) {
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

