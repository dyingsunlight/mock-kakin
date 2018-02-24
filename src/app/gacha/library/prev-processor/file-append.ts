import { GachaItem } from '../../interface/gacha-item';
import { weapon } from '../../resources/weapon-names';
import { character } from '../../resources/character-names';
import { equipment } from '../../resources/equipment';
import { stigmata } from '../../resources/stigmata-names';
import { url } from '../../../config';

const dict = {
  character,
  equipment,
  stigmata,
  weapon
};

export const filePathAppend = function (item: GachaItem, index: number) {
  item.file =  dict[item.type] ? dict[item.type][item.name] : undefined;
  switch (item.type) {
    case 'weapon':
      // weapon 没有icon。。。直接用原图作为缩略图
      item.icon = `${url.gacha}${item.type}/${item.file}.png`;
      break;
    default:
      item.icon = `${url.gacha}${item.type}/icon/${item.file}.png`;
      break;
  }
  item.image = `${url.gacha}${item.type}/${item.file}.png`;
  return item;
};

