export interface GachaItem {
  // 显示的名称
  name ?: string;
  // 文件名
  file ?: string;
  // 归属类别
  type ?: string;
  // 星级
  level ?: number;
  // level 1 - 4 正常星级
  // level 11 b 女武神
  // level 12 a 女武神
  // level 13 s 女武神
  // 缩略图
  icon ?: string;
  // 展示图
  image ?: string;
  // 附加参数
  extra ?: {
    // 后缀，用于显示圣痕位置
    suffix ?: string;
    // 材料数量，材料/经验专业
    amount ?: number;
    // 基础等级，武器或圣痕
    baseLevel ?: number
  };
}
