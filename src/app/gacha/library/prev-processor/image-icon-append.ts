import { url } from '../../../config';
import { GachaItem } from '../../interface/gacha-item';

export const iconAndImagePathAppend = function (item: GachaItem, index: number) {
  switch (item.type) {
    case 'weapon':
      // weapon 没有icon。。。直接用原图作为缩略图
      item.icon = `${url.gachaBasePath}${item.type}/${item.file}.png`;
      break;
    default:
      item.icon = `${url.gachaBasePath}${item.type}/icon/${item.file}.png`;
      break;
  }
  item.image = `${url.gachaBasePath}${item.type}/${item.file}.png`;
  return item;
};

