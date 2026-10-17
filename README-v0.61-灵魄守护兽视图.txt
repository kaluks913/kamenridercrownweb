《假面骑士 Crown》v0.61 —— 灵魄守护兽视图说明

1. 灵魄守护兽不再固定使用“全身设定 / 头部特写”。
   每个形态使用 views 数组自由定义模式名称与图片。

示例：塔斯木基础形态（两种模式）
views:[
  {label:'蛇模式', src:'../assets/images/others/tasmu/tasmu-base-snake.png'},
  {label:'摩托模式', src:'../assets/images/others/tasmu/tasmu-base-bike.png'}
],

网页会自动显示：
- 左右箭头
- “蛇模式 / 摩托模式”按钮

2. 如果某个形态只有一种模式，只写一项：
views:[
  {label:'蛇模式', src:'../assets/images/others/tasmu/tasmu-xxx-snake.png'}
],

此时网页会自动隐藏：
- 左右箭头
- 底部模式切换按钮
只显示这一张设定图。

3. 其他灵魄守护兽完全不必叫“蛇模式 / 摩托模式”。例如：
views:[
  {label:'兽模式', src:'...'},
  {label:'飞行模式', src:'...'}
],

或者只有：
views:[
  {label:'本体', src:'...'}
],

4. 骑士旧数据仍然兼容 full/head。
   因此现有 Crown 四形态无需修改；以后如果你愿意，也可以把骑士改成 views 写法。
