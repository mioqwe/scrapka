"use strict"
;__filename="background/ports.js",define(["require","exports","./store","./utils","./browser","./exclusions","./i18n"],(e,l,t,r,n,u,o)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.oi=l.fu=l.tryToKeepAliveIfNeeded_mv3_non_ff=l.getParentFrame=l.complainNoSession=l.complainLimits=l.p=l.ensuredExitAllGrab=l.showHUDEx=l.showHUD=l.safePost=l.isNotVomnibarPage=l.ensureInnerCSS=l.indexFrame=l.En=l.j=l.isExtIdAllowed=l.findCPort=l.he=l.I=l.au=l.cu=l.OnConnect=l.sendResponse=l.hn=void 0
;let f=0;l.hn=()=>{f=0};let i=(e,l)=>{if(f=0,e.H!==90)t.bn[e.H](e,l);else{let r=t.bn[e.c](e.a,l,e.i)
;r!==l&&l.postMessage({N:4,m:e.i,r})}};l.sendResponse=(e,t,r)=>{let n=l.En(e);if(n&&n.E.includes(e))try{e.postMessage({
N:4,m:t,r})}catch(e){}},l.OnConnect=(e,l)=>{if(l&128)return void p(e,l);let r=_(e),o=r.Rl,f=o===t.vomnibarPage_f
;if(l>7||f){if(l===999)return void(r.u>=0&&!r.J&&n.removeTempTab(r.u,e.sender.tab.windowId,r.Rl))
;if(l&256||f)return void a(e,l,f||o===t.Q.Bn)}
let c,d,v,N=r.u,m=N>=0?t.Ol.get(N):void(N=r.u=t.getNextFakeTabId()),g=(l&9)!=1&&(l&33)!=33&&m!==void 0
;g&&m.ts!==null?(d=m.ts.ls,c=m.ts.d,v=c===2?3:1):(d=!u.rs||l&8?null:u.as(o,r),c=d===null?0:d?1:2,v=0),r.d=c,
l&64&&(r.c=v|=64),g&&(v|=m.c&4,l&1024&&(v|=128,m.c|=128),r.c=v),l&8?(l&4096&&e.postMessage({N:1,p:v&1?d:u.as(o,r),f:v&3
}),h(m,e,l)):e.postMessage(l&4?{N:0,c:null,d:!1,f:v,p:d,v:t.du}:{N:0,c:t.A,d:!1,f:v,k:t.jn,m:t.bo,p:d,t:t.vo,v:t.du}),
e.sender.tab=null,e.onDisconnect.addListener(s),e.onMessage.addListener(i);let k=r.J===0
;g?(l&2?(t.t&&m.a.s.d!==c&&t.o(N,c),m.a=e):m.a.s.c&512&&(m.a=e),k&&(m.T=e),m.E.push(e)):(t.Ol.set(N,{a:e,T:k?e:null,
E:[e],ts:null,c:0}),c!==0&&t.t&&t.o(N,c),m!==void 0&&b(m))};let s=e=>{let l=e.s,r=l.u,n=t.Ol.get(r)
;if(e===t.$&&(l.c|=512),!n)return;let u=n.E,o=u.lastIndexOf(e),f=!l.J,i=u.length;o>=0&&(i--==1?u.length=0:u.splice(o,1),
i>0&&e===n.a&&(n.a=u[0])),(f?o>=0:!i)&&(n.c&512?l.c|=512:t.Ol.delete(r))},a=(e,l,u)=>{if(l&256){
if(u)return e.s.u<0&&(e.s.u=l&8?t.getNextFakeTabId():t.$?t.$.s.u:t.ye),e.s.c|=256,t.Ke.push(e),e.sender.tab=null,
e.onDisconnect.addListener(c),e.onMessage.addListener(i),void(l&8?l>>13!==t.ou&&e.postMessage({N:47,d:t.qe,v:t.ou
}):e.postMessage({N:42,l:t.qe,s:r.Fn(!1),v:t.ou}))}else e.s.u<0||e.s.J===0||n.f(e.s.u,e.s.J,[t.Q.vu]);e.disconnect()
},c=e=>{let l=t.Ke,r=l.lastIndexOf(e);return r>=0&&(r===l.length-1?--l.length:l.splice(r,1)),n.oe()};l.cu=(e,l)=>{
e.postMessage({N:49,t:l.t,s:l.s})};let d=e=>{if(e.H!==92)return;let l=t.Hn(null,null);l&&(clearTimeout(l.i),
l.r&&l.r(e.r))},v=()=>{d({H:92,r:!1})};l.au=()=>{t.pu=null,d({H:92,r:!1}),n.n.offscreen.closeDocument(n.oe)}
;let p=(e,r)=>{if(r&1024)e.disconnect();else if(r&2048)if(t._u){let r=0;t._u.d=null,e.onMessage.addListener(d),
l.cu(e,t._u),e.onDisconnect.addListener(r?l.au:v),r&&(t.pu=e)}else e.disconnect();else e.s=!1,e.onMessage.addListener(i)
},_=e=>{let l=e.sender,t=l.tab;return e.s={J:l.frameId||0,c:0,d:0,se:t!=null&&t.incognito,u:t!=null?t.id:-3,Rl:l.url}
},b=e=>{t.$&&t.$.s.u===e.a.s.u&&(t.$.s.c|=512);for(let l of e.E)l.s.J&&N(l)},N=e=>{e.s.c|=512;try{
e.onDisconnect.removeListener(s),e.onMessage.removeListener(i),e.postMessage({N:15})}catch(l){return m(e),1}},m=e=>{try{
e.disconnect()}catch(e){}};l.I=(e,o,f,i)=>{var s
;return(e=e||((s=t.Ol.get(t.ye))===null||s===void 0?void 0:s.T)||null)&&!f&&u.rs&&(o||u.pn)?e.s.Rl:new Promise(t=>{
let u=e&&e.s.J&&r.isNotPriviledged(e)?n.N():null;e?(e.s.J?u?u.getFrame:(e,l)=>l(null):n.tabsGet)(u?{tabId:e.s.u,
frameId:e.s.J}:e.s.u,r=>{let u=r?r.url:"";return!u&&i&&(i.N=3,l.safePost(e,i)),t(u),n.oe()
}):n.getCurTab(e=>(t(e&&e.length?n.getTabUrl(e[0]):""),n.oe()))})},l.he=(e,r,n,u)=>{var o
;u||(u=t.$||((o=t.Ol.get(t.ye))===null||o===void 0?void 0:o.T));let f=l.I(u,r,n,e)
;if(typeof f!="string")return f.then(l=>(e.u=l,l&&t.bn[e.H](e,u),l));e.u=f,t.bn[e.H](e,u)},l.findCPort=e=>{
let l=t.Ol.get(e&&e.s.u>=0?e.s.u:t.ye);return l?l.a:null},l.isExtIdAllowed=e=>{
let l=e.id!=null?e.id:"unknown_sender",r=e.url,n=e.tab,u=t.uu,o=u.get(l);if(o!==!0&&n){
let e=t.Ol.get(n.id),r=e?e.su:null;e&&(r==null||r!==l&&typeof r=="string")&&(e.su=r==null?l:2)}if(o!=null)return o
;if(r===t.vomnibarPage_f)return!0;if(o==null&&r){if(r=new URL(r).host,u.get(r)===!0)return u.set(l,!0),!0
;r!==l&&u.set(r,l)}
return console.log("%cReceive message from an extension/sender not in the allow list: %c%s","background-color:#fffbe5","background-color:#fffbe5;color:red",l),
u.set(l,!1),!1},l.j=()=>t.Ol.get(t.$?t.$.s.u:t.ye),l.En=e=>t.Ol.get(e.s.u),l.indexFrame=(e,l)=>{let r=t.Ol.get(e)
;for(let e of r?r.E:[])if(e.s.J===l)return e;return null},l.ensureInnerCSS=e=>{if(e.c&8)return null;let l=t.Ol.get(e.u)
;return l&&(l.c|=4),e.c|=12,t.bu},l.isNotVomnibarPage=(e,l)=>{let t=e.s,r=t.c
;return!(r&256||(l||r&2048||(console.warn("Receive a request from %can unsafe source page%c (should be vomnibar) :\n %s @ tab %o","color:red","color:auto",t.Rl.slice(0,128),t.u),
t.c|=2048),0))},l.safePost=(e,l)=>{try{let t=e.s.c&512;return!t&&e.postMessage(l),t?0:1}catch(e){return 0}}
;let g=(e,t)=>{l.showHUD(t+"",e)};l.showHUD=(e,r)=>{if(typeof e!="string")return void e.then(g.bind(null,r))
;let n=r===14||r===15;n&&(e.startsWith(t.Q.H+"-")&&e.includes("://")&&(e=e.slice(e.indexOf("/",e.indexOf("/")+2)+1)||e),
e=e.length>41?e.slice(0,41)+"\u2026":e&&e+(t.Nu?"\u3002":".")),t.$&&!l.safePost(t.$,{N:11,H:l.ensureInnerCSS(t.$.s),
k:n&&e?20:r||1,t:e})&&(t.$=null)},l.showHUDEx=(e,t,r,n,u)=>{if(!e)return;let f=u||o.Xl(t,n)
;typeof f=="string"?l.safePost(e,{N:11,H:l.ensureInnerCSS(e.s),k:1,d:r,t:f}):f.then(l.showHUDEx.bind(null,e,"NS",r,[]))
},l.ensuredExitAllGrab=e=>{let l={N:8};for(let t of e.E)t.s.c&4||(t.s.c|=4,t.postMessage(l));e.c|=4},l.p=(e,l,n)=>{
let u=r.in(t.Ol),o=t.ye,f=r=>{let n=t.Ol.get(r),u=0;return n!==void 0&&(n.c&512&&e&&(n.c|=e),u=Math.min(n.E.length,8),
l(n)),u};if(u.length>=10){let e=u.indexOf(o);e>=0&&(u.splice(e,1),f(o)),r.mu(u,f,n)}else u.forEach(f)},
l.complainLimits=e=>{l.showHUDEx(t.$,"notAllowA",0,[e])},l.complainNoSession=()=>{
l.complainLimits("control tab sessions")},l.getParentFrame=(e,t,r)=>t&&n.N()?r===1?n.ke(n.N().getFrame,{tabId:e,
frameId:t}).then(t=>{let r=t?t.parentFrameId:0;return r>0?l.indexFrame(e,r):null}):n.ke(n.N().getAllFrames,{tabId:e
}).then(n=>{let u=!1,o=t;if(!n)return null;do{u=!1;for(let e of n)if(e.frameId===o){o=e.parentFrameId,u=o>0;break}
}while(u&&0<--r);return o>0&&o!==t?l.indexFrame(e,o):null}):Promise.resolve(null),
l.tryToKeepAliveIfNeeded_mv3_non_ff=()=>{},l.fu=(e,l)=>{let u=e.c
;if(u&524288||!(u&131072||r.isNotPriviledged(e.a)))return;let o=e.a.s.u;n.f(o,-1,null,(e,l)=>{
typeof VApi=="object"&&VApi&&VApi.q(0,l)},[0,512|(l?8:0)|u&126976],()=>{let e=t.Ol.get(o);return e&&(e.c&=-524289),
n.oe()}),u&=-258561,e.c=u|524288};let h=(e,r,n)=>{r.s.c|=n&16&&8,e||l.fu({a:r,T:null,E:[],ts:null,c:131072},0);let u=n
;if(n&512);else if(n>>13===t.du||e&&e.c&126976){if(!(n&2&&e&&e.c&512))return;u=e.c&258048,(u&131072||r.s.J)&&l.fu(e,0)
}else u=126976;u&8192&&r.postMessage({N:6,d:t.A,v:t.du}),u&32768&&r.postMessage({N:9,m:t.bo,t:t.vo,k:u&65536?t.jn:null,
v:t.du}),u&16384&&r.s.c&8&&(r.s.c|=32,r.postMessage({N:11,H:t.bu,f:t.Gn}))};l.oi=(e,t)=>{let u=r.Et(),o=e&&(t?e.a:e.T)
;if(e&&(!o||o.s.c&512)){l.fu(e,0),/^(?:http|file|ftp)/i.test(e.a.s.Rl)||n.selectTab(e.a.s.u,n.selectWndIfNeed)
;let r=0,o=setInterval(()=>{r++;let l=t?e.a:e.T;r!==5&&(!l||l.s.c&512)||(clearInterval(o),u.At())},33)}else u.At()
;return u.Vt},setInterval(()=>{let e=performance.now();for(let e=t.Ke.length;0<=--e;){let l=t.Ke[e],r=l.s.c;if(r&1024){
let n=l.s.u!==t.ye;n&&(n?(l.s.c=r|512,m(l),t.Ke.splice(e,1)):r&524288||(l.s.c=r|524288,l.postMessage({N:48})))
}else l.s.c=r|1024}let l=0;{let r=[];t.Ol.forEach((e,l)=>{let n=e.E.length&&l>=0&&t.Ae.get(l)||0;n>0&&r.push(n)}),
r.sort((e,l)=>l-e),l=Math.max(e-288e3,r.length?r[Math.min(5,r.length-1)]-1e3:0)}let n=[];t.Ol.forEach((e,u)=>{
let o=e.E,f=o.length;if(!f)return;let i=[];for(let e of o)e.s.c&1024?i.push(e):e.s.c|=1024
;if(i.length&&(u>=0&&t.Ae.get(u)||0)<l&&u!==t.ye&&(f===1&&!(e.c&131072)&&o[0]===e.T||o.some(r.isNotPriviledged))){
e.c|=512;for(let e of i)e.s.c|=512;n.push(e)}});for(let e of n){let l=!!(e.c&131072)||e.E.length>1,t=[]
;for(let n of e.E)n.s.c&512?!l||r.isNotPriviledged(n)?(n.disconnect(),n.s.J&&(e.c|=131072)):(n.s.c^=512,
t.push(n)):t.push(n);e.E.length=0,t.length&&e.E.push(...t)}},144e3,0)});