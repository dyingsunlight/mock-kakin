import { GachaItem } from '../../../interface/gacha-item';
import { weapon } from '../../../resources/weapon-names';
import { character } from '../../../resources/character-names';
import { equipment } from '../../../resources/equipment-names';
import { stigmata } from '../../../resources/stigmata-names';
import { url } from '../../../../url-config';
import { GachaPreProcessParams } from '../../../interface/gacha-pre-process';
import { stigmataSlot } from '../../../enum/stigmata-slot';

const stigmataSlotName = Object.keys(stigmataSlot).map(key => stigmataSlot[key]);
const stigmataSlotFileName = ['_1', '_2', '_3'];

const dict = {
  character,
  equipment,
  stigmata,
  weapon
};

export const SetupfilePath = function (params: GachaPreProcessParams) {
  const item = params.item;
  switch (item.type) {
    case 'fragment':
      // 碎片的文件名和角色卡的文件名只差第一个字符 6 -> 1
      item.file = character[item.name] ? '1' + character[item.name].slice(1) : undefined;
      break;
    case 'stigmata':
      let slotNumber = stigmataSlotName.indexOf(item.extra.suffix);
      if (slotNumber === -1) {
        slotNumber = Math.ceil(stigmataSlotFileName.length * Math.random()) - 1;
        item.extra.suffix = stigmataSlotName[slotNumber];
      }
      item.file =  dict[item.type] ? dict[item.type][item.name] + stigmataSlotFileName[slotNumber] : undefined;
      break;
    default:
      item.file =  dict[item.type] ? dict[item.type][item.name] : undefined;
  }

  return item;
};

