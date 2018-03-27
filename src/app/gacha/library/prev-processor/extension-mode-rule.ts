import { GachaPreProcessParams } from '../../interface/gacha-pre-process';
import {GachaItem} from '../../interface/gacha-item';
let times = 0;
export const ExtensionModeSpecialRule = function(params: GachaPreProcessParams) {
  // 扩充包补给百连保S，开关和普通保底独立
  if (params.controlParams.disableExtensionProtection) {
    return params.item;
  }
  if (params.controlParams.mode === 'extension') {
    const item: GachaItem = params.item;
    times ++;
    // 第100次时，依然没有抽出S角色卡
    if (times >= 100 && item.level !== 13) {
      return;
    }
    // 若抽到S角色卡就重置计数器
    if (item.level === 13) {
      times = 0;
    }
  }
  return params.item;
};


