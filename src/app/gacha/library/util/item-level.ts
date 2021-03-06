import { stigmataLevel } from '../../resources/item-level/stigmata';
import { equipmentLevel } from '../../resources/item-level/equipment';
import { characterLevel } from '../../resources/item-level/character';
import { weapon } from '../../resources/weapon-names';

/**
 * 获取物品的等级
 * @param name
 * @param type
 * @returns {number}
 */
export const getItemLevel = function (name, type): number {
  switch (type) {
    case 'equipment':
      return getLevel(equipmentLevel, name);
    case 'stigmata':
      return getLevel(stigmataLevel, name);
    case 'weapon':
      const weaponFile = weapon[name];
      return weaponFile ? +weaponFile.slice(-1) : 1 ;
    case 'character':
      return getLevel(characterLevel, name);
    case 'fragment':
      return 4;
  }
};


function getLevel(res: object, name: string): number {
  for (const key of Object.keys(res)) {
    if (res[key].some(el => el === name)) {
      return +key;
    }
  }
  return 1;
}
