import {Possibility} from '../interface/possibility';
import {GachaItem} from '../interface/gacha-item';
import { GachaExecutorParams } from '../interface/gacha-executor';
import { GachaPreProcessParams } from '../interface/gacha-pre-process';

import { GachaProcessing } from './gacha-processing';
import { AppendantProcessing } from './appendant-processing';
import { getItemLevel } from './util/item-level';

export const withAppendant = function (params: GachaExecutorParams): GachaItem[] {
  const items = mainGacha(GachaProcessing, params);
  const appendantItems = mainGacha(AppendantProcessing, params);
  return mixArray<GachaItem>(items, appendantItems);
};

export const withoutAppendant = function (params: GachaExecutorParams): GachaItem[] {
  return mainGacha(GachaProcessing, params);
};

/**
 * 实际抽取物品的操作
 * @param itemProcessFunction 预设的处理器函数
 * @params params 抽取的参数集合
 * @returns {GachaItem[]}
 */
const mainGacha = function (itemProcessFunction: Function, params: GachaExecutorParams): GachaItem[] {
  const output: GachaItem[] = [];
  for (let i = 0; i < params.times; i++) {
    const {name, type} = getItemFromPossible([params.possible]);
    // 初步生成物品名称和文件名
    let item: GachaItem = {
      name: name,
      type: type,
      level: getItemLevel(name, type)
    };
    // 生成预处理器执行参数并执行
    const preParams: GachaPreProcessParams = {
      index: i,
      item,
      controlParams: params
    };
    item = itemProcessFunction(preParams);
    // 如果预处理器判断此条目无法使用，则忽略并且再次抓取新条目
    if (!item) {
      i--;
      continue;
    }
    output.push(item);
  }
  return output;
  function getItemFromPossible(possibles: Possibility[]): GachaItem {
    // 生成由 factor:number 组成的数组
    const factors: number[] = possibles.reduce((prev: number[], possible) => {prev.push(possible.factor); return prev; }, []);
    // selectFactor 随机从数组中选取一个数，被选取的概率和该数所占整体的大小正相关。
    const currentPossible = possibles[selectFactor(factors)];
    // 优先执行contents，选择的如果拥有有效的 contents 属性，则进行内容选择
    if (currentPossible.contents && currentPossible.contents.length) {
      return { name: selectRandItem(currentPossible.contents), type: currentPossible.type };
    }
    // 选择的如果拥有有效的 contents 属性，则进行内容选择
    if (currentPossible.possibility && currentPossible.possibility.length) {
      return getItemFromPossible(currentPossible.possibility);
    }
  }
};

/**
 * 将两个数组的每个元素相互混合({a1,a2,a3}, {b1,b2,b3}) => {a1,b1,a2,b2,a3,b3}
 * @param {T[]} arr1
 * @param {T[]} arr2
 * @returns {T[]}
 */
const mixArray = function<T>(arr1: T[], arr2: T[]): T[] {
  const output = [];
  let lastIndex = 0;
  for (const item of arr1) {
    output.push(item);
    if (arr2.length > lastIndex) {
      output.push(arr2[lastIndex]);
    }
    lastIndex++;
  }
  return output;
};

/**
 * 随机挑出数组中的某一项
 * @param {T[]} arr
 * @returns {T}
 */
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
