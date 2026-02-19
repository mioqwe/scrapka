"use strict"
;__filename="background/page_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./key_mappings","./run_commands","./open_urls","./frame_commands"],(l,e,n,t,r,u,s,i,o,a,f,d,v,m,c)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.onReq=void 0;let p=[()=>[i.V,n.G,n.Q.do],l=>{
if(n.Si)return n.Si.then(p[1].bind(null,l,null));let e={};for(let l in i.V){let t=n.q[l];t!==i.V[l]&&(e[l]=t)}return e
},l=>{var e,t;if(n.Si)return n.Si.then(p[2].bind(null,l,null))
;let r=l.key,u=(t=(e=l.val)!==null&&e!==void 0?e:i.V[r])!==null&&t!==void 0?t:null;i.go(r,u);let s=n.q[r]
;return s!==u?s:null},l=>{let e=i.B(l.key,l.val);return e!==l.val?e:null},l=>{i.Nn({N:6,d:l})},l=>n.q[l.key],l=>{
n.Ol.has(l)||r.s(l)},()=>{let l=d.zn;if(n.A.l&1&&!l){let l=l=>/[^ -\xff]/.test(l.join("")),e=l(Object.keys(n.jn))?1:0
;if(e|=n.bo&&l(Object.keys(n.bo))?2:0,e&&(e|=e&2||!n.bo||!l(Object.values(n.bo))?0:4,e&2||!(e&4)))return!0}
return l?(l=>{let e,n,t=l.length>1?l.length+" Errors:\n":"Error: ";for(n of l)e=0,
t+=n[0].replace(/%([a-z])/g,(l,t)=>(++e,t==="c"?"":t==="s"||t==="d"?n[e]:JSON.stringify(n[e]))),
e+1<n.length&&(t+=" "+n.slice(e+1).map(l=>typeof l=="object"&&l?JSON.stringify(l):l).join(" ")),t+=".\n";return t
})(l):""},l=>{let e=o.indexFrame(l[1],0);return e&&e.s&&(e.s.c|=44),f.mergeCSS(l[0],-1)},l=>{
l&&i.lu("isHC_f",l.hc?"1":null),f.eu(2)},l=>[u._r(l[0],null,l[1]),u.dr],()=>{f.tu.nu()},()=>{
let l=n.qn.get("?"),e=l&&l.Ln===8&&l.On?"?":"";return e||n.qn.forEach((l,n)=>{
l.Ln===8&&l.On&&(e=e&&e.length<n.length?e:n)}),e},l=>{var e
;return[l=u._r(l,null,0),(e=n.U.get(l))!==null&&e!==void 0?e:null]},l=>{let e=new Map;s.ru("k:"+l,e);let n=e.get("k")
;if(n==null)return null;let t=u._r(n.Rl,null,-2),r=u.dr>2
;return[!r,r?n.Rl:t.replace(/\s+/g,"%20")+(n.Dr&&n.Dr!=="k"?" "+n.Dr:"")]},l=>{m.We(l)},l=>{let e=null
;return l.startsWith("vimium://")&&(e=n.Fr(l.slice(9),1,!0)),e=e!==null?e:u._r(l,null,-1),
typeof e=="string"&&(e=s.Ti(e,"whole"),e=u.mi(e)),e},()=>n.Ii&&n.Ii(),l=>n.R(l[0],l[1]),l=>m.yi(l),()=>{
let l=n.ye>=0&&n.Ol.get(n.ye)||null,e=l?n.ye:-1,u=l?l.a.s.J:-1,s=u>=0&&r.N()||null
;return Promise.all([r.ke(r.getCurTab).then(l=>l&&l.length?l:e<0?null:r.ke(r.tabsGet,e).then(l=>l&&[l])),s?r.ke(s.getFrame,{
tabId:e,frameId:u}):null,n.Si]).then(([l,s])=>{var o,f,d
;let v=l&&l[0]||null,m=v?v.id:n.ye,p=(o=n.Ol.get(m))!==null&&o!==void 0?o:null
;s&&s.url&&e===m&&p.a.s.J===u&&(p.a.s.Rl=s.url);let b=v?r.getTabUrl(v):p&&(p.T||p.a).s.Rl||"";v&&p&&p.T&&(p.T.s.Rl=b)
;let _=!p||p.a.s.J&&!t.sn.test(p.a.s.Rl)?null:p.a.s,h=!(p||v&&b&&v.status==="loading"&&/^(ht|s?f)tp/.test(b)),k=g(p),y=!h&&!k,w=0,O=y?null:k||!b?k:b.startsWith(location.protocol)&&!b.startsWith(n.Le)?new URL(b).host:null,j=O?n.uu.get(O):null
;if(y||j==null||j===!0)O=null;else{p&&(p.su=-1);{let l=n.uu.get(O);O=typeof l=="string"&&l?l:O}}
if(y&&p&&p.E.length>1&&b.startsWith("http")){let l=(f=t.Pn(b))===null||f===void 0?void 0:f.host;if(l&&!t.xn(l,0)){
let e=b.startsWith("http:"),n="."+l;for(let r of p.E){
let u=r!==(p.T||p.a)?r.s.Rl:null,s=(u===null||u===void 0?void 0:u.startsWith("http"))?(d=t.Pn(u))===null||d===void 0?void 0:d.host:null
;if(s&&s.length>l.length&&s.endsWith(n)&&(w=e||s.startsWith("http:")?2:1,w>1))break}}}let x=_&&_.J?p.T:null
;if(x&&!w&&!(_.c&512))try{c.focusFrame(p.a,!0,5,1)}catch(l){}return{ver:n.Q.aa,runnable:y,url:b,tabId:m,
frameId:p&&(_||p.T)?(_||p.T.s).J:0,topUrl:x===null||x===void 0?void 0:x.s.Rl,frameUrl:_&&_.Rl,lock:p&&p.ts?p.ts.d:null,
status:_?_.d:0,hasSubDomain:w,unknownExt:O,exclusions:y?{rules:n.q.exclusionRules,onlyFirst:n.q.exclusionOnlyFirstMatch,
matchers:a.mn(null),defaults:i.V.exclusionRules}:null,os:n.G,reduceMotion:n.A.m}})},([l,e])=>{
let u=n.q.extAllowList,s=u.split("\n");if(s.indexOf(e)<0){let l=s.indexOf("# "+e)+1||s.indexOf("#"+e)+1
;s.splice(l?l-1:s.length,l?1:0,e),u=s.join("\n"),i.go("extAllowList",u)}let o=n.Ol.get(l);return o&&(o.su=null),
r.ke(r.n.tabs.get,l).then(l=>{let e=t.Et(),n=()=>(v.runNextOnTabLoaded({},l,e.At),r.n.runtime.lastError)
;return l?r.n.tabs.reload(l.id,n):r.n.tabs.reload(n),e.Vt})},([l,e,t])=>{n.Fr("status/"+l,3)
;let r=o.indexFrame(e,t)||o.indexFrame(e,0),u=r?n.Ol.get(e).ts:null;return r&&!u&&n.bn[10]({u:r.s.Rl},r),
[r?r.s.d:0,u?u.d:null]},l=>a.mn(l)[0],(l,e)=>c.initHelp({f:!0},e),l=>{let e=l.module,n=l.name,t=b[e]
;if(!b.hasOwnProperty(e)||!t.includes(n))return[void 0,{message:"refused"}];let u=r.n[e]
;return u[n].apply(u,l.args).then(l=>[l,void 0],l=>[void 0,_(l)])},(l,e)=>e.s.u,l=>{let e=t.W();if(l){let t=n.iu.get(l)
;e[l]=t!=null?t:null}else n.iu.forEach((l,n)=>{e[n]=l});return e},({key:l,val:e})=>{l.includes("|")&&i.lu(l,e)
},({key:l,val:e},t)=>{let r=t&&t.s&&t.s.u||n.ye,u=n.Ke.find(l=>l.s.u===r);u&&u.postMessage({N:47,d:{[l]:e},v:n.ou})
},()=>{n.q.vimSync&&n.dl.vimSync(!0,"vimSync")},()=>({os:n.G}),l=>{r.tabsCreate({url:l.url}),r.n.tabs.remove(l.tabId)
},()=>Promise.all([new Promise(l=>{r.n.extension.isAllowedIncognitoAccess(e=>{l(e)})}),new Promise(l=>{
r.n.extension.isAllowedFileSchemeAccess(e=>{l(e)})})])],b={permissions:["contains","request","remove"],tabs:["update"]
},_=l=>({message:l&&l.message?l.message+"":JSON.stringify(l)});e.onReq=(l,e)=>p[l.n](l.q,e)
;let g=l=>l&&typeof l.su=="string"&&n.uu.get(l.su)!==!0?l.su:null});