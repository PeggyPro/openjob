import{h as S,r as z,K as I,o as R,a9 as o,j as r,k as i,D as c,x as t,F as V,Z as w,a0 as q,l as _,C as j,B as x,A as f,y as E,v as p,E as K}from"./vue.bd0669ce.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";const M={key:0,class:"table-search-container"},Z=S({name:"makeTableDemoSearch"}),G=S({...Z,props:{search:{type:Array,default:()=>[]}},emits:["search"],setup(d,{emit:h}){const u=d,m=z(),l=I({form:{},isToggle:!1}),C=n=>{!n||n.validate(s=>{if(s)h("search",l.form);else return!1})},T=n=>{!n||(n.resetFields(),h("search",l.form))},U=()=>{if(u.search.length<=0)return!1;u.search.forEach(n=>l.form[n.prop]="")};return R(()=>{U()}),(n,s)=>{const v=o("el-input"),B=o("el-date-picker"),D=o("el-option"),F=o("el-select"),g=o("el-form-item"),b=o("el-col"),A=o("SvgIcon"),y=o("el-button"),N=o("el-row"),$=o("el-form");return u.search.length>0?(r(),i("div",M,[c($,{ref_key:"tableSearchRef",ref:m,model:l.form,size:"default","label-width":"100px",class:"table-form"},{default:t(()=>[c(N,null,{default:t(()=>[(r(!0),i(V,null,w(d.search,(e,k)=>E((r(),p(b,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20",key:k},{default:t(()=>[e.type!==""?(r(),p(g,{key:0,label:e.label,prop:e.prop,rules:[{required:e.required,message:`${e.label}不能为空`,trigger:e.type==="input"?"blur":"change"}]},{default:t(()=>[e.type==="input"?(r(),p(v,{key:0,modelValue:l.form[e.prop],"onUpdate:modelValue":a=>l.form[e.prop]=a,placeholder:e.placeholder,clearable:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","placeholder"])):e.type==="date"?(r(),p(B,{key:1,modelValue:l.form[e.prop],"onUpdate:modelValue":a=>l.form[e.prop]=a,type:"date",placeholder:e.placeholder,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","placeholder"])):e.type==="select"?(r(),p(F,{key:2,modelValue:l.form[e.prop],"onUpdate:modelValue":a=>l.form[e.prop]=a,placeholder:e.placeholder,style:{width:"100%"}},{default:t(()=>[(r(!0),i(V,null,w(e.options,a=>(r(),p(D,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):f("",!0)]),_:2},1032,["label","prop","rules"])):f("",!0)]),_:2},1024)),[[K,k===0||l.isToggle]])),128)),c(b,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:t(()=>[c(g,{class:"table-form-btn","label-width":d.search.length<=1?"10px":"100px"},q({default:t(()=>[_("div",null,[c(y,{size:"default",type:"primary",onClick:s[1]||(s[1]=e=>C(m.value))},{default:t(()=>[x("查询 ")]),_:1}),c(y,{size:"default",type:"info",class:"ml10",onClick:s[2]||(s[2]=e=>T(m.value))},{default:t(()=>[x(" 重置 ")]),_:1})])]),_:2},[d.search.length>1?{name:"label",fn:t(()=>[_("div",{class:"table-form-btn-toggle ml10",onClick:s[0]||(s[0]=e=>l.isToggle=!l.isToggle)},[_("span",null,j(l.isToggle?"收筛选":"展筛选"),1),c(A,{name:l.isToggle?"ele-ArrowUp":"ele-ArrowDown"},null,8,["name"])])]),key:"0"}:void 0]),1032,["label-width"])]),_:1})]),_:1})]),_:1},8,["model"])])):f("",!0)}}});const O=L(G,[["__scopeId","data-v-b5549c8e"]]);export{O as default};
