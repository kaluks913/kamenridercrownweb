《假面骑士 Crown》官网 v0.73

【本版核心变化】
1. Logo 改为详情页独立 1:1 检视位。
   - 写 logoId 才显示；不写则完全不生成 Logo 区域。
   - 列表/缩略页不显示 Logo。
   - 建议 Logo 素材本身使用透明 1:1 PNG / SVG。

2. 人物、梦幻体、道具支持缩略图与详情图分离。
   image = 详情页大图
   thumb = 列表页 / 首页缩略图（可选）
   不写 thumb 时自动回退使用 image，所以旧数据不会失效。

示例：
{id:'sato', image:'../assets/images/characters/sato-detail.jpg', thumb:'../assets/images/characters/thumbs/sato.jpg', ...}

3. 梦幻体列表右上角棋子角标已删除。

4. 关联资料没有内容时，统一显示“无”。

5. 缩略列表改成自适应多列，减少两张怪人图就占满整屏的问题。

推荐新增文件夹：
assets/images/characters/thumbs/
assets/images/monsters/thumbs/
assets/images/items/thumbs/
