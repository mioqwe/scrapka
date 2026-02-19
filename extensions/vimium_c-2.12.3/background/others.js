"use strict"
;__filename="background/others.js",define(["require","exports","./store","./browser","./utils","./settings","./i18n","./normalize_urls","./normalize_urls","./open_urls"],(e,t,n,i,o,l,r,u,s,c)=>{
Object.defineProperty(t,"__esModule",{value:!0}),n.dl.showActionIcon=e=>{let t=i.n.browserAction;t?(n.t=e,
i.import2("/background/action_icon.js").then(e=>{e.e()}),Promise.resolve(r.Fe("name")).then(n=>{
e||(n+="\n\n"+r.Fe("noActiveState")),t.setTitle({title:n})})):n.dl.showActionIcon=void 0},l.Tl.then(()=>{
n.q.showActionIcon?n.dl.showActionIcon(!0,"showActionIcon"):n.o=n.r}),setTimeout(()=>{new Promise((t,n)=>{
e(["/background/sync.js"],t,n)}).then(e=>e)},100),(()=>{function e(){h&&(h.ji=null),P=M=h=T=null,k&&clearTimeout(k),
w&&clearTimeout(w),p=C=F=k=w=0,b="",o.Bl()}function t(){let n=Date.now()-p;if(n>5e3||n<-5e3)return e()
;k=setTimeout(t,3e4)}function l(){w=0;let e=h;if(e&&!e.Ci&&(h=null,e.ji)){let t=Date.now();return t<p&&(p=t-1e3),
m(e.Fi,e.ji)}}function a(e,t,l,r,u){if(!e.ji)return void(h===e&&(h=null));h=null;let c,a=t.length>0?t[0]:null;C=r,F=u,
M=[];let m=new Set;` ${n.qe.t} `.includes(" type-letter ");for(let e=0,n=l?0:1,i=t.length;e<i;e++){
let i=t[e],{title:l,u:r,e:u}=i,c=r,a="",f=i.s!=null,d=0;c=o.El(c,1),c.startsWith("file")&&(c=s.fn(c)),
c=c.replace(/%20/g," "),m.has(c)?c=`:${e+n} ${c}`:m.add(c),d&&(a=` ~${e+n}~`),a=(l&&l+" - ")+i.textSplit+a;let p={
content:c,description:a};d&&(p.deletable=!0),(d||f)&&(P||(P=new Map),P.has(c)||P.set(c,{Oi:u,sl:f?i.s:null,Rl:r})),
M.push(p)}if(T=e.Fi,l)if(a.e==="search"){let e=a.p
;c=(e&&e+g)+a.textSplit,j=2,(a=t[1])&&a.e==="math"&&(M[1].description=a.textSplit+" = "+a.t)}else j=3,
c=M[0].description;else c=_+"<input>";l&&(b=t[0].u,P&&M.length>0&&b!==M[0].content&&P.set(b,P.get(M[0].content)),
M.shift()),c&&i.n.omnibox.setDefaultSuggestion({description:c}),e.ji(M),o.Bl()}function m(e,o){if(e=S(e),h){
let t=e===h.Fi;if(h.ji=t?o:null,t)return}if(e===T)return void(M&&o(M))
;if(C===1&&e.startsWith(T))return i.n.omnibox.setDefaultSuggestion({description:"Open: <input>"}),void o([]);if(h={ji:o,
Fi:e,Ci:!1},w)return;let r=Date.now(),u=n.qe.i+p-r;if(u>30&&u<3e3)return void(w=setTimeout(l,u));h.Ci=!0,
k||(k=setTimeout(t,3e4)),p=r,P=M=null,b="";let s=C<2||!e.startsWith(T)?0:C===3?e.includes(" ")?0:8:F;n.gl.er(e,{
o:"omni",t:s,r:O,c:y,f:1},a.bind(null,h))}function f(e,t,i){
return e?e[0]===":"&&/^:([1-9]|1[0-2]) /.test(e)&&(e=e.slice(e[2]===" "?3:4)):e=u._r(""),
e.slice(0,7).toLowerCase()==="file://"&&(e=o.Yn().test(e)?u.kn("show image "+e,!1,0):e),i!=null?n.bn[7]({s:i
}):c.openUrlReq({u:e,r:t==="currentTab"?0:t==="newForegroundTab"?-1:-2})}let d=i.n.omnibox;if(!d)return
;let p,g=": ",v=!1,_="Open: ",T=null,b="",h=null,w=0,P=null,y=128,M=null,k=0,j=0,C=0,F=0,O=6,S=e=>{
if(e=e.trim().replace(o.F," "),n.Sn.actions.includes("icase")){let t=/^:[WBH] /.test(e)?3:0
;e=t?e.slice(0,t)+e.slice(t).toLowerCase():e.toLowerCase()}return e};d.onInputStarted.addListener(()=>{
if(i.getCurWnd(!1,e=>{let t=e&&e.width;y=t?Math.floor((t-160/devicePixelRatio)/7.72):128}),v||(v=!0,
Promise.resolve(r.Fe("i18n")).then(()=>{r.ui()!=="en"&&Promise.resolve(r.D("colon")).then(e=>{g=e+r.D("NS")||g,
_=r.D("OpenC")||_})})),k)return e()}),d.onInputChanged.addListener(m),d.onInputEntered.addListener(function t(i,o){
let r=h;if(r&&r.ji){if(r.ji=t.bind(null,i,o),r.Ci)return;return w&&clearTimeout(w),l()}if(i=S(i),
T===null&&i)return n.gl.er(i,{o:"omni",t:0,r:3,c:y,f:1},(e,t)=>t?f(e[0].u,o,e[0].s):f(i,o));b&&i===T&&(i=b)
;let u=P===null||P===void 0?void 0:P.get(i),s=u===null||u===void 0?void 0:u.sl;return e(),f(u?u.Rl:i,o,s)})})(),
n.tl&&Promise.all([n.tl,l.Tl]).then(([e])=>{let t=e&&e.reason,s=t==="install"?"":t==="update"&&e.previousVersion||"none"
;s!=="none"&&setTimeout(()=>{
if(console.log("%cVimium C%c has been %cinstalled%c with %o at %c%s%c.","color:red","color:auto","color:#0c85e9","color:auto",e,"color:#0c85e9",o.now(),"color:auto"),
n.Q.ho&&console.log("Sorry, but some commands of Vimium C require the permission to run in incognito mode."),!s){
let e=()=>{n.fo||n.Si?++t<25&&setTimeout(e,200):c.We({u:n.Q.Ze+"#commands"})},t=0;return void e()}
if(l.hl("vomnibarPage"),parseFloat(s)>=parseFloat(n.Q.mo)&&(s>="1.99.98"||n.Q.mo<"1.99.98"))return
;if(n.Di?n.Di(6e3):n.Di=!0,l.hl("newTabUrl"),!n.q.notifyUpdate)return;let t="vimium_c-upgrade-notification"
;Promise.all([r.D("Upgrade"),r.D("upgradeMsg",[n.Q.aa]),r.D("upgradeMsg2"),r.D("clickForMore")]).then(([e,o,l,r])=>{
let s=i.n.notifications;s&&s.create(t,{type:"basic",iconUrl:n.Le+"icons/icon128.png",title:"Vimium C "+e,
message:o+l+"\n\n"+r},e=>{let n;if(n=i.oe())return n;t=e||t,s.onClicked.addListener(function e(t){t==t&&(s.clear(t),
c.We({u:u._r("vimium://release")}),s.onClicked.removeListener(e))})})})},500)}),setTimeout(()=>{
let e=globalThis.document;e&&e.body&&(e.body.innerText=""),o.Bl()},1e3)});