import { Gacha } from './library';
import { GachaExecutorParams } from './interface/gacha-executor';
import { GachaStatisticsItem } from './interface/gacha-statistics';

export { Gacha } from './library';

export const getStatistics = function (times: number, params: GachaExecutorParams) {
  const statics: {[key: string]: GachaStatisticsItem} = {};
  const category = {};
  let total = 0;
  for (let i = 0; i < times; i++) {
    const items = Gacha(params);
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

