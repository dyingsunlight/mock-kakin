import { GachaPreProcessParams } from '../../interface/gacha-pre-process';
// 非洲人保底计数器
import { GachaItem } from '../../interface/gacha-item';
// 4*物品触发重置保底的类别
const resetList = ['stigmata', 'weapon', 'character'];
// 下一次保底剩余
const resetProtection: {[type: string]: number} = {};

export const africaCounterProcessor = function(params: GachaPreProcessParams): GachaItem {
  const item: GachaItem = params.item;
  const controlParams = params.controlParams;
  const isNeedReset = resetList.includes(item.type) && item.level === 4;
  if (!resetProtection.hasOwnProperty(controlParams.mode)) {
    resetProtection[controlParams.mode] = 1;
  }
  // 一直抽取，直到保底位置，非洲人可能会死机
  if (resetProtection[controlParams.mode] === 10 && !isNeedReset) {
    // console.log('强制保底');
    // todo 加个强制抽取N次后取得物品的通知
    return;
  }
  if (isNeedReset) {
    resetProtection[controlParams.mode] = 1;
  } else {
    resetProtection[controlParams.mode] ++;
  }
  return item;
};
