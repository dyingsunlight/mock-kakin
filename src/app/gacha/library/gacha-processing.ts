import { GachaItem } from '../interface/gacha-item';
import { GachaPreProcessParams } from '../interface/gacha-pre-process';

import { ExtensionModeSpecialRule } from './prev-processor/extension-mode-rule';
import { PrecisionModeSpecialRule } from './prev-processor/precision-mode-rule';
import { SetupfilePath } from './prev-processor/setup/setup-file';
import { SetupItemLevel } from './prev-processor/setup/setup-level';

import { GachaProtectionCounter } from './prev-processor/protection-counter';
import { SetupIconAndImagePath } from './prev-processor/setup/setup-image-icon';
import { AdapterForName } from './prev-processor/adapter/adapter-name';
// adapter 系列必须放置在最前面
// setup 系列基于adapter，相互不干扰所以顺序无所谓，
// 最后是特定规则 保底机制/只出附件机制/特殊模式的特别机制等
const processors = [
  // name 适配器，将多余的属性转移到extra储存
  AdapterForName,
  // 为角色卡和部装备创建名字
  SetupfilePath,
  // 建立物品等级
  SetupItemLevel,
  // 创建图像和缩略图路径
  SetupIconAndImagePath,
  // 精准模式特殊规则（必出武器或者圣痕）
  PrecisionModeSpecialRule,
  // 扩充百连必出S，此规则须在基础保底前
  ExtensionModeSpecialRule,
  // 每10连进行保底
  GachaProtectionCounter,
];

/**
 * 将所有输入的物品，依次传入处理器进行处理或者判断是否需要丢弃。
 * @param {GachaPreProcessParams} params
 * @returns {GachaItem}
 */
export const GachaProcessing = function (params: GachaPreProcessParams): GachaItem {
  for (const processor of processors) {
    params.item = processor(params);
    if (!params.item) {
      return;
    }
  }
  return params.item;
};
