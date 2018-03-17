import { withAppendant, withoutAppendant} from './library/index';
import { GachaExecutorParams } from './interface/gacha-executor';
import { GachaStatisticsItem } from './interface/gacha-statistics';
import { Possibility } from './interface/possibility';

/**
 * 带副产物(经验、进化材料等)的抽取，单次抽取物品数量为 2
 * @param {number} times
 * @param {string} mode
 * @param {boolean} protection
 * @param {Possibility} possibility
 * @returns {GachaItem[]}
 */
export const gachaWithAppendant = function (times = 1, mode = 'standard', protection = true, possibility: Possibility) {
  const params: GachaExecutorParams = {
    mode,
    times,
    possible: possibility,
    disableProtection: protection === false,
    disableAppendant: false
  };
  return withAppendant(params);
};
/**
 * 不带副产物(经验、进化材料等)的抽取，单次抽取物品数量为 1
 * @param {number} times
 * @param {string} mode
 * @param {boolean} protection
 * @param {Possibility} possibility
 * @returns {GachaItem[]}
 */
export const gachaWithoutAppendant = function (times = 1, mode = 'standard', protection = true, possibility: Possibility) {
  const params: GachaExecutorParams = {
    mode,
    times,
    possible: possibility,
    disableProtection: protection === false,
    disableAppendant: true
  };
  return withoutAppendant(params);
};
/**
 * 获取统计信息
 * @param {number} times 抽取次数
 * @param {string} mode 抽取的模式
 * @param {boolean} protection 是否开启保底
 * @param {Possibility} possibility 使用的抽取配置
 * @returns {{times: number; category: {}; detail: {[p: string]: GachaStatisticsItem}}}
 */
export const getStatistics = function (times: number, mode = 'standard', protection = true, possibility: Possibility) {
  const statics: {[key: string]: GachaStatisticsItem} = {};
  const category = {};
  let total = 0;
  for (let i = 0; i < times; i++) {
    const items = gachaWithoutAppendant(10, mode, protection, possibility);
    total += items.length;
    for (const item of items) {
      const name = item.name + item.extra.suffix;
      if (statics.hasOwnProperty(name)) {
        statics[name].amount ++;
      } else {
        statics[name] = {};
        statics[name].amount = 1;
        statics[name].level = item.level;
        statics[name].type = item.type;
        statics[name].name = name;
      }
      if (category.hasOwnProperty(item.type)) {
        if (category[item.type].hasOwnProperty(item.level)) {
          category[item.type][item.level]++;
        } else {
          category[item.type][item.level] = 1;
        }
      } else {
        category[item.type] = {};
      }
    }
  }
  for (const key of Object.keys(statics)) {
    statics[key].possibility = Number((statics[key].amount / total * 100).toFixed(3));
  }
  for (const key of Object.keys(category)) {
    for (const level of Object.keys((category[key]))) {
      category[key][level] = (category[key][level] / total * 100).toFixed(3) + '%';
    }
  }
  return {times: total, category, detail: statics };
};

