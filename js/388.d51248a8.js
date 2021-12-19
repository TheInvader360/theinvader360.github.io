"use strict";(self["webpackChunkwebsite_theinvader360_quasar"]=self["webpackChunkwebsite_theinvader360_quasar"]||[]).push([[388],{8419:(t,e,r)=>{r.d(e,{M:()=>s});var o=r(52),a=r.n(o),n=function(t,e,r,o){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,n){function s(t){try{l(o.next(t))}catch(e){n(e)}}function c(t){try{l(o["throw"](t))}catch(e){n(e)}}function l(t){t.done?r(t.value):a(t.value).then(s,c)}l((o=o.apply(t,e||[])).next())}))};class s{constructor(){this.mode="local-json"}readAppProjects(){return n(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const e="http://localhost:8081/projects-apps";try{const t=yield a().get(e);return t.data}catch(t){throw t}}default:try{const t=yield a().get("data.json");return t.data.appProjects}catch(t){throw t}}}))}readAppProject(t){return n(this,void 0,void 0,(function*(){switch(this.mode){case"mock-server":{const r=`http://localhost:8081/projects-apps/${t}`;try{const t=yield a().get(r);return t.data}catch(e){throw e}}default:try{const e=yield a().get("data.json"),r=e.data.appProjects.find((e=>e.id===+t));if(void 0===r)throw new TypeError("appProject undefined");return r}catch(e){throw e}}}))}}},7269:(t,e,r)=>{r.d(e,{p:()=>a});var o=r(9684);const a=t=>o.ZP.formatDate(t,"MMMM YYYY")},7388:(t,e,r)=>{r.r(e),r.d(e,{default:()=>z});var o=r(3673);const a={class:"row justify-center"},n=(0,o.Uk)("Favourites"),s=(0,o.Uk)("Name"),c=(0,o.Uk)("Release Date (Newest First)"),l=(0,o.Uk)("Release Date (Oldest First)"),i={class:"row"};function d(t,e,r,d,u,p){const m=(0,o.up)("q-item-label"),f=(0,o.up)("q-item-section"),w=(0,o.up)("q-item"),y=(0,o.up)("q-list"),h=(0,o.up)("q-btn-dropdown"),v=(0,o.up)("AppProjectList"),_=(0,o.up)("q-page"),g=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(_,{class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o.Wm)(h,{flat:"","no-caps":"",color:"primary",label:"Sort Order"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(w,{clickable:"",onClick:e[0]||(e[0]=e=>t.setSortOrder("defaultSortWeight",!1))},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:1})])),_:1},512),[[g]]),(0,o.wy)((0,o.Wm)(w,{clickable:"",onClick:e[1]||(e[1]=e=>t.setSortOrder("name",!0))},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[s])),_:1})])),_:1})])),_:1},512),[[g]]),(0,o.wy)((0,o.Wm)(w,{clickable:"",onClick:e[2]||(e[2]=e=>t.setSortOrder("releaseDate",!1))},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[c])),_:1})])),_:1})])),_:1},512),[[g]]),(0,o.wy)((0,o.Wm)(w,{clickable:"",onClick:e[3]||(e[3]=e=>t.setSortOrder("releaseDate",!0))},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[l])),_:1})])),_:1})])),_:1},512),[[g]])])),_:1})])),_:1})]),(0,o._)("div",i,[(0,o.Wm)(v,{appProjects:t.appProjects,orderBy:t.orderBy,orderAsc:t.orderAsc},null,8,["appProjects","orderBy","orderAsc"])])])),_:1})}var u=r(1959),p=r(8825),m=r(8419),f=(r(246),r(2323));const w={class:"row"},y={class:"text-h6 q-mt-sm q-mb-xs"},h={class:"text-captionfloat-right fit"},v={class:"text-grey text-caption q-pb-sm"},_={class:"text-grey-8"},g={class:"col-4 q-my-md q-mr-sm"};function j(t,e,r,a,n,s){const c=(0,o.up)("router-link"),l=(0,o.up)("q-card-section"),i=(0,o.up)("q-img"),d=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.orderedAppProjects,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"q-pa-md col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 flex"},[(0,o.Wm)(d,{flat:"",bordered:"",class:"fit"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{horizontal:"",class:"fit"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o.Wm)(c,{to:{name:"appProject",params:{id:e.id}},class:"text-black",style:{"text-decoration":"none"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,f.zw)(e.name),1)])),_:2},1032,["to"])]),(0,o._)("div",h,[(0,o._)("div",v,(0,f.zw)(t.formatDate(e.releaseDate)),1),(0,o._)("div",_,(0,f.zw)(e.description),1)])])),_:2},1024),(0,o._)("div",g,[(0,o.Wm)(c,{to:{name:"appProject",params:{id:e.id}}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"fit",ratio:"1",fit:"contain",position:"0% 50%",src:e.imagePath},null,8,["src"])])),_:2},1032,["to"])])])),_:2},1024)])),_:2},1024)])))),128))])])}var P=r(7269);const W=(0,o.aZ)({props:{appProjects:{type:Array,required:!0},orderBy:{type:String,required:!0},orderAsc:{type:Boolean,required:!0}},setup(t){const e=(0,u.Fl)((()=>[...t.appProjects].sort(((e,r)=>t.orderAsc?e[t.orderBy]>r[t.orderBy]?1:-1:e[t.orderBy]<r[t.orderBy]?1:-1))));return{orderedAppProjects:e,formatDate:P.p}}});var k=r(151),q=r(5589),b=r(4027),A=r(7518),x=r.n(A);W.render=j;const Z=W;x()(W,"components",{QCard:k.Z,QCardSection:q.Z,QImg:b.Z});var D=function(t,e,r,o){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,n){function s(t){try{l(o.next(t))}catch(e){n(e)}}function c(t){try{l(o["throw"](t))}catch(e){n(e)}}function l(t){t.done?r(t.value):a(t.value).then(s,c)}l((o=o.apply(t,e||[])).next())}))};const B=(0,o.aZ)({name:"Apps",components:{AppProjectList:Z},setup(){const t="Apps",e=(0,p.Z)(),r=(0,u.iH)([]),a=(0,u.iH)("defaultSortWeight"),n=(0,u.iH)(!1),s=(t,e)=>{a.value=t,n.value=e},c=()=>D(this,void 0,void 0,(function*(){try{e.loading.show();const t=yield(new m.M).readAppProjects();r.value=t}catch(t){console.error(t),e.notify({type:"negative",message:t.message})}finally{e.loading.hide()}}));return(0,o.bv)((()=>{c()})),{name:t,appProjects:r,orderBy:a,orderAsc:n,setSortOrder:s}}});var S=r(4379),Q=r(9238),C=r(7011),O=r(3414),M=r(2035),U=r(2350),Y=r(677);B.render=d;const z=B;x()(B,"components",{QPage:S.Z,QBtnDropdown:Q.Z,QList:C.Z,QItem:O.Z,QItemSection:M.Z,QItemLabel:U.Z}),x()(B,"directives",{ClosePopup:Y.Z})}}]);