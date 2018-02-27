import { GachaItem } from '../interface/gacha-item';
import { GachaPreProcessParams } from '../interface/gacha-pre-process';

import { filePathAppend } from './prev-processor/file-append';
import { stigmataProcessor } from './prev-processor/stigmata';
import { fragmentProcessor } from './prev-processor/fragment';

import { appendantOnly } from './prev-processor/appendant-only';
import { iconAndImagePathAppend } from './prev-processor/image-icon-append';

const processors = [
  // 为角色卡和部装备创建名字
  filePathAppend,
  // 为圣痕随机抽取不同部位，并且创建名字
  stigmataProcessor,
  // 为角色碎片创建名字
  fragmentProcessor,
  // 创建图像和缩略图路径
  iconAndImagePathAppend,
  // 检查是否属于附件
  appendantOnly
];

/**
 * 将所有输入的物品，依次传入处理器进行处理或者判断是否需要丢弃。
 * @param {GachaPreProcessParams} params
 * @returns {GachaItem}
 */
export const AppendantProcessing = function (params: GachaPreProcessParams): GachaItem {
  for (const processor of processors) {
    params.item = processor(params);
    if (!params.item) {
      return;
    }
  }
  return params.item;
};
