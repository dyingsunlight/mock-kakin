import {Possibility} from '../interface/possibility';

// factor 抽取在当前层所占的比重
// type 取得最近的一层的type信息， 将会当成附件信息原样返回
// 每个级别分开抽取 类别（角色卡、材料等） =》　细节（物品等级）＝》　物品
export const standardSupplementPossibility: Possibility = {
  name: '标配补给蛋池配置',
  factor: 1,
  possibility: [
    {
      name: 's角色卡',
      factor: 150,
      type: 'character',
      contents: [
        '月光', '鬼凯', '次元',
        '月轮', '神恩', '玫瑰',
        '紫苑',
      ]
    },
    {
      name: 'a级女武神',
      factor: 1350,
      type: 'character',
      contents: [
        '游侠', '圣女', '影舞',
        '强袭', '山吹', '雪地',
        '凯旋', '深红', '誓约',
        '火舞', '浮华'
      ]
    },
    {
      name: 'b级女武神',
      factor: 550,
      type: 'character',
      contents: [
        '疾风', '白练', '绯红', '战车',
      ]
    },
    {
      name: 's女武神碎片',
      factor: 127,
      type: 'fragment',
      contents: [
        '月光', '鬼凯', '次元',
        '月轮', '神恩', '玫瑰',
        '紫苑',
      ]
    },
    {
      name: 'a女武神碎片',
      factor: 1019,
      type: 'fragment',
      contents: [
        '游侠', '圣女', '影舞',
        '强袭', '山吹', '雪地',
        '凯旋', '深红', '誓约',
        '火舞', '浮华'
      ]
    },
    {
      name: '4星圣痕',
      factor: 73,
      type: 'stigmata',
      contents: [
        '埃及艳后', '姬轩辕',
        '莎士比亚', '俄国沙皇', '李耳',
        '伏羲', '女娲', '神农',
        '牛顿', '薛定谔'
      ]
    },
    {
      name: '3星圣痕',
      factor: 2250,
      type: 'stigmata',
      contents: [
        '里纳耳多', '时雨绮罗', '奥吉尔',
        '大帝', '特斯拉', '坂本龙马',
        '阿提拉', '王昭君', '伊丽莎白']
    },
    {
      name: '4星武器',
      factor: 46,
      type: 'weapon',
      contents: ['圣遗物2nd', '索尔之锤', '超电磁炮', '能量跃迁者', '圣遗物3rd', '雷切',
        '磁暴', '鲜血之舞', '虚无之刃',  '圣遗物5th', '百手巨人初型',  '尼德霍格翼爪', '蚩尤巨炮', '日炎大剑', '极光斩舰刀'
      ]
    },
    {
      name: '3星武器',
      factor: 750,
      type: 'weapon',
      contents: [
        '水妖精II型', '火妖精II型', '火妖精I型',
        '水妖精I型', '脉冲太刀19式', '脉冲太刀17式',
        '苗刀·电魂', '苗刀·雷妖', 'CAS-X圣徒',
        'CAS-II浪子', '雷天使', '火天使', '黑色粉碎者', '氮素结晶剑', '电离共振剑',
        '马尔夫科A', '马尔夫科C', '阴极子炮09式'
      ]
    },
    {
      name: '进化材料',
      factor: 1474,
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
      factor: 1474,
      type: 'equipment',
      contents: [
        '高级生物芯片', '高级机械芯片',
        '高级异能芯片', '特级生物芯片',
        '特级机械芯片', '特级异能芯片',
      ]
    },
    {
      name: '金币道具',
      factor: 737,
      type: 'equipment',
      contents: [
        '吼喔宝藏', '吼辣宝藏',
        '吼姆宝藏', '吼里宝藏',
        '吼美宝藏', '吼咪宝藏'
      ]
    },
  ]
};
