import{h as m,a as n,u as t,j as i,k as l,v as S,z,q as c,l as I,n as _}from"./vue.bd0669ce.js";const $=["src"],k=m({name:"svgIcon"}),x=m({...k,props:{name:{type:String},size:{type:Number,default:()=>14},color:{type:String}},setup(p){const e=p,u=["https","http","/src","/assets","data:image","/"],a=n(()=>e==null?void 0:e.name),h=n(()=>{var s;return(s=e==null?void 0:e.name)==null?void 0:s.startsWith("ele-")}),d=n(()=>u.find(s=>{var o;return(o=e.name)==null?void 0:o.startsWith(s)})),r=n(()=>`font-size: ${e.size}px;color: ${e.color};`),y=n(()=>`width: ${e.size}px;height: ${e.size}px;display: inline-block;overflow: hidden;`),f=n(()=>{const s=[];return["-webkit","-ms","-o","-moz"].forEach(g=>s.push(`${g}-filter: drop-shadow(${e.color} 30px 0);`)),`width: ${e.size}px;height: ${e.size}px;position: relative;left: -${e.size}px;${s.join("")}`});return(s,o)=>t(h)?(i(),l("i",{key:0,class:"el-icon",style:c(t(r))},[(i(),S(z(t(a))))],4)):t(d)?(i(),l("div",{key:1,style:c(t(y))},[I("img",{src:t(a),style:c(t(f))},null,12,$)],4)):(i(),l("i",{key:2,class:_(t(a)),style:c(t(r))},null,6))}});export{x as default};
