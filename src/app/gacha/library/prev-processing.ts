import { GachaItem } from '../interface/gacha-item';
import { GachaPreProcessParams } from '../interface/gacha-pre-process';

import { filePathAppend } from './prev-processor/file-append';
import { stigmataProcessor } from './prev-processor/stigmata';
import { fragmentProcessor } from './prev-processor/fragment';

import { extraOnlyProcessor } from './prev-processor/extra-item-only';
import { africaCounterProcessor } from './prev-processor/africa-counter';
import { iconAndImagePathAppend } from './prev-processor/image-icon-append';

const extraItemProcessors = [
  // 创建文件路径
  filePathAppend,
  // 为圣痕随机抽取不同部位
  stigmataProcessor,
  // 碎片的文件路径和角色卡的有一定关联，创建碎片的文件
  fragmentProcessor,
  // 创建图像和缩略图路径
  iconAndImagePathAppend,
  // 默认抽取出货是20连(个物品)，但实际游戏中只有10连可能出货，减少一半的抽取可能性
  extraOnlyProcessor
];

const processors = [
  // 为角色卡和部装备创建名字
  filePathAppend,
  // 为圣痕随机抽取不同部位，并且创建名字
  stigmataProcessor,
  // 为角色碎片创建名字
  fragmentProcessor,
  // 创建图像和缩略图路径
  iconAndImagePathAppend,
  // 每10连进行保底
  africaCounterProcessor
];

/**
 * 将所有输入的物品，依次传入处理器进行处理或者判断是否需要丢弃。
 * @param {GachaPreProcessParams} params
 * @returns {GachaItem}
 */
export const prevProcessing = function (params: GachaPreProcessParams): GachaItem {
  for (const processor of (params.index % 2 === 0 ? extraItemProcessors : processors)) {
    params.item = processor(params);
    if (!params.item) {
      return;
    }
  }
  return params.item;
};
