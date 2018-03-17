import { url } from '../../../../url-config';
import { GachaItem } from '../../../interface/gacha-item';
import { GachaPreProcessParams } from '../../../interface/gacha-pre-process';

export const SetupIconAndImagePath = function (params: GachaPreProcessParams) {
  const item = params.item;
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

