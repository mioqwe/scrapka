"use strict"
;__filename="background/run_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./ports","./i18n","./key_mappings"],(e,l,t,r,n,u,i,o,s)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.initHelpDialog=l.waitAndRunKeyReq=l.runNextOnTabLoaded=l.runNextCmdBy=l.getRunNextCmdBy=l.runNextCmd=l.makeFallbackContext=l.wrapFallbackOptions=l.parseFallbackOptions=l.hasFallbackOptions=l.executeExternalCmd=l.executeShortcut=l.portSendFgCmd=l.sendFgCmd=l.onConfirmResponse=l.onBeforeConfirm=l.x=l.ie=l.executeCommand=l.fillOptionWithMask=l.overrideOption=l.overrideCmdOptions=l.concatOptions=l.copyCmdOptions=l.replaceCmdOptions=void 0
;let f,a,m,$=Math.abs,p=0,d=1;l.replaceCmdOptions=e=>{t.M=r.Vn(e)},l.copyCmdOptions=(e,l)=>{
for(let t in l)(t[0]!=="$"||"$then=$else=$retry=$f=".includes(t+"=")&&!t.includes("="))&&(e[t]!==void 0||(e[t]=l[t]))
;return e},l.concatOptions=(e,t)=>t&&e?l.copyCmdOptions(l.copyCmdOptions(r.W(),t),e):e||t||null,
l.overrideCmdOptions=(e,l,n)=>{let u=n||t.M;r.Qn(r.Vn(e),u),l?delete e.$o:e.$o=u,n||(t.M=e)},l.overrideOption=(e,r,n)=>{
(n=n||t.M)[e]=r;let u=n.$o;u!=null&&l.overrideOption(e,r,u)},l.fillOptionWithMask=(e,n,i,o,s,f)=>{
let a,m=-1,$=n,p=$===!0||$==="";if(p){let l,t=/\$\$|[$%][sS]/g;for(;(l=t.exec(e))&&l[0]==="$$";);$=l&&l[0]||"$s"}
let d,c=null,v=!1,_=!!$&&typeof $=="string"&&e.includes($),y=f||t.M,g=()=>{if(c!==null||h!==1)return c||"";let e=i&&y[i]
;if(e)a=i;else{let l=Object.keys(y).filter(e=>e[0]!=="$"&&!o.includes(e)&&y[e]===!0);if(l.length===1)e=a=l[0];else{
if(n!=="")return h=l.length,"";e=""}}return m=1,c=e+"",c=$==="$s"||$==="%s"?r.Ul(c):c,c},h=1,b=0
;if(p?((e.includes(d="$c")||e.includes(d="%c"))&&(m=1,
v=!0),e=e.replace(new RegExp("\\$\\{([^}]*)}|\\$\\$"+(v?"|"+r.cl(d):"")+(_?"|"+r.cl($):""),"g"),(e,l)=>{
if(e===$)return g();if(e===d)return s+"";if(!l)return"$";m=1,b++;let n=!1,i=u.$i.exec(l);i&&(l=l.slice(0,i.index)),
/^[sS]:/.test(l)&&(n=l[0]==="s",l=l.slice(2));let o=u.hi.exec(l)||u.bi.exec(l)
;o&&(l=o[0][0]==="<"?l.slice(0,o.index):l.slice(o[0].length))
;let f=o?t.Al(o[0][0]==="<"?o[0].slice(1):o[0].slice(0,-1)):l==="__proto__"||l[0]==="$"?"":l?y[l]:g()
;return f=typeof f=="string"?f:f&&typeof f=="object"?JSON.stringify(f):f+"",i&&(f=t.R(f,0,r.Ye(i[0].slice(1)))),
n?r.Ul(f):f})):_&&(g(),c!==null&&(e=e.replace($,()=>c))),h!==1)return{ok:0,result:h};if($&&typeof $=="string"){
let e=f||{};f||l.overrideCmdOptions(e),e.$masked=!0,a&&delete e[a]}return{ok:m,value:c||"",result:e,useCount:v,useDict:b
}};let c=e=>{let l=f;if(f=null,l)if(a){let{Vt:t,At:n}=r.Et();l(e,n),t.then(g)}else l(e,t.r);return t.ki=null,
e?void 0:n.oe()},v=e=>{l.executeCommand(e,1,t.Ce,t.$,t.g)};l.executeCommand=(e,u,o,m,p,d)=>{if(y(0),f)return f=null,
void(t.ki=null);let _,h=s.Rn(e),b=e.co
;if(h&&(_=h.$count)&&(u=u*_||1),(u=p||(u>=1e4?9999:u<=-1e4?-9999:u|0||1))===1);else if(b===1)u=1;else if(b>1&&(u>b||u<-b)){
if(d!=null)u=u<0?-1:1;else if(!(p||h&&h.confirmed===!0))return t.Ce=o,t.M=null,t.$=m,t.g=u,t.ki=null,
void l.x(e.ra,$(u)).then(v.bind(null,e))}else u=u||1;if(d!=null){let r=d.r|0
;if(r=Math.max(1,r>=0&&r<100?Math.min(r||6,20):$(r)),d.c&&d.c.i>=r&&(!h||h.$else!=="showTip"))return t.$=m,
i.showHUD(`Has run sequential commands for ${r} times`),void(t.ki=null);let n=l.makeFallbackContext(d.c,1,d.u)
;if(h&&((e.Ln===38||n.t)&&e.On||l.hasFallbackOptions(h))){let t={};l.overrideCmdOptions(t,!1,h),t.$retry=-r,t.$f=n,
n.t&&e.On&&!h.$else&&(t.$else="showTip"),h=t}}if(e.On);else{if(m!=null){
let{Ln:r}=e,n=4620>>r&1||r===4&&!!h&&h.keepHover===!1;return t.$=m,t.ki=null,void l.portSendFgCmd(m,r,n,h,u)}{
let l=e.Ln,t=0;if(l===18?n.ge.goBack&&(t=23):l===11&&(t=14),!t)return;e=s.ii(e.ra,h,[t,1,e.co])}}let{Ln:T}=e,j=t.y[T]
;if(a=e.uo,a===null&&(a=e.uo=h!=null&&l.hasFallbackOptions(h)),t.Ce=o,t.M=h||(e.lo=r.W()),t.$=m,t.g=u,u=t.m[T],
m==null&&T<13&&T>2);else if(u<1){if(a){let{Vt:e,At:l}=r.Et();j(l),e.then(g)}else j(t.r);t.ki=null}else a=e.uo,f=j,
(u<2||u===2&&$(t.g)<2?n.getCurTab:n.le)(c)},l.ie=()=>d&&t.M.confirmed!==!0,l.x=(e,n)=>{if(!t.$)return f=null,
t.g=t.g>0?1:-1,Promise.resolve(t.g>0);let u=typeof e=="string"?e:typeof e[0]=="string"?e[0]:null
;if(!m&&u)return l.initHelpDialog().then(()=>l.x(e,n));let{Vt:s,At:a}=r.Et(),$=t.g,c=t.M,v=t.$
;return y(setTimeout(_,2e3,0,void 0)),f=e=>{t.Ce=0,t.M=c,t.$=v,t.g=e?$>0?1:-1:$,d=0,a(e),setTimeout(()=>{d=1},0)},
Promise.resolve(u?o.D("cmdConfirm",[n,t.na[1].get(m.ea(u))||`### ${u} ###`]):e[0][0]).then(l=>{var r
;(((r=i.j())===null||r===void 0?void 0:r.T)||t.$).postMessage({N:12,c:"",i:p,m:l,r:typeof e!="string"})}),s}
;let _=(e,l)=>{let t=f;f=null,(e>1||(l===null||l===void 0?void 0:l.i))&&t&&t(e<3)},y=e=>{p&&clearTimeout(p),p=e}
;l.onBeforeConfirm=e=>{e.i>=-1&&p===e.i&&clearTimeout(e.i)},l.onConfirmResponse=(e,t)=>{
let r=typeof e.i!="number"?e.i.i:0
;e.i===0||r>=-1&&p!==r||(y(0),e.r?_(e.r,e.i):l.executeCommand(s.ao.get(e.i.c),e.n,0,t,0))},l.sendFgCmd=(e,r,n)=>{
l.portSendFgCmd(t.$,e,r,n,1)},l.portSendFgCmd=(e,l,t,r,n)=>{e.postMessage({N:10,H:t?i.ensureInnerCSS(e.s):null,c:l,n,a:r
})},l.executeShortcut=(e,u)=>{let o=s.ao.get(e),f=o.Ln===38&&o.On;if(f&&t.oa(o),y(0),u&&!(u.a.s.c&512)){let t=u.a
;return y(setTimeout(l.executeShortcut,100,e,null)),t.postMessage({N:12,c:e,i:p,m:"",r:!1}),u.c&512&&i.fu(u,0),
void i.ensuredExitAllGrab(u)}let a=s.Rn(o),m=f?"runKey":o.ra,$=o.Ln,d=0,c=o
;if(o.On||($===18?n.ge.goBack&&(d=23):$===11&&(d=14)),d)c=s.ii(m,a,[d,1,o.co]);else{if(!o.On)return;d=o.Ln}
d>12||d<3?l.executeCommand(c,1,0,null,0):a&&a.$noWarn||((a||(o.lo=r.W())).$noWarn=!0,
console.log("Error: Command",m,"must run on pages which have run Vimium C"))},l.executeExternalCmd=(e,n,u)=>{
let o=e.command;o=o?o+"":"";let f,a=o?s.eo[o]:null;if(!a)return
;if(!(u=u||(n.tab?i.indexFrame(n.tab.id,n.frameId||0)||(f=t.Ol.get(n.tab.id),f?f.a:null):null))&&!a[1])return
;let m=e.options||null,$=e.key,p=s.ii(o,m),d=e.count;p&&(d=d!=="-"?parseInt(d,10)||1:-1,
m&&typeof m=="object"?r.Vn(m):m=null,$|=0,l.executeCommand(p,d,$,u,0))},l.hasFallbackOptions=e=>!(!e.$then&&!e.$else),
l.parseFallbackOptions=e=>{let l=e.$then,t=e.$else;return l||t?{$then:l,$else:t,$retry:e.$retry,$f:e.$f}:null},
l.wrapFallbackOptions=e=>{let r=l.parseFallbackOptions(t.M);return r&&Object.assign(e,r),e},
l.makeFallbackContext=(e,l,t)=>({i:(e?e.i:0)+l,t:t&&t!==2?t:e?e.t:0}),l.runNextCmd=e=>l.runNextCmdBy(e,t.M),
l.getRunNextCmdBy=e=>l.hasFallbackOptions(t.M)?r=>{let u=e&2?r===void 0:n.oe(),i=t.M
;return u?l.runNextCmdBy(0,i):l.runNextOnTabLoaded(i,e&1?r:null),e&2?void 0:u}:e&2?t.r:n.oe;let g=e=>{
typeof e=="object"?l.runNextOnTabLoaded(t.M,e):typeof e=="boolean"?l.runNextCmdBy(e?1:0,t.M,null):e<0||l.runNextCmdBy(e?1:0,t.M,e>1?e:null)
};l.runNextCmdBy=(e,l,r)=>{let n=e?l.$then:l.$else,u=!!n&&typeof n=="string";if(u){let e={c:l.$f,r:l.$retry,u:0,w:0
},u=n&&/\$D/.test(n.split("#",1)[0]);y(setTimeout(async()=>{let l=t.Ol.get(t.ye);await i.oi(l,!0)
;let r=t.$&&t.$.s.u===t.ye&&l&&l.E.indexOf(t.$)>0?t.$:l?l.a.s.d===2&&l.E.filter(e=>e.s.d!==2&&!(e.s.c&512)).sort((e,l)=>e.s.J-l.s.J)[0]||l.a:null
;l&&i.ensuredExitAllGrab(l),t.O(n,r,e)},u?0:r||50))}return u},l.runNextOnTabLoaded=(e,r,u)=>{let i=e.$then
;if(!(i&&typeof i=="string"||u))return;let o=r=>{let o=Date.now(),d=o<$-500||o-$>=s||a;if(!r||!p)return m=-1,n.oe()
;if(d||r.status==="complete"){if(!d&&!t.Ol.has(r.id)&&(u||r.url.startsWith(location.protocol)))return;y(0),f=null,
u&&u(),i&&l.runNextCmdBy(1,e,u?67:0)}
},s=r!==!1?1500:500,a=!!i&&/[$%]l/.test(i.split("#",1)[0]),m=r?r.id:r!==!1?-1:t.ye,$=Date.now();y(setInterval(()=>{
n.tabsGet(m!==-1?m:t.ye,o)},a?50:100)),i&&/\$D/.test(i.split("#",1)[0])&&n.tabsGet(m!==-1?m:t.ye,o)},
l.waitAndRunKeyReq=(e,r)=>{let n=e.f,u={$then:e.k,$else:null,$retry:n&&n.r,$f:n&&l.makeFallbackContext(n.c,0,n.u)}
;t.$=r,n&&n.u===!1?l.runNextOnTabLoaded(u,null):l.runNextCmdBy(1,u,n&&n.w)},l.initHelpDialog=()=>{let e=t.na||[]
;return m?Promise.resolve(m):Promise.all([n.import2(t.Q.HelpDialogJS),e[0]!=null?null:r.Wn("help_dialog.html"),e[1]!=null?null:o.getI18nJson("help_dialog")]).then(([e,l,r])=>{
let n=t.na||(t.na=[null,null]);return l&&(n[0]=l),r&&(n[1]=r),m=e},null)}});