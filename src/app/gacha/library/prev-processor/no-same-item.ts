import { GachaItem } from '../../interface/gacha-item';
import { character } from '../../resources/character-names';

let lastItemType = '';
export const noSameItemProcessor = function (item: GachaItem, index: number) {

  if (item.type === lastItemType) {
    return undefined;
  } else {
    lastItemType = item.type;
    return item;
  }
};

