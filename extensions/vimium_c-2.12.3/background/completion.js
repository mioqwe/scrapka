"use strict"
;__filename="background/completion.js",define(["require","exports","./store","./browser","./utils","./normalize_urls","./parse_urls","./i18n","./completion_utils","./browsing_data_manager"],function(e,t,l,r,i,n,f,u,o,a){
Object.defineProperty(t,"__esModule",{value:!0})
;let s=0,_=!1,d=!1,c=0,m=0,h=0,p=0,w=0,v=[""],b="",g="",k="",$="",y=0,M=!1,S=!1,x="",T="",R=0,z=!0,A=function(e,t,l,r,i,n){
this.e=e,this.u=t,this.t=l,this.title=r,this.r=i(this,n),this.visit=0},j={Wl(e){
if(l.ue.d===3&&!(R&6))return Promise.resolve(u.Xl("bookmarksRevoked",[])).then(t=>{
let r=new A("bookm",l.Q.Ze+"#optionalPermissions","",t,o.get2ndArg,e?8:1.9);r.textSplit="\u2026",Z.Yl([r],1)}),!0},
er(e,t){if(v.length===0){if(t||l.ue.d!==0)return void(j.Wl(t==0)||Z.Yl([],1));a.ot.ht=()=>{e.o||j.Wl()||Z.Yl([],1)}
}else if(R&1)l.ue.d>=2?j.tr():a.ot.ht=()=>{e.o||j.tr()};else if(Z.Yl([],1),t)return;l.ue.d===0&&a.ot.xt()},tr(){var e
;let t,r=v.some(e=>e.charCodeAt(0)===47),i=(e=o.kt.lr)===null||e===void 0?void 0:e.re,n=o.kt.rr?[]:null,f=i&&i[0]===r?i[1]:l.ue.re,u=f.length,s=[]
;if(j.Wl())return;for(let e=0;e<u;e++){let t=f[e];if(o.ir(t.t,r?t.wt:t.Dt)&&(z||t.Lt)){if(n!==null&&n.push(t),
T&&t.u.length<T.length+2&&T===(t.u.endsWith("/")?t.u.slice(0,-1):t.u))continue;s.push([-o.nr(t.t,t.Dt),e])}}
n&&(o.kt.rr.re=[r,n]),t=s.length,p+=t,t?(s.sort(o.sortBy0),w>0&&!(R&6)?(s=s.slice(w,w+m),
w=0):t>w+m&&(s.length=w+m)):R^=1;let _=[],d=c&64?-.666446:0;for(let[e,t]of s){let i=f[t];d&&(e=e<d?e:(e+d)/2)
;let n=new A("bookm",i.u,i.t,r?i.wt:i.Dt,o.get2ndArg,-e),u=c&32&&a.nt.jt?a.nt.Ut(i.u):-1;n.visit=u<0?0:l.zt.Bt[u].Ft,
_.push(n),i.Qe!==null&&(n.u=i.Qe,n.title=o.cutTitle(r?i.wt:i.Dt),n.textSplit="javascript: \u2026",n.t=i.Rt)}Z.Yl(_,1)}
},F={er(e,t){if(!v.length&&c&1024||!(R&2))return Z.Yl([],2);let r=v.length>0;if(l.zt.Bt){if(r)return void F.tr()
;(l.zt.Nt>10||l.zt.Qt>0)&&a.nt.Xt()}else{let t=r?()=>{e.o||F.tr()}:null
;if(r&&(d||a.nt.St))a.nt.St>0&&clearTimeout(a.nt.St),a.nt.St=0,a.nt.$t(t);else if(a.nt.St||(a.nt.St=setTimeout(()=>{
a.nt.St=0,a.nt.$t(t)},r?200:150)),r){let e=Z.fr,t=e.length,l=t>0;Z.ur(l&&e[0].t==="search"?[e[0]]:[],_&&l,0,0,t,g,y)}
if(r)return}t===0?o.or(S,c,F.ar,e):a.it(w+m,z,F.sr.bind(null,e))},tr(){var e
;let t=v.length===1?v[0]:"",r=t?t[0]==="."?/^\.[\da-zA-Z]+$/.test(t)?2:0:(n._r(t,null,-2),
n.dr<=2?n.dr>0?2:1:0):0,i=r>1?o.mr.cr[0]:null,f=o.kt.rr?[]:null,u=[-1.1,-1.1],s=[],_=o.ir,d=r>0&&t.includes("%")&&!/[^\x21-\x7e]|%[^A-F\da-f]/.test(t),c=m+w,h=-1.1,b=0,g=0,k=0
;for(x&&c++,g=c;--g;)u.push(-1.1,-1.1);c=c*2-2;let $=((e=o.kt.lr)===null||e===void 0?void 0:e.Bt)||l.zt.Bt
;for(let e=$.length;b<e;b++){let e=$[b]
;if((r===0?_(e.t,e.Dt):r===1?(d?e.u:e.t).startsWith(t):i.test(d?e.u:e.t))&&(z||e.Lt)){f!==null&&f.push(e),k++
;let t=r?o.ComputeRecency(e.Ft)||1e-16*Math.max(0,e.Ft):o.ComputeRelevancy(e.t,e.Dt,e.Ft);if(t>h){
for(g=c-2;0<=g&&u[g]<t;g-=2)u[g+2]=u[g],u[g+3]=u[g+1];u[g+2]=t,u[g+3]=b,h=u[c]}}}for(f&&(o.kt.rr.Bt=f),p+=k,k||(R^=2),
R&5?b=0:(b=w*2,w=0);b<=c;b+=2){let e=u[b];if(e<=0)break;let t=$[u[b+1]];if(t.u!==x){
let l=new A("history",t.u,d?t.u:t.t,t.Dt,o.get2ndArg,e);l.visit=t.Ft,s.push(l)}}a.et.Ot(),Z.Yl(s,2)},ar(e,t){
if(e.o)return;let l=new Set;for(let e of t)e.incognito&&o.tabsInNormal||l.add(r.getTabUrl(e));F.hr([],e,l,w,l.size)},
sr(e,t){if(e.o)return;let l=[],r=new Set,i=new Set,n=-w;t.some(e=>{let t,f=e.u;return t=f+"\n"+e.Dt,
!r.has(t)&&(r.add(t),i.add(f),++n>0&&l.push(e),l.length>=m)})?F.pr(l):F.hr(l,e,i,-n,0)},hr(e,t,i,n,f){
(r.n.history?r.n.history.search:(e,t)=>(t([],-1),1))({text:"",maxResults:(w+m)*(z?1:2)+f},r=>{
for(let e of r)e.url.length>2e3&&(e.url=a.nt.Ht(e.url,e));if(l.zt.Bt&&a.nt.ul(r),t.o)return
;r=r.filter(e=>!i.has(e.url)&&(z||a.lt(e.url,e.title||"")!==0)),
n<0?r.length=Math.min(r.length,m-e.length):n>0&&(r=r.slice(n,n+m));let f=r.map(e=>({u:e.url,Dt:e.title||"",
fl:e.lastVisitTime,sl:null,al:null}));n<0&&(f=e.concat(f)),F.pr(f)})},pr(e){e.forEach((e,t,l)=>{
let r=e.u,i=new A("history",r,a.et.Pt(r,r),e.Dt||"",o.get2ndArg,(99-t)/100),n=e.sl;i.visit=e.fl,n&&(i.s=n,
i.label='<span class="undo">&#8630;</span>'+e.al),l[t]=i}),w=0,a.et.Ot(),Z.Yl(e,2)}},P={er(e,t){
if(v.length!==1||!(R&16)||v[0].lastIndexOf("/",v[0].length-2)>=0)return Z.Yl([],16);if(a.nt.Gt){
if(!l.zt.Bt)return t>0?Z.Yl([],16):a.nt.$t(()=>{e.o||P.er(e,0)});a.nt.Gt(l.zt.Bt)}return P.tr()},tr(){
let e,t=l.zt.Zt,r=o.wr,n=R===16&&_?[]:null,f=v[0].replace("/","").toLowerCase(),u=f.length===v[0].length,a=[],s="",d=-1.1
;o.vr(3);for(let l of t.keys())if((u?l.includes(f):l.endsWith(f))&&(e=t.get(l),z||e.il>0)){
let t=o.ComputeRelevancy(l,"",e.Ft);n?n.push({r:t,d:l,m:e}):t>d&&(d=t,s=l)}let c=s.length===f.length;if(s&&!c){
if(!s.startsWith("www.")&&!s.startsWith(f)){let l=s.slice(s.indexOf(".")+1);if(l.includes(f)){let r;l="www."+l,
(r=t.get(l))?(z||r.il>0)&&(s=l,e=r):(r=t.get(l="m."+l))&&(z||r.il>0)&&(z||r.il>0)&&(s=l,e=r)}}
let l=s.startsWith(f)?0:s.startsWith("www."+f)?4:-1;if(l>=0){let[e,t]=i.br(s),r=e.length-1
;t>1&&(l=s.length-l-f.length-e[r].length-1,(!l||t===3&&l===e[r-1].length+1)&&(c=!0))}}if(s)p++,_=!w&&c||_,
a=P.gr(s,e,0,u);else if(n){n.sort(P.kr),p=n.length,p>w+m&&(n.length=w+m);for(let e of n)a.push(P.gr(e.d,e.m,e.r,u)[0])}
o.vr(r),Z.Yl(a,16)},gr(e,t,r,n){let f=t.rl>0,u="";if(l.ue.d===2){
let t=new RegExp(`^https?://${i.cl(e)}/?$`),r=l.ue.re.filter(e=>t.test(e.u)&&(z||e.Lt));if(r.length>0){
let e=r.filter(e=>e.u[4]==="s");f=e.length>0,r=f?e:r;let t=r[0].u;T=t.endsWith("/")?t.slice(0,-1):t,u=r[0].Dt}}
let s=(f?"https://":"http://")+e+"/";if(!r&&(x=s,w>0))return w--,[]
;let _=new A("domain",s,n?e:e+"/","",o.get2ndArg,r||2),d=a.nt.jt?a.nt.Ut(s):-1,c=d>0?l.zt.Bt[d]:null;return o.$r(_),
c&&(z||c.Lt)&&(_.visit=c.Ft,u=u||c.Dt),_.title=o.cutTitle(u,[]),--m,[_]},kr(e,t){return t.r-e.r}
},B="audible audio muted unmuted active discarded incognito normal pinned visited new grouped ungrouped".split(" "),E={
er(e,t){!(R&4)||t&&(!v.length||c&256)?Z.Yl([],4):o.or(S,c,E.tr,e)},tr(e,t){if(e.o)return
;let n,f=l.ye,u=v.length<=0,s=R&3,_=!!(c&8)&&S&&u,d=[],b=0;if(_&&!(c&128)&&t.length>w&&t.length>h){let e=new Map
;for(let l of t)e.set(l.id,l);{n=e.get(f)
;let l=n?n.openerTabId:0,r=l?e.get(l):null,i=r?t.indexOf(r):n?t.indexOf(n)-1:0,u=r?0:h/2|0
;for(;1<--u&&i>0&&t[i-1].openerTabId===l;i--);t=i>0?t.slice(i).concat(t.slice(0,i)):t}}
let g=[],k=[],$=(v.join("\n").match(/^:[a-z]+$/gm)||[]).reduce((e,t)=>{t=t.slice(1)
;for(let l=0;l<B.length;l++)B[l].startsWith(t)&&(e|=1<<l);return e},0);n=!n&&$?t.filter(e=>e.id===f)[0]:n
;let y=$&&n?r.getGroupId(n):null;for(let e of t){if(!S&&o.tabsInNormal&&e.incognito)continue
;let t=r.getTabUrl(e),i=e.text||(e.text=a.et.Pt(t,e.incognito?"":t)),n=e.title;if($&&(v.length===1&&(i=n=""),
e.audible&&($&1&&(n+=" :audible"),
$&2&&(n+=" :audio"),$&12&&(r.isTabMuted(e)?$&4&&(n+=" :muted"):$&8&&(n+=" :unmuted"))),
$&16&&e.active&&!S&&(n+=":active"),
$&32&&e.discarded&&(n+=" :discarded"),$&192&&(e.incognito?$&64&&(n+=" :incognito"):$&128&&(n+=" :normal")),
$&256&&e.pinned&&(n+=" :pinned"),$&1536&&(l.Ae.has(e.id)?$&512&&(n+=" :visited"):$&1024&&(n+=" :new")),
$&6144&&(y&&r.getGroupId(e)===y?$&2048&&(n+=" :grouped"):$&4096&&(n+=" :ungrouped"))),u||o.ir(i,n)){let t=e.windowId
;!S&&k.lastIndexOf(t)<0&&k.push(t),g.push(e)}}s&&g.length===1&&g[0].id===f&&(g.length=0);let M=g.length;if(p+=M,
M||(R^=4),w>=M&&!s)return w=0,Z.Yl(d,4);k.sort((e,t)=>e-t);let x=_?new Map:null,T=l.xe;if(_)for(let e of g){
let t=e.openerTabId,l=t&&x.get(t);x.set(e.id,l?l<5?l+1:5:1)}let z=c&32?i.yr():0,j=u?_?(e,t)=>1/t:(b=performance.now(),
(e,t)=>l.Ae.get(t)||(c&4?b+t:-t)):o.ComputeWordRelevancy;for(let e=0;e<g.length;){
let t=g[e++],i=t.id,n=_?x.get(i):1,a=r.getTabUrl(t),s=l.Ae.get(i),c=new A("tab",a,t.text,t.title,j,_?e:i),m=t.windowId!==T?k.indexOf(t.windowId)+1+":":"",h=t.index+1+"",p=""
;t.active?(_||f!==i&&t.windowId!==T||(c.r=u||!/^(?!:[a-z]+)/m.test(v.join("\n"))?1<<31:0),h=`(${h})`):s||(h=`**${h}**`),
!o.tabsInNormal&&t.incognito&&(p+="*"),
(t.discarded||t.hidden)&&(p+="~"),t.audible&&(p+=r.isTabMuted(t)?"\u266a":"\u266c"),c.visit=s?s+z:t.lastAccessed||0,
c.s=i,c.label=`#${m}${h}${p&&" "+p}`,c.favIcon=t.favIconUrl,n>1&&(c.level=" level-"+n),d.push(c)}d.sort(Z.Mr)
;let F=d.length,P=w+m-F;if(s||P<0||!u){w>0&&!s?(d=d.slice(w,w+m),F=m,w=0):F>w+m&&(d.length=F=w+m)
;for(let e=s?0:F,t=Math.min(F,28);e<t;e++)d[e].r*=8/(e/4+1);!w&&Z.fr&&Z.Sr(d)}else if(w>0){
let e=d.slice(0,P).map(e=>Object.assign({},e));for(let t of e)t.label+="[r]";d=d.slice(w).concat(e),F=d.length
;for(let e=0;e<F;e++)d[e].r=F-e;w=0}a.et.Ot(),Z.Yl(d,4)}},O={xr:0,er:l.r,Tr(e,t,r){if(!(R&8))return Z.Yl([],8)
;let i,f,u,_,d,c=v,m=c.length>0?c[0]:"";if(c.length===0);else{
if(!t&&m[0]==="\\"&&m[1]!=="\\")return m.length>1?c[0]=m.slice(1):c.shift(),m=k.slice(1).trimLeft(),
z=!a.st||z||a.tt._l([m]),w?(w--,Z.Yl([],8)):(i=O.Rr(m,r),Z.Yl([i],8));f=l.Gl.map.get(m)}if(t){if(!f)return!0}else{
if(!f&&!m.startsWith("vimium://"))return s===0&&c.length<=1&&(s=c.length?o.Ar.zr()?-2:0:-1),Z.Yl([],8);f&&$&&(c.push($),
w=0,k+=" "+$,$="",y&=-5),c.length>1||(s=-1)}if(c.length>1&&f?(c.shift(),k.length>200&&(c=k.split(" "),
c.shift())):f&&(c=[]),z=!a.st||z&&a.tt._l([m]),f){let e=n.Hl(c,f.Rl,f.r,[]);d=u=e.Rl,_=e.jr}else d=u=c.join(" "),_=[]
;if(m==="~");else if(u.startsWith("vimium://")){let t=l.Fr(u.slice(9),1,!0),i=O.Pr.bind(O,c,u,d,r||f,_)
;if(t instanceof Promise)return t.then(O.Br.bind(O,e,r||f,i));if(t instanceof Array)return O.Br(e,r||f,i,t);t&&(u=d=t,
_=[])}else u=n._r(u,null,-2);return i=O.Pr(c,u,d,r||f,_),Z.Yl([i],8)},Br(e,t,l,r){let n;if(!e.o){switch(r[1]){case 5:
case 7:let u=r[0];if(s=r[1]===7&&v.length>1?s:-1,!u)break;return k="\\ "+u,$="",
v=(k.length<201?k:i.ol(k,0,200).trim()).split(" "),v.length>1&&(v[1]=f.Er(v[1],v.length>2)),o.Or(v),O.Tr(e,null,t)
;case 2:let a=r[0];v=a.length>1||a.length===1&&a[0]?a:v,o.Or(v);let _=O.xr++;if(_>12)break;let d=O.Tr(e,!0,t)
;if(_<=0&&(O.xr=0),d!==!0)return d;break;case 0:r[0]&&(n=O.Zr(l(),r))}Z.Yl(n||[l()],8)}},Pr(e,t,l,r,n){
let f=new A("search",t,l,(r?r.Dr+": ":"")+e.join(" "),o.get2ndArg,9);return e.length>0&&r?(f.t=O.Ir(l,n),
f.title=o.cutTitle(f.title,[r.Dr.length+2,f.title.length]),f.textSplit=o.highlight(f.t,n)):(f.t=i.Ye(o.shortenUrl(l)),
f.title=d?"":o.cutTitle(f.title,[]),f.textSplit=d?f.t:i.Qr(f.t)),f.v="",f.p=d&&r?r.Dr:"",f},Zr(e,t){
let l=t[0],r="vimium://copy "+l,n=new A("math",e.u,l,l,o.get2ndArg,8);return e.u=r,
d||(n.title=`<match style="text-decoration: none;">${o.cutTitle(n.title,[])}<match>`),n.textSplit=d?t[2]:i.Qr(t[2]),
[e,n]},Ir(e,t){let l,r,n,f=t.length;if(r=i.Ye(t.length>0?e.slice(0,t[0]):e),(l=i.Ur(r))&&(r=r.slice(l),l=0),
t.length<=0)return r;for(n=t[0];t[l]=r.length,f>++l;)r+=i.Ye(e.slice(n,t[l])),n=t[l]
;return n<e.length&&(r+=i.Ye(e.slice(n))),r},Rr(e,t){
let l=n._r(e,null,-2),r=n.dr===4,f=new A("search",l,i.Ye(o.shortenUrl(l)),"",o.get2ndArg,9)
;return f.title=r?(t&&t.Dr||"~")+": "+o.cutTitle(e,[0,e.length]):o.cutTitle(e,[]),f.textSplit=d?f.t:i.Qr(f.t),f.v="",
f.p=d&&r?"~":"",f.n=1,f}},Z={qr:0,Cr:0,fr:null,Gr:null,ur:null,er(e){Z.Gr&&(Z.Gr.o=!0);let t=Z.Gr={o:!1};Z.Cr=0,R&=e[0]
;let l=1,r=R&-9?e.length:2;if(Z.fr=[],Z.qr=r-1,s=w&&-1,e[1]===O){let i=O.Tr(t);if(r<3)return
;if(i)return void i.then(Z.Hr.bind(null,e,t,l));l=2}Z.Hr(e,t,l)},Hr(e,t,l){for(o.Wr(Date.now()-18144e5),
o.vr(3*v.length||.01),
v.indexOf("__proto__")>=0&&(v=v.join(" ").replace(/(^| )__proto__(?=$| )/g," __proto_").trimLeft().split(" "),o.Or(v)),
o.kt.Jr(z),v.sort(Z.Kr),o.mr.Lr();l<e.length;l++)e[l].er(t,l-1)},Kr:(e,t)=>t.length-e.length||(e<t?-1:e===t?0:1),Sr(e){
let t=new Map(e.map(e=>[e.u,e]));Z.fr=Z.fr.filter(e=>{let l=e.e==="search"?void 0:t.get(e.u)
;return l&&l.r<e.r&&(l.r=e.r),!l})},Yl(e,t){let l=Z.fr,r=e.length;if(r>0&&(Z.Cr|=t,Z.fr=l.length===0?e:l.concat(e),
t===8&&(_=!0,m-=r,p+=r)),0==--Z.qr)return l=null,Z.Nr()},Nr(){let e=Z.fr;if(Z.fr=null,e.sort(Z.Mr),
w>0?(e=e.slice(w,w+h),w=0):e.length>h&&(e.length=h),o.mr.Vr=o.mr.Xr=null,v.length>0){
let e=v[0],t=o.shortenUrl(e),l=e.length!==t.length;(l||e.endsWith("/")&&e.length>1&&!e.endsWith("//"))&&(l&&(v[0]=t),
o.mr.Yr(v[0],l))}e.forEach(o.$r)
;let t=e.length>0,l=_&&t,r=p,i=b===":",n=s<0?s!==-2||t||i?0:3:z?v.length<=0||M?0:t?2:i?0:1:0,f=g,u=y,a=n!==2||i?0:Z.Cr,d=Z.ur
;return Z.ei(),d(e,l,n,a,r,f,u)},ei(){Z.Gr=Z.ur=null,o.ti(),o.setupQueryTerms(v=[],d=!1,0),b=g=k=$=x=T="",o.mr.cr=null,
o.vr(3),o.Wr(0),s=Z.Cr=c=m=h=p=0,R=0,y=0,_=!1,M=S=!1,z=!0},li(){let e,t,l=k;if(w=0,$="",
!(l.length===0||(e=(l=l.slice(-5)).lastIndexOf("+"))<0||e!==0&&l.charCodeAt(e-1)!==32)){if(l=l.slice(e),
e=k.length-l.length,(t=parseInt(l,10))>=0&&"+"+t===l&&t<=(e>0?100:200))w=t;else if(l!=="+")return;k=k.slice(0,e&&e-1),
$=l,y|=4}},Mr:(e,t)=>t.r-e.r},D={__proto__:null,bookm:[1,j],domain:[16,P],history:[2,F],omni:[63,O,P,F,j,E],
search:[8,O],tab:[4,E]};l.gl.er=(e,t,r)=>{
if(e=e.trim(),M=!1,e&&l.G>1&&(/^[A-Za-z]:[\\/]|^\\\\([\w$%.-]+([\\/]|$))?/.test(e)||e.slice(0,5).toLowerCase()==="file:")){
":/\\".includes(e[1])&&(e=(e[1]===":"?"":"//")+e.slice(e[1]===":"?0:2).replace(/\\+/g,"/"))
;let t=(e=e.replace(/\\/g,"/").toLowerCase()).indexOf("//")+2;if(t>=2&&t<e.length&&e[t]!=="/"){
let l=e.slice(t).split("/",1)[0];if(l.includes("%")){let r=i.Ye(l);M=r===l,e=e.slice(0,t)+r+e.slice(t+l.length)}}}
b=k=e&&e.replace(i.F," "),g="",y=0,Z.li(),v=(e=k)?(e=e.length<201?e:i.ol(e,0,200).trimRight()).split(" "):[]
;let n=t.c|0||128
;n&&(n-=e.replace(/[\u2e80-\u2eff\u2f00-\u2fdf\u3000-\u303f\u31c0-\u31ef\u3200-\u9fbf\uf900-\ufaff\ufe30-\ufe4f\uff00-\uffef]/g,"aa").length-e.length),
n=Math.max(50,Math.min(n,320)),c=t.f,d=!!(c&1),h=m=Math.min(Math.max(3,t.r|0||10),25),p=0,Z.ur=r
;let u=t.o==="bomni"?(c|=64,D.omni):D[t.o],s=v.length>=1?v[0]:"",w=t.t||63,$=t.e||63;if(u===D.tab&&(S=!!(c&2)),
s.length===2&&s[0]===":"){s=s[1]
;let e=s==="b"?D.bookm:s==="h"?D.history:s==="t"||s==="T"||s==="w"||s==="W"?(S=s!=="t"&&s!=="T",c|=s>"Z"?512:0,
c|=s==="T"?2048:0,
D.tab):s==="B"?(c|=64,D.omni):s==="H"?(c|=256,D.omni):s==="d"?D.domain:s==="s"?D.search:s==="o"?D.omni:null;e&&(u=e,
g=v.shift(),y|=1,k=k.slice(3),$=u[0])}if(v.length>0&&((s=v[0]).includes("\u3002")||s.includes("\uff1a"))&&!M){
M=v.length<2;let e=f.Er(s,M)
;e!==s?(v[0]=e,k=e+k.slice(s.length),M=M&&!/^[.\u3002]\w+([.\u3002]\w*)?$/.test(s)):M=M&&s.includes("\uff1a")&&!/\uff1a([^\/\d]|\d[^\0-\xff])/.test(s)
}z=!a.st||!(c&4096)&&a.tt._l(v),R=w&$,_=u.length===2,k&&(y|=2),o.setupQueryTerms(v,d,n),Z.er(u)}});