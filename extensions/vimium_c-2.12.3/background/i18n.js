"use strict";__filename="background/i18n.js",define(["require","exports","./store","./utils","./browser"],(e,r,n,t,l)=>{
let i;Object.defineProperty(r,"__esModule",{value:!0}),r.ri=r.getI18nJson=r.ui=r.si=r.Xl=r.D=r.Fe=r.ai=r.fi=void 0,
r.fi=1;let u=0;r.ai=[],r.Fe=e=>l.n.i18n.getMessage(e),r.D=(e,n)=>{if(u===1){let r=i.get(e)
;return n!=null&&r?r.replace(/\$\d/g,e=>n[+e[1]-1]):r||""}return u||(u=r.getI18nJson("background").then(e=>{i=e,u=1})),
u.then(r.D.bind(null,e,n))},r.Xl=(e,n)=>{if(n.forEach((e,n,t)=>{if(e instanceof Array){let l=e[0]
;t[n]=u===1?i.get(l)||l:r.D(l).then(e=>e||l)}}),n.some(e=>e instanceof Promise)){let t=Promise.all(n)
;return(u===1?t:(u||r.D("NS")).then(()=>t)).then(n=>r.D(e,n))}return r.D(e,n)
},r.si=(e,r)=>e&&e.split(" ").reduce((e,n)=>e||(n.includes("=")?r&&n.startsWith(r)?n.slice(r.length+1):e:n),""),
r.ui=e=>{let n=r.Fe("i18n");return r.si(n,e||"background")||r.Fe("lang1")||"en"},
r.getI18nJson=e=>t.Wn(`/i18n/${r.ui(e)}/${e}.json`),r.ri=()=>{let e=r.ai,n=["$1","$2","$3","$4"]
;for(let r=0;r<124;r++)e.push(l.n.i18n.getMessage(""+r,n));r.ri=null}});