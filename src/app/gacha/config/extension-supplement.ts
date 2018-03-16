import {Possibility} from '../interface/possibility';

export const extensionSupplementPossibility: Possibility = {
  name: '扩充补给',
  factor: 999,
  possibility: [
    {
      name: 'S级女武神',
      factor: 75,
      type: 'character',
      contents: [
        '神恩'
      ]
    },
    {
      name: 'A级女武神-德丽莎',
      factor: 450,
      type: 'character',
      contents: [
        '誓约',
        '火舞',
      ]
    },
    {
      name: 'A级女武神-其他',
      factor: 225,
      type: 'character',
      contents: [
        '强袭',
        '深红',
      ]
    },
    {
      name: 's女武神碎片',
      factor: 250,
      type: 'fragment',
      contents: [
        '神恩'
      ]
    },
    {
      name: 'a女武神碎片-德丽莎',
      factor: 750,
      type: 'fragment',
      contents: [
        '游侠', '圣女', '影舞',
        '强袭', '山吹', '雪地',
        '凯旋', '深红', '誓约',
        '火舞', '浮华'
      ]
    },
    {
      name: 'a女武神碎片-其它',
      factor: 225,
      type: 'fragment',
      contents: [
        '强袭',  '深红'
      ]
    },
    {
      name: '技能材料',
      factor: 2500,
      type: 'equipment',
      contents: [
        '初级技能材料',
        '高级技能材料'
      ]
    },
    {
      name: '低星装备材料',
      factor: 1266,
      type: 'equipment',
      contents: [
        '灵魂碎片', '双子灵魂碎片',
        '灵魂结晶', '双子灵魂结晶',
        '以太碎片', '双子以太碎片',
        '以太结晶', '双子以太结晶',
      ]
    },
    {
      name: '角色经验',
      factor: 1266,
      type: 'equipment',
      contents: [
        '高级生物芯片', '高级机械芯片',
        '高级异能芯片', '特级生物芯片',
        '特级机械芯片', '特级异能芯片',
      ]
    },
    {
      name: '钱',
      factor: 1266,
      type: 'equipment',
      contents: [
        '吼里宝藏', '吼美宝藏', '吼咪宝藏'
      ]
    },
  ]
};

