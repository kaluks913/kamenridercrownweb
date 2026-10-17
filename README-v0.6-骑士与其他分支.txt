《假面骑士 Crown》官网 v0.6 维护说明

一、梦幻体页英文标题
现在不再写死在 monster/index.html。
在 data/site-data.js 顶部修改：

ui:{
  monsterPageEnglish:'DREAMS',
  riderPageEnglish:'RIDER / OTHER'
},

二、梦幻体页配色
已改为红色主题。颜色写在 assets/css/site.css 最底部的：
.monster-page{--blue:#c81932;--cyan:#ff4b61;...}
以后想换红色，只改这里即可。

三、骑士页面的新结构
骑士页现在有两个一级分支：
- 骑士 RIDER
- 其他 OTHER

“骑士”继续读取 riders[]。
“其他”读取 otherCategories[] + others[]。

目前已经建立：
其他 → 灵魄守护兽 → 塔斯木 → 基础形态

四、新增一种“其他”分类
复制 otherCategories 中一项，例如：
{id:'guardian', name:'灵魄守护兽', en:'SOUL GUARDIAN', published:true}

然后改 id/name/en。
没有任何已公开对象使用该 categoryId 时，该分支不会显示。

五、新增灵魄守护兽
复制 others[] 中整个 tasmu 对象，修改：
id / categoryId / name / en / forms

它的 forms 和骑士 forms 完全同规格：
full / head / intro / call / stats / abilities / components / relations
所以也支持：
- 全身设定图 / 头部特写左右切换
- 参数
- 能力
- 编号部件
- 多形态

六、骑士与灵魄守护兽互相链接
在某个 form 中添加 relations。

Crown → 塔斯木：
relations:[
  {section:'other', categoryId:'guardian', entityId:'tasmu', formId:'base', label:'灵魄守护兽 塔斯木 / 基础形态'}
]

塔斯木 → Crown：
relations:[
  {section:'rider', riderId:'crown', formId:'base', label:'假面骑士 Crown / 基础形态'}
]

relations 可以放多条。

七、塔斯木图片
当前只是透明 SVG 占位图：
assets/images/others/tasmu/tasmu-base-full.svg
assets/images/others/tasmu/tasmu-base-head.svg

你可以改成 PNG/WebP，并同步修改 site-data.js 中 full/head 路径。

八、本版顺手修复
已经修复你最新 site-data(2).js 中几处漏逗号导致的整站数据加载失败；
同时统一了击倒拳铳玩具 id 为 knock-o-set。
