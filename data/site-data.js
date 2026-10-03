/*
  《假面骑士 Crown》官网内容数据 v0.4
  ======================================
  以后绝大多数更新只改这个文件 + 替换图片。

  核心结构：
  1. home               = 本周主页展示什么（不会自动把历史内容越堆越多）
  2. riders             = 所有已经公开的骑士系列；每个骑士内部有 forms
  3. monsterCategories  = 梦幻体分类；只有存在并 published 的分类才会显示
  4. monsters           = 所有已经公开的梦幻体
  5. characters         = 所有已经公开的人物
  6. items              = 剧中道具设定
  7. toys               = 伪玩具商品 / 套装
  8. stories            = 每集 STORY + 小作文

  剧透提醒：published:false 只会“网页隐藏”，源码里仍能看见。
  真正不能提前公开的角色/骑士/怪人，请等播出后再把数据加进本文件。
*/

window.CROWN_DATA = {
  /* =========================================================
     本周主页精选：每周更新最常改这里
     ========================================================= */
  home: {
    heroPoster:'assets/images/poster/phase-01.jpg',

    // 首页骑士主视觉与骑士资料图完全分离。
    // 以后每周可以换成 assets/images/home/riders/week-02-xxx.png
    riderFeature:{
      riderId:'crown',
      formId:'base',
      image:'assets/images/home/riders/week-01-crown.png',
      note:'主角骑士公开：基础、沙漠、天空、狂风四种形态。'
    },

    // 首页只展示这里指定的人物，不会把人物库全部塞上来。
    characterIds:['sato','yuriko','kuntai'],

    // 首页只展示这里指定的梦幻体。
    monsterIds:['anger','wind'],

    // 首页道具同理；想展示几个就写几个。
    itemIds:['driver','king-core','knock-o'],

    // 首页 STORY 指向哪一集。
    storyId:'ep01'
  },

  news: [
    { date:'2026.10.06', tag:'官网', text:'《假面骑士 Crown》官方网站开放' },
    { date:'2026.10.06', tag:'故事', text:'第 01 集剧情页面公开' },
    { date:'2026.10.06', tag:'骑士', text:'假面骑士 Crown 四种形态资料公开' },
    { date:'2026.10.06', tag:'道具', text:'皇冠驱动器、捷能充芯与武器资料公开' }
  ],

  /* =========================================================
     骑士大类
     新骑士播出后，再复制一个完整 rider 对象即可。
     rider/index.html 会自动出现新的骑士分类按钮。
     ========================================================= */
  riders:[
    {
      id:'crown',
      published:true,
      no:'01',
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
          stats:[
            { label:'身高', value:'195.0 cm' },
            { label:'体重', value:'92.0 kg' },
            { label:'拳力', value:'12.8 t' },
            { label:'踢力', value:'18.5 t' },
            { label:'跳跃力', value:'28.0 m' },
            { label:'跑速', value:'100 m / 5.6 s' }
          ],
          abilities:[ '未知'],
          components:[
            { no:'01', name:'圣蛇之眼', text:'内置多功能成像系统，可捕捉周围范围内的灵魄能量波动。' },
            { no:'02', name:'王权护肩', text:'厚重的左右护肩内置灵魄能量稳压装置【深红宝石】，防止灵魄能量外泄，以保证最大强度释放力量。' },
            { no:'03', name:'凌驾核心', text:'胸甲正中心的蓝色八边形核心结构；当变身者信念足够坚定时会产生共鸣，从而提升战斗参数。' },
            { no:'04', name:'皇家胸甲', text:'内层衬有记忆合金网的胸甲，受到钝器冲击时可自动硬化。' },
            { no:'05', name:'突击臂铠', text:'臂铠具备基础的隔空散热功能，可弹开部分类型的能量弹攻击。' },
            { no:'06', name:'传能铁手', text:'手甲由多层纳米合金锻压而成，手背处嵌有方形能量导口，可在使用手部进攻时减轻反震。' },
            { no:'07', name:'洗礼战斗服', text:'软质弹性材料组成的底衣，减轻全身的肌肉负担。' },
            { no:'08', name:'冲锋护腿', text:'腿部的助推器可在骑士踢释放瞬间喷出气流增压，提升踢击贯穿力。膝盖部分象征“国王”的浮雕装甲额外加厚，便于进行膝撞等近身缠斗。' },
            { no:'09', name:'征服者战靴', text:'靴体装有小型能量导口，用于强化踢击时的贯穿点。靴跟处的压缩喷口会在踢技时向后方喷射高压气流，提供额外加速度。' },
            { no:'10', name:'影子斗篷', text:'由超古代材料编织而成的半实体能量织物，拥有将自己身体隐于黑暗之中不被人轻易发现的功效。' },
            { no:'11', name:'理智皇冠', text:'可在一定程度上保持变身者理智的头部装饰，以防止被梦幻体的邪恶呼唤侵蚀。' },
            { no:'12', name:'圣谛天线', text:'头盔两侧的类天线结构，能够持续接收附近的信号内容，即使在信号隔绝区域也能保持联系。' },
            { no:'13', name:'洁净面甲', text:'用以隔绝一切负面物质的小巧面甲，可以一定程度上过滤周遭的大气环境，让变身者吸入纯净的空气。' }
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
          abilities:['未知'],
          components:[
            {no:'01',name:'流沙盔甲',text:'夸张的蓝白色肩甲，其中间隙藏有【沙尘发生器】——将空气中水分和微量矿物转化为白色沙尘的核心装置，可用于紧急回避或制造沙幕。'},
            {no:'02',name:'荒芜披挂',text:'由隔热粒子组成的胸部铠甲，防止腐蚀沙尘反噬变身者，这一隔热粒子以胸甲为中心扩散到假面骑士Crown的全身各处。受到重击时，胸甲会主动崩解一部分外层装甲化为白沙消散，以卸除冲击力。'},
            {no:'03',name:'沙尘围巾',text:'从颈后伸展至腰后的白色围巾，具备自由操纵白色沙尘方向的能力。'},
            {no:'04',name:'风沙目镜',text:'蓝色边框的白色目镜，内置多光谱过滤器，使得能见度不受自身召唤沙尘的影响。'}
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
            {label:'跳跃力',value:'45.0 m'}, {label:'飞行速度',value:'Mach 1.2'},
            {label:'最大飞行高度',value:'3000 m'}
          ],
          abilities:['未知'],
          components:[
            {no:'01',name:'苍穹之翼推进器',text:'安装在Crown肩部的推进器。双肩的推进器展开后形成由压缩能量构成的光翼，翼展可达4米。光之翼展开后本身不具备攻击力，但可提供稳定升力及高速巡航推力。'},
            {no:'02',name:'进攻拦截者',text:'双肩内部各藏有4个微型导弹发射口（总计8发），其中的拦截弹可用于阻拦试图近身的敌人或拦截远程攻击。'},
            {no:'03',name:'高科技炮台',text:'胸甲内藏24个微型炮弹发射口，每个发射口可独立发射或齐射，弹药为“天空蜂群弹”，单发伤害低但数量优势明显，对密集敌人效果显著。'},
            {no:'04',name:'王权推进器',text:'王权护肩着装在突击臂铠之上产生的合体结构，存储能量的【深红宝石】变为排出能量以推动全身加速。'},
            {no:'05',name:'王空冠盔',text:'如同三叉戟一般张扬的头盔部件，顶部向前方伸展出三根锐利的尖刺——中央尖刺最长，两侧略短并向外微张，形如三叉戟。尖刺可主动发射干扰电波，扰乱敌方远程攻击的精准度。'},
            {no:'06',name:'鹰眼瞄准镜',text:'左侧刻有的瞄准镜具备8倍光学变焦及热成像追踪功能，可对地面目标进行标记——被标记的敌人会持续暴露位置；右侧复眼负责广域监视，捕捉周围300米内的快速移动目标，并通过左眼目镜呈现数据叠加。'}
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
          abilities:['超级充能效果：将周围30米内的风速提升至极限，使区域内所有敌人被强风压制、难以抬头。','终焉必杀：狂风皇家审判（Kaze Royal Sentence）可以将全部压缩能量灌注于腿中，裹挟着风压轰入敌人躯干，从敌人后背以锥形爆射而出。'],
          components:[
            {no:'01',name:'换气流苏',text:'右肩可主动吸入空气，为右臂的“风盾”提供压缩气流。而左肩的翅状开槽用于降低风阻，减少射击时产生的晃动程度。'},
            {no:'02',name:'风鳃',text:'着装无数极小气孔的胸甲，可将周围空气储存并压缩，并在当Crown发动大范围控风能力时，胸甲上的所有气孔会同时向外喷射气流，形成以Crown为中心向外扩散的风暴。'},
            {no:'03',name:'暴风臂铠',text:'魁梧的右臂臂甲，可瞬间从发生器喷射压缩空气，形成一面直径1.2米的圆形气盾。气盾能抵挡中近距离的物理子弹、能量弹及爆炸破片。'},
            {no:'04',name:'导流风摆',text:'一道独立的蓝色裙摆从腰部左侧延伸至小腿处。裙摆可像帆一样捕捉或偏转风向。当需要改变周围风场时，裙摆会展开或收缩，引导气流按指定方向流动。'},
            {no:'05',name:'游侠视界',text:'薄荷色覆面之下镶嵌的蓝色目镜，当Crown持枪瞄准时，目镜会实时计算出子弹受当前风向风力影响后的偏移量，并显示修正后的虚拟弹道。'}
          ]
        }
      ]
    }
  ],

  characters:[
    {id:'sato', published:true, name:'佐藤久间', en:'SATO KUMA', image:'../assets/images/characters/sato-kuma.jpg', intro:'上杉百合子的恋人。百合子突然死亡后，他被卷入围绕林野财团发生的一系列事件，并在巨大的悲愤中发生异变。'},
    {id:'yuriko', published:true, name:'上杉百合子', en:'UESUGI YURIKO', image:'../assets/images/characters/uesugi-yuriko.jpg', intro:'林野财团公关部门员工。关注底层居住区住宅项目，却在悦海酒店突然死亡。'},
    {id:'kuntai', published:true, name:'林野坤泰', en:'HAYASHINO KUNTAI', image:'../assets/images/characters/hayashino-kuntai.jpg', intro:'林野财团现任继承人。曾承诺推动底层居住区的新住宅建设计划。'}
  ],

  /* =========================================================
     梦幻体分类
     需要哪个分支就添加/保留哪个；没有公开内容时可 published:false。
     注意：隐藏并不等于防剧透，未公开名称最好不要提前写入公开站源码。
     ========================================================= */
  monsterCategories:[
    {id:'anger', name:'愤怒', en:'ANGER', published:true}
    // 以后公开时再增加：愉悦 / 恐惧 / 悲伤 / 执政官 / 其他……
  ],

  monsters:[
    {id:'anger', categoryId:'anger', published:true, no:'001', name:'愤怒梦幻体', en:'ANGER DREAMS', image:'../assets/images/monsters/anger-dream-phantom.png', intro:'由强烈愤怒所催生的梦幻体，其能力与宿主不断膨胀的愤怒情绪紧密相连。'},
    {id:'wind', categoryId:'anger', published:true, no:'002', name:'狂风梦幻体', en:'KAZE DREAMS', image:'../assets/images/monsters/wind-dream-phantom.png', intro:'能够操纵风元素的梦幻体，由佐藤久间变身而成,可以使用风弹进行攻击。'}
  ],

  items:[
    {id:'driver', category:'变身系统', name:'皇冠驱动器', en:'CROWN DRIVER', image:'../assets/images/items/crown-driver.png', intro:'Crown 使用的变身系统。与不同捷能充芯联动，可启动变身、武器召唤与必杀系统。', relatedToys:['crown-driver-set']},
    {id:'king-core', category:'捷能充芯', name:'国王捷能充芯', en:'KING ENERGENCY CHARGE', image:'../assets/images/items/king-charge-core.png', intro:'假面骑士Crown·基础形态对应的捷能充芯。', relatedToys:[]},
    {id:'sabaku-core', category:'捷能充芯', name:'沙漠捷能充芯', en:'SABAKU ENERGENCY CHARGE', image:'../assets/images/items/sabaku-charge-core.png', intro:'沙漠浪子形态对应的捷能充芯。', relatedToys:[]},
    {id:'sora-core', category:'捷能充芯', name:'天空捷能充芯', en:'SORA ENERGENCY CHARGE', image:'../assets/images/items/sora-charge-core.png', intro:'天空指挥官形态对应的捷能充芯。', relatedToys:[]},
    {id:'kaze-core', category:'捷能充芯', name:'狂风捷能充芯', en:'KAZE ENERGENCY CHARGE', image:'../assets/images/items/kaze-charge-core.png', intro:'狂风游侠形态对应的捷能充芯。', relatedToys:[]},
    {id:'knock-core', category:'捷能充芯', name:'击倒拳铳武器充芯', en:'KNOCK-O ENERGENCY CHARGE', image:'../assets/images/items/knock-charge-core.png', intro:'能够召唤武器【击倒拳铳】的捷能充芯。', relatedToys:[]},
    {id:'land-core', category:'捷能充芯', name:'？？？捷能充芯', en:'ENERGENCY CHARGE', image:'../assets/images/items/land-charge-core.png', intro:'神秘人获得的捷能充芯。', relatedToys:[]},
    {id:'knock-o', category:'武器', name:'击倒拳铳', en:'KNOCK-O', image:'../assets/images/items/weapons/knock-o.png', intro:'Crown 的初始二用型武器，可在拳模式与铳模式之间切换。', relatedToys:[]}
  ],

  toys:[
    {
      id:'crown-driver-set', name:'DX 皇冠驱动器', en:'DX CROWN DRIVER', category:'变身腰带套装',
      package:'toys/crown-driver-package.jpg', intro:'皇冠驱动器与国王捷能充芯组成的变身腰带套装。',
      includedItems:['driver','king-core'],
      manuals:['manuals/crown-driver/01.jpg','manuals/crown-driver/02.jpg','manuals/crown-driver/03.jpg']
    }
  ],

  stories:[
    {
      id:'ep01', episode:'01', title:'狂风·SPITE MARRIAGE', date:'2026.10.06',
      image:'../assets/images/story/ep01/episode-01.jpg',
      summary:'上杉百合子的突然死亡，让佐藤久间被卷入一场由舆论、财团与超常力量共同编织的事件。追查真相的过程中，他体内的力量逐渐失控。山林决战之际，一名从未公开身份的蓝色骑士现身——假面骑士 Crown。',

      // STORY 富文本正文：顺序就是网页显示顺序。每一集的块数量、类型都可以完全不同。
      // paragraph 的 html 支持 <strong>加粗</strong>、<em>斜体</em>、<br>换行。
      content:[
        { type:'guide', title:'人物关系', src:'../assets/images/story/ep01/guide.jpg' },
        { type:'heading', text:'作者想说' },
        { type:'paragraph', html:'<strong>——关于第一话的整体构成，请允许我从最想做的事说起。</strong> <br>是呢……这一话一开始，其实和现在完全不同呢（笑）。最初写的时候，脑子里一直放着一本《了不起的盖茨比》。<br>老实说，那个版本的草稿很文学，用破碎叙事来展开故事的内容。但后来我发现，内部试看对本集的人物塑造普遍评价不高。<br> 所以后来我把路线改成了更线性驱动的故事,但保留了“真正的主角在最后一刻出场”的异色情节，各位是不是看到那里会大吃一惊呢？' },
        { type:'divider' },
        { type:'paragraph', html:'<strong>——关于“主角骑士最后才登场”的叙述诡计。</strong> <br>与其说是骗观众，不如说是视点诱导。第一话几乎所有信息都经过佐藤的情绪过滤。观众会自然以为，这是一个“被夺走一切的男人觉醒力量复仇”的故事。<br>所以第一话的结构，请允许我称为“让怪人先登场，让骑士最后敲门”。如果Crown先出现，那么这只是个平平无奇的小故事。<br> 可如果先让观众对佐藤共情，才会让Crown的审判更有重量。' },
        { type:'divider' },
        { type:'callout', title:'对观众说的话', html:'接下来，还请大家继续关注假面骑士Crown的后续内容，更多真相将会在后续的集数中慢慢揭晓。' },
        { type:'paragraph', html:'<em>作者：KALUKS</em>' }
      ],

      // 旧字段保留兼容；当 content 不存在或为空时，网页才会读取下面两项。
      columnTitle:'第 01 集补充文章',
      column:'本页的小作文、设定补充与作者文章都放在 STORY 内。之后每周新增一集对象即可，首页通过 home.storyId 决定本周展示哪一集。'
    }
  ]
};
