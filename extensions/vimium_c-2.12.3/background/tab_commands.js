"use strict"
;__filename="background/tab_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./i18n","./run_commands","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tools"],(e,l,i,t,n,r,o,d,u,f,a,s,v,w,m)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.toggleWindow=l.Ne=l.Te=l.toggleTabUrl=l.togglePinTab=l.toggleMuteTab=l.removeTab=l.reloadTab=l.moveTabToNextWindow=l.moveTabToNewWindow=l.joinTabs=l.copyWindowInfo=void 0
;let c=Math.abs,p=()=>{i.$&&v.focusFrame(i.$,!1,0,1)
},b=e=>i.M.end?null:i.M.position!=null?s.newTabIndex(e,i.M.position,!1,!1):i.M.rightInOld!=null?e.index+(i.M.rightInOld?0:1):e.index+(i.M.right!==!1?1:0)
;l.copyWindowInfo=e=>{
let l=i.M.filter,r=i.M.keyword,o=i.M.decoded,s=o!=null?o:i.M.decode,v=i.M.format,m=i.M.type,p=m==="tab"&&(c(i.g)>1||!!l),b=a.P(i.M),I={
d:s!==!1,s:b,k:r};if(m==="frame"&&i.$&&!v){let l;return i.$.s.c&128?(i.$.postMessage({N:3,H:18,U:1,o:I}),l=1):l=d.he({
H:18,U:1,o:I}),void(l!==1&&(l&&l instanceof Promise?l.then(()=>{e(1)}):e(1)))}n.ge.query(m==="browser"?{
windowType:"normal"}:{active:m!=="window"&&!p||void 0,lastFocusedWindow:!0},o=>{var a
;if((!m||m!=="browser"&&m!=="window"&&m!=="tab"&&typeof m=="string")&&!v){if(!o.length)return void e(0)
;let l=!!m&&/^raw.?url$/i.test(m),r=m==="title"?o[0].title:!m||m==="frame"||m==="url"||l?n.getTabUrl(o[0]):(((a=t.Pn(n.getTabUrl(o[0])))===null||a===void 0?void 0:a[m])||"")+"",d=m==="title"?{
s:r}:{u:r};return d.o=I,l&&(I.d=!1),d.n=f.parseFallbackOptions(i.M),void i.bn[18](d,i.$)}
let c=i.$?i.$.s.se:i.fe===2,g=""+(v||"${title}: ${url}"),x=i.M.join,y=x==="json"&&!v;if(p){
let e=o.length<2?0:n.selectIndexFrom(o),l=w.getTabRange(e,o.length);o=o.slice(l[0],l[1])
}else o=o.filter(e=>e.incognito===c);if(l){let e=i.$?i.$.s.u:i.ye,t=o.find(l=>l.id===e);o=w.ne(t,o,l)}
if(!o.length)return void e(0);m==="browser"&&o.sort((e,l)=>e.windowId-l.windowId||e.index-l.index);let _=o.map(e=>y?{
title:e.title,url:s?t.Jl(n.getTabUrl(e)):n.getTabUrl(e)}:g.replace(/\$\{([^}]+)}/g,(l,i)=>i.split("||").reduce((l,i)=>{
var r;let o
;return l||(s&&i==="url"?t.Jl(n.getTabUrl(e)):/^raw.?url$/i.test(i)?n.getTabUrl(e):i==="host"?((r=t.Pn(n.getTabUrl(e)))===null||r===void 0?void 0:r.host)||"":i!=="__proto__"&&(o=e[i],
o&&typeof o=="object"?JSON.stringify(o):o||""))},"")));Promise.resolve(i.Kl(_,x,b,r)).then(l=>{e(1),
d.showHUD(m==="tab"&&o.length<2?l:u.D("copiedWndInfo"),15)})})},l.joinTabs=e=>{
let l=i.M.order!=null?i.M.order:i.M.sort,r=i.M.windows,o=r==="current",d=r==="all",u=u=>{let f=i.fe===2
;u=o?u:u.filter(e=>e.incognito===f);let a=o?u:u.filter(e=>e.id===i.xe);if(!o&&!a.length)return void e(0);let s=r=>{
let d=[],f=e=>{d.push(e)};if(u.sort((e,l)=>e.id-l.id).forEach(e=>{e.tabs.forEach(f)}),!d.length)return void e(0)
;let a=i.M.filter,s=r?r.id:i.xe,v=d.find(e=>e.id===i.ye)||(r?n.selectFrom(r.tabs):d[0]);if(o&&c(i.g)>1&&d.length>1){
let e=d.findIndex(e=>e.id===v.id),l=w.getTabRange(e,d.length);d=d.slice(l[0],l[1])}if(a){let e={};d=w.ne(v,d,a,e),
a=e.known?a:null}if(!d.length)return void e(0);d=l?w.Mn(d,l):d
;let m,p=i.M.position,b=p==="before"||(p+"").startsWith("prev")
;a&&r?p&&typeof p=="string"&&p!=="keep"?p==="begin"||p==="start"?m=r.tabs.filter(e=>e.pinned).length:p!=="end"?(d.includes(v)&&d.splice(d.indexOf(v),1),
b?d.push(v):d.unshift(v),
m=Math.max(0,r.tabs.findIndex(e=>e.id===i.ye)-d.filter(e=>e.windowId===s&&e.index<v.index).length)):m=r.tabs.length:m=d.reduce((e,l)=>l.windowId===s?Math.min(l.index,e):e,d.length):m=r?r.tabs.length:0
;let I,g=t.Et(),x=d.length,y=()=>(x--,x===0&&g.At(1),n.oe()),_=x,h=1;for(;_<d.length;_=h,h=_+1)if(I=n.getGroupId(d[_]),
I!==null){for(;h<d.length&&n.getGroupId(d[h])===I;h++);if(h>_+1){let e=d[_].id,l=d.slice(_+1,h).map(e=>e.id)
;n.ge.ungroup(l,y),x++,g.Vt.then(()=>{n.ge.get(e,e=>{if(!e)return n.oe();let i=n.getGroupId(e);n.ge.group(i!==null?{
groupId:i,tabIds:l}:(l.unshift(e.id),{tabIds:l}))})})}}for(_=0;_<d.length;_++)n.ge.move(d[_].id,d[_].windowId!==s?{
windowId:s,index:m+_}:{index:m+_},y);for(let e of d)e.pinned&&e.windowId!==s&&(n.tabsUpdate(e.id,{pinned:!0},y),x++)
;g.Vt.then(e)};{let e=a.length?a[0]:null;if(e&&e.type==="popup"&&e.tabs.length){let l=n.selectFrom(e.tabs).id
;e.tabs=e.tabs.filter(e=>e.id!==l),n.makeWindow({tabId:l,incognito:e.incognito},e.state,e=>{e&&(i.xe=e.id,
e.tabs[0]&&(i.ye=e.tabs[0].id)),s(e)})}else u=o||!e||d||l&&!r?u:u.filter(l=>l.id!==e.id),s(e)}}
;o?n.getCurWnd(!0,e=>e?u([e]):n.oe()):(i.g=1,n.Be.getAll({populate:!0,windowTypes:["normal","popup"]},u))},
l.moveTabToNewWindow=e=>{let l=!!i.M.all,t=r=>{var o
;let a,s=r.tabs,v=s.length,m=i.M.focused!==!1,I=n.selectIndexFrom(s),g=s[I]
;if(!l&&v<=1&&(!v||g.index===0&&c(i.g)>1))return void e(0);a=l?[0,v]:v===1?[0,1]:w.getTabRange(I,v)
;let x=i.M.filter,y=s.slice(a[0],a[1]);if(y=x?w.ne(g,y,x):y,!y.length)return void e(0);if(!l){let l=y.length
;if(l>=v&&v>1)return e(0),void d.showHUD(u.D("moveAllTabs"))
;if(l>30&&f.ie())return void f.x("moveTabToNewWindow",l).then(t.bind(null,r))
;if(v===1&&g.index===0&&c(i.g)===1)return void n.ke(n.ge.query,{windowId:r.id,index:1}).then(l=>{
if(!l||!l.length)return e(0),void d.showHUD(u.D("moveAllTabs"));r.tabs=[r.tabs[0],l[0]],t(r)})}
let _=g.incognito,h=y.includes(g)?g:y[0],T=((o=b(g))!==null&&o!==void 0?o:g.index+1)<=g.index,k={tabId:h.id,incognito:_,
focused:m},M=r.type==="normal"?r.state:"";w.In(y[T?y.length-1:0],T,s).then(l=>{m||l&&n.selectTab(l.id),
n.makeWindow(k,M,i=>{if(!i)return void e(0);p(),m&&l&&n.selectTab(l.id)
;let t=y.indexOf(h),r=y.slice(0,t),o=y.slice(t+1),d=r.length,u=o.length;if(d)for(let e=0;e<d;e++)n.ge.move(r[e].id,{
index:e,windowId:i.id},n.oe);if(u)for(let e=0;e<u;e++)n.ge.move(o[e].id,{index:d+1+e,windowId:i.id},n.oe)
;for(let e of y)e.pinned&&n.tabsUpdate(e.id,{pinned:!0});e(1)})})},r=l=>{let t=n.selectFrom(l.tabs)
;if(l.incognito&&t.incognito)return e(0),d.showHUD(u.D("hasIncog"));let r=t.id,o={incognito:!0},a=n.getTabUrl(t)
;if(t.incognito);else{if(n.b(a))return e(0),d.complainLimits(u.D("openIncog"));o.url=a}l.tabs=null,n.Be.getAll(t=>{
let d=i.M.focused!==!1;if((t=t.filter(e=>e.incognito&&e.type==="normal")).length)return void n.ge.query({
windowId:s.preferLastWnd(t).id,active:!0},([e])=>{n.tabsCreate({url:a,windowId:e.windowId,active:i.M.active!==!1,
index:s.newTabIndex(e,i.M.position,!1,!1)},f.getRunNextCmdBy(3)),d&&n.selectWnd(e),n.ge.remove(r)})
;let u=l.type==="normal"?l.state:"",v=o.url!=null;v?i.Q.ho&&(d=!0,u=""):o.tabId=r,o.focused=d,n.makeWindow(o,u,l=>{
v||l&&p(),v&&l?f.getRunNextCmdBy(0)(l.tabs&&l.tabs[0]||null):e(!!l)}),v&&n.ge.remove(r)})},o=!!i.M.incognito
;o&&(i.$?i.$.s.se:i.fe===2)?(d.showHUD(u.D("hasIncog")),
e(0)):(l||c(i.g)!==1&&!o?n.ke(n.getCurWnd,!0):n.ke(n.getCurWnd,!1).then(e=>e&&n.ke(n.ge.query,{windowId:e.id,active:!0
}).then(l=>(e.tabs=l,l&&l.length?e:void 0)))).then(l=>{l?(o?r:t)(l):e(0)})},l.moveTabToNextWindow=([e],t)=>{
function r(r,u){let f,a=i.M.focused!==!1,s=i.M.filter,v=!!(i.M.tabs||s||d);if(r.length>0){
f=r.map(e=>e.id).sort((e,l)=>e-l);let l=f.indexOf(e.windowId);if(f.length>=2||f.length>0&&l<0){
let m=i.M.nextWindow,I=d?1:(m==null?1:typeof m=="boolean"?m?1:-1:0|+m||1)*(v?1:i.g),g=d?0:l>=0?I>0?l+1:l:0,x=I>0?g+I-1:g+I
;x=(x%f.length+f.length)%f.length,x=x!==l?x:x+(I>0?1:-1),x=(x%f.length+f.length)%f.length
;let y=f[x],_=r.find(e=>e.id===y),h=a&&!o&&_&&_.state==="minimized"?u&&u.state==="maximized"?u.state:"normal":""
;return void n.ge.query({windowId:y,active:!0},([l])=>{let r=b(l),o=r==null||r>l.index,d=null,u=!1,f=null,m=()=>{
if(u===!1)return void w.In(e,!o,f).then(e=>{u=e,m()});let s;a||u&&n.selectTab(u.id),n.ge.move(e.id,{
index:r!==null&&r!==void 0?r:-1,windowId:y},l=>{if(n.oe())return t(0),n.selectWnd(e),n.oe()
;Promise.resolve(s).then(()=>t(1)),d=d||[e];for(let e=0;e<d.length;e++)d[e].id!==l.id&&n.ge.move(d[e].id,{
index:l.index+e,windowId:l.windowId},n.oe),d[e].pinned&&n.ge.update(d[e].id,{pinned:!0});i.$&&i.$.s.u===l.id&&p()}),
a&&(h&&n.Be.update(y,{state:h}),n.selectWnd(l)),s=i.M.active!==!1&&new Promise(l=>{n.selectTab(e.id,l)}),
a&&u&&n.selectTab(u.id)};!v||!s&&c(i.g)===1?m():w.Me(!0,0,(l,i)=>{if(f=l.slice(0),e=l[i[1]],l=l.slice(i[0],i[2]),s){
if(!(l=w.ne(e,l,s)).length)return void t(0);e=l.includes(e)?e:l[0]}d=l,u=(d.length!==1||!d[0].active)&&null,m()},[],t)})
}}else r=u?[u]:[];v&&c(i.g)>1?l.moveTabToNewWindow(t):w.In(e,!1).then(l=>{a||l&&n.selectTab(l.id),n.makeWindow({
tabId:e.id,incognito:e.incognito,focused:a},r.length===1&&r[0].type==="normal"?r[0].state:"",i=>{i&&(p(),
a&&l&&n.selectTab(l.id)),e.pinned&&i&&i.tabs&&i.tabs[0]&&n.tabsUpdate(i.tabs[0].id,{pinned:!0}),t(!!i)})})}
let o=i.M.minimized===!1||i.M.min===!1,d=i.M.last;d?w.wn("normal",!1,e.incognito,e.windowId,o).then(e=>{
!e||e instanceof Array?r(e[0].slice(0,1),e[1]):r([e])}):n.Be.getAll(l=>{
r(l.filter(l=>l.incognito===e.incognito&&l.type==="normal"&&(!o||l.state!=="minimized")),l.find(l=>l.id===e.windowId))})
},l.reloadTab=(e,[t,r,o],d,u)=>{let a={bypassCache:i.M.hard===!0},s=n.ge.reload,v=e
;if(c(i.g)<2||i.M.single)return void s(e[u?r:t].id,a,f.getRunNextCmdBy(0));let m=e[r],p=i.M.filter;if(e=e.slice(t,o),p){
if(!(e=w.ne(m,e,p)).length)return void d(0);m=e.includes(m)?m:e[0]}
if(e.length>20&&f.ie())f.x("reloadTab",e.length).then(l.reloadTab.bind(null,v,[t,r,o],d));else{
s(m.id,a,f.getRunNextCmdBy(0));for(let l of e)l!==m&&s(l.id,a)}},l.removeTab=(e,t,r)=>{var o
;let d=i.M.highlighted,u=i.M.goto||(i.M.left?"left":""),a=(u+"").split(/[\/,;\s]/),s=a.length>1?a[c(i.g)>1?1:0]:u+"",v=s==="near"||s==="reverse"||s.startsWith("back"),p=s.startsWith("forw"),b=v?i.g>0:p?i.g<0:s==="left",x=v?i.g<0:p?i.g>0:s==="right",y=s.includes("previous"),_=y&&s.includes("only")
;if(!t){let t=c(i.g)>1||d||y&&!_;return void(t?n.getCurTabs:n.getCurTab)(l.removeTab.bind(null,e,t?2:1))}
if(!r||!r.length)return e(0),n.oe()
;let h,T=r.length,k=n.selectIndexFrom(r),M=r[k],z=1,j=k,P=k+1,$=(o=i.M.noPinned)!==null&&o!==void 0?o:r[0].pinned!==M.pinned&&!(i.g<0&&k&&r[k-1].pinned)
;if(c(i.g)>1&&T>1){let i=0;if($){for(;i<r.length&&r[i].pinned;)i++;if(i>=r.length)return void e(0)}
let n=w.getTabRange(k-i,T-i,T)
;if(z=n[1]-n[0],z>20&&f.ie()&&t<3)return void f.x("removeTab",z).then(l.removeTab.bind(null,e,2,r));z>1&&(j=i+n[0],
P=i+n[1])}else if(d){let l=r.filter(e=>e.highlighted&&e!==M&&!($&&e.pinned)),i=d==="no-current"||$&&M.pinned
;if(z=l.length+1,z>1&&(i||z<T)&&n.ge.remove(l.map(e=>e.id),n.oe),i)return void e(z>1)}else{
if($&&M.pinned)return void e(0);if(i.M.filter&&w.ne(M,[M],i.M.filter).length===0)return void e(0)}
if(!j&&z>=T&&(i.M.mayClose!=null?i.M.mayClose:i.M.allow_close)!==!0)return void(t<2?n.getCurTabs(l.removeTab.bind(null,e,3)):n.Be.getAll(I.bind(null,e,M,r)))
;if(t<2){if(_){let e=w.Ee();e>=0&&(h=n.ke(n.tabsGet,e))}else(x||b&&j>0)&&(h=n.ke(n.ge.query,{windowId:M.windowId,
index:b?j-1:j+1}).then(e=>e&&e[0]));if(h)return void h.then(i=>{i&&i.windowId===M.windowId&&n.Oe(i)?n.Pe(M.id,l=>{
l&&n.selectTab(i.id),e(l)}):n.getCurTabs(l.removeTab.bind(null,e,3))})}let A=T;if(z>=T);else if(y){
let e=!_&&P<T&&!i.Ae.has(r[P].id)?r[P]:r.filter((e,l)=>(l<j||l>=P)&&i.Ae.has(e.id)).sort(m.Ve.He)[0];A=e?r.indexOf(e):T
}else if(b||x){let e=A=b?j>0?j-1:P:P<T?P:j-1;for(;e>=0&&e<T&&(e<j||e>=P)&&!n.Oe(r[e]);)e+=e<j?-1:1;A=e>=0&&e<T?e:A}
if(A>=0&&A<T){let l=r[A].id;if(Math.min(P,r.length)-Math.max(0,j)==1)return n.Pe(M.id,i=>{i&&n.selectTab(l),e(i)}),
void n.selectTab(l);n.selectTab(l)}g(M,r,j,P,e)};let I=(e,l,t,r)=>{let o,d,u=!1;r=r.filter(e=>e.type==="normal"),
i.M.keepWindow==="always"?u=!r.length||r.some(e=>e.id===l.windowId):r.length<=1?(u=!0,
(d=r[0])&&(d.id!==l.windowId?u=!1:d.incognito&&!n.b(i.newTabUrl_f)&&(o=d.id))):l.incognito||(r=r.filter(e=>!e.incognito)).length===1&&r[0].id===l.windowId&&(o=r[0].id,
u=!0),u&&n.tabsCreate({index:t.length,url:"",windowId:o},f.getRunNextCmdBy(3)),g(l,t,0,t.length,u?null:e)
},g=(e,l,t,r,o)=>{let d=Math.max(0,l.indexOf(e));n.Pe(e.id,o||n.oe);let u=l.slice(d+1,r),f=l.slice(t,d)
;i.g<0&&([u,f]=[f,u]),
u.length>0&&n.ge.remove(u.map(e=>e.id),n.oe),f.length>0&&n.ge.remove(f.map(e=>e.id).reverse(),n.oe)}
;l.toggleMuteTab=e=>{let l,t=i.M.filter,r=i.M.currentWindow,o=i.M.others,f=o!=null?o:i.M.other
;if(!(i.M.all||r||t||f))return void n.getCurTab(([l])=>{let t=!n.isTabMuted(l),r=i.M.mute!=null?!!i.M.mute:t
;r===t&&n.tabsUpdate(l.id,{muted:r}),d.showHUD(u.D(r?"muted":"unmuted")),e(1)});let a=r=>{
let o=f?i.$?i.$.s.u:i.ye:-1,u=r.length===0||o!==-1&&r.length===1&&r[0].id===o
;if(i.M.mute!=null)u=!!i.M.mute;else for(let e of r)if(e.id!==o&&!n.isTabMuted(e)){u=!0;break}
if(t&&!(r=w.ne(l,r,t)).length)return void e(0);let a={muted:u}
;for(let e of r)e.id!==o&&u!==n.isTabMuted(e)&&n.tabsUpdate(e.id,a)
;d.showHUDEx(i.$,u?"mute":"unmute",0,[[o===-1?"All":"Other"]]),e(1)},s=w.getNecessaryCurTabInfo(t),v=r&&i.xe>=0?{
audible:!0,windowId:i.xe}:{audible:!0};s?s.then(e=>{l=e,n.ge.query(v,a)}):n.ge.query(v,a)},l.togglePinTab=(e,l,t)=>{
let r=i.M.filter,o=l[1],d=e[o];e=r?w.ne(d,e,r):e;let u=!r||e.includes(d)?!d.pinned:!!e.find(e=>!e.pinned),a={pinned:u
},s=u?0:1,v=0;if(c(i.g)>1&&u)for(;e[v].pinned;)v++
;let m=w.getTabRange(o-v,e.length-v,e.length),p=v+m[s]-s,b=v+m[1-s]-s,I=[]
;for(;p!==b;p+=u?1:-1)(u||e[p].pinned)&&I.push(e[p])
;b=I.length,b?(b<=30||!f.ie()?Promise.resolve(!1):f.x("togglePinTab",b)).then(e=>{e&&(I.length=1)}).then(()=>{
let e=I.includes(d)?d.id:I[0].id;for(let l of I)n.tabsUpdate(l.id,a,l.id===e?n._e(t):n.oe)}):t(0)},
l.toggleTabUrl=(e,t)=>{let a=e[0],v=n.getTabUrl(a),w=i.M.reader,m=i.M.keyword
;if(v.startsWith(i.Q.H))return d.complainLimits(u.D(w?"noReader":"openExtSrc")),void t(0);if(w&&m){let l=o.Se({u:v})
;l&&l.k===m?(f.overrideCmdOptions({keyword:""}),s.openUrlWithActions(l.u,0,!0,e)):(v=r._r(l&&i.M.parsed?l.u:v,m),
s.openUrlWithActions(v,9,!0,e))}else{if(!w)return w?(d.complainLimits(u.D("noReader")),
void t(0)):void(i.M.viewSource?(v=v.startsWith("view-source:")?v.slice(12):"view-source:"+v,
s.openUrlWithActions(v,9,!0,e)):s.openUrlWithActions("$S",3,!0,e));n.ge.toggleReaderMode(a.id).then(()=>{
f.runNextOnTabLoaded(i.M,null)},()=>{l.Te(a,0,{openInReaderMode:!0})})}},l.Te=(e,l,t,r)=>{let o,d=e.id,u=l===1
;if(l&&n.je()&&(r!==!1||n.getGroupId(e)==null)){let l=0,i=-1,t=()=>{let e=n.oe()
;if(e)return n.je().restore(null,f.getRunNextCmdBy(0)),i>=0&&n.ge.remove(i),i=0,e;l+=1,l>=5||setTimeout(()=>{
n.tabsGet(d,t)},50*l*l)};return u&&n.tabsCreate({url:"about:blank",active:!1,windowId:e.windowId},e=>{
i?i=e.id:n.ge.remove(e.id)}),void n.Pe(d,e=>{e&&n.tabsGet(d,t)})}{let l=n.isTabMuted(e);o=e=>{
l!==n.isTabMuted(e)&&n.tabsUpdate(e.id,{muted:l})}}let a={windowId:e.windowId,index:e.index,url:n.getTabUrl(e),
active:e.active,pinned:e.pinned,openerTabId:e.openerTabId};t&&(a=Object.assign(t,a)),a.index!=null&&a.index++,
n.openMultiTabs(a,1,!0,[null],r,e,e=>{e&&n.ge.remove(d),e&&o&&o(e),e?f.runNextOnTabLoaded(i.M,e):f.runNextCmd(0)})},
l.Ne=(e,l,t)=>{let r=null;return(async()=>{let e=l?l.window?n.selectFrom(l.window.tabs):l.tab:null;e&&(r=e)
})().then(async()=>(t&&(await n.ke(n.tabsUpdate,t,{active:!0}),i.xe!==e&&await n.ke(n.Be.update,e,{focused:!0})),r))},
l.toggleWindow=e=>{let l=i.M.target,t=i.M.states;t=typeof t=="string"?t.trim().split(/[\s,;]+/):t,
t=t||["normal","maximized"];let r=i.xe,o=l&&l!=="current"&&l!=="all"?i.yn:r
;o<0?e(0):n.ke(n.Be.get,o).then(e=>e||n.ke(n.Be.get,i.xe)).then(async d=>{if(!d)return void e(0)
;let u=l==="other"||l==="others"?await n.Re(n.Be.getAll).then(e=>(e=e===null||e===void 0?void 0:e.filter(e=>e.id!==r&&e.id!==o&&e.type!=="devtools"))?e.map(e=>e.id):[]):[],f={}
;if(t instanceof Array){let e=["normal","maximized","fullscreen","minimized"];t=t.map(l=>{var i
;return(i=e.find(e=>e.startsWith(l)))!==null&&i!==void 0?i:"current keep".includes(l)?"":" "}).filter(e=>e!==" ")
;let l=i.g>1?i.g-2:t.indexOf(d.state)+1,n=t.length>0&&t[l%t.length]||d.state;(n!==d.state||u.length>0)&&(f.state=n)}
Object.keys(f).length&&n.Be.update(o,f,n._e(e));for(let e of u)n.Be.update(e,f,n.oe)})}});