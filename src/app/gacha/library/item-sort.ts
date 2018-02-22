import { GachaItem } from '../interface/gacha-item';
import { getItemLevel } from './item-level';

const allTypes = ['character', 'weapon', 'stigmata', 'equipment', 'fragment'];
/**
 * 将所有物品按照指定的类别进行星级排序
 * @param {GachaItem[]} items
 * @param {string[]} sortBy
 * @returns {Array}
 */
export const sortItems = function (items: GachaItem[], sortBy = allTypes) {
  allTypes.forEach(val => !sortBy.includes(val) && sortBy.push(val));
  let level = 4;
  let output = [];
  while (level > 0) {
    for (const type of sortBy) {
      output = output.concat(items.filter(item => item.type === type && item.level === level));
    }
    level --;
  }
  return output;
};
