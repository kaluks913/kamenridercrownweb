Logo 规则（v0.72）
==================
这里的 Logo 是“骑士/阵营/系列 Logo”，不是栏目 Logo。

当前占位文件：
- crown-logo.svg  -> Crown 系列
- tunnel-logo.svg -> Tunnel 系列

可以直接用你自己的透明 PNG / WebP / SVG 替换，并在 data/site-data.js 的 logos 中修改路径。

对象只有写了 logoId 才会显示 Logo，例如：
  logoId:'crown'

不写 logoId：完全不显示 Logo。
列表页/缩略图不会显示 Logo；详情页标题区域才会根据 logoId 选择性显示。

新增三骑示例：
  logos:{
    crown:{src:'../assets/images/logos/crown-logo.png',alt:'Crown Logo'},
    tunnel:{src:'../assets/images/logos/tunnel-logo.png',alt:'Tunnel Logo'},
    third:{src:'../assets/images/logos/third-logo.png',alt:'三骑 Logo'}
  }
然后三骑本人或其专属道具中写： logoId:'third'
