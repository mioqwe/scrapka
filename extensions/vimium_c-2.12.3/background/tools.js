"use strict"
;__filename="background/tools.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./run_commands","./open_urls","./tab_commands"],(e,t,l,n,r,o,a,i,s,u,f,c,m)=>{
function _(e){let t=e.tabId,n=l.Ol.get(t)
;if(n&&n.c&512&&s.fu(n,0),s.hn(),e.windowId!==l.xe)return void r.Be.get(e.windowId,d);let o=performance.now()
;if(o-l.Po>666){let e=l.G===1?Date.now():o;p.set(l.ye,e)}l.Po=o,l.ye=t,u.tu.Lo()}function d(e){
if(!e||!e.focused)return r.oe();let t=e.id;t!==l.xe&&(l.yn=l.xe,l.xe=t),r.ge.query({windowId:t,active:!0},e=>{
e&&e.length>0&&t===l.xe&&h(e)})}function h(e){if(!e||e.length===0)return r.oe();let n=e[0],o=n.windowId,a=l.xe
;o!==a&&(l.xe=o,l.yn=a),l.fe=n.incognito?2:0,t.Ve.cn(),_({tabId:n.id,windowId:o})}Object.defineProperty(t,"__esModule",{
value:!0}),t.Ve=t.me=t.be=t.de=void 0,t.de={ae(){s.showHUD("Vimium C has no permissions to set CSs")}},t.be={
go({l:e,n,s:r,u:o},a,s){if(e&&r[0]===0&&r[1]===0)if(r.length===2){let e=o.indexOf("#")
;e>0&&e<o.length-1&&(r=[0,0,o.slice(e)])}else(r[2]||"").length<2&&(r=[0,0]);s=s>=0?s:-1
;let u=a?r:r.length!==2||r[0]||r[1]?r.length!==2||r[1]>524287||r[0]>8191?r:Math.max(0,r[0])|Math.max(0,r[1])<<13:0,f=t.be.Ao(n,e?o:""),c=e?u:u?{
s:u,t:s,u:o.slice(0,8192)}:{t:s,u:o.slice(0,8192)};a?(l.Mo||(M.Ro(),l.Mo=new Map)).set(f,c):i.lu(f,c)},Li(e,o,a,u){
let{n:f}=o,_=t.be.Ao(f,o.l?o.u:""),d=a.s.se&&(l.Mo===null||l.Mo===void 0?void 0:l.Mo.get(_))||i.xo(_),h=typeof d=="number"?[d&8191,d>>>13]:typeof d=="string"?JSON.parse(d):d?d instanceof Array?d.slice(0):{
url:d.u,tabId:d.t,scroll:typeof d.s!="number"?d.s||[0,0]:[d.s&8191,d.s>>>13]}:d;if(typeof d=="string"&&t.be.go({l:o.l,
n:f,s:h instanceof Array?h:h.scroll||[0,0],u:o.u},!1,a.s.u),!h&&o.s)try{let e=JSON.parse(o.s);if(e&&typeof e=="object"){
let t=+e.scrollX,l=+e.scrollY;t>=0&&l>=0&&(h=[t|0,l|0,""+(e.hash||"")])}}catch(e){}
if(!h)return s.showHUDEx(a,"noMark",0,[[o.l?"Local":"Global"],f]),void c.runNextCmdBy(0,e)
;let M=c.parseFallbackOptions(e);if(h instanceof Array)return M&&(M.$else=null),void t.be.Jo(a.s.u,null,a,!0,f,h,0,M,u)
;M&&(M.$else=M.$then);let p=h.tabId,y=e.wait,b=e.prefix,v=h.url,w={n:f,a:!!e.parent&&!b,p:!0,
q:m.parseOpenPageUrlOptions(e),s:h.scroll||[0,0],t:p,u:v,f:M,w:typeof y=="number"?Math.min(Math.max(0,y||0),2e3):y}
;w.p=!!b||b==null&&!w.a&&w.s[1]===0&&w.s[0]===0&&!!n.Ur(v)&&(!v.includes("#")||o.u.startsWith(v)),
t.be.Qo(o.u,v,w)?t.be.Jo(a.s.u,null,a,!1,f,w.s,0,M,u):p>=0&&l.Ol.has(p)?r.tabsGet(p,t.be.Wo.bind(0,w,u)):m.We(w)},
Qo(e,t,l){let n=e.split("#",1)[0],r=t.split("#",1)[0]
;return n===r||!!l.p&&n.startsWith(r.endsWith("/")||r.includes("?")?r:r+"/")||!!l.a&&r.startsWith(n.endsWith("/")||n.includes("?")?n:n+"/")
},Wo(e,n,o){let a=r.getTabUrl(o);if(t.be.Qo(a,e.u,e)){let a=o.id===l.ye;a||r.selectTab(o.id,r.selectWndIfNeed),
t.be.Mi(e,o.id,a?n:0,!0)}else m.We(e)},
Ao:(e,t)=>t?"vimiumMark|"+a.Ri(t.slice(0,499).split("#",1)[0])+(t.length>1?"|"+e:""):"vimiumGlobalMark|"+e,
Jo(e,t,n,o,a,i,s,u,m){if(n=!t||!t.T||t.T.s.c&512?n:t.T){let e={g:!o,s:i,t:"",f:u||{},w:s||0}
;Promise.resolve(a&&f.Xl("mNormalMarkTask",[["mJumpTo"],[o?"Local":"Global"],a])).then(t=>{e.t=t||"",m?(l.Ce=m,
l.Vi(n,19,e,1,1)):c.portSendFgCmd(n,19,!0,e,1)})}else r.f(e,0,null,(e,t)=>{window.scrollTo(e,t)
},[i[0],i[1]],u?()=>(c.runNextCmdBy(1,u),r.oe()):null)},Mi(e,n,r,o){let a=l.Ol.get(n),i=e.w;s.oi(a).then(()=>{
t.be.Jo(n,a,null,!1,e.n,e.s,o||i===!1?0:typeof i!="number"?200:i,e.f,r)}),e.t!==n&&e.n&&t.be.go({l:!1,n:e.n,s:e.s,u:e.u
},l.fe===2,n)},ve(e){let n=t.be.Ao("",e),r=0;l.iu.forEach((e,t)=>{t.startsWith(n)&&(r++,i.lu(t,null))});let o=l.Mo
;return o&&o.forEach((e,t)=>{t.startsWith(n)&&(r++,o.delete(t))
}),s.showHUDEx(l.$,"markRemoved",0,[r,[e==="#"?"allLocal":e?"Local":"Global"],[r!==1?"have":"has"]]),r}},t.me={Ko:null,
nl:0,Uo(){let e=l.iu.get("findModeRawQueryList")||"";t.me.Ko=e?e.split("\n"):[],t.me.Uo=null},rn(e,r,o){let a=t.me
;a.Uo&&a.Uo();let s=e?l.Co||(M.Ro(),l.Co=a.Ko.slice(0)):a.Ko;if(!r)return(s[s.length-(o||1)]||"").replace(/\r/g,"\n")
;if(r=r.replace(/\n/g,"\r"),e)return void a.Eo(r,s,!0);r=n.ol(r,0,99);let u=a.Eo(r,s);u&&i.lu("findModeRawQueryList",u),
l.Co&&a.Eo(r,l.Co,!0)},Eo(e,t,l){let n=t.lastIndexOf(e);if(n>=0){if(n===t.length-1)return;t.splice(n,1)
}else t.length>=50&&t.shift();if(t.push(e),!l)return t.join("\n")},ce(e){e?l.Co&&(l.Co=[]):(t.me.Uo=null,t.me.Ko=[],
i.lu("findModeRawQueryList",""))}};let M={Xo:!1,nl:0,Ro(){M.Xo||(r.Be.onRemoved.addListener(M.Yo),M.Xo=!0)},Yo(){
M.Xo&&(M.nl=M.nl||setTimeout(M.Zo,34))},Zo(){M.nl=0;for(let e of l.Ol.values())if(e.a.s.se)return;r.Be.getAll(e=>{
e.some(e=>e.incognito)||M.la()})},la(){l.Co=null,l.Mo=null,r.Be.onRemoved.removeListener(M.Yo),M.Xo=!1}},p=l.Ae;t.Ve={
He(e,t){return p.get(t.id)-p.get(e.id)},cn:l.r},r.ge.onActivated.addListener(_),
!r.Be||r.Be.onFocusChanged.addListener(e=>{e!==-1&&r.ge.query({windowId:e,active:!0},h)}),
r.ge.onRemoved.addListener(e=>{l.Ol.delete(e),p.delete(e)}),i.Tl.then(()=>{r.getCurTab(e=>{l.Po=performance.now()
;let t=e&&e[0];if(!t)return r.oe();l.ye=t.id,l.xe=t.windowId,l.fe=t.incognito?2:0})}),l.dl.vomnibarOptions=e=>{
let t=i.V.vomnibarOptions,n=l.qe,r=!0,{actions:o,maxMatches:a,queryInterval:s,styles:f,sizes:c}=t
;if(e!==t&&e&&typeof e=="object"){
let t=Math.max(3,Math.min(e.maxMatches|0||a,25)),l=e.actions,n=l?l.replace(/[,\s]+/g," ").trim():"",i=+e.queryInterval,u=((e.sizes||"")+"").trim(),m=e.styles,_=m instanceof Array?m:((m||"")+"").trim(),d=Math.max(0,Math.min(i>=0?i:s,1200))
;r=a===t&&s===d&&u===c&&o===n&&f===_,r||(o=n,a=t,s=d,c=u,f=_),e.actions=n,e.maxMatches=t,e.queryInterval=d,e.sizes=u,
e.styles=_}let m=f instanceof Array?f.join(" "):f;l.Bo&&!/(^|\s)high-contrast(\s|$)/.test(m)&&(m+=" high-contrast"),
l.q.vomnibarOptions=r?t:e,n.n=a,n.i=s,n.s=c,n.t=m,u.tu.Jr(0,1),u.tu.Jr(1,1),i.ze({n:a,i:s,s:c,t:n.t}),
l.Sn.actions=o.split(" ")
;let _=c.split(","),d=Math.max(24,Math.min(Math.max(24,Math.min(_.length&&+_[0]||77,320))+(_.length>1&&+_[1]||3),320))
;l.Sn.Jn=a*Math.max(14,Math.min(_.length>2&&+_[2]||44,120))+d}});