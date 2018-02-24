import { gachaExecutor } from './library/index';
import { standardSupplementPossibility } from './config/standard-supplement';
import { equipmentSupplementPossibility } from './config/equipment-supplement';
import { precisionSupplementPossibility } from './config/precision-supplement';

export const startGaCha = function (times = 1, mode = 'standard') {
  switch (mode) {
    case 'equipment':
      return gachaExecutor(equipmentSupplementPossibility, times, true);
    case 'precision':
      return gachaExecutor(precisionSupplementPossibility, times, true);
    default:
      return gachaExecutor(standardSupplementPossibility, times, true);
  }
};

export const getStatistics = function (times: number, mode = 'standard') {
  const statics = {};
  const category = {};
  for (let i = 0; i < times / 10; i++) {
    const items = startGaCha(10, mode);
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
    output[key] = String((statics[key] / times * 100).toFixed(3)) + '%';
  }
  for (const key of Object.keys(category)) {
    for (const level of Object.keys((category[key]))) {
      category[key][level] = String((category[key][level] / times * 100).toFixed(3)) + '%';
    }
  }
  return {times: times, category, detail: statics, };
};

