import { GachaItem } from '../../interface/gacha-item';

const stigmataSlotName = ['(上)', '(中)', '(下)'];
const stigmataSlotFileName = ['_1', '_2', '_3'];

export const stigmataProcessor = function (item: GachaItem, index: number) {
  if (item.type === 'stigmata') {
    const slotNumber = Math.ceil(stigmataSlotFileName.length * Math.random()) - 1;
    item.name = item.name + stigmataSlotName[slotNumber];
    item.file = item.file + stigmataSlotFileName[slotNumber];
  }
  return item;
};

