"use strict"
;__filename="background/request_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./tools","./open_urls","./frame_commands","./tab_commands"],function(e,l,t,r,n,i,o,u,s,a,f,d,m,v,c,p,b,g,y){
let N;Object.defineProperty(l,"__esModule",{value:!0}),t.bn=[(e,l)=>{let r=e.handler
;r&&typeof r=="string"&&(r==="focus"?(l.s.c&4||(l.s.c|=4,l.postMessage({N:8
})),t.bn[12]({},l)):r==="command"?v.executeExternalCmd(e,null,l):r==="tip"&&(t.$=s.indexFrame(l.s.u,0)||l,
s.showHUD(e.tip||"Error: Lack .tip")))},()=>0,(e,l)=>{let r=e.k,n=u.Ni;if(!(r>=0&&r<n.length))return t.$=l,
s.complainLimits(d.D("notModify",[r]));let i=n[r],o=t.Si;t.q[i]!==e.v&&(o?o.then(()=>{u.go(i,e.v)}):u.go(i,e.v))
},(e,l)=>{let t=typeof e=="object";return p.me.rn(l.s.se,t?e.q:"",t?1:e)},(e,l)=>{let t=o.Se(e);if(e.i==null)return t
;l.postMessage({N:44,i:e.i,s:t})},(e,l)=>{let i=e.u,u=e.e,a=o.qi(e);r.Bl(),e.e=a,a.p==null?(t.$=l,
s.showHUD(a.u)):u||i!==a.u?!l||a.u.slice(0,7).toLowerCase()==="file://"&&i.slice(0,7).toLowerCase()!=="file://"?n.tabsUpdate({
url:a.u}):v.sendFgCmd(18,!1,{r:1,u:a.u}):(t.$=l,s.showHUD("Here is just root"),e.e={p:null,u:"(just root)"})},(e,l)=>{
let r,n=o.Se(e);if(!n||!n.k)return t.$=l,s.showHUD(d.D("noEngineFound")),void(e.n&&v.runNextCmdBy(0,e.n))
;let i=e.o||b.parseOpenPageUrlOptions(e.n),u={}
;r=e.t.trim()&&t.R(e.t.trim(),524288,i.s,u).trim()||(e.c?t.Ql(i.s,0,u={}):""),Promise.resolve(r).then(r=>{var o
;let a=r===null?"It's not allowed to read clipboard":(r=r.trim())?"":d.D("noSelOrCopied");if(a)return t.$=l,
s.showHUD(a),void(e.n&&v.runNextCmdBy(0,e.n));i.k=(o=u.S)!==null&&o!==void 0?o:i.k==null?n.k:i.k,t.bn[8]({u:r,o:i,r:0,
n:v.parseFallbackOptions(e.n)||{}},l)})},(e,l)=>{let r=e.s,i=e.a!==0,o=e.a===2,u=t.xe;if(t.$=s.findCPort(l),
typeof r=="number")return void n.selectTab(r,e=>(n.oe()?s.showHUD(d.D("noTabItem")):n.selectWnd(e),n.oe()))
;if(!n.je())return void s.complainNoSession();let a=l&&l.s.u>=0?l.s.u:t.ye>=0?t.ye:null,f=i?null:a
;n.je().restore(r[1],e=>{let l=n.oe();return l?s.showHUD(d.D("noSessionItem")):y.Ne(u,e,f).then(e=>{
o&&a&&e&&e.windowId!==u&&n.tabsGet(a,l=>{n.ge.move(e.id,{windowId:u,index:l?l.index+1:-1},n.oe),n.tabsUpdate(e.id,{
active:!0})})}),l}),f&&n.selectTab(f,n.oe)},b.openUrlReq,(e,l)=>{l.s.c&128&&l.postMessage({N:2,t:3})
;let r,n=l.s.u,i=t.Ol.get(n);if(!i)return void(t.t&&t.o(n,l.s.d));let o=i.a;l!==o&&(i.a=l,
t.t&&(r=l.s.d)!==o.s.d&&t.o(n,r))},(e,l)=>{let r=l;if(!r&&(r=s.indexFrame(e.tabId,e.frameId),!r)){
let l=t.Ol.get(e.tabId);return void(l&&l.c&512&&(l.c|=4096))}let{s:n}=r,i=n.Rl,o=t.Ol.get(n.u),u=n.Rl=l?e.u:e.url
;if(o&&o.ts)return;let f=a.rs?a.as(u,n):null,d=f===null?0:f?1:2;if(n.d!==d)n.d=d,
t.t&&o.a===r&&t.o(n.u,d);else if(!f||f===a.as(i,n))return;r.postMessage({N:1,p:f,f:0})},(e,l)=>{let r,n=e.t||0;t.$=l,
t.g=n||t.g>0?1:-1,
t.Ce=e.k,v.replaceCmdOptions(e.f||{}),n!==2?n===1?g.parentFrame():g.nextFrame():(r=s.En(l))?g.focusFrame(r.a,r.E.length<=2,e.o?1:2):s.safePost(l,{
N:45,l:t.Ce})},(e,l)=>{let t=s.En(l);if(!t)return;if(l.s.c|=4,t.c|=4,t.E.length<2)return;let r={N:8};for(let e of t.E){
let l=e.s.c;e.s.c|=4,l&4||e.postMessage(r)}},(e,l,r)=>{let i,o=l.s.u,u=s.En(l),a=e.f
;return!(!u||u.E.length<2)&&(i=u.E.find(e=>e.s.J===a),i=i!==null&&i!==void 0?i:void 0,i&&i!==l?(t.Ce=e.k,k(e,l,i,1,1),
!0):!!n.N()&&(n.N().getAllFrames({tabId:l.s.u},n=>{let i=0,u=l.s.J;for(let e of n)if(e.parentFrameId===u){if(i){i=0
;break}i=e.frameId}let a=i&&s.indexFrame(o,i);a&&(t.Ce=e.k,k(e,l,a,1,1)),r&&s.sendResponse(l,r,!!a)}),!!r&&l))
},g.initHelp,(e,l)=>{s.En(l).c|=4,l.s.c|=12,l.postMessage({N:11,H:t.bu})},(e,l)=>{var n;let{i}=e;if(t.Ce=0,e.u!=null){
let{m:l,t:r}=e,i=l>=42&&l<=64,u=e.u,s={};u=i?o.Pi(u,!0):u,u=t.R(u,i?1048576:524288,e.o&&e.o.s,s),v.replaceCmdOptions({
url:u,newtab:r!=null?!!r:!i,keyword:(n=s.S)!==null&&n!==void 0?n:e.o.k}),I(e.f),t.g=1}else{if(e.r!==9)return
;if(t.M==null||t.M.k!=="omni"){if(i)return;t.M=r.W(),t.g=1}else if(i&&t.M.v===t.Q.Bn)return}t.$=l,g.showVomnibar(!!i)
},(e,l)=>{s.isNotVomnibarPage(l,!1)||t.gl.er(e.q,e,_.bind(l,e.i|0))},(e,l)=>{var i;if(e.i!=null){
let i=(e.r||"")+"",o=e.i,u=i.includes("name")?e.u:""
;return void Promise.all([/^data:/i.test(o)?Promise.resolve(o):r.Gi(o||e.u),t.fe?null:n.ke(n.getCurTab)]).then(([e,o])=>{
let a=typeof e=="string",f=a?e:e?e[1]:"";t.$=l
;let m=f.indexOf(",")+1,v=f.slice(5,Math.max(5,m)).toLowerCase(),c=v.split(";")[0]
;if(!e||c.startsWith("text/"))return void(e?s.showHUD("",74):s.showHUD(d.D(e===0?"downloadTimeout":"downloadFail")))
;let p=f.slice(m,m+24);p=v.includes("base64")?r.Ye(p,"atob"):p.slice(0,16)
;let b=p.startsWith("\x89PNG")?"PNG":p.startsWith("\xff\xd8\xff")?"JPEG":/^GIF8[79]a/.test(p)?"GIF":/^ftypavi[fs]/.test(p.slice(4))?"AVIF":/^\xff\xd8\xff(\xdb|\xe0|\xee|\xe1[^][^]Exif\0\0)/.test(p)?"JPEG":p.slice(8,12)==="WEBP"?"WebP":(c.split("/")[1]||"").toUpperCase()||c,y=u&&/^(http|ftp|file)/i.test(u)?u:"",N=i.includes("safe")&&b!=="GIF"||i.includes("force")
;g.handleImageUrl(a?e:"",a?null:e[0],N&&b!=="PNG"?9:1,e=>{
s.showHUD(d.D(e?"imgCopied":"failCopyingImg",[e===1?"HTML":N?"PNG":b]))},u,y,null,!o||!o[0]||n.getGroupId(o[0])!==null),
r.Bl()})}
let u=e.n,a=e.o||u&&b.parseOpenPageUrlOptions(u)||{},f=!!(u&&u.copy&&u.o),c=e.s,p=c!=null&&e.m||0,y=f?null:a.s,N=f?null:a.k,_=p>=42&&p<=64&&(!y||y.r!==!1)
;if(!c&&u&&!(u.type==="frame"||e.u&&!l.s.J&&"tab-url tab".includes(u.type||""))){let e=u.type,n=v.concatOptions(u,r.Vn({
url:null,type:e==="tab"&&u.url||e==="tab-url"?null:e==="tab-title"?"title":e})),i=s.En(l).T;return l=!i||i.s.c&512?l:i,
t.ki=null,void v.executeCommand(m.ii("copyCurrentUrl",n),1,t.Ce,l,1,u.$f&&{c:u.$f,r:u.$retry,u:0,w:0})}
let k=e.u||c||"",I=!c&&(e.d?a.d!==!1:!!a.d),P=(i=e.t)!==null&&i!==void 0?i:u===null||u===void 0?void 0:u.trim;if(P){
let e=P==="start"||P==="left"?e=>e.trimLeft():P==="end"||P==="right"?e=>e.trimRight():e=>e.trim()
;if(typeof k=="string")k=e(k);else for(let l=k.length;0<=--l;)k[l]=e(k[l]+"")}
if(I)if(typeof k!="string")for(let e=k.length;0<=--e;)_&&(k[e]=o.Pi(k[e]+"")),k[e]=r.Jl(k[e]+"");else _&&(k=o.Pi(k)),
k=r.Jl(k);else typeof k=="string"&&(k=k.length<4&&!k.trim()&&(k[0]===" "||"\n\n\n".includes(k))?"":k)
;let x=!!k,w=k&&t.Kl(k,e.j,y,N,P===!1);w=c&&typeof c=="object"?`[${c.length}] `+c.slice(-1)[0]:w,
Promise.resolve(w).then(n=>{
t.$=l,u&&v.runNextCmdBy(x?1:0,u)||s.showHUD(I?n.replace(/%[0-7][\dA-Fa-f]/g,decodeURIComponent):n.replace(n.trim()?/[^\S ]/g:/[^]/g,e=>(e=JSON.stringify(e).slice(1,-1)).trim()?e:e<"\xff"?"\\x"+(e.charCodeAt(0)+256).toString(16).slice(1):r.$l(e)),e.u?14:15)
})},(e,l)=>{let n=l!=null?l.s:null;if(n!==null&&!(n.c&4)){n.c|=4;let e=s.En(l);e&&(e.c|=4)}
let i=e.k,o=1,u=/^\d+|^-\d*/.exec(i);if(u!=null){let e=u[0];i=i.slice(e.length),o=e!=="-"?parseInt(e,10)||1:-1
}else i.length>6&&i.startsWith(`<c-v-${i[5]}>`)&&(i=i[5]+i.slice(7));let a=t.qn.get(i);a||(u=i.match(m.ro),
i=u[u.length-1],o=1,a=t.qn.get(i)),r.Bl(),a&&(a.Ln===38&&a.On&&t.oa(a),e.e&&(t.ki={element:r.Ji(e.e)}),
v.executeCommand(a,o,e.l,l,0,null))},v.waitAndRunKeyReq,(e,l)=>{if(e.c===2){let l=p.be.ve(e.u)
;return void(e.f&&v.runNextCmdBy(l>0?1:0,e.f))}let r=!!e.f,n=e.c.o;r||(t.$=l);let i=!r&&g.pe(l,n.type,e.l)||l
;Promise.resolve(i).then(t=>{if(!(r||t===l&&e.u)){let l=e;return l.U=(n.extUrl?1:0)|(e.c.a?2:0),l.f=!0,
void s.he(l,!0,1,t)}
e.c.a===1?(p.be.go(e,l.s.se,l.s.u),s.showHUDEx(l,"mNormalMarkTask",1,[["mCreate"],[e.l?"Local":"Global"],e.n]),
v.runNextCmdBy(1,n)):p.be.Li(n,e,l,e.l&&r?e.k:0)})},b.We,v.onBeforeConfirm,v.onConfirmResponse,(e,l)=>{var r
;if(e.t==="e")return void s.showHUD(d.D("cannotDelSug"))
;let{t:i,s:o,u}=e,a=i==="history"&&o!=null?"session":i,f=a==="tab"?a:a+" item",m=e=>{
Promise.resolve(d.D("sugs")).then(l=>{s.showHUD(d.D(e?"delSug":"notDelSug",[l&&d.si(l,a[0])||f]))})}
;if(t.$=s.findCPort(l),
a==="tab"&&t.ye===o)s.showHUD(d.D("notRemoveCur"));else if(a!=="session")t.gl.vl(a==="tab"?o:u,a,m);else if((r=n.je())===null||r===void 0?void 0:r.forgetClosedTab){
let e=o;n.je().forgetClosedTab(e[0],e[1]).then(()=>1,t.r).then(m)}},g.openImgReq,(e,l)=>{t.$=null,
b.openJSUrl(e.u,{},()=>{t.$=l,s.showHUD(d.D("jsFail"))})},(e,l)=>{var t
;e.c!==2&&e.c!==4?k(e,l,((t=s.En(l))===null||t===void 0?void 0:t.T)||null,e.f):s.getParentFrame(l.s.u,l.s.J,1).then(t=>{
var r;k(e,l,t||((r=s.En(l))===null||r===void 0?void 0:r.T)||null,e.f)})},(e,l)=>{e.t?(v.overrideCmdOptions({enable:e.v,
forced:!0}),t.y[46](null,t.r)):f.De(1,e.v,e.b?2:9,l)},(e,l)=>{v.replaceCmdOptions({active:!0,returnToViewport:!0,
extend:!!(e.c&1),direction:e.c>=56?"before":null}),t.$=l,t.g=1,g.performFind()},g.framesGoBack,()=>(d.ri&&d.ri(),
d.ai),(e,l)=>{l.s.c|=8},(e,l)=>{v.replaceCmdOptions({mode:e.c?"caret":"",start:!0}),I(e.f),t.$=l,t.g=1,
g.enterVisualMode()},e=>{if(performance.now()-e.r.n<500){let l=e.r.c;l.element=r.Ji(e.e),c.runKeyWithCond(l)}},(e,l)=>{
var r;let u=e.o||{},a={},f=t.R(o.Pi(e.u,!0),1048576,u.s,a),d=(r=a.S)!==null&&r!==void 0?r:u.k
;f=f!==e.u||d?i._r(f,d,0):f,t.$=l,s.showHUD(f,78),n.downloadFile(f,e.f,e.r||"").then(e.m<44?r=>{r||t.bn[26]({m:37,f:e.f,
u:f},l)}:void 0)},(e,l,t)=>e===0?9:(setTimeout(()=>{s.sendResponse(l,t,9)},e),l),({k:e,v:l})=>{let t=l!==!!l
;s.showHUD(d.D(t?"useVal":l?"turnOn":"turnOff",[e,t?JSON.stringify(l):""]))},(e,l)=>{t.bn[19](e,s.findCPort(l))
},(e,l,r)=>!(l.s!==!1&&!l.s.Rl.startsWith(t.Le))&&(P(e.q,e.i,l).then(e=>{l.postMessage(r?{N:4,m:r,r:e}:e)}),l),(e,l)=>{
let r=e.u,n=r.indexOf("://");r=n>0?r.slice(r.indexOf("/",n+4)+1):r,r=r.length>40?r.slice(0,39)+"\u2026":r,t.$=l,
s.showHUD(r,78)},(e,l)=>{let n=e.t,i=r.Jl(e.u),o=n&&i?(t.Sn.actions.find(e=>e.startsWith("itemJoin="))||"").slice(9):""
;o=o?o.includes("\\")?r.tryParse(o[0]==='"'?o:`"${o}"`):r.Ye(o):"\n",t.bn[18]({s:n&&i?n+o+i:i||n,d:!1,m:0
},s.findCPort(l))},(e,l)=>{t.$=s.findCPort(l),s.showHUD(e.t,15)},(e,l)=>{
s.showHUDEx(l,"mLocalMarkTask",1,[[e.n?"mCreate":"mJumpTo"],e.i>1?e.i:["mLastMark"]]),t.$=l,v.runNextCmdBy(1,e.c.o)
},()=>{let e=t.Hn(null,null);return e&&(clearTimeout(e.i),e.r&&e.r(!1)),!e},(e,l)=>{let r=e>0&&s.indexFrame(l.s.u,e)
;return r?(g.focusFrame(r,!1,2,1),2):(e<=0&&t.bn[45](),e?4:2)},()=>{},(e,l)=>{
let[r,n,i]=e.s,o=i&&(n?"^ ":"")+i.join(" "),u={N:1,p:o,f:r};l.postMessage(u);let a=s.En(l),f=r===3?2:0
;if(a&&(!a.ts||a.ts.d!==f||a.ts.ls!==o)){a.ts={d:f,ls:o},t.t&&a.a.s.d!==f&&t.o(l.s.u,f);for(let e of a.E)e.s.d=f,
e.s.c&512||e.postMessage(u)}},(e,l)=>{let r=l.s.u,i=0,o=setInterval(()=>{let e=t.Ol.get(r)
;r!==t.ye&&e?(clearInterval(o),
(e.E.includes(l)||l.s.c&512)&&n.selectTab(r,n.selectWndIfNeed)):(++i>=12||!e)&&clearInterval(o)},17)}]
;let _=function(e,l,t,n,i,o,u,a){let f=e===2?2:0;f=l.some(e=>e.e==="tab")?f:0,s.safePost(this,{N:43,a:t,c:a,i:f,l,m:n,
r:u,s:i,t:o}),r.Bl()};t.Vi=(e,l,r,n,i)=>{e.postMessage({N:7,H:i||l!==4?s.ensureInnerCSS(e.s):null,m:i?5:0,k:i?t.Ce:0,
f:{},c:l,n:n||0,a:r})};let k=(e,l,r,n,i)=>{r&&(i||r.s.d!==2)?t.Vi(r,e.c,e.a,e.n,n):(e.a.$forced=1,
v.portSendFgCmd(l,e.c,!1,e.a,e.n||0))},I=e=>{e&&(typeof e=="string"&&(e=c.parseEmbeddedOptions(e)),
e&&typeof e=="object"&&Object.assign(t.M,r.Vn(e)))
},P=(e,l,t)=>(N||(N=n.import2("/background/sync.js").then(()=>u.Tl).then(()=>n.import2("/background/page_handlers.js"))),
N.then(l=>Promise.all(e.map(e=>l.onReq(e,t)))).then(e=>({i:l,a:e.map(e=>e!==void 0?e:null)})));window.onPagesReq=e=>{
if(e.i===-3){let e=t.Hn(null,null);return e&&clearTimeout(e.i),e}let l=structuredClone(e.q);return P(l,e.i,null)}});