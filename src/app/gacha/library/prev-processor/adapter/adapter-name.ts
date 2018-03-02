import { GachaPreProcessParams } from '../../../interface/gacha-pre-process';
import { stigmataSlot } from '../../../enum/stigmata-slot';

const stigmataSlotName = Object.keys(stigmataSlot).map(key => stigmataSlot[key]);
const stigmataSlotFileName = ['_1', '_2', '_3'];
let count = 0;
export const AdapterForName = function(params: GachaPreProcessParams) {
  const item = params.item;
  item.extra = {};
  if (item.type === 'stigmata') {
    if (stigmataSlotName.includes(item.name.slice(-3))) {
      item.extra.suffix = item.name.slice(-3);
      item.name = item.name.slice(0, -3);
    }
  } else {
    item.extra.suffix = '';
  }
  return item;
};

