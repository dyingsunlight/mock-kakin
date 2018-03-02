import { GachaPreProcessParams } from '../../../interface/gacha-pre-process';
import { getItemLevel } from '../../util/item-level';

export const SetupItemLevel = function(params: GachaPreProcessParams) {
  params.item.level = getItemLevel(params.item.name, params.item.type);
  return params.item;
};
