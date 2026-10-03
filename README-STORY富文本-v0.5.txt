STORY 富文本编辑速查（v0.5）
============================

每一集 stories[] 对象里可以加入 content:[ ... ]。
块的顺序 = 网页显示顺序；数量不限；每一集可以完全不同。

1）普通段落 + 加粗 / 斜体
{ type:'paragraph', html:'普通文字 <strong>粗体</strong> <em>斜体</em>。' },

2）大标题
{ type:'heading', text:'事件概要' },

3）小标题
{ type:'subheading', text:'山林决战' },

4）单图
{ type:'image', src:'../assets/images/story/ep01/scene-01.jpg', caption:'图片说明', wide:true },
wide:true = 宽图；删掉 wide 或写 false = 较窄居中图。

5）导图（专门的大块样式）
{ type:'guide', title:'第01集人物关系导图', src:'../assets/images/story/ep01/guide.jpg', note:'可选说明文字。' },

6）引用 / 台词
{ type:'quote', html:'<strong>这里也可以加粗。</strong>', by:'佐藤久间' },

7）多图画廊
{ type:'gallery', images:[
  {src:'../assets/images/story/ep01/a.jpg',caption:'A'},
  {src:'../assets/images/story/ep01/b.jpg',caption:'B'}
] },
两张图会自动双栏；三张及以上桌面端自动三栏；手机自动单栏。

8）重点补充框
{ type:'callout', title:'补充设定', html:'这里写内容。' },

9）分隔线
{ type:'divider' },

10）完全自由 HTML（不推荐频繁用，但复杂排版时可救急）
{ type:'html', html:'<div>你自己的HTML</div>' },

图片建议按集数归档：
assets/images/story/ep01/
assets/images/story/ep02/
assets/images/story/ep03/
...

新增一集时，复制整个 stories[] 里的对象，然后修改：
id / episode / title / date / image / summary / content
即可。顶部集数按钮和文章底部“上一集/下一集”会自动生成。
