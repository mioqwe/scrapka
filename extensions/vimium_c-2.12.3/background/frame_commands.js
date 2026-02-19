"use strict"
;__filename="background/frame_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./ports","./exclusions","./i18n","./key_mappings","./run_commands","./open_urls","./tools"],(e,l,t,n,i,o,r,u,a,f,s,d,c)=>{
let m;Object.defineProperty(l,"__esModule",{value:!0
}),l.blurInsertOnTabChange=l.we=l.focusFrame=l.framesGoNext=l.toggleZoom=l.mainFrame=l.framesGoBack=l.openImgReq=l.captureTab=l.handleImageUrl=l.enterVisualMode=l.L=l.pe=l.showVomnibar=l.initHelp=l.performFind=l.parentFrame=l.nextFrame=void 0,
t.Tn=(e,l,o)=>{var u;let a=t.Ol.get(t.ye)||t.$&&r.j(),f=a?a.a:t.$
;!a||!a.T||f===a.T||a.T.s.c&512||n.sn.test(a.T.s.Rl)&&!(f.s.c&512)&&f.s.Rl.startsWith((((u=n.Pn(a.T.s.Rl))===null||u===void 0?void 0:u.origin)||"")+"/")||(f=a.T)
;let d=setTimeout(()=>{let e=t.Hn(d,null);e&&e.r&&e.r(!1)},4e4),c=n.Et();if(t.Hn(null,{i:d,t:e,s:l,d:o,r:c.At}),
f)s.portSendFgCmd(f,0,1,{u:t.Q.Cn,c:"R TEE UI",a:e===1||e===5||e===9?"clipboard-write; clipboard-read":"",t:3e3,
i:!a||f===a.a||a.a.s.c&512?0:a.a.s.J},1);else{let e=c.Vt;i.getCurWnd(!1,l=>{let n=l?l.id:t.xe;i.makeWindow({
type:"popup",url:t.Q.Cn,focused:!0,incognito:!1,left:0,top:0,width:100,height:32},"",l=>{let o=l?null:t.Hn(null,null)
;if(l){let o=l.id;e.then(()=>{n!==t.xe&&i.Be.update(n,{focused:!0},i.oe),i.Be.remove(o,i.oe)}),e=null
}else o&&o.i===d&&(clearTimeout(o.i),o.r&&o.r(!1))})})}return c.Vt},l.nextFrame=()=>{let e=t.$,n=-1,i=r.j(),o=i&&i.E
;if(o&&o.length>1){n=o.indexOf(e);for(let e=Math.abs(t.g);e>0;e--)n+=t.g>0?1:-1,n===o.length?n=0:n<0&&(n=o.length-1)
;e=o[n]}l.focusFrame(e,e.s.J===0,e!==t.$&&i&&e!==i.a?4:3)},l.parentFrame=()=>{
let e=t.$.s,n=e.u>=0&&r.En(t.$)?null:"Vimium C can not access frames in current tab";n&&r.showHUD(n),
r.getParentFrame(e.u,e.J,t.g).then(e=>{e?l.focusFrame(e,!0,5):l.mainFrame()})},l.performFind=()=>{
let e=t.$.s,l=t.g<0?-t.g:t.g,n=t.M.index,i=n?n==="other"?l+1:n==="count"?l:n>=0?-1-(0|n):0:0,o=t.M.highlight,r=t.M.extend,u=r==="before"||t.M.direction==="before"?-1:1,a=!i&&l<2?t.M.selected:null,f=!!i||!t.M.active,d=null
;e.c&32||(e.c|=32,d=t.Gn),s.sendFgCmd(1,!0,s.wrapFallbackOptions({c:i>0?t.g/l:t.g,l:f?1:0,f:d,d:u,
m:typeof o=="number"?o>=1?Math.min(o|0,200):0:o?f?100:20:0,n:!!t.M.normalize,r:t.M.returnToViewport===!0,
s:a==null?0:typeof a!="string"?typeof a=="number"?Math.max(0,a|0):5:(a.includes("auto")||a.includes("fallback")?0:4)|(a.includes("any")?2:1),
t:r?u>0?2:1:0,p:!!t.M.postOnEsc,e:!!t.M.restart,u:0,q:t.M.query?t.M.query+"":f||t.M.last?c.me.rn(e.se,"",i<0?-i:i):""}))
},l.initHelp=(e,l)=>s.initHelpDialog().then(n=>{var i;if(!n)return
;let o=e.w&&((i=r.En(l))===null||i===void 0?void 0:i.T)||l,u=o.s.Rl.startsWith(t.Q.Ze),a=e.a||{};if(o.s.c|=262144,t.$=o,
e.f){let e=t.qn.get("?"),l=e&&e.Ln===8&&e.On?"?":"";l||t.qn.forEach((t,n)=>{
t.Ln===8&&t.On&&(l=l&&l.length<n.length?l:(e=t,n))}),a=l&&f.Rn(e)||a}s.sendFgCmd(17,!0,{h:n.Un(u,a.commandNames),
o:t.Q.Ze,f:e.f,e:!!a.exitOnClick,c:u&&!!f.zn||t.q.showAdvancedCommands})}),l.showVomnibar=e=>{var i
;let o=t.$,u=t.M.url,a=t.M.query;if(a!=null&&(u=a,a=null,t.M.url=u,delete t.M.query),
u!=null&&u!==!0&&typeof u!="string"&&(u=null,delete t.M.url),!o){if(o=((i=r.j())===null||i===void 0?void 0:i.T)||null,
!o)return;t.$=o}let f=null;if(u!=null&&t.M.urlSedKeys){let n=typeof u=="string"?u:typeof t.M.u=="string"?t.M.u:r.I()
;if(n&&n instanceof Promise)return void n.then(t=>{s.overrideCmdOptions({u:t||""},!0),l.showVomnibar(e)});let i={}
;f=t.R(n,0,{r:null,k:t.M.urlSedKeys},i),i.S!=null&&s.overrideCmdOptions({keyword:i.S})}
t.M.mode==="bookmark"&&s.overrideOption("mode","bookm")
;let d=t.vomnibarPage_f,{Rl:c}=o.s,m=!d.startsWith(t.Q.H),p=c.startsWith(t.Q.H),g=e||!d.startsWith(t.Le)?t.Q.Bn:d,v=(e=e||(m?p||d.startsWith("file:")&&!c.startsWith("file:///")||d.startsWith("http:")&&!/^http:/.test(c)&&!/^http:\/\/localhost[:/]/i.test(d):o.s.se||p&&!d.startsWith(c.slice(0,c.indexOf("/",c.indexOf("://")+3)+1))))||d===g||o.s.u<0,b=t.M.trailingSlash,h=t.M.trailing_slash,y=s.copyCmdOptions(n.Vn({
v:v?g:d,i:v?null:g,t:v?0:m?2:1,s:b!=null?!!b:h!=null?!!h:null,j:v?"":t.Q.An,e:!!t.M.exitOnClick,u:f,
url:typeof u=="string"&&f||u,k:n.Fn(!0),h:t.Sn.Jn}),t.M);y.icase==null&&t.Sn.actions.includes("icase")&&(y.icase=!0),
s.portSendFgCmd(o,6,!0,y,t.g),y.k="omni",t.M=y},l.pe=(e,l,n)=>{let i=e.s.u,o=i>=0?i:t.ye,u=e.s.J||i<0?t.Ol.get(o):null
;return u&&(i<0&&(e.s.c&64||e.s.Rl.startsWith("about:"))&&(e=u.a),(l==="tab"||!l&&!n&&i<0)&&(u.T||i<0)&&(e=u.T||u.a),
e.s.c&64||e.s.Rl.startsWith("blob:"))?r.getParentFrame(o,e.s.J,1).then(e=>e||u.T||u.a):e},l.L=()=>{
let e=t.M.mode,l=t.g<2||t.g>10?1:t.g,n=e&&(e+"").toLowerCase()==="create"?1:0,i=t.M.key,o={a:n,n:!t.M.storeCount,
s:t.M.swap!==!0,t:"",o:t.M};if(typeof i=="string"&&i.trim().length===1)return o.a=0,void t.bn[21]({H:21,c:o,k:t.Ce,
n:i.trim(),s:0,u:"",l:!!t.M.local},t.$);Promise.resolve(a.D(n===1?"mBeginCreate":"mBeginGoto")).then(e=>{o.t=e,
s.portSendFgCmd(t.$,3,!0,o,l)})},l.enterVisualMode=()=>{
let e=t.M.mode,l=t.M.start,i=typeof e=="string"?e.toLowerCase():"",o=t.$.s,r=null,u=null,a=null
;16&~o.c&&(o.c&32||(o.c|=32,r=t.Gn),u=f.Dn,a=f.Kn,o.c|=16);let d=n.Qn({m:i==="caret"?3:i==="line"?2:1,f:r,g:a,k:u,
t:!!t.M.richText,s:l!=null?!!l:null,w:""},t.M);delete d.mode,delete d.start,delete d.richText,s.sendFgCmd(5,!0,d)}
;let p=e=>{try{URL.revokeObjectURL(e)}catch(e){}};l.handleImageUrl=(e,o,u,a,f,s,d,c)=>{var g;if(!u)return void a(1)
;let v=!(!(u&1)||t.fe===2||t.$&&t.$.s.se||u!==9||c),b=u&4||v;if(b&&!o)return void n.Wn(e,"blob").then(t=>{
l.handleImageUrl(e,t,u,a,f,s,d,c)});m&&(clearTimeout(m[0]),p(m[1]),m=null);let h=b?URL.createObjectURL(o):"";if(h){
m=[setTimeout(()=>{m&&p(m[1]),m=null},u&4?3e4:5e3),h];let e=a;a=[1,4,9].includes(u)?l=>{e(l),m&&p(h),
m&&m[1]===h&&(clearTimeout(m[0]),m=null)}:e}if(u&1)if(u!==9){
let l=(e?e.slice(5,15):o.type).toLowerCase()==="image/jpeg"?"jpeg":"png"
;(o?o.arrayBuffer():n.Wn(e,"arraybuffer")).then(e=>{i.n.clipboard.setImageData(e,l).then(()=>{a(!0)},e=>{
console.log("Error when copying image: "+e),a(0)})})}else(e||v?Promise.resolve():n.Xn(o).then(l=>{e=l
})).then(()=>t.Tn(u===9?9:1,{u:v?h:e,t:s,b:2},o)).then(async t=>{
if(typeof t=="string")return void l.handleImageUrl(t,null,1,a,f,s);if(t)return void a(!!t)
;let i=globalThis.document,r=i.createElement("img");r.alt=f.replace(n.Yn(),""),r.src=e||await n.Xn(o),
i.documentElement.appendChild(r);let u=i.getSelection(),d=i.createRange();d.selectNode(r),u.removeAllRanges(),
u.addRange(d),i.execCommand("copy"),r.remove(),a(1)});if(u&2)return d(e||h),void(u&1||a(1));if(u&4){
let l=((g=r.j())===null||g===void 0?void 0:g.T)||t.$,o=n.Et();u&1&&u===9?setTimeout(o.At,800):o.At(0),
o.Vt.then(()=>i.downloadFile(h,f,l?l.s.Rl:null)).then(l=>{!l&&d(e||h),u===4&&a(!0)})}},l.captureTab=(e,o)=>{
let u=t.M.show,f=!!t.M.copy,s=t.M.download,d=f?s===!0:s!==!1,c=!!t.M.richText,m=t.M.png?0:Math.min(Math.max(t.M.jpeg|0,0),100),p=e&&e[0],g=!!p&&p.url.startsWith(location.protocol),v=p?p.windowId:t.xe,b=p?p.title:"Tab"+(p?p.id:t.ye)
;b=t.M.name==="title"?b:n.now().replace(/[-: ]/g,e=>e===" "?"_":"")+"-"+b,b=b.replace(n.Yn(),""),b+=m>0?".jpg":".png",
i.ge.captureVisibleTab(v,m>0?{format:"jpeg",quality:m}:{format:"png"},e=>{
if(!e)return t.$&&r.showHUD("Can not capture "+(g?"injected extensions":"this tab")),o(0),i.oe()
;l.handleImageUrl(e,null,(u?2:0)|(d?4:0)|(f?1:0),f?e=>{
r.showHUD(a.D(e?"imgCopied":"failCopyingImg",[e===1?"HTML":m?"JPEG":"PNG"])),o(e)
}:o,b,((c||"")+"").includes("name")?b:"",e=>{t.bn[26]({t:"pixel=1&",u:e,f:b,a:!1,m:37,o:{r:t.M.reuse,m:t.M.replace,
p:t.M.position,w:t.M.window}},t.$)})})},l.openImgReq=(e,l)=>{var i,u;let f=e.u;if(/^<svg[\s>]/i.test(f)){if(f=o.Zn(f),
!f)return t.$=l,void r.showHUD(a.D("invalidImg"));e.f=e.f||"SVG Image"}if(!n.Pn(f))return t.$=l,
void r.showHUD(a.D("invalidImg"));let c=t.Q.ni+"#!image ";e.f&&(c+="download="+n.Ul(e.f)+"&"),
e.r&&(c+="src="+n.Ul(e.r)+"&"),e.a!==!1&&(c+="auto=once&"),e.t&&(c+=e.t)
;let m=e.o||n.W(),p={},g=m.s?t.R(f,32768,m.s,p):f,v=(i=p.S)!==null&&i!==void 0?i:e.m===35?"":m.k,b=(u=m.t)!==null&&u!==void 0?u:!v,h=g!==f
;f=g,s.replaceCmdOptions({opener:!0,reuse:m.r!=null?m.r:e.m&16?-2:-1,replace:m.m,position:m.p,window:m.w}),t.g=1
;let y=v||h?b?o._r(f,v,2):o.C(f.trim().split(n.F),v,2):f;l&&r.safePost(l,{N:11,H:r.ensureInnerCSS(t.$.s),k:1,t:" ",
d:1e-4}),d.openUrlWithActions(typeof y!="string"||!b||y.startsWith(location.protocol)&&!y.startsWith(t.Le)?y:c+y,9)},
l.framesGoBack=(e,t,o)=>{if(e.o.r)return void s.executeCommand(f.ii("reloadTab",n.Vn(e.o)),e.s,0,t,0,e.o.$f&&{c:e.o.$f,
r:e.o.$retry,u:0,w:0});let r=s.hasFallbackOptions(e.o)?(s.replaceCmdOptions(e.o),
s.getRunNextCmdBy(0)):i.oe,u=o?o.id:t.s.u,a=e.s,c=d.parseReuse(e.o.reuse||0);if(c){let t=e.o.position
;i.ge.duplicate(u,n=>{if(!n)return r();c===-2&&i.selectTab(u);{let t=s.parseFallbackOptions(e.o)||{};t.reuse=0,
l.framesGoBack({s:a,o:t},null,n)}let o=n.index--,f=t==="end"?-1:d.newTabIndex(n,t,!1,!0)
;f!=null&&f!==o&&i.ge.move(n.id,{index:f===3e4?-1:f},i.oe)})}else{let e=a>0?i.ge.goForward:i.ge.goBack
;for(let l=0,t=a>0?a:-a;l<t;l++)e(u,l?i.oe:r)}},l.mainFrame=()=>{let e=r.j(),n=e&&e.T
;!n||n===e.a&&t.M.$else&&typeof t.M.$else=="string"?s.runNextCmd(0):l.focusFrame(n,!0,n===e.a?3:5)},l.toggleZoom=e=>{
if(!i.ge.getZoom)return r.complainLimits("control zoom settings of tabs"),void e(0);i.ke(i.ge.getZoom).then(l=>{
if(!l)return void e(0);let n=t.g<-4?-t.g:t.g;(t.M.in||t.M.out)&&(n=0,t.g=t.M.in?t.g:-t.g);let o,r=t.M.level,u=Math
;if(t.M.reset)o=1;else if(r!=null&&!isNaN(+r)||n>4){
let e=u.max(.1,u.min(t.M.min|0||.3,.9)),l=u.max(1.1,u.min(t.M.min|0||3,100))
;o=r==null||isNaN(+r)?n>1e3?1:n/(n>49?100:10):1+r*t.g,o=u.max(e,u.min(o,l))}else{
let e=0,n=9,i=[.3,.5,.67,.8,.9,1,1.1,1.2,1.33,1.5,1.7,2,2.4,3]
;for(let t=0,o=0;t<i.length&&(o=Math.abs(i[t]-l))<n;t++)e=t,n=o;o=i[e+t.g<0?0:u.min(e+t.g,i.length-1)]}
Math.abs(o-l)>.005?i.ge.setZoom(o,i._e(e)):e(0)})},l.framesGoNext=(e,l)=>{let n=t.M.patterns,i=!1
;if(n&&n instanceof Array||(n=n&&typeof n=="string"?n:(i=!0,e?t.q.nextPatterns:t.q.previousPatterns),n=n.split(",")),
i||!t.M.$fmt){let e=[];for(let l of n)if(l=l&&(l+"").trim(),l&&e.push(".#[:".includes(l[0])?l:l.toLowerCase()),
e.length===200)break;n=e,i||(s.overrideOption("patterns",n),s.overrideOption("$fmt",1))}
let o=n.map(e=>Math.max(e.length+12,e.length*4)),r=Math.max.apply(Math,o);s.sendFgCmd(10,!0,s.wrapFallbackOptions({
r:t.M.noRel?"":l,n:e,match:t.M.match,clickable:t.M.clickable,clickableOnHost:t.M.clickableOnHost,exclude:t.M.exclude,
excludeOnHost:t.M.excludeOnHost,evenIf:t.M.evenIf,scroll:t.M.scroll,p:n,l:o,m:r>0&&r<99?r:32,v:t.M.view!==!1,
a:!!t.M.avoidClick}))},l.focusFrame=(e,l,n,i)=>{e.postMessage({N:7,H:l?r.ensureInnerCSS(e.s):null,m:n,k:t.Ce,c:0,
f:!i&&t.M&&s.parseFallbackOptions(t.M)||{}})},l.we=()=>{var e;return(e=t.M.blur)!==null&&e!==void 0?e:t.M.grabFocus},
l.blurInsertOnTabChange=e=>{let o=s.parseFallbackOptions(t.M);o&&o.$then?o.$else=o.$then:o=null;let a=l.we()
;if(typeof a=="string"){let e=u.Fl(a)||!1;s.overrideOption(a===t.M.blur?"blur":"grabFocus",e),a=e}
let f=e?t.Ol.get(e.id):null;if(i.oe()||!f||a&&a!==!0&&!u.Il(a,f.a.s.J?f.a.s.Rl:e.url))return o&&s.runNextCmdBy(1,o),
i.oe();setTimeout(()=>{r.oi(t.Ol.get(t.ye),!0).then(()=>{let e=t.Ol.get(t.ye)
;if(!e||e.c&512)o&&s.runNextCmdBy(1,o);else{let l=n.Vn({esc:!0});o&&s.copyCmdOptions(l,n.Vn(o)),
s.portSendFgCmd(e.a,16,!1,l,-1)}})},17)}});