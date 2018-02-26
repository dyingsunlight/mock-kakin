import { GachaItem } from '../../interface/gacha-item';
import { character } from '../../resources/character-names';
import { GachaPreProcessParams } from '../../interface/gacha-pre-process';

export const fragmentProcessor = function (params: GachaPreProcessParams) {
  const item = params.item;
  if (item.type === 'fragment') {
    item.file = character[item.name] ? '1' + character[item.name].slice(1) : undefined;
  }
  return item;
};

