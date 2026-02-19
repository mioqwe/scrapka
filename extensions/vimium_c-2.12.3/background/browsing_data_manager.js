"use strict"
;__filename="background/browsing_data_manager.js",define(["require","exports","./store","./browser","./utils","./settings","./completion_utils"],(e,t,l,i,r,n,o)=>{
Object.defineProperty(t,"__esModule",{value:!0}),t.et=t.tt=t.lt=t.it=t.rt=t.nt=t.ot=t.ut=t.ft=t.st=void 0
;let u,f,s=decodeURIComponent,a=-1,_="1",m=null,d=null,c=null,p=!1;t.st=d;let T=null;t.ft=T,t.ut=e=>{
let t,l,i=e.slice(0,5);if(i==="https")t=8;else if(i==="http:")t=7;else{if(!i.startsWith("ftp"))return null;t=6}
return l=e.indexOf("/",t),{at:e=e.slice(t,l<0?e.length:l),_t:t}};let h=e=>{l.ue.re=[],l.ue.Je=[],t.ot.mt(e[0]?0:3)}
;t.ot={dt:null,ct:0,pt:!1,Tt:0,ht:null,mt(e){let i=t.ot.ht;t.ot.ht=null,l.ue.d=e,i&&i()},vt(){let e=i.n.bookmarks
;e.onCreated.addListener(t.ot.gt),e.onRemoved.addListener(t.ot.bt),e.onChanged.addListener(t.ot.bt),
e.onMoved.addListener(t.ot.gt)},xt(){let e=i.n.bookmarks;if(h&&(i.v([{permissions:["bookmarks"]}],h),h=null),e){
l.ue.d=1,t.ot.ct&&(clearTimeout(t.ot.ct),t.ot.ct=0);try{e.getTree(t.ot.yt)}catch(e){t.ot.mt(3)}}else t.ot.mt(3)},yt(e){
let n="",u="",f=0;l.ue.re=[],l.ue.Je=[],o.kt.ve(2);let s=(e,i)=>{let o=e.title,a=e.id,_=o||a,m=n+"/"+_;if(e.children){
l.ue.Je.push({ee:a,wt:m,Dt:_});let t=n,i=u;return 2<++f&&(n=m),u=a,e.children.forEach(s),--f,n=t,void(u=i)}
let d=e.url,T=d.startsWith("javascript:");l.ue.re.push({ee:a,wt:m,Dt:_,t:T?"javascript:":d,Lt:c!==null?t.lt(d,p?m:o):1,
u:T?"javascript:":d,Y:u,te:i,Qe:T?d:null,Rt:T?r.Ye(d):null})};if(!e)return t.ot.mt(3),i.oe();e.forEach(s),t.ot.mt(2),
setTimeout(()=>t.et.It(l.ue.re),50),t.ot.pt||(setTimeout(t.ot.vt,0),t.ot.pt=!0)},gt(){let e=()=>{
let i=performance.now()-l.ue.Ue;l.ue.d===0&&(i>=59900||i<-5e3?(t.ot.ct=t.ot.Tt=0,t.ot.xt()):t.ot.ct=setTimeout(e,3e4))}
;l.ue.Ue=performance.now(),l.ue.d===2&&(t.ot.ct=setTimeout(e,6e4),l.ue.d=0)},bt(e,i){
let r=l.ue.re,n=i&&i.title,o=r.findIndex(t=>t.ee===e);if(o>=0){let e=r[o],f=e.u,s=i&&i.url
;if(u&&(n==null?f!==e.t||!i:s!=null&&f!==s)&&l.Mt.has(f)&&t.nt.jt&&t.nt.Ut(f)<0&&l.Mt.delete(f),
n!=null)e.wt=e.wt.slice(0,-e.Dt.length)+(n||e.ee),e.Dt=n||e.ee,s&&(e.u=s,e.t=t.et.Pt(s,e),t.et.Ot()),
c!==null&&(e.Lt=t.lt(e.Qe||e.u,p?e.wt:e.Dt)),l.ue.Ue=performance.now();else{r.splice(o,1)
;for(let t=i?o:r.length;t<r.length;t++)r[t].Y===e.Y&&r[t].te--;i||t.ot.gt()}}else if(l.ue.Je.find(t=>t.ee===e)){
if(n==null&&!t.ot.Tt&&u){let e=l.Mt,i=t.nt.Ut;for(let{u:l}of t.nt.jt?r:[])e.has(l)&&i(l)<0&&e.delete(l);t.ot.Tt=1}
t.ot.gt()}}},l.X=(e,i)=>{if(l.ue.d<2){let n=r.Et();return t.ot.ht=n.At,t.ot.xt(),n.Vt.then(l.X.bind(0,e,i))}
let n=!i&&e.includes("/"),o=n?(e+"").replace(/\\\/?|\//g,e=>e.length>1?"/":"\n").split("\n").filter(e=>e):[]
;if(!e||n&&!o.length)return Promise.resolve(!1)
;if(i)return Promise.resolve(l.ue.re.find(t=>t.ee===e)||l.ue.Je.find(t=>t.ee===e)||null)
;let u=n?"/"+o.slice(1).join("/"):"",f=n?"/"+o[0]+u:""
;for(let t of l.ue.re)if(n&&(t.wt===f||t.wt===u)||t.Dt===e)return Promise.resolve(t)
;for(let t of l.ue.Je)if(n&&(t.wt===f||t.wt===u)||t.Dt===e)return Promise.resolve(t);let s=null
;for(let t of l.ue.re)if(t.Dt.includes(e)){if(s){s=null;break}s=t}return Promise.resolve(s)};let v=e=>{e&&e()};t.nt={
jt:!1,St:0,Wt:null,$t(e){if(t.nt.Wt)e&&t.nt.Wt.push(e);else{if(l.zt.qt=Date.now(),!i.n.history)return l.zt.Bt=[],
t.nt.$t=v,void v(e);t.nt.Wt=e?[e]:[],t.nt.St||i.n.history.search({text:"",maxResults:2e4,startTime:0},e=>{
setTimeout(t.nt.Ct,0,e)})}},Ct(e){t.nt.Ct=null;let r=t.nt.Ht,n=0;for(let t of e){let l=t.url;l.length>2e3&&(l=r(l,t)),
e[n++]={t:l,Dt:t.title||"",Ft:t.lastVisitTime,Lt:1,u:l}}if(c)for(let l of e)t.lt(l.t,l.Dt)===0&&(l.Lt=0)
;setTimeout(()=>{setTimeout(()=>{let e=l.zt.Bt;for(let l=e.length-1;0<l;){
let i=e[l],r=i.u,n=i.t=t.et.Pt(r,i),o=n.length>=r.length;for(;0<=--l;){let i=e[l],u=i.u
;if(u.length>=r.length||!r.startsWith(u))break;i.u=r.slice(0,u.length);let f=o?u:t.et.Pt(u,i)
;i.t=o||f.length<u.length?n.slice(0,f.length):f}}t.nt.Gt&&setTimeout(()=>{t.nt.Gt&&t.nt.Gt(l.zt.Bt)},200)},100),
l.zt.Bt.sort((e,t)=>e.u>t.u?1:-1),t.nt.jt=!0,i.n.history.onVisitRemoved.addListener(t.nt.Jt),
i.n.history.onVisited.addListener(t.nt.Kt)},100),l.zt.Bt=e,t.nt.$t=v,t.nt.Wt&&t.nt.Wt.length>0&&setTimeout(e=>{
for(let t of e)t()},1,t.nt.Wt),t.nt.Wt=null},Kt(e){let i=e.url;i.length>2e3&&(i=t.nt.Ht(i,e))
;let r=++l.zt.Nt,n=t.nt.Ut(i);n<0&&l.zt.Qt++,(r>59||r>10&&Date.now()-l.zt.qt>3e5)&&t.nt.Xt(),t.nt.Yt(e,i,n)},Yt(e,i,r){
let n,u=e.lastVisitTime,f=e.title||"",s=r>=0?l.zt.Bt[r]:{t:"",Dt:f,Ft:u,Lt:c!==null?t.lt(i,f):1,u:i},a=t.ut(i)
;if(a===null||((n=l.zt.Zt.get(a.at))!==void 0?(n.Ft=u,r<0&&(n.il+=s.Lt),a._t>6&&(n.rl=a._t===8?1:0)):l.zt.Zt.set(a.at,{
Ft:u,il:s.Lt,rl:a._t===8?1:0})),r>=0){if(s.Ft=u,f&&f!==s.Dt&&(T===null||!T.test(f.slice(0,100)))&&(s.Dt=f,
o.kt.nl!==0&&o.kt.ve(1),c!==null)){let e=t.lt(i,f);s.Lt!==e&&(s.Lt=e,n!==void 0&&(n.il+=e||-1))}}else s.t=t.et.Pt(i,s),
l.zt.Bt.splice(~r,0,s),o.kt.nl!==0&&o.kt.ve(1)},Jt(e){f.length=0;let i=l.Mt;if(o.kt.ve(1),e.allHistory){l.zt.Bt=[],
l.zt.Zt=new Map;let e=[];for(let t of l.ue.re){let l=i.get(t.u);l!==void 0&&e.push([t.u,l])}
if(e.length)l.Mt=new Map(e);else{i.clear();for(let[t,l]of e)i.set(t,l)}return}let r,n=t.nt.Ut,{Bt:u,Zt:s}=l.zt
;for(let l of e.urls){let e=n(l);if(e>=0){if(u[e].Lt){let e=t.ut(l);e&&(r=s.get(e.at))&&--r.il<=0&&s.delete(e.at)}
u.splice(e,1),i.delete(l)}}},Ht(e,t){let l=e.lastIndexOf(":",9),i=l>0&&e.substr(l,3)==="://",n=t.title
;return e=e.slice(0,(i?e.indexOf("/",l+4):l)+320)+"\u2026",n&&n.length>160&&(t.title=r.ol(n,0,160)),e},Xt(){
let e=Date.now();if(l.zt.Qt<=0);else{if(e<l.zt.qt+1e3&&e>=l.zt.qt)return;setTimeout(i.n.history.search,50,{text:"",
maxResults:Math.min(999,l.zt.Nt+10),startTime:e<l.zt.qt?e-3e5:l.zt.qt},t.nt.ul)}return l.zt.qt=e,l.zt.Qt=l.zt.Nt=0,
t.et.Ot()},Gt(e){t.nt.Gt=null;let i=l.zt.Zt;for(let{u:l,Ft:r,Lt:n}of e){let e=t.ut(l);if(e===null)continue
;let{at:o,_t:u}=e,f=i.get(o);f!==void 0?(f.Ft<r&&(f.Ft=r),f.il+=n,u>6&&(f.rl=u===8?1:0)):i.set(o,{Ft:r,il:n,rl:u===8?1:0
})}},ul(e){let i=l.zt.Bt,r=t.nt.Ut;if(!(i.length<=0)&&t.nt.jt)for(let l of e){let e=l.url;e.length>2e3&&(e=t.nt.Ht(e,l))
;let n=r(e);if(n>=0){let r=i[n],o=l.title;o&&o!==r.Dt&&(t.nt.Yt(l,e,n),l.title=r.Dt)}else t.nt.Yt(l,e,n)}},Ut(e){
let t="",i=l.zt.Bt,r=i.length-1,n=0,o=0;for(;n<=r;)if(o=n+r>>>1,t=i[o].u,t>e)r=o-1;else{if(t===e)return o;n=o+1}return~n
}},t.rt=e=>{let i,r,n=l.zt.Bt,o=!!n&&n.length>0&&t.nt.jt&&T!==null;for(let l of e){let e=l.url
;if(e.length>2e3&&(e=l.url=t.nt.Ht(e,l)),o&&(i=l.title)&&T.test(i.slice(0,100))){
let i=r===null||r===void 0?void 0:r.get(e);if(i===void 0){let l=t.nt.Ut(e);i=l>=0?n[l].Dt:"",(r||(r=new Map)).set(e,i)}
i&&(l.title=i)}}},t.it=(e,r,n)=>{let o=i.je();if(!o)return void n([]);let u=setTimeout(()=>{u=0,n([])},150)
;o.getRecentlyClosed({maxResults:Math.min(Math.round(e*1.2),+o.MAX_SESSION_RESULTS||25,25)},e=>{if(!u)return
;clearTimeout(u);let o,f=[],s=0,a=Date.now()-performance.now();for(let i of e||[]){let e=i.tab,n=null;if(!e){
if(!(n=i.window)||!n.tabs||!n.tabs.length)continue;s=1,e=n.tabs.find(e=>e.active)||n.tabs[0],n.sessionId||(n=null)}
t.rt([e]);let{url:u,title:_}=e;if(!r&&!t.lt(u,_))continue;o=i.lastModified;let m=e.windowId;f.push({u,Dt:_,fl:o,
sl:[m,(n||e).sessionId,n?n.tabs.length:0],al:n?` +${n.tabs.length>1?n.tabs.length-1:""}`:m&&m!==l.xe&&o>a?" +":""})}
return s?setTimeout(n,0,f):n(f),i.oe()})},t.lt=(e,t)=>c.test(t)||c.test(e)?0:1,t.tt={_l(e){
if(d)for(let t of e)for(let e of d)if(e=e.trim(),t.includes(e)||e.length>9&&t.length+2>=e.length&&e.includes(t))return!0
;return!1},ml(){let e=l.zt.Zt,i=c!==null;if(l.ue.re)for(let e of l.ue.re)e.Lt=i?t.lt(e.Qe||e.u,p?e.wt:e.Dt):1
;if(l.zt.Bt)for(let r of l.zt.Bt){let l=i?t.lt(r.u,r.Dt):1;if(r.Lt!==l){r.Lt=l;let i=t.ut(r.u),n=i&&e.get(i.at)
;n&&(n.il+=l||-1)}}}},t.et={Pt(e,t){if(e.length>=400||e.lastIndexOf("%")<0)return e;try{return s(e)}catch(e){}
return l.Mt.get(e)||(t&&f.push(t),e)},It(e){let i,r,n=l.Mt,o=f,u=-1,a=e.length;for(;;)try{for(;++u<a;)i=e[u],r=i.u,
i.t=r.length>=400||r.lastIndexOf("%")<0?r:s(r);break}catch(e){i.t=n.get(r)||(o.push(i),r)}t.et.Ot()},Ot(){
f.length!==0&&a===-1&&(a=0,setTimeout(g,17))}};let g=()=>{let e,t=f.length;if(!_||a>=t)return f.length=0,a=-1,
void(m=null);for(t=Math.min(a+32,t),m=m||new TextDecoder(_);a<t;a++){let t=f[a],i=typeof t=="string",r=i?t:t.u
;(e=l.Mt.get(r))?i||(t.t=e):(e=r.replace(/%[a-f\d]{2}(?:%[a-f\d]{2})+/gi,b),e=e.length!==r.length?e:r,
typeof t!="string"?l.Mt.set(t.u,t.t=e):l.Mt.set(t,e))}a<f.length?setTimeout(g,4):(f.length=0,a=-1,m=null)},b=e=>{
let t=new Uint8Array(e.length/3);for(let l=1,i=0;l<e.length;l+=3)t[i++]=parseInt(e.substr(l,2),16);return m.decode(t)
},x=e=>{let t=[];for(let l of e.split("\n"))l&&l.trim()&&l[0]!=="#"&&t.push(l);return t};l.dl.omniBlockList=e=>{
let i=e?x(e):[];c=i.length>0?new RegExp(i.map(r.cl).join("|"),""):null,p=i.join("").includes("/"),
t.st=d=i.length>0?i:null,(l.zt.Bt||l.ue.re.length)&&setTimeout(t.tt.ml,100)},l.dl.titleIgnoreList=e=>{if(t.ft=T=null,
e=e&&x(e).join("\n").replace(/\\\n/g,"").replace(/\n/g,"|")){
let l=e.replace(/^\/\|?/,""),i=l.length<e.length?/\|?\/([a-z]{0,16})$/.exec(l):null
;i&&!i.index||(t.ft=T=r.pl(i?l.slice(0,i.index):l,i?i[1].replace("g",""):""))}},n.Tl.then(()=>{n.hl("omniBlockList"),
n.hl("titleIgnoreList")}),l.dl.localeEncoding=e=>{let i=!!e&&!(e=e.toLowerCase()).startsWith("utf"),r=_;if(_=i?e:"",
_!==r){try{new TextDecoder(_)}catch(e){i=!1}i?r!=="1"&&setTimeout(()=>(l.zt.Bt&&t.et.It(l.zt.Bt),
t.et.It(l.ue.re)),100):(l.Mt.clear(),f&&(f.length=0)),u!==i&&(f=i?[]:{length:0,push:l.r},u=i,a=-1)}},
n.hl("localeEncoding"),l.gl.vl=(e,l,r)=>{switch(l){case"tab":o.kt.bl(null),i.Pe(+e,e=>{e&&o.kt.bl(null),r(e)});break
;case"history":let l=!t.nt.jt||t.nt.Ut(e)>=0;i.n.history.deleteUrl({url:e}),l&&o.kt.ve(1),r(l)}},l.gl.xl=t.tt._l});