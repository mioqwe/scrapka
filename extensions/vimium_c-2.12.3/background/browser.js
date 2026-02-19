"use strict";__filename="background/browser.js",define(["require","exports","./store","./utils"],(e,l,t,r)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.import2=l.s=l.f=l.v=l.b=l.removeTempTab=l.downloadFile=l.makeTempWindow_r=l.makeWindow=l.openMultiTabs=l.tabsCreate=l.selectWndIfNeed=l.selectWnd=l.selectTab=l.Pe=l.w=l.h=l.Re=l._e=l.ke=l.k=l.selectIndexFrom=l.selectFrom=l.getCurWnd=l.Oe=l.le=l.getCurTabs=l.getCurTab=l.isTabMuted=l.getTabUrl=l.getGroupId=l.tabsUpdate=l.tabsGet=l.oe=l.N=l.je=l.Be=l.ge=l.n=void 0,
l.n=browser,globalThis.chrome&&(globalThis.chrome=null),l.ge=l.n.tabs,l.Be=l.n.windows,l.je=()=>l.n.sessions,
l.N=()=>l.n.webNavigation,l.oe=()=>l.n.runtime.lastError,l.tabsGet=l.ge.get,l.tabsUpdate=l.ge.update,l.getGroupId=e=>{
let l=e.cookieStoreId;return l!=="firefox-default"&&l||null},l.getTabUrl=e=>e.url||"",l.isTabMuted=e=>e.mutedInfo.muted,
l.getCurTab=l.ge.query.bind(null,{active:!0,lastFocusedWindow:!0}),l.getCurTabs=l.ge.query.bind(null,{
lastFocusedWindow:!0}),l.le=l.ge.query.bind(null,{lastFocusedWindow:!0,hidden:!1}),l.Oe=e=>!e.hidden,
l.getCurWnd=(e,r)=>{let n={populate:e};return t.xe>=0?l.Be.get(t.xe,n,r):l.Be.getCurrent(n,r)},
l.selectFrom=e=>e[l.selectIndexFrom(e)],l.selectIndexFrom=e=>{for(let l=e.length;0<--l;)if(e[l].active)return l;return 0
},l.k=e=>/^extension:/.test(e)?t.Q.H+"-"+e.slice(e.indexOf("ext")):e,l.ke=function(e){
return e.apply(void 0,[].slice.call(arguments,1)).then(n,t.r)};let n=e=>e!==void 0?e:null;l._e=e=>e!==t.r?()=>{
let t=l.oe();return e(!t),t}:l.oe,l.Re=function(e){let l=[].slice.call(arguments,1);return e.apply(0,l)};let o=e=>{
let l=t.U.get(e);return l===1||l===2&&!0};l.w=e=>{l.h=e},l.Pe=(e,t)=>{let r=e=>{let l=t;l&&(t=null,e&&clearTimeout(n),
l&&l(e))};if(t===l.oe)return void l.ge.remove(e,t);let n=setTimeout(r,1500,!1);l.ge.remove(e,()=>{let e=l.oe()
;return r(!e),e})},l.selectTab=(e,t)=>{l.tabsUpdate(e,{active:!0},t)},l.selectWnd=e=>(e&&l.Be.update(e.windowId,{
focused:!0}),l.oe()),l.selectWndIfNeed=e=>(e&&e.windowId!==t.xe&&l.selectWnd(e),l.oe());let i=()=>{
let e=t.Q.Ge,l=e?0:navigator.userAgentData,r=e||!l?(e||navigator.userAgent+"").includes("Thunderbird"):l.brands.some(e=>e.brand.includes("Thunderbird"))
;return i=()=>r,r};l.tabsCreate=(e,r,n)=>{let{url:u}=e;return u?o(u)&&delete e.url:(u=t.newTabUrl_f,
t.fe===2&&(n===-1?u.includes("pages/blank.html")&&u.startsWith(t.Le):!n&&u.startsWith(location.protocol))||o(u)||(e.url=u),
e.url||delete e.url),i()&&delete e.openerTabId,l.ge.create(e,r)},l.openMultiTabs=(e,r,n,o,i,u,a)=>{let d,s=t=>{var n
;if(l.oe())return a&&a(),l.oe()
;e.index=t.index,e.windowId=t.windowId,e.cookieStoreId=(n=l.getGroupId(t))!==null&&n!==void 0?n:void 0,a&&a(t),
e.active=!1;let i=e.index!=null,u=o?o.length:1,d=l.oe;o.length>1&&(o[0]=e.url)
;for(let t=0;t<r;t++)for(let r=t>0?0:1;r<u;r++)o.length>1&&(e.url=o[r]),i&&++e.index,l.ge.create(e,d)}
;if((i=i!==!1)&&t.Xe){
if(u&&(d=l.getGroupId(u))!=null)return e.cookieStoreId=d,void l.tabsCreate(e,t=>(l.oe()&&(l.oe()+"").includes("No permission for cookieStoreId")?(delete e.cookieStoreId,
l.ge.create(e,s)):s(t),l.oe()),n)}else i||e.openerTabId==null||u&&!l.getGroupId(u)||delete e.openerTabId
;l.tabsCreate(e,s,n)},l.makeWindow=(e,r,n)=>{let i=e.focused!==!1
;(r=r?r==="minimized"===i||e.type==="popup"||r==="normal"||r==="docked"?"":r:"")&&!r.includes("fullscreen")&&(e.state=r,
r=""),delete e.focused;let u=e.url;u||e.tabId!=null||(u=e.url=t.newTabUrl_f),typeof u=="string"&&o(u)&&delete e.url,
l.Be.create(e,r||!i||n?e=>{if(n&&n(e),!r&&i||!e)return l.oe();let t=i?{}:{focused:!1};r&&(t.state=r),l.Be.update(e.id,t)
}:l.oe)},l.makeTempWindow_r=(e,t,r)=>{let n={type:"normal",focused:!1,incognito:t,state:"minimized",tabId:e}
;delete n.focused,delete n.state,n.left=n.top=0,n.width=n.height=50,l.Be.create(n,r)},
l.downloadFile=(e,t,n)=>l.ke(l.n.permissions.contains,{permissions:["downloads"]}).then(o=>{if(!o)return!1;let i={url:e}
;if(t){let l=/\.[a-z\d]{1,4}(?=$|[?&])/i
;if(t=(t=(t=r.Ye(t))[0]==="#"?t.slice(1):t).replace(/[\r\n]+/g," ").replace(/[/\\?%*:|"<>_]+/g,"_"),!l.test(t)){
let r=l.exec(e);t+=r?r[0]:e.includes(".")?"":".bin"}i.filename=t}return n&&(i.headers=[{name:"Referer",value:n}]),
l.ke(l.n.downloads.download,i).then(()=>!0)});let u=null;l.removeTempTab=(e,r,n)=>{var o
;if(!((o=l.je())===null||o===void 0?void 0:o.forgetClosedTab))return void l.ge.remove(e,l.oe);let i,a=u;i=(async()=>{
await l.ge.remove(e).catch(t.r),await a;let o=await l.je().getRecentlyClosed({maxResults:1}),d=o&&o[0]&&o[0].tab
;d&&d.url===n&&await l.je().forgetClosedTab(r,d.sessionId).catch(t.r),u===i&&(u=null)})(),u=i},
l.b=e=>(e=e.slice(0,99).toLowerCase(),t.U.get(e)!==1&&(e.startsWith("about:")?e!=="about:blank":e.startsWith(t.Q.H))),
l.v=(e,t)=>{
let r=l.n.permissions,n=Promise.all(e.map(e=>e&&l.ke(l.n.permissions.contains,e))),o=e.map(e=>e&&(e.permissions||e.origins)[0])
;n.then(e=>{let l=!1,n=!1,i=(i,d)=>{let s=!d;if(d){let l=d.permissions;for(let t of l||[]){let l=o.indexOf(t)
;l>=0&&(e[l]=i,s=!0)}for(let t of(!l||l.length<=0)&&d.origins||[]){let l=o.indexOf(t);l>=0&&(e[l]=i,s=!0)}}
s&&(t(e,!0)===!1&&(l=n=!1),l!==e.includes(!1)&&r.onAdded[(l=!l)?"addListener":"removeListener"](u),
n!==e.includes(!0)&&r.onRemoved[(n=!n)?"addListener":"removeListener"](a))},u=i.bind(null,!0),a=i.bind(null,!1)
;e.includes(!1)||e.includes(!0)?i(!0):t(e,!1)})},l.f=(e,t,r,n,o,i)=>{{let u=t>=0?{frameId:t}:{allFrames:!0,
matchAboutBlank:!0}
;u.runAt="document_start",n?u.code=`${(n+"").split("{")[1].split("(")[0].trim()}(${o?o.join(","):""})`:u.file=r[0],
l.ge.executeScript(e,u,i||l.oe)}},l.s=e=>{let r=t.Le.length-1;for(let n of t.Q.el.slice(0,-1))l.f(e,-1,[n.slice(r)])},
l.import2=l=>new Promise((t,r)=>{e([l],t,r)}).then(e=>e),t.ll<6&&(t.tl=new Promise(e=>{
let t=l.n.runtime.onInstalled,r=l=>{let n=r;n&&(r=null,e(l),t.removeListener(n))};t.addListener(r),
setTimeout(r,6e3,null)}))});