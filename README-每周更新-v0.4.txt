《假面骑士 Crown》官网 v0.4 —— 每周更新说明

【最重要】以后每周主页展示谁，只改 data/site-data.js 最上面的 home。

1. 换首页骑士图
把新图放进 assets/images/home/riders/，例如 week-02-crown.png。
然后改：
home.riderFeature.image:'assets/images/home/riders/week-02-crown.png'
这张图与 rider/crown/ 里的正式设定图完全独立。

2. 首页展示人物 / 怪人 / 道具
home.characterIds:['xxx','yyy']
home.monsterIds:['xxx']
home.itemIds:['xxx','yyy']
首页只显示这些 ID；分区页保留所有历史资料。

3. 首页切换到新一集
home.storyId:'ep02'
同时在 stories[] 新增 ep02。首页标题、简介、图片会自动同步。

4. 新增骑士
在 riders[] 里复制一个完整骑士对象，给它新的 id/name/en/forms。
骑士页会自动新增一枚“大类”按钮。
如果是真正未公开的骑士，不建议提前写进公开 site-data.js：published:false 只是界面隐藏，查看网页源码仍能看到。

5. 新增梦幻体分支
在 monsterCategories[] 添加：
{id:'fear', name:'恐惧', en:'FEAR', published:true}
然后怪人写 categoryId:'fear'。
只有该分类 published 且至少有一个已公开怪人时，分类按钮才出现。

6. 首页不会越更新越臃肿
characters / monsters / riders / stories 是历史资料库；home 只是“本周精选”。
主页永远由 home 指定展示对象，而不是自动把全部资料塞进去。

7. 数据文件写坏怎么办
数组里的对象之间要有逗号。建议每次修改后刷新；若整站空白，F12 → Console 查看报错行。
