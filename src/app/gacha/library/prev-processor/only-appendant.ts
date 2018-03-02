import { GachaPreProcessParams } from '../../interface/gacha-pre-process';
export const GachaOnlyAppendant = function(params: GachaPreProcessParams) {
  // 只有抽取的是附属品才放行
  if (params.item.type !== 'equipment') {
    return;
  }
  return params.item;
};


