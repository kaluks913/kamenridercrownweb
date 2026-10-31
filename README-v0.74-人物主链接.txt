人物详情页“关联资料”自定义规则

现在人物可以写 links:[...] 来完全控制人物页显示哪些关联链接。
只要写了 links，人物页就不会再自动把所有 Rider 形态都列出来。
如果不写 links，则继续使用旧的自动反查逻辑。

【骑士链接】
links:[
  {type:'rider', riderId:'crown', formId:'base', label:'假面骑士 Crown'}
]

【梦幻体链接】
links:[
  {type:'monster', monsterId:'sabaku', label:'沙漠梦幻体'}
]

【道具链接】
links:[
  {type:'item', itemId:'knock-o', label:'击倒拳铳'}
]

【“其他”分支 / 灵魄守护兽】
links:[
  {type:'other', categoryId:'guardian', entityId:'tasm', formId:'base', label:'塔斯木'}
]

一个人物也可以写多条：
links:[
  {type:'rider', riderId:'crown', formId:'base', label:'假面骑士 Crown'},
  {type:'other', categoryId:'guardian', entityId:'tasm', formId:'base', label:'塔斯木'}
]

如果想明确显示“无”，可以写：
links:[]

当前已打样：
- 诸星勇志 -> 假面骑士 Crown（基础形态）
- 长谷川映悟 -> 假面骑士 Tunnel（基础形态）
