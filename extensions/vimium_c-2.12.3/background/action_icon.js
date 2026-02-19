"use strict"
;__filename="background/action_icon.js",define(["require","exports","./store","./utils","./i18n","./browser","./ports"],(e,i,n,s,t,l,o)=>{
Object.defineProperty(i,"__esModule",{value:!0}),i.e=i.i=void 0;let r=[{19:"/icons/enabled_19.png",
38:"/icons/enabled_38.png"},{19:"/icons/partial_19.png",38:"/icons/partial_38.png"},{19:"/icons/disabled_19.png",
38:"/icons/disabled_38.png"}];i.i=l.n.browserAction,i.e=()=>{let e=n.t;if(e===!!n.l)return;n.o=e?a:n.r
;let i=({a:{s:i},c:s})=>{if(i.d!==0){if(s&512&&e)return void(i.d=0);n.o(i.u,e?i.d:0)}},s=()=>n.t===e;e?(n.l=1,
o.p(0,i,s)):setTimeout(()=>{n.t||n.l==null||(n.l=null,o.p(0,i,s))},200)};let a=(e,n)=>{e<0||i.i.setIcon({tabId:e,
path:r[n]})};i.e()});