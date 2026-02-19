"use strict";__filename="background/store.js",define(["require","exports"],(e,n)=>{
Object.defineProperty(n,"__esModule",{value:!0
}),n.Q=n.Tn=n.Ii=n.Di=n.Fr=n.R=n.Al=n.Ql=n.Kl=n.Si=n.To=n.o=n.getNextFakeTabId=n.gl=n.r=n.Hn=n.pu=n._u=n.Vi=n.oa=n.O=n.m=n.y=n.g=n.$=n.Ce=n.Cl=n.vo=n.qn=n.bo=n.jn=n.X=n.Mt=n.zt=n.ue=n.Mo=n.Co=n.Io=n.fe=n.yn=n.xe=n.ye=n.Po=n.Ae=n.Ke=n.Ol=n.wo=n.dl=n.bn=n.fo=n.ll=n.uu=n.U=n.na=n.l=n.Vo=n.t=n.Bo=n.bu=n.Gn=n.ou=n.du=n.Sn=n.qe=n.Gl=n.A=n.vomnibarPage_f=n.newTabUrl_f=n.iu=n.q=n.Xe=n.zo=n.Nu=n.Le=n.tl=n.G=n.es=n.Fo=n.No=n.OnSafari=n.OnEdge=n.OnFirefox=n.OnChrome=n.Ho=void 0,
n.Ho=2,n.OnChrome=!1,n.OnFirefox=!0,n.OnEdge=!1,n.OnSafari=!1;let l,o=navigator.userAgentData,a=o&&o.brands;n.No=!1,
n.Fo=998,
n.es=a&&(l=a.find(e=>e.brand.includes("Firefox")))&&parseInt(l.version)>=116?parseInt(l.version):parseInt(navigator.userAgent.split("Firefox/")[1]||"0")||999,
n.G=2,n.Le=location.origin+"/",n.Nu=navigator.language.startsWith("zh"),n.zo=!1,n.Xe=!1,n.q={},n.iu=new Map,
n.newTabUrl_f="",n.vomnibarPage_f="",n.A={v:n.es,d:"",g:!1,m:!1},n.Gl={map:new Map,rules:[],keywords:null},n.qe={v:n.es,
c:"",i:0,l:0,m:null,n:0,s:"",t:""},n.Sn={actions:[],Jn:0},n.du=0,n.ou=0,n.t=!1,n.U=new Map,n.uu=new Map,n.ll=0,n.dl={},
n.wo=-1,n.Ol=new Map,n.Ke=[],n.Ae=new Map,n.Po=0,n.ye=-1,n.xe=-1;n.yn=-1,n.fe=0,n.Io=null,n.Co=null,n.Mo=null,n.ue={
re:[],Je:[],d:0,Ue:0},n.zt={Bt:null,Zt:new Map,qt:0,Nt:0,Qt:0},n.Mt=new Map,n.jn=null,n.bo=null,n.vo=0,n.Cl=new Map,
n.Ce=0,n.$=null,n.g=1,n._u=null,n.pu=null,n.M=null,n.ki=null,n.Hn=(e,l)=>{let o=n._u,a=!e||o&&o.i===e;return n._u=a?l:o,
a?o:null},n.r=()=>{},n.gl={};let t=-4;n.getNextFakeTabId=()=>t--,n.o=n.r,n.To=n.r,n.Si=null,n.Kl=()=>"",n.Ql=()=>"",
n.Al=()=>"",n.R=e=>e,n.Fr=()=>null,n.Di=null,n.Ii=null,n.Q={H:"moz",Oo:0,Do:":",ho:!1,el:null,mo:"",aa:"",
GitVer:"6d187ad",ko:"/lib/injector.js",Cn:"/front/vomnibar-tee.html",Go:"/front/offscreen.html",
HelpDialogJS:"/background/help_dialog.js",Ze:"pages/options.html",do:"browser",Ge:"",
ta:"https://github.com/gdh1995/vimium-c",po:null,ni:"/pages/show.html",Bn:"",vu:"/front/vomnibar.js",An:""}});