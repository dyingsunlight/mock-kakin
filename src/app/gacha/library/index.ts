import {Possibility} from '../interface/possibility';
import {GachaItem} from '../interface/gacha-item';
import { prevProcessing } from './prev-processing';


export const gachaExecutor = function (config: Possibility, times = 1, extra = false): GachaItem[] {
  const output: GachaItem[] = [];
  for (let i = 0; i < times * 2; i++) {
    const {name, type} = executor([config]);
    // 偶数抽取的为副产物，不能出货
    const isExtraItem = i % 2 === 0;
    const item = prevProcessing(name, type, i, isExtraItem);
    // 如果处理器判断此条目无法使用，则忽略并且再次抓取新条目
    if (!item) {
      i--;
      continue;
    }
    output.push(item);
  }

  return output;
  function executor(possibles: Possibility[]): GachaItem {
    const factors: number[] = [];
    possibles.forEach(possible => factors.push(+possible.factor));
    const currentSelected = selectFactor(factors);
    const currentPossible = possibles[currentSelected];
    if (currentPossible.contents && currentPossible.contents.length) {
      return { name: selectRandItem(currentPossible.contents), type: currentPossible.type };
    } else {
      return executor(currentPossible.possibility);
    }
  }
};


const selectRandItem = function <T>(arr: T[]): T {
  return arr[Math.ceil(Math.random() * arr.length) - 1];
};


/**
 * 随机从数组中选取一个数，被选取的概率和该数所占整体的大小正相关。
 * @param {number[]} factors
 * @returns {number}
 */
const selectFactor = function (factors: number[]): number {
  const factorMap = [];
  const factorSum = factors.reduce((prev, factor) => {
    factorMap.push(prev + factor);
    return prev + factor;
  }, 0);
  const currentRandom = Math.round(Math.random() * factorSum);
  let closestFactorValue = Number.MAX_SAFE_INTEGER;
  let closestFactorIndex = 0;
  factorMap.forEach((factor, index) => {
    const current = factor - currentRandom;
    // 距离必须是整数 && 新距离必须比记录的距离更近。请画图来理解。
    closestFactorValue = current >= 0 && current < closestFactorValue ? current : closestFactorValue;
    // 如果发生改变就更新 index 值
    closestFactorIndex = closestFactorValue === current ? index : closestFactorIndex;
  });
  // console.log(factorMap, currentRandom, closestFactorValue);
  return closestFactorIndex;
};
