import { GachaItem } from '../../gacha/interface/gacha-item';

export class Cache {
  maximumRecord = 30;
  cachedURL: string[] = [];
  history: {[key: string]: GachaItem[]} = {};
  /**
   * 根据已保存的记录，返回未预载过的物品
   * @param {GachaItem[]} list 物品列表
   * @returns {GachaItem[]} 未预载过的物品列表
   */
  checkCache(list: GachaItem[]) {
    return list.filter( item => !this.cachedURL.includes(item.icon) || !this.cachedURL.includes(item.image));
  }
  /**
   * 设置缓存记录，用于 checkCache 的判断
   * @param {GachaItem[]} list
   */
  setCache(list: GachaItem[]) {
    this.checkCache(list).forEach(item => this.cachedURL.push(item.icon) && this.cachedURL.push(item.image));
  }
  /**
   * 根据模式保存历史记录
   * @param {GachaItem[]} list 要保存记录的物品列表
   * @param {string} mode 物品列表对应的抽取模式
   */
  setHistory(list: GachaItem[], mode: string) {
    if (!this.history.hasOwnProperty(mode)) {
      this.history[mode] = [];
    }
    if (this.history[mode].length >= this.maximumRecord) {
      this.history[mode] = this.history[mode].slice(-this.maximumRecord);
    }
    this.history[mode] = this.history[mode].concat(list);
  }
  /**
   * 根据模式展示历史记录
   * @param {string} mode 模式
   * @param {number} amount 获取的物品历史数量
   * @returns {GachaItem[]}
   */
  getHistory(mode: string, amount = 20): GachaItem[] {
    return Array.isArray(this.history[mode]) ? this.history[mode].slice(-amount) : [];
  }
}

