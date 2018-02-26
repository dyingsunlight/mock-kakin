import {GachaItem} from './gacha-item';
import { GachaExecutorParams } from './gacha-executor';

export interface GachaPreProcessParams {
  // 当前抽取中次数的编号。例如一次10连的第 index = 3 次抽取
  index: number;
  // 物品信息
  item: GachaItem;
  // 总执行的抽取参数
  controlParams: GachaExecutorParams;
}
