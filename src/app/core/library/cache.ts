import { GachaItem } from '../../gacha/interface/gacha-item';

export class Cache {
  maximumRecord = 30;
  cachedURL: string[] = [];
  history: {[key: string]: GachaItem[]} = {};
  checkCache(list: GachaItem[]) {
    return list.filter( item => !this.cachedURL.includes(item.icon) || !this.cachedURL.includes(item.image));
  }
  setCache(list: GachaItem[]) {
    this.checkCache(list).forEach(item => this.cachedURL.push(item.icon) && this.cachedURL.push(item.image));
  }
  setHistory(list: GachaItem[], mode: string) {
    if (!this.history.hasOwnProperty(mode)) {
      this.history[mode] = [];
    }
    if (this.history[mode].length >= this.maximumRecord) {
      this.history[mode] = this.history[mode].slice(-this.maximumRecord);
    }
    this.history[mode] = this.history[mode].concat(list);
  }
  getHistory(mode: string, amount = 20): GachaItem[] {
    return Array.isArray(this.history[mode]) ? this.history[mode].slice(-amount) : [];
  }
}

