"use strict";(self["webpackChunkwebsite_theinvader360_quasar"]=self["webpackChunkwebsite_theinvader360_quasar"]||[]).push([[859],{8419:(t,e,r)=>{r.d(e,{M:()=>c});var n=r(52),o=r.n(n),a=function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function c(t){try{i(n.next(t))}catch(e){a(e)}}function s(t){try{i(n["throw"](t))}catch(e){a(e)}}function i(t){t.done?r(t.value):o(t.value).then(c,s)}i((n=n.apply(t,e||[])).next())}))};class c{constructor(){this.mode="local-json"}readAppProjects(){return a(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const e="http://localhost:8081/projects-apps";try{const t=yield o().get(e);return t.data}catch(t){throw t}}default:try{const t=yield o().get("data.json");return t.data.appProjects}catch(t){throw t}}}))}readAppProject(t){return a(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const r=`http://localhost:8081/projects-apps/${t}`;try{const t=yield o().get(r);return t.data}catch(e){throw e}}default:try{const e=yield o().get("data.json"),r=e.data.appProjects.find((e=>e.id===+t));if(void 0===r)throw new TypeError("appProject undefined");return r}catch(e){throw e}}}))}readFunProjects(){return a(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const e="http://localhost:8081/projects-fun";try{const t=yield o().get(e);return t.data}catch(t){throw t}}default:try{const t=yield o().get("data.json");return t.data.funProjects}catch(t){throw t}}}))}readFunProject(t){return a(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const r=`http://localhost:8081/projects-fun/${t}`;try{const t=yield o().get(r);return t.data}catch(e){throw e}}default:try{const e=yield o().get("data.json"),r=e.data.funProjects.find((e=>e.id===+t));if(void 0===r)throw new TypeError("funProject undefined");return r}catch(e){throw e}}}))}readMarkdown(t){return a(this,void 0,void 0,(function*(){const e=yield o().get(t);return e.data}))}}},7269:(t,e,r)=>{r.d(e,{p:()=>o});var n=r(9684);const o=t=>n.ZP.formatDate(t,"MMMM YYYY")},8859:(t,e,r)=>{r.r(e),r.d(e,{default:()=>A});r(246);var n=r(3673),o=r(2323);const a={class:"row justify-center"},c={class:"q-pa-md col-xs-10 col-sm-8 col-md-6 col-lg-6 col-xl-6"},s={class:"q-pa-md row"},i=(0,n.Uk)(" << All Apps "),d={class:"q-pa-md row justify-center"},l={class:"text-h6 text-center"},u={class:"text-subtitle2 text-center text-grey"};function p(t,e,r,p,h,f){const y=(0,n.up)("router-link"),v=(0,n.up)("q-img"),w=(0,n.up)("q-card-section"),g=(0,n.up)("q-btn"),j=(0,n.up)("q-card-actions"),m=(0,n.up)("q-card"),P=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(P,null,{default:(0,n.w5)((()=>[(0,n._)("div",a,[(0,n._)("div",c,[t.appProject?((0,n.wg)(),(0,n.j4)(m,{key:0,bordered:"",flat:""},{default:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n.Wm)(y,{to:{name:"appProjects"},class:"text-black",style:{"text-decoration":"none"}},{default:(0,n.w5)((()=>[i])),_:1})]),(0,n._)("div",d,[(0,n.Wm)(v,{ratio:"1",style:{"max-width":"200px"},src:t.appProject.imagePath},null,8,["src"])]),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n._)("p",null,(0,o.zw)(t.appProject.name),1)]),(0,n._)("div",u,"Released "+(0,o.zw)(t.formatDate(t.appProject.releaseDate)),1)])),_:1}),(0,n.Wm)(w,{class:"q-pt-none text-center text-grey-8"},{default:(0,n.w5)((()=>[(0,n._)("p",null,(0,o.zw)(t.appProject.description),1)])),_:1}),(0,n.Wm)(j,{class:"row justify-center"},{default:(0,n.w5)((()=>[t.appProject.urlPlay?((0,n.wg)(),(0,n.j4)(g,{key:0,round:"",unelevated:"",padding:"xs",color:"primary",target:"_blank",size:"xl",type:"a",href:t.appProject.urlPlay,icon:"svguse:icons.svg#svg-icon-googleplay"},null,8,["href"])):(0,n.kq)("",!0),t.appProject.urlAmazon?((0,n.wg)(),(0,n.j4)(g,{key:1,round:"",unelevated:"",padding:"xs",color:"primary",target:"_blank",size:"xl",type:"a",href:t.appProject.urlAmazon,icon:"svguse:icons.svg#svg-icon-amazon"},null,8,["href"])):(0,n.kq)("",!0),t.appProject.urlGithub?((0,n.wg)(),(0,n.j4)(g,{key:2,round:"",unelevated:"",padding:"xs",color:"primary",target:"_blank",size:"xl",type:"a",href:t.appProject.urlGithub,icon:"svguse:icons.svg#svg-icon-github"},null,8,["href"])):(0,n.kq)("",!0),t.appProject.urlApk?((0,n.wg)(),(0,n.j4)(g,{key:3,round:"",unelevated:"",padding:"xs",color:"primary",target:"_blank",size:"xl",type:"a",href:t.appProject.urlApk,icon:"download"},null,8,["href"])):(0,n.kq)("",!0)])),_:1})])),_:1})):(0,n.kq)("",!0)])])])),_:1})}var h=r(1959),f=r(8825),y=r(8419),v=r(7269),w=function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function c(t){try{i(n.next(t))}catch(e){a(e)}}function s(t){try{i(n["throw"](t))}catch(e){a(e)}}function i(t){t.done?r(t.value):o(t.value).then(c,s)}i((n=n.apply(t,e||[])).next())}))};const g=(0,n.aZ)({name:"App",props:{id:{type:String,required:!0}},setup(t){const e="App",r=(0,f.Z)(),o=(0,h.iH)(),a=()=>w(this,void 0,void 0,(function*(){try{r.loading.show();const e=yield(new y.M).readAppProject(t.id);o.value=e}catch(e){console.error(e),r.notify({type:"negative",message:e.message})}finally{r.loading.hide()}}));return(0,n.bv)((()=>{a()})),{name:e,appProject:o,formatDate:v.p}}});var j=r(4379),m=r(151),P=r(4027),k=r(5589),x=r(9367),_=r(6819),q=r(7518),b=r.n(q);g.render=p;const A=g;b()(g,"components",{QPage:j.Z,QCard:m.Z,QImg:P.Z,QCardSection:k.Z,QCardActions:x.Z,QBtn:_.Z})}}]);