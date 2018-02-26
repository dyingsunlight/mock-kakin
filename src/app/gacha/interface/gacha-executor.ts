import { Possibility } from './possibility';

export interface GachaExecutorParams {
  // 抽取模式
  mode: string;
  // 可能性配置
  possible: Possibility;
  // 抽取次数
  times: number;
  // 禁用保底机制
  disableProtection ?: boolean;
}
