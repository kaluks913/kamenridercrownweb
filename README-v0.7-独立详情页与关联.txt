v0.7 重点

1. 人物 / 梦幻体 / 道具列表现在都是入口，点击后进入各自独立详情页。
2. 骑士形态支持 equipment：
   equipment:{
     users:['moroboshi'],
     transformation:['crown-driver','king-core'],
     weapons:['knock-o']
   }
   页面会自动生成“变身者 / 变身系统 / 武器”分栏。
3. 道具详情页会自动反查所有 riders.forms[].equipment，因此只需要在骑士形态一侧写一次，武器页就会自动显示使用形态。
4. 梦幻体可写 hostId:'sato'，梦幻体页会链接人物；人物页也会自动反查宿主关系。
5. 每类页面名字前的小透明徽记默认在 assets/images/emblems/：
   rider-mark.svg / other-mark.svg / character-mark.svg / monster-mark.svg / item-mark.svg
   直接用自己的透明 SVG/PNG 覆盖即可。
   如果想某个对象有专属徽记，也可以在其数据对象里写：mark:'../assets/images/emblems/xxx.png'。
6. 列表页和详情页均增加统一材质：纸张微纹理、装饰线、阴影、细颗粒和不同栏目主题色。
