"use strict";(self["webpackChunkwebsite_theinvader360_quasar"]=self["webpackChunkwebsite_theinvader360_quasar"]||[]).push([[226],{8419:(t,e,n)=>{n.d(e,{M:()=>a});var o=n(52),r=n.n(o),c=function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,c){function a(t){try{i(o.next(t))}catch(e){c(e)}}function s(t){try{i(o["throw"](t))}catch(e){c(e)}}function i(t){t.done?n(t.value):r(t.value).then(a,s)}i((o=o.apply(t,e||[])).next())}))};class a{constructor(){this.mode="local-json"}readAppProjects(){return c(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const e="http://localhost:8081/projects-apps";try{const t=yield r().get(e);return t.data}catch(t){throw t}}default:try{const t=yield r().get("data.json");return t.data.appProjects}catch(t){throw t}}}))}readAppProject(t){return c(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const n=`http://localhost:8081/projects-apps/${t}`;try{const t=yield r().get(n);return t.data}catch(e){throw e}}default:try{const e=yield r().get("data.json"),n=e.data.appProjects.find((e=>e.id===+t));if(void 0===n)throw new TypeError("appProject undefined");return n}catch(e){throw e}}}))}readFunProjects(){return c(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const e="http://localhost:8081/projects-fun";try{const t=yield r().get(e);return t.data}catch(t){throw t}}default:try{const t=yield r().get("data.json");return t.data.funProjects}catch(t){throw t}}}))}readFunProject(t){return c(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const n=`http://localhost:8081/projects-fun/${t}`;try{const t=yield r().get(n);return t.data}catch(e){throw e}}default:try{const e=yield r().get("data.json"),n=e.data.funProjects.find((e=>e.id===+t));if(void 0===n)throw new TypeError("funProject undefined");return n}catch(e){throw e}}}))}readMarkdown(t){return c(this,void 0,void 0,(function*(){const e=yield r().get(t);return e.data}))}}},5226:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});n(246);var o=n(3673),r=n(2323);function c(t,e,n,c,a,s){const i=(0,o.up)("router-link"),u=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(u,{class:"row items-center justify-evenly"},{default:(0,o.w5)((()=>[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.funProjects,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o.Wm)(i,{to:{name:"funProject",params:{id:t.id}},class:"text-black",style:{"text-decoration":"none"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(t.name)+" - "+(0,r.zw)(t.description),1)])),_:2},1032,["to"])])))),128))])])),_:1})}var a=n(1959),s=n(8825),i=n(8419),u=function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,c){function a(t){try{i(o.next(t))}catch(e){c(e)}}function s(t){try{i(o["throw"](t))}catch(e){c(e)}}function i(t){t.done?n(t.value):r(t.value).then(a,s)}i((o=o.apply(t,e||[])).next())}))};const d=(0,o.aZ)({name:"Fun",setup(){const t="Fun",e=(0,s.Z)(),n=(0,a.iH)([]),r=()=>u(this,void 0,void 0,(function*(){try{e.loading.show();const t=yield(new i.M).readFunProjects();n.value=t}catch(t){console.error(t),e.notify({type:"negative",message:t.message})}finally{e.loading.hide()}}));return(0,o.bv)((()=>{r()})),{name:t,funProjects:n}}});var h=n(4379),l=n(7518),f=n.n(l);d.render=c;const p=d;f()(d,"components",{QPage:h.Z})}}]);