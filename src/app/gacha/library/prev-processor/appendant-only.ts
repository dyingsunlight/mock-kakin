import { GachaPreProcessParams } from '../../interface/gacha-pre-process';
const blackList = ['stigmata', 'weapon', 'character', 'fragment'];
export const appendantOnly = function(params: GachaPreProcessParams) {
  // 只有抽取的是附属品才放行
  if (blackList.includes(params.item.type) && params.item.level >= 4) {
    return;
  }
  return params.item;
};


