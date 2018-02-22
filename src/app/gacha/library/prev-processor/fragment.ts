import { GachaItem } from '../../interface/gacha-item';
import { character } from '../../resources/character-names';

export const fragmentProcessor = function (item: GachaItem, index: number) {
  if (item.type === 'fragment') {
    item.file = character[item.name] ? '1' + character[item.name].slice(1) : undefined;
  }
  return item;
};

