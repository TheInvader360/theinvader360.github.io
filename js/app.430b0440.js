(()=>{"use strict";var e={4090:(e,t,r)=>{r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);function i(e,t,r,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});s.render=i;const l=s;var c=r(7083),p=r(9582);const u=[{path:"/",component:()=>Promise.all([r.e(736),r.e(350)]).then(r.bind(r,3350)),children:[{path:"",name:"home",component:()=>Promise.all([r.e(736),r.e(498)]).then(r.bind(r,8498))},{path:"blog",name:"blog",component:()=>Promise.all([r.e(736),r.e(968)]).then(r.bind(r,4968))},{path:"apps",name:"appProjects",component:()=>Promise.all([r.e(736),r.e(388)]).then(r.bind(r,7388))},{path:"apps/:id",name:"appProject",component:()=>Promise.all([r.e(736),r.e(859)]).then(r.bind(r,8859)),props:!0},{path:"fun",name:"funProjects",component:()=>Promise.all([r.e(736),r.e(226)]).then(r.bind(r,5226))},{path:"fun/:id",name:"funProject",component:()=>Promise.all([r.e(736),r.e(853)]).then(r.bind(r,2853)),props:!0},{path:"work",name:"workProjects",component:()=>Promise.all([r.e(736),r.e(823)]).then(r.bind(r,7823))},{path:"privacy",name:"privacy",component:()=>Promise.all([r.e(736),r.e(476)]).then(r.bind(r,5476))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(989)]).then(r.bind(r,8989))}],d=u,f=(0,c.BC)((function(){const e=p.PO,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:d,history:e("/")});return t}));async function h(e,t){const r="function"===typeof f?await f({}):f,o=e(l);return o.use(n.Z,t),{app:o,router:r}}var m=r(6249),b=r(6417),v=r(2576);const g={config:{},plugins:{Loading:m.Z,Notify:b.Z,Dialog:v.Z}},w="/";async function y({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},i=window.location.href.replace(window.location.origin,"");for(let l=0;!1===o&&l<r.length;l++)try{await r[l]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:w})}catch(s){return s&&s.url?void a(s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&(e.use(t),e.mount("#q-app"))}h(o.ri,g).then((e=>Promise.all([Promise.resolve().then(r.bind(r,9882)),Promise.resolve().then(r.bind(r,1768)),Promise.resolve().then(r.bind(r,1941)),Promise.resolve().then(r.bind(r,3036))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,r)}))))},1768:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,api:()=>i});var o=r(7083),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},9882:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,i18n:()=>s});var o=r(7083),n=r(5948);const a={failed:"Action failed",success:"Action was successful"},i={en:a},s=(0,n.o)({locale:"en-US",messages:i}),l=(0,o.xr)((({app:e})=>{e.use(s)}))},1941:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(7083),n=r(6417);const a=(0,o.xr)((()=>{n.Z.setDefaults({position:"top",timeout:2500,actions:[{icon:"close",color:"white"}]})}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(p=0;p<e.length;p++){for(var[o,n,a]=e[p],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(p--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{226:"f85d0334",350:"ca5576eb",388:"638f44cb",476:"31242eb4",498:"eed96aaf",823:"8a6e1251",853:"eecfeb86",859:"6d4ce62e",968:"6cad9424",989:"292fdade"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"eade6df0"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="website-theinvader360-quasar:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var u=c[p];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var p=l(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(p)},o=self["webpackChunkwebsite_theinvader360_quasar"]=self["webpackChunkwebsite_theinvader360_quasar"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4090)));o=r.O(o)})();