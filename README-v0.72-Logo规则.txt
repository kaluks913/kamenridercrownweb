《假面骑士 Crown》官网 v0.72 — Logo 规则
=========================================

1. Logo 不再按栏目分配。
   不存在“人物统一人物 Logo / 道具统一道具 Logo / 梦幻体统一梦幻体 Logo”。

2. Logo 跟骑士/阵营/系列走。
   data/site-data.js 顶部：

   logos:{
     crown:{ src:'../assets/images/logos/crown-logo.svg', alt:'Crown Logo' },
     tunnel:{ src:'../assets/images/logos/tunnel-logo.svg', alt:'Tunnel Logo' }
   },

3. 对象只有写 logoId 才会显示 Logo。

   例如 Crown：
   {
     id:'crown',
     logoId:'crown',
     ...
   }

   Crown 的武器：
   {
     id:'knock-o',
     logoId:'crown',
     ...
   }

   Tunnel 的武器：
   {
     id:'zen-guts',
     logoId:'tunnel',
     ...
   }

4. 不想显示 Logo：
   直接不要写 logoId 即可。

   人物 / 梦幻体目前默认都没有 logoId，所以详情页不显示 Logo。

5. 列表页 / 缩略图：
   无论对象有没有 logoId，都不会在缩略图左上角显示 Logo。
   Logo 只用于详情页标题身份区域。

6. 新增三骑：

   logos:{
     crown:{...},
     tunnel:{...},
     third:{ src:'../assets/images/logos/third-logo.png', alt:'三骑 Logo' }
   }

   三骑本人及其专属道具写：
   logoId:'third'

7. 替换美术：
   当前 assets/images/logos/ 中的 crown-logo.svg / tunnel-logo.svg 是占位图。
   可以直接换成你自己的透明 PNG/WebP/SVG，并修改 logos 中的文件路径。

8. 单个对象特殊 Logo：
   如果某个对象不想用系列 Logo，可直接写：
   logo:'../assets/images/logos/special-logo.png'
   它会优先于 logoId。
