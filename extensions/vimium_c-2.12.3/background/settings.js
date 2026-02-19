"use strict"
;__filename="background/settings.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports"],(e,t,o,s,a,n,l,i)=>{
Object.defineProperty(t,"__esModule",{value:!0
}),t.yo=t.z=t.Ni=t.V=t.B=t.qo=t.ze=t.Nn=t.hl=t.xo=t.lu=t.go=t.Tl=t.jo=t.So=t.$o=void 0;let r=null,c=null;t.$o=0,
t.So=localStorage,t.jo=a.n.storage.local,t.Tl=Promise.all([a.n.runtime.getBrowserInfo().then(e=>{
let t=parseInt(e&&e.version||"0")||0;o.Q.Ge=e&&e.name||"",o.es=t||o.es,o.A.v=o.qe.v=o.es
}),a.Re(a.n.runtime.getPlatformInfo).then(e=>{
let t=(e.os||"").toLowerCase(),s=a.n.runtime.PlatformOs,n=t===s.WIN?2:t===s.MAC?0:1;o.Q.do=t,o.qe.o=o.A.o=n,o.G=n
}),a.Re(t.jo.get.bind(t.jo)).then(e=>{let s=o.q;Object.assign(s,t.V),e=e||{}
;for(let a of Object.entries(e))a[0]in t.V?s[a[0]]=a[1]:o.iu.set(a[0],a[1]);let a=0;a=t.So.length;for(let e=0;e<a;e++){
let a=t.So.key(e),n=t.So.getItem(a);if(a in t.V){
let e=t.V[a],o=typeof e=="string"?n:e===!1||e===!0?n==="true":JSON.parse(n);s[a]=o}else o.iu.set(a,n)}
let n=a+Object.keys(e).length;return o.zo=n===0,n})]).then(e=>{o.q.keyLayout===260&&(t.$o|=1,w())
;for(let e in t.z)t.B(t.z[e],o.q[e],o.A);return o.A.g=o.q.grabBackFocus,o.qe.l=o.A.l,o.ll=o.ll|2,e[2]}),t.Tl.then(()=>{
o.fo&&o.fo()}),t.go=(e,a)=>{o.q[e]=a,c||(c=s.W(),setTimeout(h,0));let n=t.V[e];t.So.removeItem(e);let l,i=a!==n?a:null
;if(c[e]=i,o.To(e,i),e in t.z&&t.B(t.z[e],a,o.A),l=o.dl[e])return l(a,e)},t.lu=(e,t)=>{let a=o.iu.get(e)
;(a!==void 0?a:null)!==t&&(c||(c=s.W(),setTimeout(h,0)),c[e]=t,t!==null?o.iu.set(e,t):o.iu.delete(e))},
t.xo=e=>o.iu.get(e);let h=()=>{let e=c,o=[];c=null;for(let[t,s]of Object.entries(e))s===null&&(o.push(t),delete e[t])
;t.jo.remove(o),t.jo.set(e)};t.hl=(e,t)=>o.dl[e](t!==void 0?t:o.q[e],e),t.Nn=e=>{
if(e.N!==6)m(e);else if(e.d.length==null)m(e);else{let t=e.d;r?t=t.concat(r):s._o(m.bind(null,e)),r=t,e.d=null}}
;let m=e=>{let t=e.N;if(t===6&&!e.d){let t=r,s=e.d={};for(let e of t)s[e]=o.A[e];r=null}let s=t===9||6
;i.p(t===3?4096:t===9?32768|(e.k?65536:0):8192,t=>{s&&(e.v=o.du);for(let o of t.E)o.postMessage(e)})};t.ze=e=>{let t={
N:47,d:e,v:s.nextConfUpdate(1)};s.mu(o.Ke.slice(0),e=>(o.Ke.includes(e)&&e.postMessage(t),1))};let w=()=>{
let e=o.iu.get(t.yo[0]),s=o.iu.get(t.yo[1]),a=o.iu.get(t.yo[2]);e!==void 0&&(e+=""),s!==void 0&&(s+=""),
a!==void 0&&(a+="");let n=260;return e!==void 0||s!==void 0||a!==void 0?(n=e==null?4:e==="2"||e==="true"?1:e==="1"?12:4,
n|=s==null||n===1?0:s==="2"||s==="true"?16:s==="1"?512:0,n|=a==null?0:a==="2"?128:a==="1"?64:0,t.$o|=2):t.$o&=-3,
o.q.keyLayout=n};t.qo=e=>{if(e<3&&t.$o&1){let e=o.A.l,s=w();t.B("l",s,o.A)!==e&&t.hl("keyLayout",s)}}
;let u=e=>e.startsWith("# ")?"":e.split("//",1)[0].trim();t.B=(e,t,s)=>{switch(e){case"c":case"n":
t=t.toLowerCase().toUpperCase();break;case"l":t=t&255|(t&512&&!o.G?16:0);break;case"d":t=t?" D":"";break;case"p":
t=t.replace("[aria-controls],[role=combobox],#kw.s_ipt",":default");case"y":t=t.split("\n").map(u).join("")}
return s?s[e]=t:t},Object.assign(o.dl,{extAllowList(e){let t=o.uu;if(t.forEach((e,o)=>{e!==!1&&t.delete(o)}),
e)for(let o=e.split("\n"),s=o.length,a=/^[\da-z_]/i;0<=--s;)(e=o[s].trim())&&a.test(e)&&t.set(e,!0)},grabBackFocus(e){
o.A.g=e},keyLayout(e){if(o.qe.l=o.A.l,t.ze({l:o.A.l}),t.$o&1&&!(e&256)){let e=t.$o&2;t.$o&=-4
;for(let s=0,a=e?3:0;s<a;s++)t.lu(t.yo[s],null),o.To(t.yo[s],null)}},newTabUrl(e){
e=/^\/?pages\/[a-z]+.html\b/i.test(e)?a.n.runtime.getURL(e):a.k(n._r(e)),o.newTabUrl_f=e,t.lu("newTabUrl_f",e)},
searchEngines(){
o.Gl.map.clear(),o.Gl.keywords=null,o.Gl.rules=l.ru("~:"+o.q.searchUrl+"\n\n_browser: vimium://b-search-at/new-tab/$s re= Browser default search\n"+o.q.searchEngines,o.Gl.map).reverse()
},searchUrl(e){var s;let a=o.Gl.map
;if(e)((s=a.get("~"))===null||s===void 0?void 0:s.Bi)||l.ru("~:"+e,a);else if(a.clear(),a.set("~",{Dr:"~",
Rl:o.q.searchUrl.split(" ",1)[0],r:"",Bi:!1}),o.Gl.rules=[],o.newTabUrl_f=o.iu.get("newTabUrl_f")||"",
o.newTabUrl_f)return;t.hl("newTabUrl")},vomnibarPage(e){let s=o.iu.get("vomnibarPage_f")
;!s||e?((e=e?a.k(e):o.q.vomnibarPage)===t.V.vomnibarPage?e=o.Q.Bn:e.startsWith("front/")?e=a.n.runtime.getURL(e):(e=n._r(e),
e=(e=n.mi(e)).replace(":version",`${parseFloat(o.Q.mo)}`)),
o.vomnibarPage_f=e,t.lu("vomnibarPage_f",e)):o.vomnibarPage_f=s}}),t.V={__proto__:null,allBrowserUrls:!1,autoDarkMode:2,
autoReduceMotion:2,
clipSub:"p=^git@([^/:]+):=https://$1/=\ns@^https://(?:www\\.)?google\\.com(?:\\.[^/]+)?/url\\?(?:[^&#]+&)*?url=([^&#]+)@$1@,matched,decodecomp\np@^https://item\\.m\\.jd\\.com/product/(\\d+)\\.html\\b@https://item.jd.com/$1.html@",
exclusionListenHash:!0,exclusionOnlyFirstMatch:!1,exclusionRules:[{passKeys:"",pattern:":https://mail.google.com/"}],
extAllowList:"# extension id or hostname\nnewtab-adapter@gdh1995.cn\nshortcut-forwarding-tool@gdh1995.cn\nnickyfeng@edgetranslate.com\nsaladict@crimx.com",
filterLinkHints:!1,grabBackFocus:!1,hideHud:!1,ignoreReadonly:":default",keyLayout:260,keyboard:[560,33],keyupTime:120,
keyMappings:"",linkHintCharacters:"sadjklewcmpgh",linkHintNumbers:"0123456789",localeEncoding:"gbk",mouseReachable:!0,
newTabUrl:"",
nextPatterns:"\u4e0b\u4e00\u5c01,\u4e0b\u9875,\u4e0b\u4e00\u9875,\u4e0b\u4e00\u7ae0,\u540e\u4e00\u9875,\u4e0b\u4e00\u5f20,next,more,newer,>,\u203a,\u2192,\xbb,\u226b,>>",
notifyUpdate:!0,omniBlockList:"",passEsc:":default",preferBrowserSearch:!0,
previousPatterns:"\u4e0a\u4e00\u5c01,\u4e0a\u9875,\u4e0a\u4e00\u9875,\u4e0a\u4e00\u7ae0,\u524d\u4e00\u9875,\u4e0a\u4e00\u5f20,prev,previous,back,older,<,\u2039,\u2190,\xab,\u226a,<<",
regexFindMode:!1,scrollStepSize:100,
searchUrl:o.Nu?"https://www.baidu.com/s?ie=utf-8&wd=%s \u767e\u5ea6":"https://www.google.com/search?q=%s Google",
searchEngines:o.Nu?"b|ba|baidu|Baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\nbi: https://www.bing.com/search?q=$s\nbi|bing|Bing|\u5fc5\u5e94: https://cn.bing.com/search?q=%s \\\n  blank=https://cn.bing.com/ \u5fc5\u5e94\ng|go|gg|google|Google|\u8c37\u6b4c: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i \\\n  blank=https://www.google.com/ Google\nsogou|sougou: https://www.sogou.com/web?ie=UTF-8&query=$s \u641c\u72d7\n360so|360sou|360ss: https://www.so.com/s?ie=UTF-8&q=$s 360 \u641c\u7d22\nshenma: https://m.sm.cn/s?q=$s \u795e\u9a6c\u641c\u7d22\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\nb.m|bm|map|b.map|bmap|\u5730\u56fe|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c \\\n  blank=https://map.baidu.com/\ngd|gaode|\u9ad8\u5fb7\u5730\u56fe: https://www.gaode.com/search?query=%s \\\n  blank=https://www.gaode.com\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps \u8c37\u6b4c\u5730\u56fe\nbili|bilibili|bz|Bili: https://search.bilibili.com/all?keyword=%s \\\n  blank=https://www.bilibili.com/ \u54d4\u54e9\u54d4\u54e9\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\n\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\nb.x|b.xs|bx|bxs|bxueshu: https://xueshu.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://xueshu.baidu.com/ \u767e\u5ea6\u5b66\u672f\ngs|g.s|gscholar|g.x|gx|gxs: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i \\\n  blank=https://scholar.google.com/ \u8c37\u6b4c\u5b66\u672f\n\nt|tb|taobao|ali|\u6dd8\u5b9d: https://s.taobao.com/search?ie=utf8&q=%s \\\n  blank=https://www.taobao.com/ \u6dd8\u5b9d\nj|jd|jingdong|\u4eac\u4e1c: https://search.jd.com/Search?enc=utf-8&keyword=%s \\\n  blank=https://jd.com/ \u4eac\u4e1c\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ \u4e9a\u9a6c\u900a\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= \u8ba1\u7b97\u5668\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub \u4ed3\u5e93\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript":"bi: https://cn.bing.com/search?q=$s\nbi|bing: https://www.bing.com/search?q=%s \\\n  blank=https://www.bing.com/ Bing\nb|ba|baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\ng|go|gg|google|Google: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i \\\n  blank=https://www.google.com/ Google\nsg|sogou|sougou: https://www.sogou.com/web?ie=UTF-8&query=$s \u641c\u72d7\n360|360so|360sou|360ss: https://www.so.com/s?ie=UTF-8&q=$s 360 \u641c\u7d22\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps Google Maps\nb.m|bm|map|b.map|bmap|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c \\\n  blank=https://map.baidu.com/\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\ng.s|gs|gscholar: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i \\\n  blank=https://scholar.google.com/ Google Scholar\n\na|ae|ali|alie|aliexp: https://www.aliexpress.com/wholesale?SearchText=%s \\\n  blank=https://www.aliexpress.com/ AliExpress\nj|jd|jb|joy|joybuy: https://www.joybuy.com/search?keywords=%s \\\n  blank=https://www.joybuy.com/ Joybuy\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ Amazon\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= Calculate\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub Repo\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript",
showActionIcon:!0,showAdvancedCommands:!0,showInIncognito:!1,smoothScroll:!0,titleIgnoreList:"",userDefinedCss:"",
vomnibarOptions:{actions:"",maxMatches:10,queryInterval:333,sizes:"77,3,44,0.8,1944",styles:"mono-url"},vimSync:null,
vomnibarPage:"front/vomnibar.html",waitForEnter:!0},t.Ni=["showAdvancedCommands"],t.z={__proto__:null,
filterLinkHints:"f",hideHud:"h",ignoreReadonly:"y",keyLayout:"l",keyboard:"k",keyupTime:"u",linkHintCharacters:"c",
linkHintNumbers:"n",mouseReachable:"e",passEsc:"p",regexFindMode:"r",smoothScroll:"s",scrollStepSize:"t",
waitForEnter:"w"},t.yo=["ignoreKeyboardLayout","ignoreCapsLock","mapModifier"],o.ll<6&&(()=>{
let e=a.n.runtime.getManifest(),{origin:s}=location,n=s+"/",l=e.content_scripts[0].js,i=o.Q,r=o.U,c=e=>(e.charCodeAt(0)===47?s:e.startsWith(n)?"":n)+e
;t.V.newTabUrl="about:newtab",
r.set("about:newtab",1),r.set("about:newtab/",1),i.po=Object.keys(e.commands||{}).map(e=>e==="quickNext"?"nextTab":e),
i.mo=e.version,i.aa=e.version_name||e.version,i.Ze=c(i.Ze),i.ni=c(i.ni),i.Bn=c(t.V.vomnibarPage),i.An=c(i.vu),
i.ta=e.homepage_url||i.ta,i.ko=c(i.ko),i.Cn=c(i.Cn),l.push("content/injected_end.js"),i.el=l.map(c)})()});