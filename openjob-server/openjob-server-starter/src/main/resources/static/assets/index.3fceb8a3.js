import{l as m}from"./logo-mini.323e783b.js";import{h as s,K as _,a9 as t,j as p,k as d,D as a,x as l,u as i}from"./vue.bd0669ce.js";const u={class:"svg-demo-container layout-pd"},v=s({name:"makeSvgDemo"}),z=s({...v,setup(f){const r=_({tableData:[{a1:"name",a2:"svg 图标组件名字 / svg 路径 url",a3:"string",a4:"",a5:""},{a1:"size",a2:"svg 大小",a3:"number",a4:"",a5:14},{a1:"color",a2:"svg 颜色",a3:"string",a4:"",a5:""}]});return(g,h)=>{const o=t("SvgIcon"),n=t("el-card"),e=t("el-table-column"),c=t("el-table");return p(),d("div",u,[a(n,{shadow:"hover",header:"svgIcon：演示（支持本地svg）"},{default:l(()=>[a(o,{name:"iconfont icon-shuju1",color:"red",size:30}),a(o,{name:"ele-Trophy",color:"var(--el-color-primary)",size:30}),a(o,{name:"fa fa-flag-checkered",color:"#09f",size:30}),a(o,{name:i(m),color:"#09f",size:30},null,8,["name"])]),_:1}),a(n,{shadow:"hover",header:"svgIcon：参数",class:"mt15"},{default:l(()=>[a(c,{data:r.tableData,style:{width:"100%"}},{default:l(()=>[a(e,{prop:"a1",label:"参数"}),a(e,{prop:"a2",label:"说明"}),a(e,{prop:"a3",label:"类型"}),a(e,{prop:"a4",label:"可选值"}),a(e,{prop:"a5",label:"默认值"})]),_:1},8,["data"])]),_:1})])}}});export{z as default};
