// 非洲人保底计数器
import { GachaItem } from '../../interface/gacha-item';
// 下一次保底剩余
let nextTimes = 1;
// 4*物品触发重置保底的类别
const resetList = ['stigmata', 'weapon', 'character'];
export const africaCounterProcessor = function(item: GachaItem, index: number) {
  const isNeedReset = resetList.includes(item.type) && item.level === 4;
  // 一直抽取，直到保底位置，非洲人可能会死机
  if (nextTimes === 10 && !isNeedReset) {
    // console.log('强制保底');
    // todo 加个强制抽取N次后取得物品的通知
    return;
  }
  if (isNeedReset) {
    nextTimes = 1;
  } else {
    nextTimes ++;
  }
  return item;
};
