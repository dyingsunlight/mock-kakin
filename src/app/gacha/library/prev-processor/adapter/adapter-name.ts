import { GachaPreProcessParams } from '../../../interface/gacha-pre-process';
import { stigmataSlot } from '../../../enum/stigmata-slot';

const stigmataSlotName = Object.keys(stigmataSlot).map(key => stigmataSlot[key]);

export const AdapterForName = function(params: GachaPreProcessParams) {
  const item = params.item;
  item.extra = {};
  switch (item.type) {
    case 'stigmata':
      if (stigmataSlotName.includes(item.name.slice(-3))) {
        item.extra.suffix = item.name.slice(-3);
        item.name = item.name.slice(0, -3);
      }
      break;
    case 'fragment':
      item.extra.suffix = '[碎片]';
      break;
    default:
    item.extra.suffix = '';
    break;
  }
  return item;
};

