// 目前这样应该比较方便多语言，后续即使组件调整，也不需要再进行单独的文字替换了。
// 对应的一些样式也需要调整（字体大小）此外，图片的文字修改需要使用PS进行处理，或者是从解包中获取。
// 解包工具参见 https://www.perfare.net/982.html
// 另外的一部分文字内容储存在抽取配置中，它们是相互独立的，文件位于 /assets/config/default.json

// 这里是字符串资源配置文件
const cn = {
  loading: {
    fullTip: '资源正在加载中...请稍后',
    tip: '请稍后...'
  },
  commons: {
    'stigmata': '圣痕',
    'weapon': '武器',
    'equipment': '装备/材料',
    'fragment': '碎片',
    'character': '角色卡'
  },
  supplementNames: {
    'precision': '精准补给',
    'standard': '标配补给',
    'equipment': '装备补给',
    'extension': '扩充补给'
  },
  root: {
    rotationTip: '请将手机横屏以获得最佳的显示效果！',
    gachaProtection: '开启保底',
    navigation: {
      precision: '精准',
      standard: '标配',
      equipment: '装备',
      extension: '扩充',
      customize: '配置',
      test: '测试',
      about: '关于'
    },
  },
  components: {
    history: {
      personal: '个人',
      record: '补给记录'
    },
    gachaItemsOverview: {
      close: '关闭'
    },
    gachaControlBox: {
      gainTip: '获得的物品数量',
      oneRound: '一回补给',
      tenRound: '十回补给',
    },
    customizeConfigPage: {
      statisticsTitle: '以下为单抽概率，不包含保底\r',
      save: '保存',
      showStatistics: '统计概率'
    },
    gachaTestPage: {
      tipSelectAType: '选择一个配置的类别进行测试',
      tipSortAndGachaAmount: '执行抽取的十连次数 (点击标题可进行排序)',
      start: '开始抽取',
      categoryDisplay: '分类概率',
      closeCategoryDisplay: '关闭分类概率',
      extra: {
        name: '名称',
        level: '等级',
        times: '数量',
        possibility: '概率',
        stigmata: '圣痕',
        weapon: '武器',
        character: '角色',
        fragment: '角色碎片',
        equipment: '装备/经验',
        category: '分类',
        '1': '1星',
        '2': '2星',
        '4': '4星',
        '3': '3星',
        '11': 'B级角色卡',
        '12': 'A级角色卡',
        '13': 'S级角色卡',
      }
    },
    aboutPage: {
      aboutApplication: `
          <span>
          Mock-Kakin 氪金模拟器由基于 Angular 5 开发而成，使用MIT开源协议。
          <br />
          <br />
          如果你喜欢这个应用，可以考虑的star支持一下这个项目！
          <br />
          <br />
          Github<br />
        <a href="https://github.com/dyingsunlight/mock-kakin" target="_blank">https://github.com/dyingsunlight/mock-kakin</a>
    </span>
      `,
      aboutSyntax: `
    <span class="title">关于自定义蛋池的配置语法</span>
    <span>
      每个蛋池的配置都有这几项组成 (* 代表必选)：
    </span>
        <ul>
            <li>
              name: 名称。name字段参与任何操作，仅用来标识内容, 提高可读性。
            </li>
            <li>
              * factor: 抽取因子。抽取因子决定了它的内容被抽取的概率。概率 = (抽取因子 / 当前层级 因子总和)。
            </li>
            <li>
              possibility: 层级。每次抽取都是从当前层级内，根据每个子项定义的抽取因子的比例作为概率进行抽取。
              当 possibility 存在时，将会自动忽略 contents 字段。
            </li>
            <li>
              contents: 实际的物品内容。所有可用的物品名称可以在<a
              href="https://github.com/dyingsunlight/mock-kakin/tree/master/src/app/gacha/resources" target="_blank">这里找到</a>。
              包含了游戏内所有的圣痕、武器、角色卡和角色碎片。
            </li>
            <li>
              type : 仅在contents有效时使用。用于决定该查找抽取结果的资源文件，以及一系列的预处理器的使用等。
            </li>
        </ul>
    <span>
      具体的案例可以在这里<a href="https://github.com/dyingsunlight/mock-kakin/tree/master/src/app/gacha/config" target="_blank">
        进行查看
      </a>，内有更详细的注释。
    </span>
      `
    }
  },
};

// 见谅，英语比较渣...
const en = {
  loading: {
    fullTip: 'Please wait while loading resources',
    tip: 'Please wait ...'
  },
  commons: {
    'stigmata': 'Stigmata',
    'weapon': 'Weapon',
    'equipment': 'Equipment',
    'fragment': 'Fragment',
    'character': 'Character'
  },
  supplementNames: {
    'precision': 'Precision Supplement',
    'standard': 'Standard Supplement',
    'equipment': 'Equipment Supplement',
    'extension': 'Extension Supplement'
  },
  root: {
    rotationTip: 'Please rotate your screen to get better display！',
    gachaProtection: 'Enable Protection',
    navigation: {
      precision: 'Precision',
      standard: 'Standard',
      equipment: 'Equipment',
      extension: 'Extension',
      customize: 'Customize',
      test: 'Test',
      about: 'About'
    },
  },
  components: {
    history: {
      personal: 'Personal',
      record: 'Supplement Record'
    },
    gachaItemsOverview: {
      close: 'Close'
    },
    gachaControlBox: {
      gainTip: 'Item Amount',
      oneRound: 'One Round',
      tenRound: 'Ten Round',
    },
    customizeConfigPage: {
      statisticsTitle: 'Following is one round possibility(while not enable protection)\r',
      save: 'Save',
      showStatistics: 'Statistics'
    },
    gachaTestPage: {
      tipSelectAType: 'Select a category to test',
      tipSortAndGachaAmount: 'execute ten round gacha times (click title to sort)',
      start: 'start',
      categoryDisplay: 'Display By Category',
      extra: {
        name: 'Name',
        level: 'Level',
        times: 'Amount',
        possibility: 'Possibility',
        stigmata: 'Stigmata',
        weapon: 'Weapon',
        character: 'Character',
        fragment: 'Character Fragment',
        equipment: 'Equipment',
        category: 'Category',
        '1': 'one star',
        '2': 'one stars',
        '4': 'four star',
        '3': 'three star',
        '11': 'Rank B',
        '12': 'Rank A',
        '13': 'Rank S',
      }
    },
    aboutPage: {
      aboutApplication: `
          <span>
          Mock-Kakin 氪金模拟器由基于 Angular 5 开发而成，使用MIT开源协议。
          <br />
          <br />
          如果你喜欢这个应用，可以考虑的star支持一下这个项目！
          <br />
          <br />
          Github<br />
        <a href="https://github.com/dyingsunlight/mock-kakin" target="_blank">https://github.com/dyingsunlight/mock-kakin</a>
    </span>
      `,
      aboutSyntax: `
    <span class="title">关于自定义蛋池的配置语法</span>
    <span>
      每个蛋池的配置都有这几项组成 (* 代表必选)：
    </span>
        <ul>
            <li>
              name: 名称。name字段参与任何操作，仅用来标识内容, 提高可读性。
            </li>
            <li>
              * factor: 抽取因子。抽取因子决定了它的内容被抽取的概率。概率 = (抽取因子 / 当前层级 因子总和)。
            </li>
            <li>
              possibility: 层级。每次抽取都是从当前层级内，根据每个子项定义的抽取因子的比例作为概率进行抽取。
              当 possibility 存在时，将会自动忽略 contents 字段。
            </li>
            <li>
              contents: 实际的物品内容。所有可用的物品名称可以在<a
              href="https://github.com/dyingsunlight/mock-kakin/tree/master/src/app/gacha/resources" target="_blank">这里找到</a>。
              包含了游戏内所有的圣痕、武器、角色卡和角色碎片。
            </li>
            <li>
              type : 仅在contents有效时使用。用于决定该查找抽取结果的资源文件，以及一系列的预处理器的使用等。
            </li>
        </ul>
    <span>
      具体的案例可以在这里<a href="https://github.com/dyingsunlight/mock-kakin/tree/master/src/app/gacha/config" target="_blank">
        进行查看
      </a>，内有更详细的注释。
    </span>
      `
    }
  },
};

export const strRes = cn;
