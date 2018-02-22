export interface Possibility {
  // 名称，仅用于辨识，不参与逻辑操作
  name ?: string;
  // 类别，抓取的条目将会根据类别进行获取文件名
  // 并用于辨识资源的类型（圣痕、武器、装备、人物） 类别/文件名.png
  type ?: string;
  // 抓取的因子数，在当前层级所占比即为其概率
  factor: number;
  // 用于嵌套
  possibility ?: Possibility[];
  // 随机抓取的实际条目的名称，根据此名称在资源中可以匹配到文件名
  contents ?: string [];
}
