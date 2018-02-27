import { GachaItem } from '../../interface/gacha-item';
import { character } from '../../resources/character-names';
import { GachaPreProcessParams } from '../../interface/gacha-pre-process';

export const fragmentProcessor = function (params: GachaPreProcessParams) {
  const item = params.item;
  if (item.type === 'fragment') {
    // 碎片的文件名和角色卡的文件名只差第一个字符 6 -> 1
    item.file = character[item.name] ? '1' + character[item.name].slice(1) : undefined;
  }
  return item;
};

