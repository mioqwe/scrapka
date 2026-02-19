"use strict"
;__filename="background/main.js",define(["require","exports","./store","./utils","./browser","./settings","./ports","./key_mappings","./run_commands","./normalize_urls","./parse_urls","./exclusions","./ui_css","./eval_urls","./open_urls","./all_commands","./request_handlers","./tools"],(e,o,s,t,n,i,r,l,u)=>{
Object.defineProperty(o,"__esModule",{value:!0});let a=e=>{let o=s.Ol.get(s.ye);e==="quickNext"&&(e="nextTab")
;let t=l.ao
;s.ll!==6||(t&&t.get(e)?o==null||o.c&4||s.ye<0?u.executeShortcut(e,o):n.tabsGet(s.ye,o=>(u.executeShortcut(e,o&&o.status==="complete"?s.Ol.get(o.id):null),
n.oe())):(t&&t.get(e)!==null&&(t.set(e,null),console.log("Shortcut %o has not been configured.",e)),o&&(s.$=o.a),
r.showHUD(`Shortcut "${e}" has not been configured.`)))};s.fo=()=>{if(s.ll===6){
if(s.fo)return t._o(i.Tl.then.bind(i.Tl,s.fo)),void(s.fo=null);s.jn||(i.hl("keyMappings"),s.G||(l.Dn["m-s-c"]=36)),
i.hl("exclusionListenHash"),i.hl("vomnibarOptions"),i.hl("autoDarkMode"),i.hl("autoReduceMotion"),
n.n.runtime.onConnect.addListener(e=>r.OnConnect(e,e.name|0)),n.n.runtime.onConnectExternal.addListener(e=>{
let o,{sender:t,name:n}=e;if(t&&r.isExtIdAllowed(t)&&n.startsWith("vimium-c.")&&(o=n.split("@")).length>1){
if(o[1]!==s.Q.GitVer)return e.postMessage({N:2,t:1}),void e.disconnect();r.OnConnect(e,o[0].slice(9)|1024)
}else e.disconnect()}),n.n.extension.isAllowedIncognitoAccess(o=>{s.Q.ho=o===!1,setTimeout(()=>{new Promise((o,s)=>{
e(["/background/others.js"],o,s)}).then(e=>e),setTimeout(()=>{new Promise((o,s)=>{
e(["/background/browsing_data_manager.js"],o,s)}).then(e=>e),new Promise((o,s)=>{
e(["/background/completion_utils.js"],o,s)}).then(e=>e),new Promise((o,s)=>{e(["/background/completion.js"],o,s)
}).then(e=>e)},200)},200)})}},!n.n.commands||n.n.commands.onCommand.addListener(a),i.Tl.then(()=>{i.hl("extAllowList"),
n.n.runtime.onMessageExternal.addListener((e,o,t)=>{if(r.isExtIdAllowed(o)){if(typeof e=="string")u.executeExternalCmd({
command:e},o);else if(typeof e=="object"&&e)switch(e.handler){case"shortcut":let n=e.shortcut;n&&a(n+"");break;case"id":
return void t({name:"Vimium C",host:location.host,shortcuts:!0,injector:s.Q.ko,version:s.Q.mo});case 99:return void t({
s:e.scripts?s.Q.el:null,version:s.Q.mo,host:location.host,h:"@"+s.Q.GitVer});case"command":u.executeExternalCmd(e,o)}
}else t(!1)}),i.hl("vomnibarPage",null),i.hl("searchUrl",null)}),!n.ge.onReplaced||n.ge.onReplaced.addListener((e,o)=>{
let t=s.Ol.get(o);if(s.wo===o&&(s.wo=e),t){s.Ol.delete(o),s.Ol.set(e,t);for(let o of t.E)o.s.u=e;t.a.s.u=e
;for(let t of s.Ke)t.s.u===o&&(t.s.u=e)}}),s.gl.er=(e,o,t)=>{setTimeout(()=>{s.gl.er(e,o,t)},210)},n.v([{
permissions:["cookies"]}],e=>{s.Xe=e[0]}),s.ll=s.ll|4,s.fo(),window.onpagehide=()=>{for(let e of s.Ke)e.disconnect()
;s.Ol.forEach(e=>{for(let o of e.E)o.disconnect()})}});