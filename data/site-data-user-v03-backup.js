/*
  《假面骑士 Crown》官网内容数据
  =================================
  这里是你以后最常改的文件。

  重要概念：
  1. rider.forms = 骑士形态资料。
  2. items       = 剧中“道具设定”，无论现实里是否单独售卖都放这里。
  3. toys        = 伪玩具商品。一个商品可以包含多个剧中道具，也可以没有独立商品页。

  绝大多数列表都可以自由增加 / 删除对象；页面会自动跟着变化。
*/

window.CROWN_DATA = {
  news: [
    { date:'2026.10.02', tag:'官网', text:'《假面骑士 Crown》官方网站开放' },
    { date:'2026.10.02', tag:'故事', text:'第 01 集剧情页面公开' },
    { date:'2026.10.02', tag:'骑士', text:'假面骑士 Crown 四种形态资料公开' },
    { date:'2026.10.02', tag:'道具', text:'皇冠驱动器、捷能充芯与武器资料公开' }
  ],

  rider: {
    name:'假面骑士 Crown',
    en:'KAMEN RIDER CROWN',
    catch:'感受吧！信念的力量。',
    forms:[
      {
        id:'base', no:'01', name:'CROWN', cn:'基础形态',
        full:'../assets/images/riders/crown/crown-base-full.png',
        head:'../assets/images/riders/crown/crown-base-head.png',
        call:'Volsaro KING！神秘之蛇！KAMEN RIDER CROWN！',
        intro:'由皇冠驱动器与国王捷能充芯构筑的均衡形态。兼具攻防与机动性，在国际象棋体系中对应“国王”。',

        // 参数想加几项就加几项，删掉整行就会从网页消失；顺序就是网页显示顺序。
        stats:[
          { label:'身高', value:'195.0 cm' },
          { label:'体重', value:'92.0 kg' },
          { label:'拳力', value:'12.8 t' },
          { label:'踢力', value:'18.5 t' },
          { label:'跳跃力', value:'28.0 m' },
          { label:'跑速', value:'100 m / 5.6 s' }
          // 例如以后想加：{ label:'水下活动时间', value:'30 min' },
        ],

        // 能力也是自由增删。
        abilities:[
          '均衡的近距离格斗与射击能力。',
          '灵魄能量可通过装甲核心稳定传输。',
          '黑色披风可用于隐蔽与战斗辅助。'
        ],

        // 编号不用连续，也不限数量；与设定图上的编号保持一致即可。
        components:[
          { no:'01', name:'圣蛇之眼', text:'内置多功能成像系统，可捕捉周围范围内的灵魄能量波动。' },
          { no:'02', name:'王权护肩', text:'厚重的左右护肩内置灵魄能量稳压装置【深红宝石】，防止灵魄能量的外泄，以保证最大强度的释放自己的全力。' },
          { no:'03', name:'凌驾核心', text:'胸甲正中心的蓝色八边形核心结构，若诸星的信念足够坚定，核心会产生共鸣，从而提升战斗参数。纹章四周有六条凹槽，用于传导核心的能量供给。' },
          { no:'04', name:'皇家胸甲', text:'内层衬有记忆合金网的胸甲，受到钝器冲击时可自动硬化。' },
          { no:'05', name:'突击臂铠', text:'臂铠具备基础的隔空散热功能，可弹开部分类型的能量弹攻击。' }
          { no:'06', name:'传能铁手', text:'手甲由多层纳米合金锻压而成，手背处嵌有方形能量导口，可在使用手部进攻时减轻反震。' }
        ]
      },

      {
        id:'sabaku', no:'02', name:'SABAKU CROWN', cn:'沙漠浪子形态',
        full:'../assets/images/riders/crown/crown-sabaku-full.png',
        head:'../assets/images/riders/crown/crown-sabaku-head.png',
        call:'Volsaro SABAKU！白色浪人！SABAKU CROWN！',
        intro:'使用沙漠捷能充芯变身。能够操纵具备腐蚀性的白色沙尘，并以轻量装甲提升机动性。',
        stats:[
          {label:'身高',value:'195.0 cm'}, {label:'体重',value:'89.0 kg'},
          {label:'拳力',value:'10.5 t'}, {label:'踢力',value:'15.0 t'},
          {label:'跳跃力',value:'35.0 m'}, {label:'跑速',value:'100 m / 4.8 s'}
        ],
        abilities:['能力说明占位：腐蚀性白沙。','能力说明占位：沙幕与隐蔽。','能力说明占位：轻量化机动。'],
        components:[
          {no:'01',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'},
          {no:'02',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'},
          {no:'03',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'}
        ]
      },

      {
        id:'sora', no:'03', name:'SORA CROWN', cn:'天空指挥官形态',
        full:'../assets/images/riders/crown/crown-sora-full.png',
        head:'../assets/images/riders/crown/crown-sora-head.png',
        call:'Volsaro SORA！飞行指挥官！SORA CROWN！',
        intro:'使用天空捷能充芯变身。拥有飞行能力与大量隐藏弹药口，适合广域空战与持续轰炸。',
        stats:[
          {label:'身高',value:'197.0 cm'}, {label:'体重',value:'98.5 kg'},
          {label:'拳力',value:'9.2 t'}, {label:'踢力',value:'16.0 t'},
          {label:'跳跃力',value:'45.0 m'}, {label:'飞行速度',value:'Mach 1.2'}
        ],
        abilities:['能力说明占位：高速飞行。','能力说明占位：广域锁定。','能力说明占位：微型弹药齐射。'],
        components:[
          {no:'01',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'},
          {no:'02',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'},
          {no:'03',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'}
        ]
      },

      {
        id:'kaze', no:'04', name:'KAZE CROWN', cn:'狂风游侠形态',
        full:'../assets/images/riders/crown/crown-kaze-full.png',
        head:'../assets/images/riders/crown/crown-kaze-head.png',
        call:'Volsaro KAZE！狂风游侠！KAZE CROWN！',
        intro:'使用狂风捷能充芯变身。能够操纵风速与风力，并利用风场修正射击弹道。',
        stats:[
          {label:'身高',value:'193.0 cm'}, {label:'体重',value:'89.0 kg'},
          {label:'拳力',value:'7.5 t'}, {label:'踢力',value:'11.0 t'},
          {label:'跳跃力',value:'22.0 m'}, {label:'跑速',value:'100 m / 6.0 s'}
        ],
        abilities:['能力说明占位：风场控制。','能力说明占位：弹道修正。','能力说明占位：压缩气流防御。'],
        components:[
          {no:'01',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'},
          {no:'02',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'},
          {no:'03',name:'部件名称占位',text:'这里填写文件中与编号对应的功能。'}
        ]
      }
    ]
  },

  characters:[
    {id:'sato', name:'佐藤久间', en:'SATO KUMA', image:'../assets/images/characters/sato-kuma.jpg', intro:'上杉百合子的恋人。百合子突然死亡后，他被卷入围绕林野财团发生的一系列事件，并在巨大的悲愤中发生异变。'},
    {id:'yuriko', name:'上杉百合子', en:'UESUGI YURIKO', image:'../assets/images/characters/uesugi-yuriko.jpg', intro:'林野财团公关部门员工。关注底层居住区住宅项目，却在悦海酒店突然死亡。'},
    {id:'kuntai', name:'林野坤泰', en:'HAYASHINO KUNTAI', image:'../assets/images/characters/hayashino-kuntai.jpg', intro:'林野财团现任继承人。曾承诺推动底层居住区的新住宅建设计划。'}
  ],

  monsters:[
    {id:'anger', no:'001', name:'愤怒梦幻体', en:'ANGER DREAMS', image:'../assets/images/monsters/anger-dream-phantom.png', intro:'由强烈愤怒所催生的梦幻体。其能力与宿主不断膨胀的负面情绪紧密相连。'},
    {id:'wind', no:'002', name:'狂风梦幻体', en:'KAZE DREAMS', image:'../assets/images/monsters/wind-dream-phantom.png', intro:'能够操纵狂风的梦幻体。胸前红色宝石与其力量运转存在密切联系。'}
  ],

  /*
    主站“道具”资料。
    relatedToys 是【可选】的：
    - 不写 / 写 []：主站只展示设定，不出现任何“查看玩具”按钮。
    - 写 ['某商品id']：显示前往该伪商品页的按钮。
    - 如果某道具同时收录在多个套装里，也可写多个 id。
  */
  items:[
    {
      id:'driver', category:'变身系统', name:'皇冠驱动器', en:'CROWN DRIVER',
      image:'../assets/images/items/crown-driver.png',
      intro:'Crown 使用的变身系统核心。与不同捷能充芯联动，可启动变身、武器召唤与必杀系统。',
      relatedToys:[]
    },
    {
      id:'king-core', category:'捷能充芯', name:'国王捷能充芯', en:'KING CHARGE CORE',
      image:'../assets/images/items/king-charge-core.png', intro:'基础形态对应的捷能充芯。',
      // 这是随皇冠驱动器套装附带的充芯，所以不设置独立商品链接。
      relatedToys:[]
    },
    {id:'sabaku-core', category:'捷能充芯', name:'沙漠捷能充芯', en:'SABAKU CHARGE CORE', image:'../assets/images/items/sabaku-charge-core.png', intro:'沙漠浪子形态对应的捷能充芯。', relatedToys:[]},
    {id:'sora-core', category:'捷能充芯', name:'天空捷能充芯', en:'SORA CHARGE CORE', image:'../assets/images/items/sora-core.png', intro:'天空指挥官形态对应的捷能充芯。', relatedToys:[]},
    {id:'kaze-core', category:'捷能充芯', name:'狂风捷能充芯', en:'KAZE CHARGE CORE', image:'../assets/images/items/kaze-core.png', intro:'狂风游侠形态对应的捷能充芯。', relatedToys:[]},
    {id:'knock-o', category:'武器', name:'击倒拳铳', en:'KNOCK-O', image:'../assets/images/items/weapons/knock-o.png', intro:'Crown 的初始二用型武器，可在拳模式与铳模式之间切换。', relatedToys:[]},
    {id:'g-azer', category:'武器', name:'凝视者', en:'G-AZER', image:'../assets/images/items/weapons/g-azer.png', intro:'双枪武器之一，适合进行高精度远距离射击。', relatedToys:[]},
    {id:'d-asher', category:'武器', name:'闪耀者', en:'D-ASHER', image:'../assets/images/items/weapons/d-asher.png', intro:'双枪武器之一，可与凝视者协同攻击并为必杀充能。', relatedToys:[]},
    {id:'god-gun', category:'武器', name:'G.O.D 铳', en:'G.O.D GUN', image:'../assets/images/items/weapons/god-gun.png', intro:'三把枪铳合体后的弩型武器，可进一步释放元素充芯的力量。', relatedToys:[]}
  ],

  /*
    副站“玩具档案”的商品列表。
    这里的一个对象 = 一个真正的伪商品 / SKU / 套装页面。

    includedItems 只是告诉读者“盒内包含哪些剧中道具”，不会额外生成页面。
    manuals 可以是任意页数：2 张、3 张、7 张都可以。
  */
  toys:[
    {
      id:'crown-driver-set',
      name:'DX 皇冠驱动器',
      en:'DX CROWN DRIVER',
      category:'变身腰带套装',
      package:'toys/crown-driver-package.jpg',
      intro:'皇冠驱动器与国王捷能充芯组成的变身腰带套装。',
      includedItems:['driver','king-core'],
      manuals:[
        'manuals/crown-driver/01.jpg',
        'manuals/crown-driver/02.jpg',
        'manuals/crown-driver/03.jpg'
      ]
    }
  ],

  story:{
    episode:'01', title:'狂风·SPITE MARRIAGE', date:'2026.10.02',
    summary:'上杉百合子的突然死亡，让佐藤久间被卷入一场由舆论、财团与超常力量共同编织的事件。追查真相的过程中，他体内的力量逐渐失控。山林决战之际，一名从未公开身份的蓝色骑士现身——假面骑士 Crown。',
    columnTitle:'第 01 集补充文章',
    column:'本页的小作文、设定补充与作者文章都放在 STORY 内。之后每周只需在数据中增加对应集数内容，不另设独立文章栏目。'
  }
};
