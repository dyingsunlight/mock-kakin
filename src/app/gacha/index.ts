import { gachaExecutor } from './library/index';
import { GachaExecutorParams } from './interface/gacha-executor';
import { standardSupplementPossibility } from './config/standard-supplement';
import { equipmentSupplementPossibility } from './config/equipment-supplement';
import { precisionSupplementPossibility } from './config/precision-supplement';

const possibleList = {
  standard: standardSupplementPossibility,
  equipment: equipmentSupplementPossibility,
  precision: precisionSupplementPossibility,
};

export const startGaCha = function (times = 1, mode = 'standard', protection = true) {
  const params: GachaExecutorParams = {
    mode,
    times,
    possible: possibleList[mode] ? possibleList[mode] : possibleList.standard,
    disableProtection: protection === false
  };
  return gachaExecutor(params);
};

/**
 * 获取统计信息，用于批量抽取测试
 * @param {number} times
 * @param {string} mode
 * @returns {{times: number, category: {}, detail: {}}}
 */
export const getStatistics = function (times: number, mode = 'standard') {
  const statics = {};
  const category = {};
  let total = 0;
  for (let i = 0; i < times; i++) {
    const items = startGaCha(10, mode);
    total += items.length;
    for (const item of items) {
      if (statics.hasOwnProperty(item.name)) {
        statics[item.name]++;
      } else {
        statics[item.name] = 1;
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
  const output = {};
  for (const key of Object.keys(statics)) {
    output[key] = String((statics[key] / total * 100).toFixed(3)) + '%';
  }
  for (const key of Object.keys(category)) {
    for (const level of Object.keys((category[key]))) {
      category[key][level] = (category[key][level] / total * 100).toFixed(3) + '%';
    }
  }
  return {times: total, category, detail: statics };
};

