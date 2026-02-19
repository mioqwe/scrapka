"use strict";globalThis.__filename=null,(()=>{
let e={},l=e=>e.slice(e.lastIndexOf("/")+1).replace(".js",""),t=(e,l,t,i)=>{
t.bind(null,s,i).apply(null,l.slice(2).map(n))},n=t=>{t=l(t);let n=e[t]
;return n=n?n instanceof Promise?n.__esModule||(n.__esModule={}):n:e[t]={},n},s=([t],n)=>{
let i=l(t),o=e[i]||(e[i]=new Promise(e=>{let l=document,n=l.createElement("script");n.src=t,n.onload=()=>{e(),n.remove()
},(l.body||l.documentElement).appendChild(n)}));o instanceof Promise?o.then(()=>{s([t],n)}):n(o)}
;globalThis.define=(n,s)=>{let i=l(__filename||document.currentScript.src),o=e[i];if(o&&o instanceof Promise){
let l=o.then(()=>{e[i]=o,t(0,n,s,o)});o=l.__esModule=o.__esModule||{},e[i]=l}else t(0,n,s,o||(e[i]={}))}})();