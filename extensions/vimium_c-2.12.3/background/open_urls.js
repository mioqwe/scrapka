"use strict"
;__filename="background/open_urls.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./exclusions","./i18n","./key_mappings","./run_commands","./tools","./clipboard","./filter_tabs"],(l,e,n,t,i,r,u,o,d,s,f,a,v,p,m)=>{
Object.defineProperty(e,"__esModule",{value:!0
}),e.We=e.openUrlReq=e.openUrl=e.goToNextUrl=e.openUrlWithActions=e.openShowPage=e.openJSUrl=e.parseReuse=e.yi=e.parseOpenPageUrlOptions=e.preferLastWnd=e.newTabIndex=void 0
;let w={current:0,reuse:1,newwnd:2,frame:3,newtab:-1,newbg:-2,lastwndfg:-5,lastwnd:-5,lastwndbg:-6,iflastwnd:-7,
reuseincurwnd:-3,lastwndbgbg:-8,lastwndbginactive:-8}
;e.newTabIndex=(l,e,n,t)=>e==="before"||e==="left"||e==="prev"||e==="previous"?l.index:e==="after"||e==="next"||e==="right"?l.index+1:e==="default"?void 0:t!==!1&&i.getGroupId(l)!=null?e==="start"||e==="begin"?l.index:e==="end"||n?void 0:l.index+1:e==="start"||e==="begin"?0:e==="end"?n?3e4:void 0:n?void 0:l.index+1,
e.preferLastWnd=l=>l.find(l=>l.id===n.yn)||l[l.length-1],e.parseOpenPageUrlOptions=(l,e)=>({d:(e=l.decoded,
e!=null?e:l.decode),g:l.group,i:l.incognito,k:l.keyword,m:l.replace,o:l.opener,p:l.position,r:l.reuse,s:p.P(l),
t:l.testUrl,w:l.window})
;let c=l=>typeof l=="boolean"?l:l?l==="force"||(l==="reverse"?n.fe!==2:l==="same"||l==="keep"?n.fe===2:null):null,g=l=>l==="popup"||l==="normal"?l:void 0
;e.yi=(l,e)=>{l=l.slice(0,128).split("?")[0].replace(/\\/g,"/")
;let t=n.G>1&&/\/globalroot\/device\/condrv|\bdevice\/condrv\/kernelconnect/.test(l);return t&&(n.$=e||n.$,
o.showHUD(s.D("harmfulURL"))),t};let b=(l,u,d,s)=>{t.Bl();let v=l=>{a.replaceCmdOptions(u),a.overrideCmdOptions({urls:l,
url:null,url_f:null,copied:null,keyword:null},!0)};switch(s[1]){case 1:o.showHUD(s[0],15),a.runNextCmdBy(1,u);break
;case 5:case 7:v(null),s[1]===7||u.$p?l=0:a.overrideOption("$p",1),e.openUrlWithActions(r._r(s[0]),l,!1,d);break;case 4:
l>=3&&s[0]&&a.runNextCmdBy(1,u);break;case 9:a.runNextCmdBy(1,u);break;case 3:o.showHUD(s[0],1),a.runNextCmdBy(0,u)
;break;case 6:let p=s[0],m=n.ye;if(p[0]==="openUrls"){let e=p.slice(1),n=[]
;for(let t of e)typeof t=="string"||t[1]!==5&&t[1]!==7||(t=r._r(s[0],null,l)),
typeof t!="string"?Promise.resolve(t).then(e=>{e[1]===6&&e[0][0]==="openUrls"||b(l,u,d,e)}):n.push(t)
;return void(n.length>0&&(d&&d.length>0?(v(n),M(d)):i.getCurTab(l=>{v(n),M(l)})))}setTimeout(()=>{
let l=n.Ol.get(m),e=l?l.a:null,i=t.Vn({keys:[p[1]]});n.ki=null,p[0]==="run1"?n.O(p[1],e,{c:u.$f,r:u.$retry,u:0,w:0
}):a.executeCommand(f.ii("runKey",i),1,0,e,0,null)},0)}},y=(l,e,n)=>{l?a.runNextOnTabLoaded(e,n):a.runNextCmdBy(0,e)
},h=(l,e,t,r,u)=>{let o=e=>(y(e,l,e),i.oe());if(u){if(u.length>0&&u[0].incognito&&i.b(t))return void i.tabsCreate({url:t
},o)}else if(i.b(t)&&r!==!0)return void i.getCurTab(h.bind(null,l,e,t,!0));if(e===3&&n.$&&n.$.s.J){let e={id:n.$.s.u}
;return a.sendFgCmd(18,!1,{r:1,u:t}),void setTimeout(()=>y(!0,l,e),100)}u?i.tabsUpdate(u[0].id,{url:t},o):i.tabsUpdate({
url:t},o)},k=(l,e,n,t,r,u)=>{i.makeWindow({url:l,focused:e,incognito:n,
type:typeof l=="string"||l.length===1?g(t.window):void 0,left:r.left,top:r.top,width:r.width,height:r.height
},r.state!=null?r.state:u&&u.state!=="minimized"?u.state:"",l=>{y(l,t,l&&l.tabs[0])})},$=(l,t,r,u,o)=>{
let d=t!==-2,s=u?u.windowId:n.xe,f=o.find(l=>l.id===s),a=f!=null&&f.incognito
;if(!r.window&&t!==2&&(a||(o=o.filter(l=>l.incognito&&l.type==="normal")).length>0)){let t={url:l[0],active:d,
windowId:a?s:e.preferLastWnd(o).id};if(a){let l=r.opener===!0;t.index=e.newTabIndex(u,r.position,l,r.group),
l&&(t.openerTabId=u.id)}i.openMultiTabs(t,n.g,!0,l,a&&r.group,u,l=>{!a&&d&&i.selectWnd(l),y(l,r,l)})
}else k(l,!0,!0,r,r,f)}
;e.parseReuse=l=>l==null?-1:typeof l!="string"||/^-?\d+$/.test(l)?typeof l=="boolean"?l?1:-1:isNaN(l=+l&&0|+l)||l>3||l<-8?-1:l:(l=l.toLowerCase().replace("window","wnd").replace(/-/g,""))in w?w[l]:-1
;let _=(l,e,r)=>{
let u=e&&e.length>0?i.getTabUrl(e[0]):"",o=[r!==!0?r===!1?"":r:(/[%$]s/i.exec(l)||["${url_mask}"])[0],n.M.host_mask||n.M.host_mark,n.M.tabid_mask||n.M.tabId_mask||n.M.tabid_mark||n.M.tabId_mark,n.M.title_mask||n.M.title_mark,n.M.id_mask||n.M.id_mark||n.M.id_marker],d=[]
;for(let n=0;n<o.length;n++){let r=o[n]!=null?o[n]+"":"",s=r?l.indexOf(r):-1;if(s>=0){let l=s+r.length;for(let l of d);
d.push([s,l,n===0?/^[%$]S|^\$\{S:/.test(r)?u:t.Ul(u):n===1?t.Ul(new URL(u).host):n===2?u&&""+e[0].id:n===3?u&&""+t.Ul(e[0].title):i.n.runtime.id])
}}if(d.length){let e="",n=0;d.sort((l,e)=>l[0]-e[0]);for(let t of d)e=e+l.slice(n,t[0])+t[2],n=t[1];l=e+l.slice(n)}
return l},I=(l,t,r,u)=>{let o,d=c(u.incognito);o=(t>-4?new Promise(l=>{i.getCurWnd(!1,e=>(l(e||null),i.oe()))
}):m.wn(g(u.window),!0,d,n.xe)).then(l=>l&&new Promise(e=>{i.ge.query({active:!0,windowId:l.id},n=>(l.tabs=n,e(l),
i.oe()))})),o.then(o=>{let s=!!o&&!o.focused&&o.id!==n.xe,f=t===-7&&!s;if(!o||!s&&(t!==-7||d!=null&&o.incognito!==!!d)){
if(t===-7&&a.runNextCmdBy(0,u))return;return void k(l,t>-8,d!=null?!!d:r,u,u,o)}
let v=o.tabs&&o.tabs.length>0?i.selectFrom(o.tabs):null;i.openMultiTabs({url:l[0],active:t>-6||f,windowId:o.id,
pinned:!!u.pinned,index:v?e.newTabIndex(v,u.position,!1,u.group):void 0
},n.g,!!u.incognito&&typeof u.incognito=="string",l,u.group,v,l=>{t>-6?s&&i.selectWnd(l):l&&t>-8&&!f&&i.selectTab(l.id),
y(l,u,t>-6&&t!==-2&&l)})})},T=(l,r,u,o)=>{
let d,s=o&&o[0],f=!!s&&s.incognito||n.fe===2,a=r!==-2&&r!==-8,v=r===2||r<-3||!!u.window,p=c(u.incognito),m=p!=null&&typeof u.incognito=="string"
;for(let e=0;e<l.length;e++)l[e].startsWith("about:reader?url=")&&(l[e]=t.Dl(l[e].slice(17)),d=l.length===1)
;if(!m&&l.some(i.b))v=f||v;else if(f)v=p===!1||v;else if(p&&r>-4)return void i.Be.getAll($.bind(null,l,r,u,s))
;if(v)return void I(l,r,f,u);let w=u.opener&&s?s.id:void 0,g={url:l[0],active:a,windowId:s?s.windowId:void 0,
openerTabId:w,pinned:!!u.pinned,index:s?e.newTabIndex(s,u.position,w!=null,u.group):void 0};d&&(g.openInReaderMode=d),
i.openMultiTabs(g,n.g,m,l,u.group,s,l=>{a&&l&&i.selectWndIfNeed(l),y(l,u,a&&l)})},x=(l,t,r,u,o,s)=>{
let f,v=r?typeof r=="string"?d.Fl(r):typeof r=="object"&&r.t&&r.v?r:null:null,p=t===2||t===1,w=t===1||t===-3,b=w&&o.q||{},h=g(w?b.w:u.window),k=c(w?b.i:u.incognito),$=(w?b.g:u.group)===!0
;n.g=1,w?(b.m=null,b.g=$):(a.overrideOption("group",$,u),u.replace!=null&&a.overrideOption("replace",v,u)),
f=t<-3&&v?m.wn(h,t===-7,k,n.xe).then(l=>!l||l instanceof Array?null:l):Promise.resolve(!p&&n.xe>=0?{id:n.xe}:null),
Promise.all([f,!$||s?null:new Promise(l=>{i.getCurTab(e=>{s=e||[],l()})})]).then(([l,e])=>v&&(l||p)?new Promise(e=>{
i.ge.query(l?{windowId:l.id}:{windowType:h||void 0},l=>{
let r=k!=null?!k:t>-4?n.fe!==2:-2,u=(l||[]).filter(l=>d.Il(v,l.url)&&l.incognito!==r);if($&&u.length>0&&s.length>0){
let e=i.getGroupId(s[0]);l&&(u=u.filter(l=>i.getGroupId(l)===e))}if(u.sort((l,e)=>{let t=n.Ae.get(e.id),i=n.Ae.get(l.id)
;return i?t?t-i:1:t?-1:e.id-l.id}),t===1){let l=u.filter(l=>l.windowId===n.xe);u=l.length>0?l:u}
return e(u.length?u[0]:null),i.oe()})}):null).then(r=>{
if(r==null||r.id===n.ye&&!w)w?e.We(o):!a.runNextCmdBy(0,u)&&(s?T([l],t,u,s):i.getCurTab(T.bind(null,[l],t,u)));else if(n.Ii&&r.url.startsWith(n.Q.ni))P(w?o.f||{}:u,r);else{
let e=t!==-2&&t!==-8,d=r.windowId!==n.xe&&t>-6;i.tabsUpdate(r.id,{url:l},l=>(l&&(e&&(i.selectTab(l.id),l.active=!0),
d&&i.selectWnd(l)),y(l,w?o.f||{}:u,t!==-2&&t>-6&&l),i.oe()))}})};e.openJSUrl=(l,e,r,u)=>{var d
;if(/^(void|\(void\))? ?(0|\(0\))?;?$/.test(l.slice(11).trim()))a.runNextCmdBy(1,e);else{if(!r&&n.$){
if(u===0&&(n.$=((d=o.j())===null||d===void 0?void 0:d.T)||n.$),o.safePost(n.$,{N:5,u:l,f:a.parseFallbackOptions(e)
}))return;if(u!==-1)return void a.runNextCmdBy(0,e);n.$=null}(()=>{let n=t.Ye(l.slice(11));i.ke(i.ge.executeScript,{
code:n}).then(l=>{l===void 0&&r&&r(),y(!!l,e,null)}),i.oe()})()}},e.openShowPage=(l,t,r,u)=>{let o=n.Q.ni
;if(l.length<o.length+3||!l.startsWith(o))return!1
;if(u===void 0)return i.getCurTab(n=>(e.openShowPage(l,n&&n.length>0||t===-2?t:-1,r,n&&n[0]||null),i.oe())),!0
;l=l.slice(o.length);let d=u?u.incognito:n.fe===2
;l.startsWith("#!image ")&&d&&(l="#!image incognito=1&"+l.slice(8).trim());let s=[l,null,0]
;return n.Ii=s[1]=()=>(clearTimeout(s[2]),n.Ii=null,s[0]),s[2]=setTimeout(()=>{
s[0]="#!url vimium://error (vimium://show: sorry, the info has expired.)",s[2]=setTimeout(()=>{n.Ii===s[1]&&(n.Ii=null),
s[0]="",s[1]=null},2e3)},1200),n.g=1,t===0||t===3||d&&(t===-2||t===-1)?d?i.tabsCreate({url:o,active:t!==-2},l=>{y(l,r,l)
}):P(r,u):(r.group=!1,r.incognito=!1,t===1||t===-3?x(l,t,r.replace,null,{u:o,a:r.parent,p:r.prefix,
q:e.parseOpenPageUrlOptions(r),f:a.parseFallbackOptions(r)},u?[u]:void 0):T([o],t,r,u?[u]:void 0)),!0};let P=(l,e)=>{
let r=n.Q.ni,u=e.url.split("#",2)[1]?[]:i.n.extension.getViews({tabId:e.id})
;u.length>0&&u[0].location.href.startsWith(r)&&u[0].onhashchange?(u[0].onhashchange(),
i.selectTab(e.id)):i.tabsUpdate(e.id,{url:r,active:!0}),t._o(()=>{a.runNextOnTabLoaded(l,null)})},M=l=>{
let t=n.M,u=t.urls;if(t.$fmt!==2){if(t.$fmt!==1)for(let l=0;l<u.length;l++)u[l]=r._r(u[l]+"")
;u=u.filter(l=>!n.U.has(l)&&!/file:\/\//i.test(l)),a.overrideCmdOptions({},!0),a.overrideOption("urls",u),
a.overrideOption("$fmt",2)}for(let l of u)if(e.yi(l))return i.oe()
;let o=e.parseReuse(t.reuse),d=o===1||o===0||o===3||o===-3?-1:o;n.M=null,T(u,d,t,l)};e.openUrlWithActions=(l,u,d,s)=>{
var f,v;if(typeof l!="string");else if(l||u!==9){
let i=a.fillOptionWithMask(l,n.M.mask,"value",["url","url_mask","url_mark","value"],n.g),o={};i.ok&&(l=i.result,
i.useCount&&(n.g=1));let m=n.M.url_mask,w=n.M.url_mark;if(m==null&&w==null||(l=_(l,s,m!=null?m:w)),d){let e=p.P(n.M)
;l=n.R(l,0,e,o)}if(u!==9){
let e=(f=o.S)!==null&&f!==void 0?f:(n.M.keyword||"")+"",i=(v=n.M.testUrl)!==null&&v!==void 0?v:!e,d=!!o.S||!!o.Pl||!!e&&e!=="~"
;l=i?r._r(l,e,u):r.C(l.trim().split(t.F),e,d?-2:u),l=i||!d?l:r._r(l,null,r.gi&&l.startsWith("vimium:")?3:u)}
let c=n.M.goNext;c&&l&&typeof l=="string"&&(l=n.R(l,8192,null,{}),l=e.goToNextUrl(l,n.g,c==="absolute")[1],
o.S&&(l=r.C(l.trim().split(t.F),o.S,3))),l=typeof l=="string"?r.mi(l):l}else l=n.newTabUrl_f
;let m=n.M,w=e.parseReuse(m.reuse),g=w===0||w===3?c(m.incognito):null;n.M=null,t.Bl(),
typeof l=="string"&&l.startsWith("about:reader?url=")&&(w=w!==-2?-1:w),g!=null&&g!==(n.fe===2)&&(w=-1),
typeof l=="string"&&n.$&&/^file:|^about:(?!blank)/.test(l)&&m.warnFiles!==!1&&o.showHUDEx(n.$,"disabledUrlToOpen",2,[]),
typeof l!="string"?Promise.resolve(l).then(b.bind(0,u,m,s)):!e.openShowPage(l,w,m)&&(t.Vl(l)?e.openJSUrl(l,m,null,w):e.yi(l)?a.runNextCmdBy(0,m):w===1||w===-3?x(l,w,m.replace,null,{
u:l,a:m.parent,p:m.prefix,q:e.parseOpenPageUrlOptions(m),f:a.parseFallbackOptions(m)
},s):w===0||w===3?h(m,w,l):m.replace?x(l,w,m.replace,m,null,s):s?T([l],w,m,s):i.getCurTab(T.bind(null,[l],w,m)))}
;let U=(l,d,f,v)=>{if(v===null)return o.complainLimits(s.D("readClipboard")),void a.runNextCmd(0)
;if(!(v=v.trim()))return o.showHUD(s.D("noCopied")),void a.runNextCmd(0);d.S!=null&&a.overrideCmdOptions({keyword:d.S})
;let p,m=(l=typeof l=="string"?l:"").includes("any");if((l.includes("urls")||m)&&(p=v.split(/[\r\n]+/g)).length>1){
let e=[],u=m&&n.M.keyword,d=u?u+"":null,s=!1;for(let l of p)if(l=l.trim(),l){if(l=r._r(l,d,0),!(m||r.dr<=2)){e.length=0,
s=!0;break}e.push(l)}if(e.length>1)return n.M=a.copyCmdOptions(t.W(),n.M),n.M.urls=e,n.M.$fmt=1,
void(f&&f.length>0?M(f):i.getCurTab(M))
;if(s&&l.includes("auto"))v=v.replace(/[\r\n]+/g," ");else if(s)return void(a.runNextCmd(0)||o.showHUD("The copied lines are not URLs"))
}if(r.ss.test(v))v=v.slice(1,-1);else{let l=n.M.testUrl;(l!=null?l:!n.M.keyword)&&(v=u.Ti(v,l))}let w=v.indexOf("://")+3
;if(w>3&&t.sn.test(v)){
let l,e=(v=/^ttps?:/i.test(v)?"h"+v:v).indexOf("/",w)+1||v.length,n=v.slice(w,e),t=n.startsWith("0.0.0.0")?7:n.includes(":::")&&(l=/^(\[?::\]?):\d{2,5}$/.exec(n))?l[1].length:0
;v=t?v.slice(0,w)+(t>6?"127.0.0.1":"[::1]")+v.slice(w+t):v}e.openUrlWithActions(v,2,!1,f)};e.goToNextUrl=(l,e,n)=>{
let t=(l,e)=>typeof l!="number"||isNaN(l)?e:l,i=!1
;return l=l.replace(/\$\{([\da-zA-Z_-]+)(?:[,\/#@](-?\d*)(?::(-?\d*)(:-?\d*)?)?(?:[,\/#@]([^}]+))?)?\}|\$\$/g,(l,r,u,o,d,s)=>{
if(l==="$$")return"$";i=!0;let f=10,a=1,v=!1,p=0
;for(let[l,e]of s?s.split("&").map(l=>l.split("=")):[])l==="min_len"||l==="len"?a=+e||1:l==="radix"?(f=e,
f=f>=2&&f<=36?f:10):l.startsWith("out")&&l.endsWith("radix")?(p=e,
p=p>=2&&p<=36?p:p&&10):l==="reverse"&&(v=e==="1"||e.toLowerCase()==="true")
;let m=t(r&&parseInt(r,f),1),w=d&&parseInt(d.slice(1))||0,c=w<0||!w&&(d||"0")[0]==="-",g=t(u&&parseInt(u),c?-1:1),b=t(o&&parseInt(o),1/0*(c?-1:1))
;w=(b>=g?1:-1)*(Math.abs(w)||1),
e*=v?-w:w,m=n&&e?w>0?e>0?g+e-1:(isFinite(b)?b:1e4)+e:e<0?g+e+1:(isFinite(b)?b:-1e4)+e:m+e,
m=b>=g?Math.max(g,Math.min(m,b-1)):Math.max(b+1,Math.min(m,g));let y=m.toString(p||f)
;return y=y.length<a?"0".repeat(a-y.length)+y:y,y}),[i,l]},e.openUrl=l=>{
if(n.M.urls)return void(n.M.urls instanceof Array&&(l&&l.length>0?M(l):i.getCurTab(M)))
;if((n.M.url_mask!=null||n.M.url_mark!=null)&&!l)return i.oe()||void i.getCurTab(e.openUrl);let t=n.M.url
;if(n.M.copied){
let e,t=n.M.copied,i=typeof t!="string"?null:t.includes("<")?t.split("<")[1]:t.includes(">")?t.split(">")[0]:null,r={}
;i?(t=t.includes("<")?t.split("<")[0]:t.split(">")[1],e=n.Cl.get(i)||"",e=n.R(e,32768,p.P(n.M),r)):e=n.Ql(p.P(n.M),0,r),
e instanceof Promise?e.then(U.bind(null,t,r,l)):U(t,r,l,e)
}else t||n.M.sed?e.openUrlWithActions(t!=null?t+"":"",3,!0,l):e.openUrlWithActions(n.M.url_f||"",9,!1,l)},
e.openUrlReq=(l,i)=>{var d,s;t.Vn(l);let f=i!=null&&o.isNotVomnibarPage(i,!0);n.$=f?i:o.findCPort(i)||n.$
;let v=l.u||"",p=l.n&&a.parseFallbackOptions(l.n)||{},m=l.o||l.n&&e.parseOpenPageUrlOptions(l.n)||{},w=(m.k||"")+"",g=(d=m.t)!==null&&d!==void 0?d:!w,b=m.s,y=l.m||0,h=y<64?y&-17:y,k=l.f!=null?l.f:h===45||h===46
;p.group=!f||m.g,p.incognito=c(m.i)!=null?m.i:h===45||null,p.replace=m.m,p.position=m.p
;let $=m.r!=null?m.r:y?l.t==="window"?2:(y&16?-2:-1)+(l.t==="last-window"?-4:0):l.r;if(p.reuse=$,p.window=m.w,v||!f){
v[0]===":"&&!f&&/^:[bhtwWBHdso]\s/.test(v)&&(v=l.u=v.slice(2).trim());let e=v,i={},o=f?k?1048576:524288:g?16384:0
;v=g?u.Pi(v,k):v,v=n.R(v,o,b,i);let d=(s=i.S)!==null&&s!==void 0?s:w,a=v.trim();r.wi(),
k&&!d?v=v!==e?r._r(a,null,-1):a:g||!f&&!d?(a=g?u.Ti(a,g):a,v=r._r(a,d,f?-1:3)):(v=r.C(a.split(t.F),d,d&&d!=="~"?-1:0),
v=r.gi?r._r(a=v,d="",v.startsWith("vimium:")?3:0):v),
r.dr===4&&!d&&n.q.preferBrowserSearch&&(v=`vimium://b-search-at/${$}/${a}`,v=r._r(v,null,2)),
r.dr!==2&&r.dr!==1||l.h==null?r.dr===3&&v.startsWith("vimium:")&&!e.startsWith("vimium://")&&(v=r._r(v,null,r.gi||v.startsWith("vimium://run")?3:0)):v=(l.h?"https":"http")+v.slice(v[4]==="s"?5:4),
p.opener=f?m.o!==!1:n.Sn.actions.includes("opener"),p.url_f=v}else{if(!l.c)return n.$=i||o.findCPort(null),
void(a.runNextCmdBy(0,p)||o.showHUD("",14));p.copied=l.c,p.keyword=w,p.testUrl=m.t,p.sed=b}n.g=1,a.replaceCmdOptions(p),
e.openUrl()},e.We=(l,u)=>{let o,d=t=>{var r;let d=(r=c(w.i))!==null&&r!==void 0?r:n.fe===2&&null;if(t=t||[],
d!==null&&(t=t.filter(l=>l.incognito===d)),w.g&&o.length>0){let l=i.getGroupId(o[0]);t=t.filter(e=>i.getGroupId(e)===l)}
if(t.length>0){let l=t.filter(l=>l.windowId===n.xe);return void s(l.length>0?l:t)}let v=n.fe===2&&i.b(l.u)
;return l.f&&a.runNextCmdBy(0,l.f)||(o.length<=0||w.w||b===2?i.makeWindow({url:l.u,type:g(w.w),incognito:!v&&n.fe===2
},"",l=>{f(l&&l.tabs&&l.tabs.length>0?l.tabs[0]:null)}):v?i.openMultiTabs({url:l.u,active:!0
},1,null,[null],w.g,null,f):b===0||b===3?(h({},b,l.u),b===3&&u&&u.s.J?(a.sendFgCmd(18,!1,{r:1,u:l.u}),
f(o[0])):i.tabsUpdate(o[0].id,{url:l.u},f)):i.openMultiTabs({url:l.u,index:e.newTabIndex(o[0],w.p,!1,!0),
openerTabId:w.o&&o[0]?o[0].id:void 0,windowId:o[0].windowId,active:!0},1,null,[null],w.g,o[0],f)),i.oe()},s=e=>{
let t=l.u,r=!!l.p,u=r?1:l.a?-1:0;u&&e.sort((l,e)=>(l.url.length-e.url.length)*u);let o=i.selectFrom(e)
;if(u&&o.url.length>e[0].url.length===r&&(o=e[0]),n.Ii&&o.url.startsWith(n.Q.ni))P(l.f||{},o),i.selectWndIfNeed(o);else{
let e=o.url,n=t;p=r?e.startsWith(n):l.a?n.startsWith(e):n===e,i.tabsUpdate(o.id,{url:p?void 0:t,active:!0},f),
i.selectWndIfNeed(o)}},f=e=>{if(!e)return l.f&&a.runNextCmdBy(0,l.f),i.oe();a.runNextOnTabLoaded(l.f||{},e,l.s&&(()=>{
v.be.Mi(l,e.id,0,p)}))},p=!1,m=r.mi(l.u.split("#",1)[0]);if(e.yi(m,u))return;let w=l.q||(l.q={})
;(w.g==null||m.startsWith(n.Q.Ze))&&(w.g=!1);let b=w.r!=null?e.parseReuse(w.r):1
;w.m?x(l.u,b!==3&&b!==0?b:1,w.m,null,l):i.ke(i.getCurTab).then(async e=>{o=e
;let r=[],u=b===-3&&n.xe>=0?n.xe:void 0,s=m,f=g(w.w)||"normal";if(t.sn.test(m)){
let e=m.indexOf("/")+2,n=m.indexOf("/",e+1),t=m.slice(e,n>0?n:void 0);l.a&&(m=m.slice(0,n>0?n+1:void 0),
s=m=m.endsWith("/")?m:m+"/"),t&&t.includes("@")&&(s=m=m.slice(0,e)+t.split("@")[1]+m.slice(n)),
t.includes(":")&&t[0]!=="["&&(s=m.slice(0,e)+t.split(":")[0]+m.slice(n))}let a=!(!l.p&&!l.a)
;!m.startsWith("file:")&&!m.startsWith("ftp")||m.includes(".",m.lastIndexOf("/")+1)||(r.push(s+(a?"/*":"/")),
s!==m&&r.push(m+(a?"/*":"/"))),r.push(a?s+"*":s),s!==m&&r.push(a?m+"*":m);for(let e of r){let n=await i.ke(i.ge.query,{
url:e,windowType:f,windowId:u});if(n&&n.length&&(n=n.filter(l=>l.url.startsWith(m))),
n&&l.a&&(n=n.filter(l=>m.startsWith(l.url.split(/[#?]/,1)[0]))),n&&n.length>0)return d(n)}d([])})}});