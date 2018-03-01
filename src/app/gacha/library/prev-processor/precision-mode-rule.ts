import { GachaPreProcessParams } from '../../interface/gacha-pre-process';
import { GachaItem } from '../../interface/gacha-item';

export const precisionModeSpecialRule = function(params: GachaPreProcessParams): GachaItem {
  if (params.controlParams.mode === 'precision') {
    const item = params.item;
    if (item.type !== 'stigmata' && item.type !== 'weapon') {
      return;
    }
  }
  return params.item;
};
