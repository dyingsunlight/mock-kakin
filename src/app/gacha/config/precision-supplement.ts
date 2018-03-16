import {Possibility} from '../interface/possibility';

// 18.2.26 更新，
// 根据实际测试的结果以及 崩坏3情报室发布的概率信息来看
// 游戏内实际的抽取概率大致只有公示概率的 1/4， 因此乘上此因子数

const factor = 0.25;
export const precisionSupplementPossibility: Possibility = {
  name: '精准补给蛋池配置',
  factor: 1,
  possibility: [
    {
      name: 'up的4星圣痕',
      factor: 3720 * factor,
      type: 'stigmata',
      contents: [
        '特斯拉乐队'
      ]
    },
    {
      name: '非up的4星圣痕',
      factor: 3717 * factor,
      type: 'stigmata',
      contents: [
        '普朗克', '绯玉丸', '爱因斯坦乐队', '莎士比亚'
      ]
    },
    {
      name: '3星圣痕',
      factor: 33694,
      type: 'stigmata',
      contents: [
        '里纳耳多', '时雨绮罗', '奥吉尔',
        '大帝', '特斯拉', '坂本龙马',
        '阿提拉', '王昭君', '伊丽莎白',
        '汉娜',
        '奥托薇拉',
        '露西亚',
        '薇欧拉',
        '维多利亚'
      ]
    },
    {
      name: 'up的4星武器',
      factor: 2749 * factor,
      type: 'weapon',
      contents: [
        '樱花的誓约'
      ]
    },
    {
      name: '非up的4星武器',
      factor: 2749 * factor,
      type: 'weapon',
      contents: [
        '超电磁炮', '虚无之刃', '蚩尤巨炮', '犹大的誓约',
        '断光之怒亚达'
      ]
    },
    {
      name: '3星武器',
      factor: 11231,
      type: 'weapon',
      contents: [
        '水妖精I型', '火妖精I型', '水妖精II型', '火妖精II型', '苗刀·雷妖', '苗刀·电魂', '脉冲太刀17式', '脉冲太刀19式', '马尔夫科A', '马尔夫科C',
        '阴极子炮07式', '阴极子炮09式', '超重剑·冲锋', '电离共振剑', '氮素结晶剑', '超重剑·王蛇', '火天使', '雷天使',
        '黑色粉碎者', 'CAS-X圣徒', '白星驱逐者',
        '沙漠之鹰', '柯尔特巨蟒·改', 'm1911', 'usp改', '崛川国广', '妖刀村正', '妖刀雨村', '复合刀·柳叶', 'su30',
        'Mig-11', 'Mig-13', 'Mig-7激光炮', '能量大剑', '融核动力初型', '融核动力剑·改', '混种大剑27式', '十字架·冰弹', '火焰弹发射台', '破甲弹发射台', '冰霜之誓'

      ]
    },
    {
      name: '进化材料',
      factor: 17072,
      type: 'equipment',
      contents: [
        '超合金护盾', '断裂的刀柄',
        '超小型反应炉', '超合金反射镜',
        '铱合金火星塞', '特斯拉线圈'
      ]
    },
    {
      name: '装备经验',
      factor: 17072,
      type: 'equipment',
      contents: [
        '灵魂碎片', '双子灵魂碎片',
        '灵魂结晶', '双子灵魂结晶',
        '以太碎片', '双子以太碎片',
        '以太结晶', '双子以太结晶',
      ]
    },
    {
      name: '钱',
      factor: 8536,
      type: 'equipment',
      contents: [
        '吼里宝藏', '吼美宝藏', '吼咪宝藏'
      ]
    },
  ]
};

