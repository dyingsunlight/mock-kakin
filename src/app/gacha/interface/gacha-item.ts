export interface GachaItem {
  // 显示的名称
  name ?: string;
  // 文件名
  file ?: string;
  // 归属类别
  type ?: string;
  level ?: number;
  // level 1 - 4 正常星级
  // level 10 b 女武神
  // level 11 a 女武神
  // level 12 s 女武神
  // 缩略图
  icon ?: string;
  // 展示图
  image ?: string;
}
