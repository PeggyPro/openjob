import{h as u,r as k,K as b,a as C,o as S,a4 as I,a9 as g,j as s,v as E,x as L,y as M,E as B,k as c,l as r,F as D,Z as j,q as F,u as l,T,aE as $,aF as z,D as N,C as p}from"./vue.bd0669ce.js";import{_ as O}from"./_plugin-vue_export-helper.c27b6911.js";const R=t=>($("data-v-8b118bf6"),t=t(),z(),t),V={class:"el-dropdown-menu"},q=["onClick"],K=R(()=>r("div",{class:"el-popper__arrow",style:{left:"10px"}},null,-1)),U=u({name:"pagesWorkflowContextmenu"}),W=u({...U,props:{dropdown:{type:Object,default:()=>({x:"",y:""})}},emits:["current"],setup(t,{expose:m,emit:_}){const x=t,f=k(),e=b({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"删除",icon:"ele-Delete"},{contextMenuClickId:1,txt:"编辑",icon:"ele-Edit"}],item:{type:"node"},conn:{}}),d=C(()=>x.dropdown),y=n=>{_("current",Object.assign({},{contextMenuClickId:n},e.item),e.conn)},v=(n,i={})=>{e.item=n,e.conn=i,o(),setTimeout(()=>{e.isShow=!0},10)},o=()=>{e.isShow=!1};return S(()=>{document.body.addEventListener("click",o),document.body.addEventListener("contextmenu",o)}),I(()=>{document.body.removeEventListener("click",o),document.body.removeEventListener("contextmenu",o)}),m({openContextmenu:v}),(n,i)=>{const w=g("SvgIcon");return s(),E(T,{name:"el-zoom-in-center",ref_key:"contextmenuRef",ref:f},{default:L(()=>[M((s(),c("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:F(`top: ${l(d).y+5}px;left: ${l(d).x}px;`),key:Math.random()},[r("ul",V,[(s(!0),c(D,null,j(e.dropdownList,(a,h)=>(s(),c("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:h,onClick:Z=>y(a.contextMenuClickId)},[N(w,{name:a.icon},null,8,["name"]),r("span",null,p(a.txt)+p(e.item.type==="line"?"线":"节点"),1)],8,q))),128))]),K],4)),[[B,e.isShow]])]),_:1},512)}}});const H=O(W,[["__scopeId","data-v-8b118bf6"]]);export{H as default};
