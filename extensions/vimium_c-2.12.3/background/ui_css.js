"use strict"
;__filename="background/ui_css.js",define(["require","exports","./store","./utils","./browser","./settings","./ports"],function(e,t,l,n,o,r,i){
let s;Object.defineProperty(t,"__esModule",{value:!0}),t.De=t.tu=t.mergeCSS=t.eu=void 0;let a=!0,f=a?-1:0;t.eu=(e,o)=>{
if(e===-1)return t.mergeCSS(o,-1);e===2&&(l.na=null);{let t;if(e===0&&(t=l.iu.get("findCSS")))return l.Gn=c(t),
l.bu=o.slice(s.length),void(l.qe.c=l.iu.get("omniCSS")||"")}n.Wn("vimium-c.css").then(n=>{
let o=s.slice(s.indexOf(",")+1).includes("a"),i=u(n),a=!1,f=!1
;if(matchMedia("(forced-colors)").matches||(a=l.iu.get("isHC_f")==="1"),f=l.Bo!==a,l.Bo=a,n=i.ui,o){
let e=n.indexOf("all:"),t=n.lastIndexOf("{",e),l=n.indexOf(";",e)
;n=n.slice(0,t+1)+n.slice(e,l+1)+n.slice(n.indexOf("\n",l)+1||n.length)}else n=n.replace(/all:\s?\w+;?/,"");{
let e=n.indexOf("display:"),t=n.lastIndexOf("{",e);n=n.slice(0,t+1)+n.slice(e)}{
let e=(n=n.replace(".LH{",".LH{box-sizing:border-box;")).indexOf(".LH{")+4,t=n.indexOf("}",e),l=n.slice(e,t).replace("0.5px","1px")
;n=n.slice(0,e)+l+n.slice(t)}a&&(n=n.replace(/\n\.D[^@]+/,"").replace("@media(forced-colors:active){","").slice(0,-1)),
n=n.replace(/\n/g,""),r.lu("innerCSS",s+(n+=".DLG>.Omnibar{position:absolute}"));let c=i.find
;r.lu("findCSS",c.length+"\n"+c),f&&l.ll===6&&r.hl("vomnibarOptions"),t.mergeCSS(l.q.userDefinedCss,e)})};let u=e=>{
let t=e?e.split(/^\/\*\s?#!?([A-Za-z:]+)\s?\*\//m):[""],l={ui:t[0].trim()};for(let e=1;e<t.length;e+=2){
let n=t[e].toLowerCase();l[n]=(l[n]||"")+t[e+1].trim()}return l},c=e=>{
let t=(e=e.slice(e.indexOf("\n")+1)).indexOf("\n")+1,l=e.indexOf("\n",t);return{c:e.slice(0,t-1).replace("  ","\n"),
s:e.slice(t,l).replace("  ","\n"),i:e.slice(l+1)}};t.mergeCSS=(e,o)=>{let a=l.iu.get("innerCSS"),f=a.indexOf("\n")
;a=f>0?a.slice(0,f):a
;let d=u(e),m=d.ui?a+"\n"+d.ui:a,v=d["find:host"],p=d["find:selection"],S=d.find,b=d.omni,_="findCSS",C="omniCSS"
;a=l.iu.get(_),f=a.indexOf("\n"),a=a.slice(0,f+1+ +a.slice(0,f));let g=a.indexOf("\n",f+1),y=a.slice(0,g).indexOf("  ")
;p=p?"  "+p.replace(/\n/g," "):"",(y>0?a.slice(y,g)!==p:p)&&(y=y>0?y:g,a=a.slice(f+1,y)+p+a.slice(g),g=y-(f+1)+p.length,
f=-1);let j=a.indexOf("\n",g+1),h=a.slice(0,j).indexOf("  ",g);if(v=v?"  "+v.replace(/\n/g," "):"",
(h>0?a.slice(h,j)!==v:v)&&(a=a.slice(f+1,h>0?h:j)+v+a.slice(j),f=-1),f<0&&(a=a.length+"\n"+a),S=S?a+"\n"+S:a,
a=(l.iu.get(C)||"").split("\n",1)[0],b=b?a+"\n"+b:a,o===-1)return{ui:m.slice(s.length),find:c(S),omni:b}
;r.lu("innerCSS",m),r.lu(_,S),r.lu(C,b||null),t.eu(0,m),o!==0&&o!==1&&(n.nextConfUpdate(0),i.p(16384,e=>{
for(let t of e.E){let e=t.s.c;e&8&&(t.postMessage({N:11,H:l.bu,f:e&32?l.Gn:void 0}),t.postMessage({N:6,d:{},v:l.du}))}
}),r.ze({c:l.qe.c}))};let d=matchMedia;t.tu={Qi:[2,1],Wi(e){let l=t.tu.Qi[e];return typeof l=="object"?l.matches:null},
Xi(e,l){let n=l===2,o=t.tu.Qi,r=o[e],i=e?"prefers-color-scheme":"prefers-reduced-motion"
;if(r===1&&n&&(o[e]=r=d(`(${i})`).matches?2:0),n&&r===2){let l=d(`(${i}: ${e?"dark":"reduce"})`);l.onchange=t.tu.Yi,
o[e]=l,f||(f=setInterval(t.tu.nu,6e4))}else n||typeof r!="object"||(r.onchange=null,o[e]=2,
f>0&&o.every(e=>typeof e!="object")&&(clearInterval(f),f=0))},Jr(e,n,o){let r=t.tu.Qi[e]
;a||n!=null||typeof r!="object"||(r.onchange=null,r=d(r.media),r.onchange=t.tu.Yi,t.tu.Qi[e]=r),
t.De(e,typeof r=="object"?r.matches:o!=null?o:(e?l.q.autoDarkMode:l.q.autoReduceMotion)===1,n?0:1)},nu(){
f>0&&performance.now()-l.Po>27e4&&(clearInterval(f),f=0)
;for(let e=t.tu.Qi,l=e.length;0<=--l;)typeof e[l]=="object"&&t.tu.Jr(l)},Lo(){f||(f=-2,setTimeout(()=>{t.tu.nu(),
f=setInterval(t.tu.nu,6e4)},0))},ns:0,Yi(){a||(f>0&&clearInterval(f),f=-1,a=!0);let e=t.tu.Qi.indexOf(this)
;e>=0&&t.tu.Jr(e)}},t.De=(e,t,o,s)=>{var a;let f=e?"d":"m",u=r.B(f,t),c=l.qe.t;{
let l=e?" dark ":" less-motion ",o=c&&` ${c} `,r=o.includes(l);c=t?r?c:c+l:o.replace(l," "),c=c.trim().replace(n.F," ")}
if(o!==9)l.A[f]===u&&o!==2||(l.A[f]=u,o&&r.Nn({N:6,d:[f]})),c===l.qe.t&&o!==2||(l.qe.t=c,o&&r.ze({t:c}));else{
for(let e of((a=i.En(s))===null||a===void 0?void 0:a.E)||[])e.postMessage({N:6,d:{[f]:u},v:l.du});s.postMessage({N:47,
d:{t:c},v:l.ou})}},l.dl.autoDarkMode=l.dl.autoReduceMotion=(e,l)=>{let n=l.length>12?0:1
;t.tu.Xi(n,e=typeof e=="boolean"?e?2:0:e),t.tu.Jr(n,0,e===2?null:e>0)},r.Tl.then(()=>{s=l.Q.mo+","+l.es+"a;",
l.bu=l.iu.get("innerCSS")||"",l.bu&&!l.bu.startsWith(s)?(l.iu.set("vomnibarPage_f",""),t.eu(1)):(t.eu(0,l.bu),
l.tl&&l.tl.then(e=>e&&t.eu(1))),l.dl.userDefinedCss=t.mergeCSS})});