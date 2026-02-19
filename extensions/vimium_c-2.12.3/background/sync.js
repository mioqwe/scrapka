"use strict"
;__filename="background/sync.js",define(["require","exports","./store","./utils","./browser","./settings"],(e,t,l,n,i,r)=>{
Object.defineProperty(t,"__esModule",{value:!0});let o,u=n.Vn({findModeRawQueryList:1,innerCSS:1,keyboard:1,
newTabUrl_f:1,vomnibarPage_f:1
}),s=i.n.storage,f="sync.cloud:",a=null,c=null,y="",d=null,S=null,p=0,b=null,g=()=>o||(o=s&&s.sync),m=(e,t)=>{let l=e=>{
if(d){n.Vn(e);for(let t in d){let l=t.split(":")[0],n=l===t;if(n||!(l in d)){let i=n?d[t]:null
;v(l,i!=null?i.newValue:e[l],e)}}d=null}};if(n.Vn(e),d?Object.assign(d,e):d=e,b)b.then(()=>m({},t));else{e=d,d=null
;for(let t in e){let n=e[t];if((t.includes(":")?8:v(t,n!=null?n.newValue:null))===8)return d=e,void g().get(l)
;delete e[t]}}},O=console.log.bind(console,"[%s]",{toString(){
return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}}),v=(e,t,n)=>{
let i,o=t&&typeof t=="object"&&t.$_serialize||"";if(!(e in r.V)||!_(e)){let n=o||!r.$o?-1:r.yo.indexOf(e)
;return void(n>=0&&(i=l.iu.get(e),(i!=null?i+"":null)!==(t!=null?t+"":null))&&(r.lu(e,t!=null?t:null),r.qo(n)))}
let u=r.V[e];if(o){if(o==="split"&&!n)return 8;if((t=J(e,t,n))===8)return}
if(t==null)return void(l.q[e]!=u&&(b||O("sync.this:","reset",e),j(e,u)));let s,f,a,c=l.q[e]
;(a=typeof u!="object"||!t||typeof t!="object")?(f=t,s=c):(f=JSON.stringify(t),s=JSON.stringify(c)),
f!==s&&(f===(a?u:JSON.stringify(u))&&(t=u),
b||O("sync.this:","update",e,typeof t=="string"?(t.length>32?t.slice(0,30)+"...":t).replace(/\n/g,"\\n"):t),j(e,t))
},j=(e,t)=>{y=e,e==="keyLayout"&&(t=t&-33|l.q[e]&32),r.go(e,t),y="",e in r.z&&r.Nn({N:6,d:[r.z[e]]})},w=(e,t)=>{
let l=_(e)?1:r.yo.includes(e)?2:0;l&&e!==y&&(a||(setTimeout(k,800),a=n.W()),l===1?(e==="keyLayout"&&(t&=-33),
a[e]=t):(c||(c=[])).push(e))},N=e=>{let t={Q:'\\"',S:"\\\\",d:"`",l:"<",n:"\u2029",q:'"',r:"\u2028"}
;return e.replace(/`[QSdlnqr]/g,e=>t[e[1]])},J=(e,t,l)=>{let n="";switch(t.$_serialize){case"split":
for(let{k:i,s:r}=t,o=0;o<r;o++){let t=l[e+":"+o];if(!t||typeof t!="string"||!t.startsWith(i))return 8
;n+=t.slice(i.length)}break;case"single":return JSON.parse(N(JSON.stringify(t.d)));default:
return O("Error: can not support the data format in synced settings data:",e,":",t.$_serialize),null}
return typeof r.V[e]=="string"?(n=N(n),n):(n=N(JSON.stringify(n)),JSON.parse(n.slice(1,-1)))},T=(e,t,l)=>{
if(!t||(typeof t!="string"?typeof t!="object":t.length<8192/6-40))return;let n=JSON.stringify(t),i=""
;if(n.length<8192/6-40)return;let o=n.length
;n=n.replace(/[<`\u2028\u2029]/g,e=>e==="<"?"`l":e==="`"?"`d":e==="\u2028"?"`r":"`n");let u=n.length
;if(3*(u-o)+o*3<8093)return;if(i=l.encode(n),i.length<8093)return i.length+4*(u-o)<8093?void 0:n
;let s=0,f=Date.now().toString(36)+":",a={}
;n=typeof r.V[e]=="string"?n.slice(1,-1):n.replace(/"|\\[\\"]/g,e=>e==='"'?"`q":e==='\\"'?"`Q":"`S"),
S||(S=new TextDecoder),i=l.encode(n);for(let t=0,l=i.length;t<l;){let r,o=Math.min(t+8134,l),u=0
;for(;o<l&&(i[o]&192)==128;o++);if(r=S.decode(i.subarray(t,o)),n=r.slice(-6),u=o<l?n.lastIndexOf("\\"):-1,
u>0&&u>n.length-2)r+="b",u=1;else if(u>0&&n[u+1]==="u"){u=n.length-u;for(let e=u;e++<6;r+="b");}else u=0
;if(r=JSON.parse(`"${r}"`),u){let e=r.endsWith("b");e||(o-=u),r=r.slice(0,u>1&&e?u-6:-1)}if(a[e+":"+s++]=f+r,t=o,
s>=13)break}return a[e]={$_serialize:"split",k:f,s},a},k=()=>{let e=a,t=c,o=[],u=[],s=[],y=n.W(),d={};if(a=c=null,
!e||l.To!==w)return;let p=Object.keys(e).length>0?new TextEncoder:null;for(let t in e){
let l=t,n=e[l],i=r.V[l],f=typeof i=="string"||typeof i=="object"&&l!=="vimSync"?0:13;if(n!=null){let e=T(l,n,p)
;e&&typeof e=="object"?(y[l]=e,f=e[l].s):(d[l]=e?{$_serialize:"single",d:JSON.parse(e)}:n,u.push(l))}else o.push(l)
;for(;f<13;f++)s.push(l+":"+f)}S=p=null,t&&o.push(...t),s.push(...o),o.length>0&&O(f,"reset",o.join(", ")),
s.length>0&&g().remove(s),u.length>0&&(O(f,"update",u.join(", ")),g().set(d));for(let e in y)g().set(y[e],()=>{
let t=i.oe();return t?O("Failed to update",e,":",t.message||t):O(f,"update (serialized) "+e),t})},_=e=>!(e in u),h=e=>{
l.Di=null,p&&clearTimeout(p),p=setTimeout(()=>{p=0,r.jo.get(e=>{let t=r.So;if(!t.length)return
;O("storage.local: update settings from localStorage"),n.Vn(e);let i=n.W();for(let n=0,o=t.length;n<o;n++){
let o=t.key(n),u=e[o];if(o in r.V){let e=l.q[o],t=e,n=u;typeof r.V[o]=="object"&&(n=JSON.stringify(u),
t=JSON.stringify(e)),t!==n&&r.go(o,e)}else e[o]!==u&&o!=="i18n_f"&&(i[o]=u)}Object.keys(i).length>0&&r.jo.set(i),
t.clear()})},e)},D=(e,t)=>{n.Vn(e);let i=e.vimSync||l.q.vimSync==null&&l.zo;if(l.dl.vimSync(!1,"vimSync"),
!i)return void t();e.vimSync||(O(f,"enable vimSync"),e.vimSync=!0,g().set({vimSync:!0}));let o=[],u=r.So
;for(let t in l.q)l.q[t]!==r.V[t]&&(!(t in e)&&_(t)&&(t==="keyLayout"&&r.$o&2||o.push(t)),u&&u.length&&u.removeItem(t))
;for(let e of o)v(e,null);for(let t in e)t.includes(":")||v(t,e[t],e);h(60),r.hl("vimSync"),setTimeout(()=>{t()},4),
O(f,"download settings")};l.dl.vimSync=e=>{if(!g())return;let t=g().onChanged,n=m;if(!e)return t.removeListener(n),
void(l.To=l.r);l.To!==w?(t.addListener(n),l.To=w,h(60)):a&&(O(f,"save immediately"),k())},r.Tl.then(()=>{
let e=l.q.vimSync;if(e===!1||!e&&!l.zo){{let e=l.Di===!0;l.Di=e?null:h,e&&h(6e3)}
"showActionIcon"in l.dl?l.tl=null:setTimeout(()=>{l.tl=null},1e3)
}else l.tl?(b=l.tl.then(e=>("showActionIcon"in l.dl?l.tl=null:setTimeout(()=>{l.tl=null},1e3),
!!e&&e.reason==="install")).then(e=>new Promise(t=>{g()?g().get(n=>{
let o=i.oe(),u=e&&l.zo&&(o||Object.keys(n).length===0)?()=>{r.go("keyLayout",2),t()}:t;return o?(l.dl.vimSync=l.r,u(),
O("Error: failed to get storage:",o,"\n\tSo disable syncing temporarily.")):D(n,u),o}):t()})).then(()=>{l.Si=null,b=null
}),l.Si=Promise.race([b,new Promise(e=>{setTimeout(e,800)})]).then(()=>{l.Si=null,l.q.vimSync&&l.To!==w&&r.hl("vimSync")
})):r.hl("vimSync")})});