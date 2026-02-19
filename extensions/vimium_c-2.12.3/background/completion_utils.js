"use strict"
;__filename="background/completion_utils.js",define(["require","exports","./store","./browser","./utils","./settings","./normalize_urls","./tools","./browsing_data_manager"],(e,t,l,r,n,u,o,i,a)=>{
Object.defineProperty(t,"__esModule",{value:!0
}),t.or=t.en=t.sortBy0=t.shortenUrl=t.highlight=t.cutTitle=t.$r=t.get2ndArg=t.ComputeRelevancy=t.ComputeRecency=t.ComputeWordRelevancy=t.nr=t.ir=t.mr=t.Ar=t.kt=t.vr=t.Wr=t.Or=t.setupQueryTerms=t.ti=t.wr=t.tabsInNormal=void 0
;let f=[0,0],s=null;t.tabsInNormal=s;let _,c,m,h,d=null,b=0,w=[],p=0,g=3;t.wr=g,t.ti=()=>{t.tabsInNormal=s=null},
t.setupQueryTerms=(e,t,l)=>{_=e,c=t,h=c,m=l},t.Or=e=>{_=e},t.Wr=e=>{p=e},t.vr=e=>{t.wr=g=e},t.kt={lr:null,rr:null,nl:0,
tn:0,Jr(e){let r=null,n=0,u=_.join(" ");for(let t=w,l=u?t.length:0;0<=--l;){if(!t[l].ln&&e)continue
;let n=t[l].rn,u=0,o=0;for(;u<n.length&&o<_.length;o++)_[o].includes(n[u])&&u++;if(u>=n.length){r=t[l];break}}t.kt.lr=r,
r&&(l.qe.i<200||!r.Bt||r.Bt.length>1e3)&&(n=performance.now())-r.Ft<Math.max(300,l.qe.i*1.3)?(t.kt.rr=r,
r.rn=_.slice(0)):!u||r&&u===r.rn.join(" ")||!(u.length>4||/\w\S|[^\x00-\x80]/.test(u))?t.kt.rr=null:(t.kt.rr={
rn:_.slice(0),ln:e,Ft:n||performance.now(),Bt:r&&r.Bt,re:r&&r.re},w.push(t.kt.rr),
t.kt.nl||(t.kt.nl=setInterval(t.kt.nn,6e3)))},nn(){let e=w,l=-1,r=performance.now()-5983;for(;++l<e.length&&e[l].Ft<r;);
l++,l<e.length?e.splice(0,l):(e.length=0,clearInterval(t.kt.nl),t.kt.nl=0)},ve(e){
for(let t of w)e<2?t.Bt=null:e<3?t.re=null:d=null},bl(e){d!==e&&(t.kt.tn&&(clearTimeout(t.kt.tn),t.kt.tn=0),d=e,
e&&(a.rt(e),t.kt.tn=setTimeout(t.kt.bl,3e3,null)))}},t.Ar={un:0,ct:0,zr(){let e=_[0],r=l.Gl.keywords
;return r===null?(t.Ar.ct=t.Ar.ct||setTimeout(t.Ar.on,67),!0):!(e.length>=t.Ar.un)&&r.includes("\n"+e)},on(){
let e=n.in(l.Gl.map).sort(),r=0,u="",o=[];for(let t=e.length;0<=--t;){let l=e[t];if(!u.startsWith(l)){let e=l.length
;r=e>r?e:r,u=l,o.push(l)}}l.Gl.keywords="\n"+o.join("\n"),t.Ar.un=r,t.Ar.ct=0}},t.mr={cr:null,Xr:null,Vr:null,Lr(){
let e=t.mr.cr=[];t.mr.Xr=t.mr.Vr=null
;for(let t of _)e.push(new RegExp(n.cl(t),t!==t.toUpperCase()&&t.toLowerCase()===t?"i":""))},an(){
let e=t.mr.Xr=[],l=t.mr.Vr=[];for(let r of t.mr.cr){let t="\\b"+r.source,n=r.flags;e.push(new RegExp(t,n)),
l.push(new RegExp(t+"\\b",n))}},Yr(e,l){
t.mr.cr&&(e=n.cl(l?e:e.slice(0,-1)),t.mr.cr[0]=new RegExp(l?e:e+"(?:/|$)",t.mr.cr[0].flags))}},t.ir=(e,l)=>{
for(let r of t.mr.cr)if(!r.test(e)&&!r.test(l))return!1;return!0},t.nr=(e,l)=>{let r=0,n=0,u=0,o=0,i=!!l
;t.mr.Xr||t.mr.an();for(let t=0,a=_.length;t<a;t++){let a=M(t,e);o+=a[0],u+=a[1],i&&(a=M(t,l),n+=a[0],r+=a[1])}
return o=o/g*x(u,e.length),r===0?l?o/2:o:(n=n/g*x(r,l.length),o<n?n:(o+n)/2)};let x=(e,t)=>e<t?e/t:t/e,M=(e,l)=>{
let r=0,n=0;return r=l.split(t.mr.cr[e]).length,r<1?f:(n=1,t.mr.Xr[e].test(l)&&(n+=1,t.mr.Vr[e].test(l)&&(n+=1)),
[n,(r-1)*_[e].length])};t.ComputeWordRelevancy=e=>t.nr(e.t,e.title),t.ComputeRecency=e=>{let t=(e-p)/18144e5
;return t<0?0:t<1?t*t*.666667:t<1.000165?.666446:0},t.ComputeRelevancy=(e,l,r)=>{let n=t.ComputeRecency(r),u=t.nr(e,l)
;return n<=u?u:(u+n)/2},t.get2ndArg=(e,t)=>t,t.$r=e=>{if(e.textSplit!=null)return void(e.t===e.u&&(e.t=""))
;e.title=t.cutTitle(e.title);let l,r=e.t,n=o.fn(r,e.u)
;n.length!==r.length?l=T(r,n[0]==="\\"?5:r.charAt(7)==="/"&&r.substr(9,3).toLowerCase()==="%3a"?10:8):(n=t.shortenUrl(r),
l=k(n)),e.t=r.length!==e.u.length?n:"",e.textSplit=v(n,l,r.length-n.length,c?m-13-Math.min(e.title.length,40):m)},
t.cutTitle=(e,l)=>{let r=e.length>m+40;return r&&(e=n.ol(e,0,m+39)),t.highlight(r?e+"\u2026":e,l||k(e))},
t.highlight=(e,t)=>{if(h)return e;if(t.length===0)return n.Qr(e);let l="",r=0;for(let u=0;u<t.length;u+=2){
let o=t[u],i=t[u+1];o>=e.length||(l+=n.Qr(e.slice(r,o)),l+="<match>",l+=n.Qr(e.slice(o,i)),l+="</match>",r=i)}
return l+n.Qr(e.slice(r))},t.shortenUrl=e=>{let t=n.Ur(e)
;return!t||t>=e.length?e:e.slice(t,e.length-+(e.endsWith("/")&&!e.endsWith("://")))};let T=(e,t)=>{let l=k(e)
;for(let e=0;e<l.length;)l[e+1]<=t?l.splice(e,2):(l[e]=Math.max(l[e]-t,0),l[e+1]-=t,e+=2);return l},k=e=>{let l=[]
;for(let r=0,n=_.length;r<n;r++){let n,u=0,o=0,i=e.split(t.mr.cr[r]),a=i.length-1,f=_[r].length;for(;u<a;u++,
o=n)n=(o+=i[u].length)+f,l.push([o,n])}if(l.length===0)return l;if(l.length===1)return l[0];l.sort(t.sortBy0);let r=l[0]
;for(let e=1,t=1,n=l.length;t<n;t++){let n=l[t];r[e]>=n[0]?r[e]<n[1]&&(r[e]=n[1]):(r.push(n[0],n[1]),e+=2)}return r}
;t.sortBy0=(e,t)=>e[0]-t[0];let v=(e,t,l,r)=>{let u="",o=e.length,i=o,a=""
;if(o<=r||(l>1?i=e.indexOf("/")+1||o:(i=e.indexOf(":"))<0?i=o:n.sn.test(e.slice(0,i+3).toLowerCase())?i=e.indexOf("/",i+4)+1||o:i+=22),
i<o&&t.length)for(let e=t.length,l=o+8;(e-=2)>-4&&l>=i;l=e<0?0:t[e]){let n=e<0?i:t[e+1],u=l-20-Math.max(n,i)
;if(u>0&&(o-=u,o<=r)){i=n+(r-o);break}}o=0;for(let l=0;o<r&&l<t.length;l+=2){let f=t[l],s=Math.max(o,i),_=f-20-s
;_>0?(r+=_,a=n.ol(e,o,s+11),u+=h?a:n.Qr(a),u+="\u2026",a=n._n(e,f-8,f),u+=h?a:n.Qr(a)):o<f&&(a=e.slice(o,f),
u+=h?a:n.Qr(a)),o=t[l+1],a=e.slice(f,o),h?u+=a:(u+="<match>",u+=n.Qr(a),u+="</match>")}
return a=e.length<=r?e.slice(o):n.ol(e,o,r-1>o?r-1:o+10),u+(h?a:n.Qr(a))+(e.length<=r?"":"\u2026")};t.en=0,
t.or=(e,n,u,o,i)=>{{t.tabsInNormal=s=l.fe!==2&&!(n&2048);let a=(s?2:0)|(e?1:0);a|=e&&n&512?4:0,b!==a&&(d=null,b=a)
;let f=i||d;if(t.kt.bl(f),f)u(o,f);else{let t=u.bind(null,o);e?(n&512?r.getCurTabs:r.le)(t):r.ge.query({},t)}}},
i.Ve.cn=()=>{d&&(b&1||!(b&2)!=(l.fe===2))&&t.kt.bl(null)},u.Tl.then(()=>{u.hl("searchEngines",null)})});