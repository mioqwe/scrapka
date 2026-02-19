"use strict"
;__filename="background/all_commands.js",define(["require","exports","./utils","./store","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tab_commands","./tools"],(e,t,l,o,n,i,r,u,a,d,s,f,c,m,p,v,b,h,y,k)=>{
Object.defineProperty(t,"__esModule",{value:!0
}),o.m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,2,0,1,0,0,0,0,2,0,1,0,2,2,0,0,1,0,0,1,0,0,1,0,2,1,1,0,0,0,0,0,0],
o.y=[()=>{let e=o.M.for||o.M.wait,t=o.M.isError?0:1;if(e!=="ready"){
if(e=e?Math.abs(e==="count"||e==="number"?o.g:e|0):c.hasFallbackOptions(o.M)?Math.abs(o.g):0,e){e=Math.max(34,e)
;let t=o.M.block;t=t!=null?!!t:e>17&&e<=1e3,t&&o.$&&o.$.postMessage({N:14,t:e+50})}c.runNextCmdBy(o.g>0?t:1-t,o.M,e)
}else c.runNextOnTabLoaded({},null,()=>{c.runNextCmdBy(t,o.M,1)})},()=>{
let e=(o.M.$then||"")+"",t=(o.M.$else||"")+"",l=o.g
;if(!e&&!t)return void a.showHUD('"confirm" requires "$then" or "$else"')
;let n=o.M.question||o.M.ask||o.M.text||o.M.value,i=n?null:[e,t].map(e=>e.split("#",1)[0].split("+").slice(-1)[0]),r=Math.abs((o.M.minRepeat||0)|0),u=[o.M.$f,o.M.$retry]
;(Math.abs(l)<r?Promise.resolve():c.x([i?i[0]===i[1]?e:i[0].replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,""):[n+""]],l)).then(n=>{
(n?t:e)&&setTimeout(()=>{o.g=l,o.O(n?t:e,o.$,{c:u[0],r:u[1],u:0,w:0},n?1:l)},0)})},()=>{
let e=o.M.rel,t=!!o.M.absolute,n=e?(e+"").toLowerCase():"next",r=o.M.isNext!=null?!!o.M.isNext:!n.includes("prev")&&!n.includes("before"),u=p.P(o.M)
;p.doesNeedToSed(8192,u)||t?Promise.resolve(a.I(o.$&&a.j().T)).then(e=>{
let a=r?o.g:-o.g,d={},s=e&&o.R(e,8192,u),[f,m]=s?v.goToNextUrl(s,a,t):[!1,e];if(f&&m){
let e=d.S?i.C(m.trim().split(l.F),d.S,3):m;o.g=a,o.M.reuse==null&&c.overrideOption("reuse",0),c.overrideCmdOptions({
url_f:e,goNext:!1}),v.openUrl()}else t?c.runNextCmd(0):b.framesGoNext(r,n)}):b.framesGoNext(r,n)},()=>{var e,t
;let l=o.M.key,n=l&&typeof l=="string"?f.K(l).trim():""
;n=n.length>1||n.length===1&&!/[0-9a-z]/i.test(n)&&n===n.toUpperCase()&&n===n.toLowerCase()?n:""
;let i=(t=(e=o.M.hideHUD)!==null&&e!==void 0?e:o.M.hideHud)!==null&&t!==void 0?t:o.q.hideHud,r=i==="auto"?!n:i
;Promise.resolve(s.D("globalInsertMode",[n&&": "+(n.length===1?`" ${n} "`:`<${n}>`)])).then(e=>{
c.sendFgCmd(7,!r,Object.assign({h:r?null:e,k:n||null,i:!!o.M.insert,p:!!o.M.passExitKey,r:+!!o.M.reset,
bubbles:!!o.M.bubbles,u:!!o.M.unhover},c.parseFallbackOptions(o.M)||{})),r&&r!=="force"&&r!=="always"&&a.showHUD(e,1)})
},b.nextFrame,b.parentFrame,b.performFind,e=>{
let t=(o.M.key||"")+"",l=t==="darkMode"?"d":t==="reduceMotion"?"m":u.z[t],n=l?o.A[l]:0,i=s.D("quoteA",[t]),r=o.M.value,d=typeof r=="boolean",f=null,m=""
;l?typeof n=="boolean"?d||(r=null):d||r===void 0?f=d?"notBool":"needVal":typeof r!=typeof n&&(m=JSON.stringify(n),
f="unlikeVal",m=m.length>10?m.slice(0,9)+"\u2026":m):f=t in u.V?"notFgOpt":"unknownA",Promise.resolve(i).then(t=>{
if(f)a.showHUD(s.D(f,[t,m]));else{if(r=u.B(l,r),l==="c"||l==="n"){let e=""
;for(let t of r.replace(/\s/g,""))e.includes(t)||(e+=t);r=e}let o=a.j(),n=o.a;for(let e of o.E){let o=e===n
;c.portSendFgCmd(e,8,o,{k:l,n:o?t:"",v:r},1)}e(1)}})},()=>{o.$.s.J!==0||o.$.s.c&262144?(new Promise((t,l)=>{
e([o.Q.HelpDialogJS],t,l)}).then(e=>e),c.sendFgCmd(17,!0,o.M)):b.initHelp({a:o.M},o.$)},()=>{
let e=c.copyCmdOptions(l.W(),o.M);if(!e.esc){
let t=e.key,n=(e.type||(t?"keydown":""))+"",i=e.class,r=e.delay,{xy:u,direct:d,directOptions:s}=e
;if(i=i&&i[0]==="$"?i.slice(1):(i&&i[0].toUpperCase()+i.slice(1).replace(/event$/i,"")||(n.startsWith("mouse")||n.includes("click")?"Mouse":"Keyboard"))+"Event",
u=/^(Mouse|Pointer|Wheel)/.test(i)&&u==null?[.5,.5]:u,u=e.xy=l.Z(u),u&&!u.n&&(u.n=o.g,o.g=1),e.click)n="click",
e.c=1;else if(o.g<0)for(let e of"down up;enter leave;start end;over out".split(";")){let[t,l]=e.split(" ")
;n=n.replace(t,l)}if(!n)return a.showHUD('Require a "type" parameter'),void c.runNextCmd(0)
;let f=e.init,m=f&&typeof f=="object"?f:e,p={};r=r&&+r>=0?Math.max(0|+r,1):null
;for(let t of["bubbles","cancelable","composed"]){let l=m!==e&&t in m?m[t]:e[t]
;p[t]=l!==!1&&(l!=null||n!=="mouseenter"&&n!=="mouseleave")}let v={e:1,c:1,t:1,class:1,type:1,key:1,return:1,delay:1,
esc:1,click:1,init:1,xy:1,match:1,direct:1,directOptions:1,clickable:1,exclude:1,evenIf:1,scroll:1,typeFilter:1,
textFilter:1,clickableOnHost:1,excludeOnHost:1,closedShadow:1,trust:1,trusted:1,isTrusted:1,superKey:1,target:1,
targetOptions:1};for(let t of m===e?"alt ctrl meta shift super".split(" "):[])t in e&&!(t+"Key"in e)&&(e[t+"Key"]=e[t],
delete e[t]);e.superKey&&(o.G?p.ctrlKey=!0:p.metaKey=!0,delete e.superKey)
;for(let[t,l]of Object.entries(m))!t||m===e&&t[0]==="$"||v.hasOwnProperty(t)||(p[m===e?t.startsWith("o.")?t.slice(2):t:t.startsWith("$")?t.slice(1):t]=l,
m===e&&delete e[t]);let b=null;if(t&&(typeof t=="object"||typeof t=="string")){
typeof t=="string"&&(b=/[^\w]/.exec(t.slice(1)));let e=typeof t=="object"?t:b?t.split(b[0]):[t]
;if(e[0]&&(e.length==1||!e[1]||+e[1]>=0)){b&&!e[0]&&(e[0]=t[0],e[1]||e.splice(1,1))
;let l=e[0],o=/^[a-z]$/i.test(l),i=!o&&l>="0"&&l<="9"&&l.length===1,r=l.toLowerCase(),u=e[1]&&0|+e[1]?0|+e[1]:o?r.charCodeAt(0)-(n!=="keypress"||l!==r?32:0):i?l.charCodeAt(0)-0:l==="Space"?32:0
;p.key=l==="Space"?" ":l==="Comma"?",":l==="Slash"?"/":l==="Minus"?"-":l[0]==="$"&&l.length>1?l.slice(1):l,
u&&m.keyCode==null&&(p.keyCode=u),
u&&m.which==null&&(p.which=u),(e.length>=3&&e[2]||m.code==null)&&(p.code=e[2]||(o?"Key"+l.toUpperCase():i?"Digit"+l:l))}
}e.type=n,e.class=i,e.init=p,e.delay=r,e.direct=d&&typeof d=="string"?d:"element,hover,scroll,focus",
s&&!s.search&&(s.search="doc"),e.directOptions=s||{search:"doc"},e.e=`Can't create "${i}#${n}"`,
e.t=n.startsWith("key")&&!(!e.trust&&!e.trusted&&(e.isTrusted||m.isTrusted)!=="force")}c.portSendFgCmd(o.$,16,!1,e,o.g)
},()=>{b.showVomnibar()},b.L,b.enterVisualMode,e=>{
let t=o.M.id,l=t!=null&&t+""||o.M.folder||o.M.path,i=((o.M.position||"")+"").toLowerCase(),r=!!o.M.all
;if(!l||typeof l!="string")return a.showHUD('Need "folder" to refer a bookmark folder.'),void e(0)
;o.X(l,t!=null&&!!(t+"")).then(t=>{if(!t)return e(0),void M(t===!1&&'Need valid "folder"')
;let l=t.u!=null,u=l?t.Y:t.ee,d=i==="begin"?0:i==="end"?-1:i==="before"?l?t.te:0:l&&i==="after"?t.te+1:-1
;(!r&&o.g*o.g<2?n.getCurTab:n.le)(function t(l){if(!l||!l.length)return e(0),n.oe()
;let i=n.selectIndexFrom(l),s=l[i],[f,m]=r?[0,l.length]:h.getTabRange(i,l.length),p=o.M.filter,v=l;if(l=l.slice(f,m),
p&&!(l=h.ne(s,l,p)).length)return void e(0);let b=l.length;if(b>20&&c.ie())c.x("addBookmark",b).then(t.bind(0,v));else{
d=d>=0?d:o.ue.re.length;for(let e of l)n.n.bookmarks.create({parentId:u,title:e.title,url:n.getTabUrl(e),index:d++
},n.oe);a.showHUD(`Added ${b} bookmark${b>1?"s":""}.`),e(1)}})})},e=>{o.M.copied!==!1?(c.overrideCmdOptions({
copied:o.M.copied||!0}),v.openUrl()):e(0)},b.captureTab,e=>{k.de.ae(e(0))},e=>{let t=o.$?o.$.s.se:o.fe===2;k.me.ce(t),
a.showHUDEx(o.$,"fhCleared",0,[t?["incog"]:""]),e(1)},e=>{let t=o.$&&b.pe(o.$,o.M.type,!!o.M.local)
;Promise.resolve(t).then(t=>{let l=o.M.local?o.M.all?k.be.ve("#"):void a.he({H:21,U:0,c:2,f:c.parseFallbackOptions(o.M)
},!0,1,t):k.be.ve();typeof l=="number"&&e(l>0?1:0)})},y.copyWindowInfo,function e(t,l,i){let r,u=o.M.$pure
;if(u==null&&c.overrideOption("$pure",u=!Object.keys(o.M).some(e=>e!=="opener"&&e!=="position"&&e!=="evenIncognito"&&e[0]!=="$")),
u)if(!(r=t&&t.length>0?t[0]:null)&&o.ye>=0&&!n.oe()&&i!=="dedup")n.ke(n.tabsGet,o.ye).then(t=>{e(t&&[t],0,"dedup")
});else{let e=o.M.opener===!0;n.openMultiTabs(r?{active:!0,windowId:r.windowId,openerTabId:e?r.id:void 0,
index:v.newTabIndex(r,o.M.position,e,!0)}:{active:!0},o.g,o.M.evenIncognito,[null],!0,r,e=>{e&&n.selectWndIfNeed(e),
c.getRunNextCmdBy(3)(e)})}else v.openUrl(t)},(e,t)=>{h.Me(!0,1,function e(t,[l,i,r],u,d){
d&&([l,r]=h.getTabRange(i,t.length,0,1));let f=o.M.filter,m=t;t=t.slice(l,r)
;let p=n.selectFrom(t),v=(t=f?h.ne(p,t,f):t).includes(p)?t.length-1:t.length;if(!v)return void u(0)
;if(v>20&&c.ie())return void c.x("discardTab",v).then(e.bind(null,m,[l,i,r],u))
;let b=t[h.getNearArrIndex(t,p.index+(o.g>0?1:-1),o.g>0)],y=[],k=!b.discarded
;k&&(v<2||b.autoDiscardable!==!1)&&y.push(n.ke(n.ge.discard,b.id));for(let e of t)e===p||e===b||e.discarded||(k=!0,
e.autoDiscardable!==!1&&y.push(n.ke(n.ge.discard,e.id)));y.length?Promise.all(y).then(e=>{
let t=e.filter(e=>e!==void 0),l=t.length>0;a.showHUD(l?`Discarded ${t.length} tab(s).`:s.D("discardFail")),u(l)
}):(a.showHUD(k?s.D("discardFail"):"Discarded."),u(0))},e,t)},e=>{let t=o.$?o.$.s.u:o.ye
;if(t<0)return a.complainLimits(s.D("dupTab")),void e(0);let l=o.M.active===!1;n.ke(n.ge.duplicate,t).then(i=>{
i?(l&&n.selectTab(t,n.oe),l?e(1):c.runNextOnTabLoaded(o.M,i),o.g<2||n.tabsGet(t,e=>{n.openMultiTabs({url:n.getTabUrl(e),
active:!1,windowId:e.windowId,pinned:e.pinned,index:e.index+2,openerTabId:e.id},o.g-1,!0,[null],!0,e,null)})):e(0)}),
l&&n.selectTab(t,n.oe)},e=>{e.length&&b.framesGoBack({s:o.g,o:o.M},null,e[0])},e=>{
let t=!!o.M.absolute,l=o.M.filter,i=o.M.wrap!==!1,r=b.we(),u=u=>{let a=o.g,d=n.selectFrom(u),s=u.length
;if(l&&!(u=h.ne(d,u,l)).length)return void e(0)
;let f=u.length,m=h.getNearArrIndex(u,d.index,a<0),p=t?a>0?Math.min(f,a)-1:Math.max(0,f+a):Math.abs(a)>s*2?a>0?f-1:0:m+a
;if(p=i?p>=0?p%f:f+(p%f||-f):p>=f?f-1:p<0?0:p,u[0].pinned&&o.M.noPinned&&!d.pinned&&(a<0||t)){let l=1
;for(;l<f&&u[l].pinned;)l++;if(f-=l,f<1)return void e(0);t||Math.abs(a)>s*2||!i?p=t?Math.max(l,p):p||l:(p=m-l+a,
p=p>=0?p%f:f+(p%f||-f),p+=l)}let v=u[p],y=!v.active
;y?n.selectTab(v.id,r?b.blurInsertOnTabChange:c.getRunNextCmdBy(1)):e(y)},a=t=>{let o=h.$e(l,"hidden")===!0
;h.Me(!0,1,u,t||[],e,o||null)};t?o.g!==1||l?a():n.ke(n.ge.query,{windowId:o.xe,index:0}).then(e=>{
e&&e[0]&&n.Oe(e[0])?u(e):a()}):Math.abs(o.g)===1?n.ke(n.getCurTab).then(a):a()},()=>{var e
;o.M.type!=="frame"&&o.$&&o.$.s.J&&(o.$=((e=a.j())===null||e===void 0?void 0:e.T)||o.$);let t={H:5,U:0,p:o.g,
t:o.M.trailingSlash,r:o.M.trailing_slash,s:p.P(o.M),e:o.M.reloadOnRoot!==!1},l=a.he(t);Promise.resolve(l||"").then(()=>{
typeof t.e=="object"&&c.getRunNextCmdBy(2)(t.e.p!=null||void 0)})},y.joinTabs,b.mainFrame,(e,t)=>{
let l=n.selectIndexFrom(e);if(e.length>0&&(o.g<0?(o.g<-1?l:e[l].index)===0:o.g>1&&l===e.length-1))return void t(0)
;let i=o.M.group,r=i!=="ignore"&&i!==!1;h.Me(!0,1,l=>{
let i=n.selectIndexFrom(l),u=l[i],a=u.pinned,d=Math.max(0,Math.min(l.length-1,i+o.g))
;for(;a!==l[d].pinned;)d-=o.g>0?1:-1;if(d!==i&&r){let e=n.getGroupId(u),t=n.getGroupId(l[d])
;if(t!==e&&(Math.abs(o.g)===1||e!==n.getGroupId(l[o.g>0?d<l.length-1?d+1:d:d&&d-1]))){
for(e!==null&&(i>0&&n.getGroupId(l[i-1])===e||i+1<l.length&&n.getGroupId(l[i+1])===e)&&(d=i,t=e);d+=o.g>0?1:-1,
0<=d&&d<l.length&&n.getGroupId(l[d])===t;);d-=o.g>0?1:-1}}d===i&&u.active?t(0):n.ge.move((u.active?u:e[0]).id,{
index:l[d].index},n._e(t))},e,t,r?t=>n.getGroupId(e[0])===n.getGroupId(t):null)
},y.moveTabToNewWindow,y.moveTabToNextWindow,()=>{v.openUrl()},(e,t)=>{h.Me(!o.M.single,0,y.reloadTab,e,t)},(e,t)=>{
h.Me(!1,1,(e,[t],l)=>{n.Pe(e[t].id,l)},e,t)},y.removeTab,e=>{function t(l){let u=l;if(!u||u.length===0)return n.oe()
;let a=r?u.findIndex(e=>e.id===o.ye):-1,d=a>=0?a:n.selectIndexFrom(u),s=o.M.noPinned,f=o.M.filter,m=u[d];i>0?(++d,
u=u.slice(d,d+i)):(s=s!==null&&s!==void 0?s:d>0&&u[0].pinned&&!u[d-1].pinned,
i<0?u=u.slice(Math.max(d+i,0),d):(u=u.slice(0)).splice(d,1)),s&&(u=u.filter(e=>!e.pinned)),f&&(u=h.ne(m,u,f))
;let p=o.M.mayConfirm
;p&&u.length>(typeof p=="number"?Math.max(p,5):20)&&c.ie()?c.x("closeSomeOtherTabs",u.length).then(t.bind(null,l)):u.length>0?(i<0&&(u=u.reverse()),
n.Pe(u.map(e=>e.id),e)):e(0)}let l=o.M.others,i=(l!=null?l:o.M.other)?0:o.g,r=i===0&&o.M.acrossWindows
;r?n.ge.query({},t):h.Ie(i,t)},(e,t)=>{e.length<=0?t(0):y.Te(e[0],void 0,void 0,o.M.group!==!1)},e=>{let t=n.je()
;if(!t)return e(0),a.complainNoSession();let l=!!o.M.one,i=+t.MAX_SESSION_RESULTS||25,r=Math.abs(o.g);if(r>i){
if(l)return e(0),void a.showHUD(s.D("indexOOR"));r=i}if(!l&&r<2&&(o.$?o.$.s.se:o.fe===2)&&!o.M.incognito)return e(0),
a.showHUD(s.D("notRestoreIfIncog"));let u=o.M.active!==!1,d=o.M.currentWindow===!0,f=o.$?o.$.s.u:o.ye,m=o.xe,p=t=>{
t!==void 0?y.Ne(m,t,u?null:f).then(t=>{u&&t?c.runNextOnTabLoaded(o.M,t):e(1)}):e(0)};(async()=>{
let o,c=Math.max(r*1.2|0,2),v=!1,b=d?e=>!!e.tab&&e.tab.windowId>0&&e.tab.windowId===m:null
;if(d&&r<=Math.min(i,25)&&(o=await n.Re(t.getRecentlyClosed,{maxResults:r}),v=o.length>r,o=b?o.filter(b):o,
!v&&o.length<r&&c<=Math.min(i,25)&&(o=await n.Re(t.getRecentlyClosed,{maxResults:c}),o=b?o.filter(b):o)),
(!o||!v&&o.length<r)&&(o=await n.Re(t.getRecentlyClosed,r<=25&&!d?{maxResults:r}:{}),o=b?o.filter(b):o),
o.length<(l?r:1))return e(0),a.showHUD(s.D("indexOOR"))
;r===1?n.ke(t.restore,d?o[0].tab.sessionId:null).then(p):Promise.all(o.slice(l?r-1:0,r).map(e=>n.ke(t.restore,(e.tab||e.window).sessionId))).then(e=>{
p(l?e[0]:null)}),u||n.selectTab(f,n.oe)})()},()=>{o.M.$seq==null?m.runKeyWithCond():m.runKeyInSeq(o.M.$seq,o.g,null)
},e=>{let t=(o.M.keyword||"")+"",l=r.Se({u:n.getTabUrl(e[0])})
;if(!l||!t)return void(c.runNextCmd(0)||a.showHUD(s.D(t?"noQueryFound":"noKw")));let u={},d=p.P(o.M);l.u=o.R(l.u,0,d,u),
u.S!=null&&(t=u.S);let f=i.C(l.u.split(" "),t,2),m=o.M.reuse;c.overrideCmdOptions({url_f:f,reuse:m!=null?m:0,opener:!0,
keyword:""}),v.openUrl(e)},e=>{let t=o.M.id,l=o.M.data
;if(!t||typeof t!="string"||l===void 0)return a.showHUD('Require a string "id" and message "data"'),void e(0)
;let i=Date.now(),r=l=>{l=l&&l.message||l+"",console.log("Can not send message to the extension %o:",t,l),
a.showHUD("Error: "+l),e(0)};try{n.n.runtime.sendMessage(t,o.M.raw?l:{handler:"message",from:"Vimium C",count:o.g,
keyCode:o.Ce,data:l},t=>{let l=n.oe();return l?r(l):typeof t=="string"&&Math.abs(Date.now()-i)<1e3&&a.showHUD(t),
l||e(t!==!1),l})}catch(e){r(e)}},e=>{let t=o.M.text,l=typeof t=="number",n=!!o.M.silent,i=o.M.isError
;if(!t&&!l&&!n&&i==null&&o.M.$f){let l=o.M.$f;if(t=l&&l.t?s.Fe(`${l.t}`):"",!t)return void e(!1)}
n||a.showHUD(t||l?t instanceof Promise?t:t+"":s.D("needText")),e(i!=null?!!i:!!t||l)},(e,t)=>{k.de.ae(t(0))
},y.toggleMuteTab,(e,t)=>{h.Me(!0,0,y.togglePinTab,e,t)},y.toggleTabUrl,e=>{
let t=e?e[0].id:o.$?o.$.s.u:o.ye,n=((o.M.style||"")+"").trim()||"dark",i=!!o.M.current,r=o.M.enable;if(r==null){
let e=o.Ke.find(e=>e.s.u===t);if(e)return void e.postMessage({N:46,t:n,b:!i})}
let a=o.qe.t,s=a&&` ${a} `,f=s.includes(` ${n} `)
;r=r!=null?!!r:!f,(r!==f||o.M.forced)&&(n==="dark"?d.De(1,r,2):(a=r===f?a:r?a+n:s.replace(n," "),
a=a.trim().replace(l.F," "),o.qe.t=a,u.ze({t:a}))),c.runNextCmdBy(r?1:0,o.M,100)},b.toggleZoom,e=>{
let t=!!o.M.acrossWindows,l=!!o.M.onlyActive,i=o.M.filter,r=h.$e(i,"hidden"),u=b.we(),d=r!==!0?{hidden:!1}:{},s=t=>{
if(t.length<2)return l&&a.showHUD("Only found one browser window"),e(0),n.oe()
;let r=o.$?o.$.s.u:o.ye,d=t.findIndex(e=>e.id===r),s=d>=0?t[d]:null;if(d>=0&&t.splice(d,1),
i&&!(t=h.ne(s,t,i)).length)return void e(0)
;let c=t.filter(e=>o.Ae.has(e.id)).sort(k.Ve.He),m=(t=l&&c.length===0?t.sort((e,t)=>t.id-e.id):c)[o.g>0?Math.min(o.g,t.length)-1:Math.max(0,t.length+o.g)]
;m?l?n.Be.update(m.windowId,{focused:!0},u?()=>b.blurInsertOnTabChange(m):n._e(e)):f(m.id):e(0)},f=t=>{
n.selectTab(t,t=>(t&&n.selectWndIfNeed(t),u?b.blurInsertOnTabChange(t):n._e(e)()))};if(o.g===1&&!l&&o.ye!==-1){
let e=h.Ee();if(e>=0)return void Promise.all([n.ke(n.tabsGet,e),h.getNecessaryCurTabInfo(i)]).then(([e,l])=>{
e&&(t||e.windowId===o.xe)&&(r!==!0?n.Oe(e):h.$e(i,"hidden",1)==null||!n.Oe(e))&&(!i||h.ne(l,[e],i).length>0)?f(e.id):t?n.ge.query(d,s):n.le(s)
})}t||l?n.ge.query(l?{active:!0}:d,s):n.le(s)},e=>{o.y[29](e)},()=>{let e=a.j(),t=!!o.M.unhover,l=o.M.suppress
;for(let l of e?e.E:[]){let n={r:1,u:t};if(l===e.a){let e=c.parseFallbackOptions(o.M);e&&Object.assign(n,e)}
c.portSendFgCmd(l,7,!1,n,1)}(c.hasFallbackOptions(o.M)?l===!0:l!==!1)&&e&&e.a.postMessage({N:14,t:150})},e=>{
let t,l=o.M.$cache;if(l!=null){let e=o.ue.Ue===l[1]?l[0]:"",n=e&&(o.ue.re.find(t=>t.ee===e)||o.ue.Je.find(t=>t.ee===e))
;n?t=Promise.resolve(n):c.overrideOption("$cache",null)}let n=!!t,i=o.g,r=!1;if(!t){
let l=o.M.id,n=o.M.path,u=l!=null&&l+""||n||o.M.title
;if(!u||typeof u!="string")return a.showHUD("Invalid bookmark "+(l!=null?"id":n?"path":"title")),void e(0)
;let d=c.fillOptionWithMask(u,o.M.mask,"name",["path","title","mask","name","value"],i)
;if(!d.ok)return void a.showHUD((d.result?"Too many potential names":"No name")+" to find bookmarks");r=d.useCount,
t=o.X(d.result,l!=null&&!!(l+""))}t.then(t=>{if(t){n||r||c.overrideOption("$cache",[t.ee,o.ue.Ue]);let e=t.u!=null
;c.overrideCmdOptions(e?{url:t.Qe||t.u}:{urls:o.ue.re.filter(e=>e.Y===t.ee).map(e=>e.Qe||e.u)},!0),o.g=r||!e?1:i,
v.openUrl()}else e(0),M(t===!1&&'Need valid "title" or "title"')})},y.toggleWindow];let M=e=>{
o.ue.d==3?(a.showHUDEx(o.$,"bookmarksRevoked",1,[]),setTimeout(()=>{v.We({u:o.Q.Ze+"#optionalPermissions"})
},800)):a.showHUD(e||"The bookmark node is not found")}});