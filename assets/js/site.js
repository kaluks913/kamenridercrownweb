const D=window.CROWN_DATA;
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const isPublished=x=>x && x.published!==false;
const cleanHomePath=p=>(p||'').replace(/^\.\.\//,'');

function header(){
  const h=$('.site-header'); if(!h)return;
  $('.menu-toggle',h)?.addEventListener('click',()=>$('.nav',h).classList.toggle('open'));
}

function byIds(list,ids=[]){
  return ids.map(id=>list.find(x=>x.id===id)).filter(isPublished);
}

function home(){
  const H=D.home||{};
  if($('.hero-poster') && H.heroPoster) $('.hero-poster').src=H.heroPoster;
  if($('#news-list')) $('#news-list').innerHTML=D.news.map(n=>`<div class="news-row"><b>${n.date}</b><span class="tag">${n.tag}</span><span>${n.text}</span></div>`).join('');

  const charRoot=$('#characters');
  if(charRoot){
    const chars=byIds(D.characters,H.characterIds);
    charRoot.innerHTML=chars.map(c=>`<a class="card" href="character/index.html#${c.id}"><img class="card-image" src="${cleanHomePath(c.image)}" alt="${c.name}"><div class="card-body"><span class="eyebrow">人物</span><h3>${c.name}</h3><p>${c.en}</p></div></a>`).join('');
  }

  const monsterRoot=$('#monsters');
  if(monsterRoot){
    const mons=byIds(D.monsters,H.monsterIds);
    monsterRoot.innerHTML=mons.map(m=>`<a class="card monster-card" href="monster/index.html#${m.id}"><img class="card-image" src="${cleanHomePath(m.image)}" alt="${m.name}"><div class="card-body"><span class="eyebrow">梦幻体 No.${m.no}</span><h3>${m.name}</h3><p>${m.en}</p></div></a>`).join('');
  }

  const itemRoot=$('#item-preview');
  if(itemRoot){
    const items=byIds(D.items,H.itemIds);
    itemRoot.innerHTML=items.map(x=>`<a class="item-preview-card" href="item/index.html#${x.id}"><img src="${cleanHomePath(x.image)}" alt="${x.name}"><div><span class="eyebrow">${x.category}</span><h3>${x.name}</h3><p>${x.en}</p></div></a>`).join('');
  }

  const rf=H.riderFeature;
  const riderRoot=$('#home-rider-feature');
  if(riderRoot && rf){
    const rider=(D.riders||[]).find(r=>r.id===rf.riderId && isPublished(r));
    const form=rider?.forms?.find(f=>f.id===rf.formId)||rider?.forms?.[0];
    if(rider && form){
      riderRoot.innerHTML=`<div class="rider-grid"><img class="rider-main" src="${rf.image}" alt="${rider.name} ${form.cn}"><div class="slash-card"><div class="big-no">${rider.no||form.no}</div><p class="eyebrow">本周骑士</p><h2 class="home-rider-name">${rider.en}</h2><h3>${form.cn}</h3><p>${rf.note||form.intro}</p><a class="button" href="rider/index.html?rider=${rider.id}#${form.id}">查看骑士资料 →</a></div></div>`;
    }
  }

  const storyRoot=$('#home-story');
  if(storyRoot){
    const s=(D.stories||[]).find(x=>x.id===H.storyId)||(D.stories||[])[0];
    if(s){
      storyRoot.innerHTML=`<div class="story-grid"><img src="${cleanHomePath(s.image||H.heroPoster)}" alt="第 ${s.episode} 集"><div><div class="episode-no">${s.episode}</div><p class="eyebrow">第 ${s.episode} 集</p><h2 class="home-story-title">${s.title}</h2><p class="home-story-summary">${s.summary}</p><a class="button" href="story/index.html#${s.id}">查看本集故事 →</a></div></div>`;
    }
  }
}

function rider(){
  const root=$('#rider-root'); if(!root)return;
  const riders=(D.riders||[]).filter(isPublished);
  const riderTabs=$('#rider-tabs');
  const formTabs=$('#form-tabs');
  const title=$('#rider-title');
  if(!riders.length){root.innerHTML='<p>目前没有公开的骑士资料。</p>';return;}

  const params=new URLSearchParams(location.search);
  let currentRider=riders.find(r=>r.id===params.get('rider'))||riders[0];

  function renderRiderTabs(){
    riderTabs.innerHTML=riders.map(r=>`<button class="rider-tab ${r.id===currentRider.id?'active':''}" data-rider="${r.id}"><span>${r.no||''}</span>${r.name}</button>`).join('');
    if(title) title.textContent=currentRider.en;
  }

  function renderFormTabs(){
    formTabs.innerHTML=currentRider.forms.map(f=>`<button class="form-tab" data-id="${f.id}">${f.no} ${f.cn}</button>`).join('');
  }

  function renderForm(id){
    const f=currentRider.forms.find(x=>x.id===id)||currentRider.forms[0];
    $$('.form-tab',formTabs).forEach(b=>b.classList.toggle('active',b.dataset.id===f.id));
    root.innerHTML=`
      <div class="rider-visual-panel"><div class="image-switcher" data-index="0"><div class="image-stage"><img src="${f.full}" alt="${f.cn} 全身设定图" class="switch-image active"><img src="${f.head}" alt="${f.cn} 头部特写" class="switch-image"></div><button class="image-arrow prev" aria-label="上一张">‹</button><button class="image-arrow next" aria-label="下一张">›</button><div class="image-dots"><button class="dot active">全身设定</button><button class="dot">头部特写</button></div></div></div>
      <div class="rider-copy-panel"><div class="big-no">${f.no}</div><span class="eyebrow">${currentRider.name} / 形态资料</span><h2 class="form-name">${f.name}</h2><h3>${f.cn}</h3><p class="form-intro">${f.intro}</p><blockquote>${f.call}</blockquote><div class="stats">${f.stats.map(s=>`<div class="stat"><b>${s.label}</b>${s.value}</div>`).join('')}</div><section class="rider-info-block"><h3>能力总览</h3><ul>${f.abilities.map(a=>`<li>${a}</li>`).join('')}</ul></section><section class="rider-info-block"><h3>身体结构 / 编号部件</h3><div class="component-list">${f.components.map(c=>`<div class="component-row"><strong>${c.no}</strong><div><b>${c.name}</b><p>${c.text}</p></div></div>`).join('')}</div></section></div>`;
    setupImageSwitcher($('.image-switcher',root));
    const url=new URL(location.href); url.searchParams.set('rider',currentRider.id); url.hash=f.id; history.replaceState(null,'',url);
  }

  riderTabs.onclick=e=>{
    const b=e.target.closest('[data-rider]'); if(!b)return;
    currentRider=riders.find(r=>r.id===b.dataset.rider)||riders[0];
    renderRiderTabs(); renderFormTabs(); renderForm(currentRider.forms[0]?.id);
  };
  formTabs.onclick=e=>{const b=e.target.closest('button[data-id]'); if(b)renderForm(b.dataset.id)};
  renderRiderTabs(); renderFormTabs(); renderForm(location.hash.slice(1)||currentRider.forms[0]?.id);
}

function setupImageSwitcher(root){
  if(!root)return;
  const imgs=$$('.switch-image',root), dots=$$('.dot',root); let i=0;
  const show=n=>{i=(n+imgs.length)%imgs.length; imgs.forEach((x,k)=>x.classList.toggle('active',k===i)); dots.forEach((x,k)=>x.classList.toggle('active',k===i)); root.dataset.index=i};
  $('.prev',root)?.addEventListener('click',()=>show(i-1));
  $('.next',root)?.addEventListener('click',()=>show(i+1));
  dots.forEach((d,k)=>d.addEventListener('click',()=>show(k)));
}

function characterList(){
  const root=$('#character-list'); if(!root)return;
  root.innerHTML=(D.characters||[]).filter(isPublished).map(x=>`<article class="detail-card" id="${x.id}"><img src="${x.image}" alt="${x.name}"><span class="eyebrow">登场人物</span><h2>${x.name}</h2><h3>${x.en}</h3><p>${x.intro}</p></article>`).join('');
}

function monsters(){
  const root=$('#monster-list'); if(!root)return;
  const categories=(D.monsterCategories||[]).filter(c=>isPublished(c) && (D.monsters||[]).some(m=>isPublished(m)&&m.categoryId===c.id));
  if(!categories.length){root.innerHTML='<p>目前没有公开的梦幻体资料。</p>';return;}
  const tabs=$('#monster-tabs');
  let current=categories.find(c=>c.id===new URLSearchParams(location.search).get('category'))||categories[0];
  function renderTabs(){tabs.innerHTML=categories.map(c=>`<button class="monster-tab ${c.id===current.id?'active':''}" data-category="${c.id}">${c.name}<small>${c.en}</small></button>`).join('')}
  function renderCards(){
    const list=(D.monsters||[]).filter(m=>isPublished(m)&&m.categoryId===current.id);
    root.innerHTML=list.map(x=>`<article class="detail-card monster-detail" id="${x.id}"><img src="${x.image}" alt="${x.name}"><span class="eyebrow">${current.name} / 梦幻体 No.${x.no}</span><h2>${x.name}</h2><h3>${x.en}</h3><p>${x.intro}</p></article>`).join('');
    const hash=location.hash.slice(1); if(hash) document.getElementById(hash)?.scrollIntoView({block:'center'});
  }
  tabs.onclick=e=>{const b=e.target.closest('[data-category]');if(!b)return;current=categories.find(c=>c.id===b.dataset.category)||categories[0];renderTabs();renderCards();const u=new URL(location.href);u.searchParams.set('category',current.id);u.hash='';history.replaceState(null,'',u)};
  renderTabs();renderCards();
}

function items(){
  const root=$('#item-list'); if(!root)return;
  const cats=[...new Set(D.items.map(x=>x.category))];
  root.innerHTML=cats.map(cat=>`<section class="item-category"><div class="category-title"><span class="chess-file">${String.fromCharCode(65+cats.indexOf(cat))}</span><h2>${cat}</h2></div><div class="item-grid">${D.items.filter(x=>x.category===cat).map(x=>{const related=(x.relatedToys||[]).map(id=>D.toys?.find(t=>t.id===id)).filter(Boolean);const toyLinks=related.length?`<div class="related-toys">${related.map(t=>`<a class="button" href="../archive/item.html?id=${t.id}">查看 ${t.name} →</a>`).join('')}</div>`:'';return `<article class="item-card" id="${x.id}"><img src="${x.image}" alt="${x.name}"><div><span class="eyebrow">${x.category}</span><h3>${x.name}</h3><p class="en-name">${x.en}</p><p>${x.intro}</p>${toyLinks}</div></article>`}).join('')}</div></section>`).join('');
}

function archive(){
  const root=$('#archive-list'); if(!root)return;
  const toys=D.toys||[];
  root.innerHTML=toys.map(x=>`<a class="toy-box" href="item.html?id=${x.id}"><img src="${x.package}" alt="${x.name} 伪包装主视觉"><div class="toy-box-label"><span>${x.category}</span><h2>${x.name}</h2><p>${x.en}</p></div></a>`).join('');
}

function toyDetail(){
  const root=$('#toy-detail'); if(!root)return;
  const toys=D.toys||[]; if(!toys.length){root.innerHTML='<div class="manual-empty">目前还没有公开的伪玩具商品。</div>';return;}
  const id=new URLSearchParams(location.search).get('id')||toys[0].id; const x=toys.find(v=>v.id===id)||toys[0]; const manuals=x.manuals||[];
  const included=(x.includedItems||[]).map(id=>D.items.find(v=>v.id===id)).filter(Boolean);
  const includedHtml=included.length?`<div class="toy-includes"><span class="eyebrow">套装内容</span><p>${included.map(v=>`<a href="../item/index.html#${v.id}">${v.name}</a>`).join(' / ')}</p></div>`:'';
  root.innerHTML=`<section class="toy-hero"><div class="toy-package"><img src="${x.package}" alt="${x.name} 包装主视觉"></div><div class="toy-copy"><span class="eyebrow">${x.category}</span><h1>${x.name}</h1><h2>${x.en}</h2><p>${x.intro}</p>${includedHtml}<a class="button" href="../item/index.html">返回主站道具设定</a></div></section><section class="manual-viewer"><div class="manual-head"><div><span class="eyebrow">电子说明书</span><h2>说明书浏览</h2></div><div id="manual-count"></div></div><div class="manual-stage">${manuals.length?`<button class="manual-arrow prev">‹</button><img id="manual-image" src="${manuals[0]}" alt="${x.name} 说明书"><button class="manual-arrow next">›</button>`:`<div class="manual-empty">此商品的说明书图片尚未加入。</div>`}</div>${manuals.length?`<div class="manual-thumbs">${manuals.map((m,i)=>`<button data-i="${i}" class="${i===0?'active':''}">${String(i+1).padStart(2,'0')}</button>`).join('')}</div>`:''}</section>`;
  if(manuals.length){let i=0;const img=$('#manual-image',root),count=$('#manual-count',root),thumbs=$$('.manual-thumbs button',root);const show=n=>{i=(n+manuals.length)%manuals.length;img.src=manuals[i];count.textContent=`${i+1} / ${manuals.length}`;thumbs.forEach((b,k)=>b.classList.toggle('active',k===i))};$('.manual-arrow.prev',root).onclick=()=>show(i-1);$('.manual-arrow.next',root).onclick=()=>show(i+1);thumbs.forEach((b,k)=>b.onclick=()=>show(k));show(0)}
}

function story(){
  const root=$('#story-content'); if(!root)return;
  const stories=(D.stories||[]).filter(x=>x.published!==false);
  if(!stories.length){root.innerHTML='<p>目前没有公开的故事。</p>';return;}
  const tabs=$('#story-tabs');

  const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const imageMarkup=(img,cls='')=>{
    if(!img?.src) return `<div class="story-image-placeholder ${cls}"><strong>${esc(img?.label||'图片 / 导图位置')}</strong><span>在 site-data.js 中填写 src 后会自动显示</span></div>`;
    return `<figure class="story-media ${cls}"><img src="${img.src}" alt="${esc(img.alt||img.caption||'故事插图')}" loading="lazy">${img.caption?`<figcaption>${img.caption}</figcaption>`:''}</figure>`;
  };
  const renderBlock=b=>{
    if(!b||b.hidden===true)return '';
    switch(b.type){
      case 'heading': return `<h2 class="story-section-heading">${b.text||''}</h2>`;
      case 'subheading': return `<h3 class="story-subheading">${b.text||''}</h3>`;
      case 'paragraph': return `<div class="story-paragraph">${b.html??b.text??''}</div>`;
      case 'quote': return `<blockquote class="story-quote">${b.html??b.text??''}${b.by?`<cite>— ${b.by}</cite>`:''}</blockquote>`;
      case 'image': return imageMarkup(b,b.wide?'wide':'');
      case 'guide': return `<section class="story-guide"><div class="story-guide-head"><span class="eyebrow">GUIDE</span><h2>${b.title||'本集导图'}</h2>${b.note?`<p>${b.note}</p>`:''}</div>${imageMarkup(b,'wide')}</section>`;
      case 'gallery': {
        const imgs=b.images||[]; return `<section class="story-gallery ${imgs.length===2?'two':''}">${imgs.map(i=>imageMarkup(i)).join('')}</section>`;
      }
      case 'divider': return '<div class="story-divider"><span>♔</span></div>';
      case 'callout': return `<aside class="story-callout">${b.title?`<strong>${b.title}</strong>`:''}<div>${b.html??b.text??''}</div></aside>`;
      case 'html': return `<div class="story-raw">${b.html||''}</div>`;
      default: return '';
    }
  };

  function render(id){
    const s=stories.find(x=>x.id===id)||stories[0];
    if(tabs) tabs.innerHTML=stories.map(x=>`<button class="story-tab ${x.id===s.id?'active':''}" data-story="${x.id}"><span>EP.${x.episode}</span><small>${x.title}</small></button>`).join('');
    const idx=stories.findIndex(x=>x.id===s.id), prev=stories[idx-1], next=stories[idx+1];
    let body='';
    if(Array.isArray(s.content)&&s.content.length) body=s.content.map(renderBlock).join('');
    else if(s.columnTitle||s.column) body=`<div class="column"><span class="eyebrow">本集文章</span><h2>${s.columnTitle||''}</h2><p>${s.column||''}</p></div>`;
    root.innerHTML=`<header class="story-episode-head"><div class="episode-no">${s.episode}</div><div><p class="eyebrow">${s.date||''}${s.date?' 更新':''}</p><h1>${s.title}</h1></div></header>${s.image?`<figure class="story-cover"><img src="${s.image}" alt="第 ${s.episode} 集主视觉"></figure>`:''}<p class="lead">${s.summary||''}</p><div class="story-rich">${body}</div><nav class="story-pager">${prev?`<button data-story-go="${prev.id}" class="story-page-link prev"><small>上一集</small><b>EP.${prev.episode} ${prev.title}</b></button>`:'<span></span>'}${next?`<button data-story-go="${next.id}" class="story-page-link next"><small>下一集</small><b>EP.${next.episode} ${next.title}</b></button>`:'<span></span>'}</nav>`;
    history.replaceState(null,'','#'+s.id);
    window.scrollTo({top:0,behavior:'smooth'});
  }
  tabs?.addEventListener('click',e=>{const b=e.target.closest('[data-story]');if(b)render(b.dataset.story)});
  root.addEventListener('click',e=>{const b=e.target.closest('[data-story-go]');if(b)render(b.dataset.storyGo)});
  render(location.hash.slice(1)||D.home?.storyId||stories[0].id);
}

document.addEventListener('DOMContentLoaded',()=>{header();home();rider();characterList();monsters();items();archive();toyDetail();story()});
