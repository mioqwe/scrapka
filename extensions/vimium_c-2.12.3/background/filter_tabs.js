"use strict"
;__filename="background/filter_tabs.js",define(["require","exports","./store","./utils","./browser","./ports","./exclusions","./run_commands"],(l,e,t,n,r,u,i,a)=>{
Object.defineProperty(e,"__esModule",{value:!0
}),e.wn=e.Mn=e.ne=e.$e=e.mayRequireActiveTab=e.getNecessaryCurTabInfo=e.Ie=e.getNearArrIndex=e.In=e.Ee=e.Me=e.getTabRange=void 0,
e.getTabRange=(l,e,n,r)=>s(l,e,n,t.g,r,t.M.limited,t.M.filter);let s=(l,e,t,n,r,u,i)=>{let a=n>0;r&&(n+=a?r:-r)
;let s=l+n
;return s<=e&&s>-2?a?[l,s]:[s+1,l+1]:u===!1||(u==null||u==="auto")&&(Math.abs(n)<(t||e)*2||n<10||i&&u==null)?Math.abs(n)<e?a?[e-n,e]:[0,-n]:[0,e]:a?[l,e]:[0,l+1]
};e.Me=(l,n,u,i,s,o)=>{let d=i=>{if(!i||!i.length)return s(0),r.oe()
;let o=r.selectIndexFrom(i),[d,c]=f?[0,i.length]:e.getTabRange(o,i.length,0,n);f&&(a.overrideCmdOptions({limited:!1
},!0),a.overrideOption("$limit",t.g),t.g=t.g>0?9999:-9999),u(i,l?[d,o,c]:[o+1===c||t.g>0&&d!==o?d:c-1,o,c],s)
},c=t.M.filter,f=c&&/(^|[&+])limit(ed)?=count\b/.test(c+"")
;if(i)if(i.length===0||Math.abs(t.g)>1||f)if(i.length===0||f||o===!0){let l=i[0]?i[0].windowId:t.xe
;l>=0?r.ge.query(o===!0?{windowId:l}:{windowId:l,hidden:!1},d):(l>=0?r.ke(r.Be.get,l,{populate:!0
}):r.ke(r.getCurWnd,!0)).then(l=>{d(l?o!==!0?l.tabs.filter(r.Oe):l.tabs:[])})
}else d(i);else n?i[0].index+t.g<0?r.le(d):r.ge.query({windowId:i[0].windowId,index:i[0].index+t.g
},n=>(n&&n.length&&(o===!0||r.Oe(n[0])&&(!o||o(n[0])))&&(!c||e.ne(i[0],n,c).length>0)?t.g<0?u([n[0],i[0]],[0,1,l?2:1],s):u([i[0],n[0]],[l?0:1,0,2],s):r.le(d),
r.oe())):u(i,[0,0,1],s);else s(0)},e.Ee=()=>{let l=0,e=-1;return t.Ae.forEach((n,r)=>{n>l&&r!==t.ye&&(l=n,e=r)}),e},
e.In=(l,t,n)=>{let u
;return l&&(l.index||t)?n&&n[u=Math.max(n.indexOf(l),0)+(t?1:-1)]&&r.Oe(n[u])?Promise.resolve(n[u]):r.ke(r.ge.query,{
windowId:l.windowId,index:l.index+(t?1:-1)
}).then(u=>u&&u[0]?r.Oe(u[0])?u[0]:(n&&n.length>2?Promise.resolve(n.filter(r.Oe)):r.ke(r.le)).then(n=>n&&n.length?n[e.getNearArrIndex(n,l.index+(t?1:-1),t)]:null):null):Promise.resolve(null)
},e.getNearArrIndex=(l,e,t)=>{
for(let n=l.length>1?0:1;n<l.length;n++)if(l[n].index>=e)return l[n].index===e||t?n:n>0?n-1:0;return l.length-1},
e.Ie=(l,e)=>{Math.abs(l)===1?r.getCurTab(t=>{let n=t[0].index+l;n>=0?r.ge.query({windowId:t[0].windowId,index:n
},n=>(n&&n[0]?e(l>0?[t[0],n[0]]:[n[0],t[0]]):r.getCurTabs(e),r.oe())):r.getCurTabs(e)}):r.getCurTabs(e)},
e.getNecessaryCurTabInfo=l=>{if(!l)return null;let t=e.mayRequireActiveTab(l)
;return t>2?r.ke(r.getCurTab).then(l=>l&&l[0]||null):t?Promise.resolve(u.I(null,t>1)).then(l=>l?{url:l}:null):null},
e.mayRequireActiveTab=l=>{let e=0;for(let t of(l+"").split(/[&+]/)){
let l=t.split("=",1)[0],n=l.includes(".")?"":l||t,r=t.slice(n?n.length+1:0)
;if(n&&r==="same"&&n!=="hidden"&&!n.startsWith("discard"))return 3;if(!r&&n){
if(n.startsWith("title")||n==="group")return 3;e=n==="hash"?2:e||(n==="host"||n==="url"?1:0)}}return e}
;let o=(l,e)=>(l=l&&l.toLowerCase())===""||l==="1"||l==="true"?!e||null:l==="only"||l!=="0"&&l!=="false"&&null
;e.$e=(l,e,t)=>{let n=l?(l+"").split(/[&+]/).find(l=>l.startsWith(e)):null,r=n?n.slice(1+e.length):null
;return r!==null?o(r,t):null};let d=(l,e)=>{
let t=l&&l[0]==="/"?l.lastIndexOf("/"):0,r=t>1&&/^[a-z]+$/.test(l.slice(t+1))?n.pl(l.slice(1,t),l.slice(t+1).replace(/g/g,""),0):null,u=!r&&!!e&&e.toLowerCase()
;return r?(e=null,l=>r.test(l||"")):e?e===u?l=>!!l&&l.toLowerCase().includes(u):l=>!!l&&l.includes(e):null}
;e.ne=(l,e,a,c)=>{var f;let h=0,m=0,b=0,w=[];for(let e of(a+"").split(/[&+]/)){
let u=e.split("=",1)[0],a=u.includes("."),s=!a&&u.endsWith("!"),c=a?"":(s?u.slice(0,-1):u)||e,p=e.slice(a?0:u.length+(e.charAt(u.length+1)==="="?2:1)),k=p&&n.Ye(p),v=k==="same"||k==="cur"||k==="current",g=null
;switch(c){case"title":case"title*":let e=d(k,k||l&&l.title);g=e?l=>e(l.title):null;break;case"url":case"urlhash":
case"url+hash":case"url-hash":case"hash":let u=null;if(c==="url"&&k)u=i.Fl(k);else{
let e=l?r.getTabUrl(l):null,t=c.includes("hash");u=e?i.Fl(":"+(t?e:e.split("#",1)[0])):null}
let a=!!u&&u.t===2&&k===k.toLowerCase();g=u?l=>i.Il(u,a?r.getTabUrl(l).toLowerCase():r.getTabUrl(l)):g;break
;case"title+url":let s=k&&d(k,k);g=s?l=>s(l.title)||s(r.getTabUrl(l)):g;break;case"host":case"":
let w=k||(c&&l?(f=n.Pn(r.getTabUrl(l)))===null||f===void 0?void 0:f.host:"");g=w?l=>{var e
;return w===((e=n.Pn(r.getTabUrl(l)))===null||e===void 0?void 0:e.host)}:g;break;case"active":let p=o(k,1)
;g=p!=null?l=>l.active===p:g;break;case"new":case"old":case"visited":let x=o(k)===(c!=="new");g=l=>t.Ae.has(l.id)===x
;case"discarded":case"discard":let M=!v&&o(k,1);g=M!=null?l=>l.discarded===M:g;break;case"group":
let I=k||(l?r.getGroupId(l)!=null?r.getGroupId(l)+"":"":null);g=I!=null?l=>{var e
;return((e=r.getGroupId(l))!==null&&e!==void 0?e:"")+""===I}:g;break;case"hidden":let _=!v&&o(k,1)
;g=_!=null?l=>r.Oe(l)!==_:g;break;case"highlight":case"highlighted":let P=v?l?l.highlighted:null:o(k)
;g=P!=null?l=>l.highlighted===P:g;break;case"incognito":let $=v?l?l.incognito:null:o(k);g=$!=null?l=>l.incognito===$:g
;break;case"pinned":let y=v?l?l.pinned:null:o(k,1);g=y!=null?l=>l.pinned===y:g;break;case"mute":case"muted":{
let e=v?l?r.isTabMuted(l):null:o(k);g=e!=null?l=>r.isTabMuted(l)===e:g}break;case"audible":case"audio":{
let e=v?l?l.audible:null:o(k);g=e!=null?l=>l.audible===e:g}break;case"min":case"max":case"limit":case"limited":
let j=k==="count"?t.M.$limit||t.g:parseInt(k)||0;c==="min"?m=j:c==="max"?b=j:h=j||1,g=()=>!0}g&&w.push([g,s])}
if(c&&(c.known=w.length>0),w.length===0)return e.slice(0);let p=e,k=e.filter(l=>{
for(let e of w)if(e[0](l)===e[1])return!1;return!0}),v=k.length
;if(!v||m>0&&v<m||b>0&&v>b)return t.M&&t.M.$else||u.showHUD(v?`${v} tabs found but expect ${v<m?m:b}`:"No tabs matched the filter parameter"),
[];if(h){let e=l?p.indexOf(l):-1;if(e<0){let n=l?l.id:t.ye;e=p.findIndex(l=>l.id===n)}if(e>=0){
let l=k.findIndex(l=>p.indexOf(l)>=e),n=l>=0&&p.indexOf(k[l])>e;n&&k.splice(l,0,null)
;let r=s(l>=0?l:v-1,v,0,t.g>0?h:-h,n?1:0,!1);k=k.slice(r[0],r[1]),n&&(k=k.filter(l=>!!l))
}else k=h>0?k.slice(0,h):k.slice(-h)}return k},e.Mn=(l,e)=>{let n,u=(l,e)=>{l.ind=e
},i=(l,e)=>l<e?-1:l>e?1:0,a=l.map((l,e)=>({tab:l,ind:e,time:null,rhost:null,group:r.getGroupId(l),pinned:l.pinned
})),s=-1,o=!1,d=0
;for(let l of(e instanceof Array?e.slice(0):(e===!0?"time":e+"").split(/[, ]+/g)).reverse())n=l[0]==="r"&&l[1]!=="e"||l[0]==="-"?(l=l.slice(1),
-1):1,l.includes("time")&&!l.includes("creat")||l.includes("recen")?(a[0].time==null&&a.forEach(l=>{
let e=l.tab.id,n=t.Ae.get(e);l.time=e===t.ye?1:n!=null?n:(d||(d=performance.timeOrigin),(l.tab.lastAccessed||d)-d||e+2)
}),s=1):l.startsWith("host")||l==="url"?(a[0].rhost||a.forEach(l=>{
let e=l.tab.url,t=e.indexOf("://")+3,n=t>3?e.indexOf("/",t):0;if(n<t)return void(l.rhost=e)
;let r=e.slice(t,n),u=r.lastIndexOf(":"),i=u>0&&r.lastIndexOf(":",u-1)>0
;l.rhost=i?r:r.slice(0,u>0?u:r.length).split(".").reverse().join(".")+(u>0?" "+r.slice(1):"")}),
s=l==="url"?3:2):s=l==="title"?4:l.includes("creat")||l==="id"?5:l==="window"?6:l==="index"?7:l==="reverse"?(n=-1,7):-1,
s<0||(a.sort((l,e)=>(s===1?l.time-e.time:s<4?i(l.rhost,e.rhost)||(s===3?i(l.tab.url,e.tab.url):0):s===4?i(l.tab.title,e.tab.title):s===5?l.tab.id-e.tab.id:s===6?l.tab.windowId-e.tab.windowId:l.ind-e.ind)*n||(l.group!=null?e.group!=null?0:-1:e.group!=null?1:0)||l.ind-e.ind),
a.forEach(u),o=!0);if(o&&a.some(l=>l.group!=null)){let l=new Map
;for(let{group:e,ind:t}of a)e==null||l.has(e)||l.set(e,t)
;a.sort((e,t)=>(e.group!=null?l.get(e.group):e.ind)-(t.group!=null?l.get(t.group):t.ind)||e.ind-t.ind)}
return o&&(a.forEach(u),a.sort((l,e)=>l.pinned!==e.pinned?l.pinned?-1:1:l.ind-e.ind)),o?a.map(l=>l.tab):l},
e.wn=async(l,e,n,u,i)=>{let a=e=>(!l||e.type===l)&&(n==null||e.incognito===n)&&(i||e.state!=="minimized");if(t.yn>=0){
let l=await r.ke(r.Be.get,t.yn);if(l&&a(l))return l;t.yn=-1}let s=[];{let l=(await r.ke(r.getCurTabs)||[]).map(l=>l.id)
;l.push(t.ye),t.Ae.forEach((e,t)=>{l.includes(t)||s.push([t,e])}),s.sort((l,e)=>e[1]-l[1])}if(s.length>0){
let l=await r.Re(r.ge.get,s[0][0]);if(!l){let e=s.find(l=>t.Ol.has(l[0]));l=e&&await r.Re(r.ge.get,e[0])}
let e=l&&await r.Re(r.Be.get,l.windowId);if(e&&a(e))return e}
let o=await r.Re(r.Be.getAll),d=o.filter(a),c=d.filter(l=>l.id!==u);return c.sort((l,e)=>e.id-l.id),
(c.length>0?c[0]:null)||(e?o.find(l=>l.id===u)||o.find(l=>l.focused)||null:[d,o.find(l=>l.id===u)])}});