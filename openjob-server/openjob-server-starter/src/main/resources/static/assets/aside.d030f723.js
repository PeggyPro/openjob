import{_ as C}from"./preload-helper.101896b7.js";import{h as A,ap as b,r as D,ar as m,K as I,a as L,b as N,w as g,a9 as S,y as O,E as P,u as a,j as F,k as j,D as f,x as w,v as q,A as z,n as H}from"./vue.bd0669ce.js";import{p as $}from"./index.aa7cec2e.js";import{u as K}from"./routesList.32d6bb58.js";import{u as G}from"./themeConfig.cb88f033.js";import{u as J}from"./tagsViewRoutes.054c4a6f.js";import{e as l}from"./mitt.7f99bbc0.js";import"./storage.b628b270.js";const Q={class:"h100"},U=A({name:"layoutAside"}),ae=A({...U,setup(X){const R=b(()=>C(()=>import("./index.5540ac82.js"),["assets/index.5540ac82.js","assets/vue.bd0669ce.js","assets/themeConfig.cb88f033.js","assets/logo-mini.323e783b.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/index.880bac10.css"])),T=b(()=>C(()=>import("./vertical.45525909.js"),["assets/vertical.45525909.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/themeConfig.cb88f033.js","assets/other.eb054d56.js","assets/index.ee56f1f7.js","assets/index.c7ec7e7a.js","assets/_commonjsHelpers.35101cd5.js","assets/index.aa7cec2e.js","assets/keepAliveNames.f05bad75.js","assets/routesList.32d6bb58.js","assets/storage.b628b270.js","assets/userInfo.f7c9dd73.js","assets/loading.3e617409.js","assets/loading.70fbfd85.css","assets/tagsViewRoutes.054c4a6f.js","assets/request.c46845dc.js","assets/index.d2f052aa.js","assets/vue-i18n.cjs.2a00fe88.js","assets/index.f64fca3a.js","assets/index.e8f4f9cf.js","assets/index.8b89e2e0.css","assets/toolsValidate.7cb139e2.js"])),r=D(),p=K(),E=G(),M=J(),{routesList:B}=m(p),{themeConfig:i}=m(E),{isTagsViewCurrenFull:V}=m(M),n=I({menuList:[],clientWidth:0}),W=L(()=>{const{layout:e,isCollapse:t,menuBar:s}=i.value,o=["#FFFFFF","#FFF","#fff","#ffffff"].includes(s)?"layout-el-aside-br-color":"";if(n.clientWidth<=1e3)if(t){document.body.setAttribute("class","el-popup-parent--hidden");const x=document.querySelector(".layout-container"),d=document.createElement("div");return d.setAttribute("class","layout-aside-mobile-mode"),x.appendChild(d),d.addEventListener("click",u),[o,"layout-aside-mobile","layout-aside-mobile-open"]}else return u(),[o,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"?t?[o,"layout-aside-pc-1"]:[o,"layout-aside-pc-220"]:t?[o,"layout-aside-pc-64"]:[o,"layout-aside-pc-220"]}),k=L(()=>{let{layout:e,isShowLogo:t}=i.value;return t&&e==="defaults"||t&&e==="columns"}),u=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var s;(s=e==null?void 0:e.parentNode)==null||s.removeChild(e)},300),document.body.clientWidth<1e3&&(i.value.isCollapse=!1),document.body.setAttribute("class","")},c=()=>{if(i.value.layout==="columns")return!1;n.menuList=y(B.value)},y=e=>e.filter(t=>{var s;return!((s=t.meta)!=null&&s.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=y(t.children)),t)),h=e=>{n.clientWidth=e},_=e=>{let{layout:t}=i.value;if(t!=="columns")return!1;e||l.emit("restoreDefault"),p.setColumnsMenuHover(e)};return N(()=>{h(document.body.clientWidth),c(),l.on("setSendColumnsChildren",e=>{n.menuList=e.children}),l.on("setSendClassicChildren",e=>{let{layout:t,isClassicSplitMenu:s}=i.value;t==="classic"&&s&&(n.menuList=[],n.menuList=e.children)}),l.on("getBreadcrumbIndexSetFilterRoutes",()=>{c()}),l.on("layoutMobileResize",e=>{h(e.clientWidth),u()})}),g(i.value,e=>{e.isShowLogoChange!==e.isShowLogo&&r.value&&r.value.update()}),g($.state,e=>{let{layout:t,isClassicSplitMenu:s}=e.themeConfig.themeConfig;if(t==="classic"&&s)return!1;c()},{deep:!0}),(e,t)=>{const s=S("el-scrollbar"),v=S("el-aside");return O((F(),j("div",Q,[f(v,{class:H(["layout-aside",a(W)])},{default:w(()=>[a(k)?(F(),q(a(R),{key:0})):z("",!0),f(s,{class:"flex-auto",ref_key:"layoutAsideScrollbarRef",ref:r,onMouseenter:t[0]||(t[0]=o=>_(!0)),onMouseleave:t[1]||(t[1]=o=>_(!1))},{default:w(()=>[f(a(T),{menuList:n.menuList},null,8,["menuList"])]),_:1},512)]),_:1},8,["class"])],512)),[[P,!a(V)]])}}});export{ae as default};