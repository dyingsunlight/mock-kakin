import { GachaItem } from '../../gacha/interface/gacha-item';

export class Cache {
  list: {[key: string]: GachaItem[] } = {};
  history: string[] = [];
  checkHistory(list: GachaItem[]) {
    return list.filter( item => !this.history.includes(item.icon) || !this.history.includes(item.image));
  }
  setHistory(list: GachaItem[]) {
    this.checkHistory(list).forEach( item => this.history.push(item.icon) && this.history.push(item.image));
  }
}

