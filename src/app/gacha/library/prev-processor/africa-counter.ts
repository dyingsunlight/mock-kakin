import { GachaPreProcessParams } from '../../interface/gacha-pre-process';
// 非洲人保底计数器
import { GachaItem } from '../../interface/gacha-item';
// 下一次保底剩余
const resetProtection: {[type: string]: number} = {};
export const africaCounterProcessor = function(params: GachaPreProcessParams): GachaItem {
  const item: GachaItem = params.item;
  const controlParams = params.controlParams;
  if (!resetProtection.hasOwnProperty(controlParams.mode)) {
    resetProtection[controlParams.mode] = 1;
  }
  if (resetProtection[controlParams.mode] >= 10) {
    if (controlParams.mode === 'standard' && item.level < 12) {
      // 只保底角色卡
      return;
    }
    if (controlParams.mode === 'precision' && item.level !== 4) {
      // 只保底装备
      return;
    }
    if (controlParams.mode === 'equipment' && item.level !== 4) {
      // 只保底装备
      return;
    }
  }
  if (resetProtection[controlParams.mode] < 10) {
    let isNeedReset = false;
    if (controlParams.mode === 'standard' && item.level > 11) {
      isNeedReset = true;
    }
    if (controlParams.mode === 'precision' && item.level === 4) {
      isNeedReset = true;
    }
    if (controlParams.mode === 'equipment' && item.level === 4) {
      isNeedReset = true;
    }
    if (isNeedReset) {
      resetProtection[controlParams.mode] = 1;
    } else {
      resetProtection[controlParams.mode]++;
    }
  }
  return item;
};
