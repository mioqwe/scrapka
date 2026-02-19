"use strict"
;__filename="background/clipboard.js",define(["require","exports","./store","./utils","./exclusions","./normalize_urls"],(e,t,l,n,r,u)=>{
Object.defineProperty(t,"__esModule",{value:!0}),t.replaceUsingClipboard=t.doesNeedToSed=t.P=void 0;let o={
__proto__:null,atob:8,base64:9,base64decode:8,btoa:9,base64encode:9,decodeforcopy:1,decode:1,decodeuri:1,decodeurl:1,
decodemaybeescaped:2,decodeall:19,decodecomp:2,encode:10,encodecomp:11,encodeall:12,encodeallcomp:13,unescape:3,upper:4,
lower:5,capitalize:16,capitalizeall:17,camel:14,camelcase:14,dash:15,dashed:15,hyphen:15,normalize:6,reverse:7,
reversetext:7,break:99,stop:99,return:99,latin:18,latinize:18,latinise:18,noaccent:18,nodiacritic:18,json:20,
jsonparse:21,readablejson:25,virtual:22,virtually:22,dryrun:22,inc:23,dec:24,increase:23,decrease:24,length:26,rows:27
},f=/^[<>][\w\x80-\ufffd]{1,8}!?$|^[\w\x80-\ufffd]{1,8}!?>$/,i=null,a=0,s=(e,t)=>{let l=[],r=new Map
;for(let u of e.replace(/\\(?:\n|\\\n[^\S\n]*)/g,"").split("\n")){
u=u.trim(),f.test(u)&&(u=`s/^//,${u[0]===">"?"copy":"paste"}=${u.endsWith(">")?u.slice(0,-1):u.slice(1)}`)
;let e=/^([\w\x80-\ufffd]{1,8})([^\x00- \w\\\x7f-\uffff])/.exec(u);if(!e)continue;let i=e[2],a=r.get(i);if(!a){
let e=n.$l(i);a=new RegExp(`^((?:\\\\[^]|[^${e}\\\\])+)${e}(.*)${e}([a-z]{0,9})(?:,|$)`),r.set(i,a)}
let s=a.exec(u=u.slice(e[0].length));if(!s)continue;let p=e[1],d=s[3],$=u.slice(s[0].length),g=[],y=null,_=0,x=null
;for(let e of $?$.split(","):[]){let t=e.toLowerCase()
;if(t.startsWith("host="))y=e.slice(5);else if(/^active-?tab=/.test(t))x=e.slice(t[9]==="="?10:11);else if(t.startsWith("match"))_=Math.max(t.includes("=")&&parseInt(t.split("=")[1])||1,1);else if(t.includes("="))g.push(t);else{
let e=o[t.replace(/[_-]/g,"")]||0;e&&g.push(e)}}let m=n.pl(s[1],_?d.replace(/g/g,""):d);m&&l.push({yl:t||b(p),wl:y,jl:m,
kl:_,Nl:c(s[2],1),Ll:g,Ml:x})}return l
},c=(e,t)=>e.replace(/\\(x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[^])|\$[0$]/g,(e,l)=>l?l[0]==="x"||l[0]==="u"?(l=String.fromCharCode(parseInt(l.slice(1),16)))==="$"?l+l:l:l==="t"?"\t":l==="r"?"\r":l==="n"?"\n":t?l==="0"?"$&":l>="1"&&l<="9"?"$"+l:l:l:t&&e==="$0"?"$&":e),p=(e,t)=>{
let l=t===14,n=t===15,r=t===16,u=t===17,o=new RegExp(l||n?"(?:[-_\\t\\r\\n/+\\u2010-\\u2015\\p{Z}]|(\\p{N})|^)(\\p{Ll}|\\p{Lu}+\\p{Ll}?)|[\\t\\r\\n/+]":r||u?"(\\b|_)\\p{Ll}":"",r?"u":"ug"),f=0,i=0,a=(e,t)=>t?e.toLocaleLowerCase():e.toLocaleUpperCase()
;return e=l||n?e.replace(o,(t,l,r,u)=>{
let o="\t\r\n/+".includes(t[0]),s=o||!f++&&e.slice(i,u).toUpperCase()===e.slice(i,u).toLowerCase();return o&&(f=0,
i=u+1),
r=r?r.length>2&&r.slice(-1).toLowerCase()===r.slice(-1)&&!/^e?s\b/.test(e.substr(u+t.length-1,3))?n?a(r.slice(0,-2),!0)+"-"+a(r.slice(-2),!0):a(r[0],s)+a(r.slice(1,-2),!0)+a(r.slice(-2,-1),!1)+r.slice(-1):n?a(r,!0):a(r[0],s)+a(r.slice(1),!0):"",
(o?t[0]:(l||"")+(l||n&&!s?"-":""))+r
}):r||u?e.replace(o,e=>a(e,!1)):e,n&&(e=e.replace(/\p{Ll}(\p{Lu}+\p{Ll}?)/u,(t,l,n)=>(l=l.length>2&&l.slice(-1).toLowerCase()===l.slice(-1)&&!/^e?s\b/.test(e.substr(n+t.length-1,3))?a(l.slice(0,-2),!0)+"-"+a(l.slice(-2),!0):a(l,!0),
t[0]+"-"+l))),e
},d=e=>e.replace(/\p{Diacritic}/gu,""),$=e=>(e=JSON.stringify(e).slice(1,-1)).replace(/[<\s"$%&#()?:+,;]/g,n.$l),g=e=>(e=(e=e[0]==='"'?e.slice(1,e.endsWith('"')?-1:void 0):e).replace(/[\r\n\0]/g,e=>e<"\n"?"\\0":e>"\n"?"\\r":"\\n"),
n.tryParse(e=`"${e}"`));t.P=e=>{if(e.$sed!=null)return e.$sed;let t=e.sed,l=e.sedKeys||e.sedKey
;return t!=null||l||l===0?t&&typeof t=="object"?t instanceof Array||t.r==null&&!t.k?null:t:e.$sed={
r:typeof t=="number"?t+"":t,k:typeof l=="number"?l+"":l}:null};let b=(e,t)=>{
if(typeof e=="object")return e.zl||e.Sl?e:t?t.k=null:null;let l=null,n=0,r=typeof e=="number"?e+"":e
;r[0]==="_"&&(l=[r.slice(1)],r="");for(let e=0;e<r.length;e++){let u=r.charCodeAt(e),o=u&-33
;o>64&&o<91?n|=o===83?32772:1<<o-65:(l||(l=[]),!t&&l.includes(u)||l.push(u))}let u=n||l?{zl:n,Sl:l}:null
;return t?t.k=u:u},y=(e,t)=>{if(e.zl&t.zl)return!0;let l=t.Sl;if(!e.Sl||!l)return!1
;for(let t of e.Sl)if(l.includes(t))return!0;return!1};t.doesNeedToSed=(e,t)=>{
if(t&&(t.r===!1||t.r&&t.r!==!0))return t.r!==!1;let n=t&&t.k&&b(t.k,t)||(e?{zl:e,Sl:null}:null)
;i||n&&(i=s(l.q.clipSub,null));for(let e of n?i:[])if(y(e.yl,n))return!0;return!1}
;let _=e=>(e.startsWith(",")&&(e="s/^//"+e),
e.includes("\n")?e:e.replace(/(?<!\\) ([\w\x80-\ufffd]{1,8})(?![\x00- \w\\\x7f-\uffff])/g,"\n$1"))
;t.replaceUsingClipboard=(e,t,n)=>{let r=t.Nl;if(!r.includes("${"))return e.replace(t.jl,r)
;let u=new Map,o=new Map,f=r.replace(/\$(?:\$|\{([^}]*)})/g,(e,t)=>{if(!t)return e
;let r=t.split(/>(?=[\w\x80-\ufffd]{1,8}!?$)/);if(r.length>1&&r[0]){let e=r[0],t=r[1]
;return e=e==="0"||e==="$0"?"&":e[0]==="$"?e.slice(1):e.length===1?e:{input:"_",lastMatch:"&",lastParen:"+",
leftContext:"`",rightContext:"'"}[e]||"1",u.has(t)?u.get(t).push(e):u.set(t,[e]),"$"+e}
let o=t.replace(/^<|>$/,""),f=/\|\|=|[+\-*\/\|]=?|=/.exec(o),i=f?o.slice(0,f.index):o,s=l.Al(i)
;if(f&&(s||"||=".includes(f[0]))){let e=f[0],t=e[0],r=+o.slice(i.length+e.length)||0,u=+s
;isNaN(u||r)||(u=t==="+"?u+r:t==="-"?u-r:t==="*"?u*r:t==="/"?u/r:e==="||="?u||r:t==="|"?u|r:r,s=u+"",
e.endsWith("=")&&(a!==n?l.Cl.set(i,s):x(i,s)))}return s.replace(/\$/g,"$$$$")})
;return e=e.replace(t.jl,u.size?function(){let t=arguments,l=t.length,n=t[l-2]
;return f.replace(/\$([$1-9_&+`'])/g,(r,u)=>{if(u==="$")return"$"
;let f=u==="_"?e:u==="&"?t[0]:u==="`"?e.slice(0,n):u==="'"?e.slice(n+t[0].length):l-3<=0?"":u>="1"&&u<"9"?+u<=l-2?t[+u]:"":u==="+"?t[l-3]:t[1]
;return o.set(u,f),f})}:f),u.forEach((e,t)=>{let r=e.reduce((e,t)=>e||o.get(t)||"","");a!==n?l.Cl.set(t,r):x(t,r)}),e},
l.R=(e,u,f,m)=>{var v,h,w;let j=f&&typeof f=="object"?f.r:f;if(j===!1)return e;let k=i||(i=s(l.q.clipSub,null))
;j&&(typeof j=="number"||typeof j=="string"&&j.length<=8&&!/[^\w\x80-\ufffd]/.test(j))&&(f={r:null,k:j},j=null)
;let N=f&&typeof f=="object"&&(f.k||f.k===0)&&b(f.k,f)||(u?{zl:u,Sl:null}:null);j&&j!==!0&&(N||(k=[]),
k=s(_(j+""),N||(N={zl:1073741824,Sl:null})).concat(k));let L,M=a
;for(let u of N?k:[])if(y(u.yl,N)&&(!u.wl||(typeof u.wl=="string"&&(u.wl=r.Fl(u.wl)||-1),
u.wl!==-1&&r.Il(u.wl,e)))&&(!u.Ml||(L==null&&(L=((w=(h=(v=l.Ol.get(l.ye))===null||v===void 0?void 0:v.T)===null||h===void 0?void 0:h.s)===null||w===void 0?void 0:w.Rl)||""),
typeof u.Ml=="string"&&(u.Ml=r.Fl(u.Ml)||-1),L&&u.Ml!==-1&&r.Il(u.Ml,L)))){let r=-1,f=e;if(u.kl){let e,l=0,n=u.kl
;if(f.replace(u.jl,function(t){let u=arguments;return l=u[u.length-2],r=l+t.length,e=u.length>2+n&&u[n]||"",""}),r>=0){
let n=t.replaceUsingClipboard(f,u,M);f=n.slice(l,n.length-(f.length-r))||e||f.slice(l,r)}
}else u.jl.test(f)&&(r=u.jl.lastIndex=0,f=t.replaceUsingClipboard(f,u,M));if(r<0){
let e=(u.Ll.find(e=>typeof e=="string"&&e.startsWith("else="))||"").slice(5);if(e){if(o[e]===99)break
;/^[\w\x80-\ufffd]{1,8}$/.test(e)&&(N=b(e))}continue}let i=!1;for(let e of u.Ll)if(typeof e!="string"){if(i=e===99)break
;f=f?e===1?n.Jl(f):e===2?n.Dl(f):e===19?n.Dl(f,!0):e===3?c(f):e===4?f.toLocaleUpperCase():e===5?f.toLocaleLowerCase():e===10?n.El(f):e===11?n.Ul(f):e===12?encodeURI(f):e===13?encodeURIComponent(f):e===8?n.ql(f,1):e===9?n.ql(f):e===20?$(f):e===25?JSON.stringify(f).slice(1,-1):e===21?g(f):e===23?+f+1+"":e===24?+f-1+"":e===26?f.length+"":e===27?f.split("\n").length+"":(f=e===6||e===7||e===18?f.normalize(e===18?"NFD":"NFC"):f,
e===7?Array.from(f).reverse().join(""):e===18?d(f):e===14||e===15||e===16||e===17?p(f,e):f):""}else{
let t=e.split("=")[0],n=e.slice(t.length+1)
;t==="copy"?x(n,f):t==="paste"?f=l.Al(n):t==="keyword"&&m?m.S=n:t==="act"&&m?m.Pl=n!=="false":t!=="sys-clip"&&t!=="sysclip"||!m||(m.Zl=/^-1$|^false$|^non?e?$|null$/i.test(t))
}if(!u.Ll.includes(22)&&(e=f,i))break}return n.Bl(),e};let x=(e,t)=>{l.Cl.set(e,t),e.endsWith("!")||(a&&clearTimeout(a),
a=setTimeout(()=>{let e=l.Cl.keys();for(let t of e)t.endsWith("!")||l.Cl.delete(t);a=0},2e4))};l.Al=e=>{
let t=l.Cl.get(e);return(t!==null&&t!==void 0?t:l.Cl.get(e.endsWith("!")?e.slice(0,-1):e+"!"))||""};let m,v=()=>{
let e=globalThis.document.createElement("textarea");return e.style.position="absolute",e.style.left="-99px",
e.style.width="0",e.contentEditable="true",e},h=(e,t,r,o,f,i)=>{var a;let s=o,c=e=>{let t=l.Gl.map.get(o)
;return t?u.Hl(e.trim().split(n.F),t.Rl,t.r):e},p=(r&&typeof r=="object"?r.r:r)!==!1
;if(typeof e!="string")return e=e.map(e=>{var t;let n={},u=l.R(e,4,r,n);return(o=(t=n.S)!==null&&t!==void 0?t:s)?c(u):u
}),
e=typeof t=="string"&&t.startsWith("json")?JSON.stringify(e,null,+t.slice(4)||2):e.join(t!==!!t&&t||"\n")+(e.length>1&&(!t||t===!!t)?"\n":""),
p&&(e=l.R(e,4096,null,i)),e;let d=(e=e.replace(/\xa0/g," ").replace(/\r\n?/g,"\n")).charCodeAt(e.length-1)
;return f||!p||d!==32&&d!==9||((d=e.lastIndexOf("\n")+1)?e=e.slice(0,d)+e.slice(d).trimRight():(d=e.charCodeAt(0))!==32&&d!==9&&(e=e.trimRight())),
e=l.R(e,4,r,i),(o=(a=i.S)!==null&&a!==void 0?a:s)?c(e):e},w=(e,t,n)=>(e&&(e=e.replace(/\xa0/g," "),e=l.R(e,32768,t,n)),
e),j=(e,t)=>{let l=e&&(typeof e=="string"?e:typeof e=="object"&&(e.r||e.k))
;return l&&typeof l=="string"&&(l[0]===t||l.endsWith(">"))&&f.test(l)?l[0]===t?l.slice(1):l.slice(0,-1):null}
;l.Kl=(e,t,n,r,u)=>{let o=j(n,">"),f={};if(o&&(n=null),e=h(e,t,n,r,u,f),o)return x(o,e),e;if(!e||f.Zl)return e
;if(m||(m=navigator.clipboard))return m.writeText(e).catch(l.r).then(()=>e);{let t=globalThis.document,l=v()
;return l.value=e,t.body.appendChild(l),l.select(),t.execCommand("copy"),l.remove(),l.value="",e}},l.Ql=(e,t,r)=>{
let u=j(e,"<");if(u)return w(l.Al(u),null,r)
;if(m||(m=navigator.clipboard))return m.readText().catch(()=>null).then(t=>typeof t=="string"?t&&w(t.slice(0,20971520),e,r):null)
;let o=globalThis.document,f=v();f.maxLength=t||102400,o.body.appendChild(f),f.focus(),o.execCommand("paste")
;let i=f.value.slice(0,t||102400);return f.value="",f.remove(),f.removeAttribute("maxlength"),
!t&&i.length>=81920&&(i.slice(0,5).toLowerCase()==="data:"||n.Vl(i))?l.Ql(e,20971520):w(i,e,r)},l.dl.clipSub=()=>{i=null
}});