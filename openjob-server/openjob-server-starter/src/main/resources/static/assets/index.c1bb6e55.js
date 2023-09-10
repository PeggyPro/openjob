import{_ as A}from"./preload-helper.101896b7.js";import{u as fe}from"./vue-i18n.cjs.2a00fe88.js";import{L as ge}from"./storage.b628b270.js";import{a as be,u as _e}from"./index.88f3b739.js";import{g as L,a as h}from"./formatTime.b2c6dda0.js";import{d as ye,h as we,a as ve,f as O,e as Se,i as Te}from"./data.65169b13.js";import{g as xe}from"./header.9390c1c5.js";import{h as F,aH as De,r as x,ap as P,K as V,o as Ie,a9 as m,ac as he,j as c,k as j,l as U,D as e,x as s,u as p,F as C,Z as z,B as y,C as f,y as je,v as D,A as ke}from"./vue.bd0669ce.js";import{J as q}from"./index.f64fca3a.js";import{ay as B}from"./index.e8f4f9cf.js";import{_ as Re}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./request.c46845dc.js";import"./index.d2f052aa.js";import"./index.aa7cec2e.js";import"./themeConfig.cb88f033.js";import"./index.510ba4c9.js";import"./index.ee56f1f7.js";const Ve={class:"system-role-container layout-padding"},Ce={class:"system-role-padding layout-padding-auto layout-padding-view"},ze={class:"system-user-search mb15"},Be=F({name:"systemRole"}),Ne=F({...Be,setup(Me){const{t:o}=fe(),H=ye(),N=De(),k=_e(),I=x(),J=P(()=>A(()=>import("./drawer-standalone.7b589e4c.js"),["assets/drawer-standalone.7b589e4c.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/vue-i18n.cjs.2a00fe88.js","assets/_commonjsHelpers.35101cd5.js","assets/index.88f3b739.js","assets/request.c46845dc.js","assets/storage.b628b270.js","assets/index.d2f052aa.js","assets/index.aa7cec2e.js","assets/themeConfig.cb88f033.js","assets/index.f64fca3a.js","assets/index.e8f4f9cf.js","assets/index.ee56f1f7.js","assets/data.65169b13.js","assets/index.510ba4c9.js","assets/header.9390c1c5.js"])),K=P(()=>A(()=>import("./drawer-distribute.8d4cb9fb.js"),["assets/drawer-distribute.8d4cb9fb.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/vue-i18n.cjs.2a00fe88.js","assets/_commonjsHelpers.35101cd5.js","assets/data.65169b13.js","assets/index.510ba4c9.js","assets/request.c46845dc.js","assets/storage.b628b270.js","assets/index.d2f052aa.js","assets/index.aa7cec2e.js","assets/themeConfig.cb88f033.js","assets/index.f64fca3a.js","assets/index.e8f4f9cf.js","assets/index.ee56f1f7.js","assets/header.9390c1c5.js","assets/index.85cc70c8.js","assets/formatTime.b2c6dda0.js"])),M=x();x(),x();const $=x(),g=V({appSelect:[],jobSelect:[],statusSelect:[]}),n=V({form:{appId:"",jobId:"",status:"",id:"",dateSelect:[null,null]},rules:{}}),d=V({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:20}}});g.statusSelect=we();const u=async()=>{d.tableData.loading=!0;let r={namespaceId:ge.get("nid"),appId:n.form.appId,jobId:n.form.jobId,status:n.form.status,id:n.form.id,beginTime:0,endTime:0,page:d.tableData.param.pageNum,size:d.tableData.param.pageSize};n.form.dateSelect[0]!==null&&(r.beginTime=L(n.form.dateSelect[0])),n.form.dateSelect[1]!==null&&(r.endTime=L(n.form.dateSelect[1]));let a=await k.getList(r);d.tableData.data=[],a.list.forEach(function(l){d.tableData.data.push({id:l.id,workflowId:l.workflowId,namespaceId:l.namespaceId,appId:l.appId,appName:l.appName,jobId:l.jobId,jobName:l.jobName,processorType:l.processorType,processorInfo:l.processorInfo,executeType:l.executeType,dispatchVersion:l.dispatchVersion,paramsType:l.paramsType,params:l.params,extendParamsType:l.extendParamsType,extendParams:l.extendParams,timeExpressionType:l.timeExpressionType,timeExpression:l.timeExpression,executeStrategy:l.executeStrategy,executeOnce:l.executeOnce,failRetryTimes:l.failRetryTimes,failRetryInterval:l.failRetryInterval,concurrency:l.concurrency,status:l.status,failStatus:l.failStatus,workerAddress:l.workerAddress,executeTime:h(l.executeTime),completeTime:h(l.completeTime),lastReportTime:h(l.lastReportTime),createTime:h(l.createTime)})}),d.tableData.total=a.total,setTimeout(()=>{d.tableData.loading=!1},500)},Z=async()=>{},E=async(r,a)=>{n.form.jobId="";let l=await be().getList({namespaceId:xe(),appId:r,page:1,size:1024});g.jobSelect=[],l.list.forEach(function(b){g.jobSelect.push({id:b.id,label:b.name})}),a&&await u()},R=r=>{!r||r.validate(a=>{if(a)u();else return!1})},G=()=>{n.form.appId="",n.form.jobId="",n.form.status="",n.form.id="",n.form.dateSelect=[null,null],u()},Q=(r,a)=>{if(a.executeType=="standalone"&&a.timeExpressionType!="secondDelay"){M.value.openDrawer(a);return}$.value.openDrawer(a)},W=r=>{q.confirm(o("message.job.instance.stopTitle")+`(${r.id})?`,o("message.commonMsg.tip"),{confirmButtonText:o("message.commonBtn.confirm"),cancelButtonText:o("message.commonBtn.cancel"),type:"warning"}).then(async()=>{let a=await k.stop({id:r.id});if(Number(a.type)>0){B.error(o("message.commonMsg.stopFail"));return}await u(),B.success(o("message.commonMsg.stopSuccess"))}).catch(()=>{})},X=r=>{q.confirm(o("message.job.instance.deleteTitle")+`(${r.id})?`,o("message.commonMsg.tip"),{confirmButtonText:o("message.commonBtn.confirm"),cancelButtonText:o("message.commonBtn.cancel"),type:"warning"}).then(async()=>{await k.delete({id:r.id}),await u(),B.success(o("message.commonMsg.deleteSuccess"))}).catch(()=>{})},Y=r=>{d.tableData.param.pageSize=r,u()},ee=r=>{d.tableData.param.pageNum=r,u()};return Ie(async()=>{let r=N.currentRoute.value.query.id,a=N.currentRoute.value.query.appId;g.appSelect=await ve(),r!=null&&a!=null&&(await E(Number(a),!1),n.form.appId=Number(a),n.form.jobId=Number(r)),await u()}),(r,a)=>{const l=m("el-option"),b=m("el-select"),w=m("el-form-item"),_=m("el-col"),ae=m("el-input"),te=m("el-date-picker"),le=m("ele-Search"),v=m("el-icon"),S=m("el-button"),oe=m("ele-RefreshRight"),se=m("el-row"),ne=m("el-form"),i=m("el-table-column"),re=m("el-tag"),pe=m("ele-View"),me=m("ele-Stopwatch"),de=m("ele-Delete"),ie=m("el-table"),ue=m("el-pagination"),ce=he("loading");return c(),j("div",Ve,[U("div",Ce,[U("div",ze,[e(ne,{ref_key:"tableSearchRef",ref:I,model:n.form,rules:n.rules},{default:s(()=>[e(se,null,{default:s(()=>[e(_,{xs:8,sm:12,md:8,lg:4,xl:4,class:"mb20"},{default:s(()=>[e(w,{label:p(o)("message.app.name"),prop:"appId"},{default:s(()=>[e(b,{modelValue:n.form.appId,"onUpdate:modelValue":a[0]||(a[0]=t=>n.form.appId=t),filterable:"",class:"m-2",placeholder:p(o)("message.commonMsg.all"),size:"default",style:{width:"90%"}},{default:s(()=>[(c(!0),j(C,null,z(g.appSelect,t=>(c(),D(l,{key:t.id,label:t.label,value:t.id,onClick:T=>E(t.id,!0)},null,8,["label","value","onClick"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(_,{xs:8,sm:12,md:8,lg:4,xl:4,class:"mb20"},{default:s(()=>[e(w,{label:p(o)("message.job.job.name"),prop:"jobId"},{default:s(()=>[e(b,{modelValue:n.form.jobId,"onUpdate:modelValue":a[2]||(a[2]=t=>n.form.jobId=t),filterable:"",placeholder:p(o)("message.commonMsg.all"),size:"default",style:{width:"90%"}},{default:s(()=>[(c(!0),j(C,null,z(g.jobSelect,t=>(c(),D(l,{key:t.id,label:t.label,value:t.id,onClick:a[1]||(a[1]=T=>R(I.value))},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(_,{xs:8,sm:12,md:8,lg:4,xl:4,class:"mb20"},{default:s(()=>[e(w,{label:p(o)("message.job.job.status"),prop:"status"},{default:s(()=>[e(b,{modelValue:n.form.status,"onUpdate:modelValue":a[4]||(a[4]=t=>n.form.status=t),filterable:"",placeholder:p(o)("message.commonMsg.all"),size:"default",style:{width:"90%"}},{default:s(()=>[(c(!0),j(C,null,z(g.statusSelect,t=>(c(),D(l,{key:t.id,label:t.label,value:t.id,onClick:a[3]||(a[3]=T=>R(I.value))},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(_,{xs:8,sm:12,md:8,lg:4,xl:4,class:"mb20"},{default:s(()=>[e(w,{label:p(o)("message.job.instance.id"),prop:"id"},{default:s(()=>[e(ae,{modelValue:n.form.id,"onUpdate:modelValue":a[5]||(a[5]=t=>n.form.id=t),size:"default",style:{width:"95%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(_,{xs:8,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:s(()=>[e(w,{label:p(o)("message.dateMsg.rangeMsg"),prop:"taskId"},{default:s(()=>[e(te,{modelValue:n.form.dateSelect,"onUpdate:modelValue":a[6]||(a[6]=t=>n.form.dateSelect=t),type:"datetimerange",shortcuts:p(H),"range-separator":"-",size:"default","start-placeholder":p(o)("message.dateMsg.startDate"),"end-placeholder":p(o)("message.dateMsg.endDate")},null,8,["modelValue","shortcuts","start-placeholder","end-placeholder"])]),_:1},8,["label"])]),_:1}),e(_,{xs:8,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:s(()=>[e(S,{size:"default",type:"primary",class:"ml10",onClick:a[7]||(a[7]=t=>R(I.value))},{default:s(()=>[e(v,null,{default:s(()=>[e(le)]),_:1}),y(" "+f(r.$t("message.commonBtn.query")),1)]),_:1}),e(S,{size:"default",type:"primary",class:"ml10",onClick:a[8]||(a[8]=t=>G())},{default:s(()=>[e(v,null,{default:s(()=>[e(oe)]),_:1}),y(" "+f(r.$t("message.commonBtn.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),je((c(),D(ie,{data:d.tableData.data,style:{width:"100%"}},{default:s(()=>[e(i,{prop:"appName",label:p(o)("message.app.name"),"show-overflow-tooltip":""},null,8,["label"]),e(i,{prop:"id",label:p(o)("message.job.instance.id"),"show-overflow-tooltip":""},null,8,["label"]),e(i,{prop:"jobName",label:p(o)("message.job.job.name"),"show-overflow-tooltip":""},null,8,["label"]),e(i,{prop:"status",label:p(o)("message.job.instance.status"),"show-overflow-tooltip":""},{default:s(t=>[e(re,{class:"ml-2",type:p(O)(t.row.status).tag},{default:s(()=>[y(f(p(O)(t.row.status).label)+f(p(Se)(t.row.failStatus))+f(p(Te)(t.row.status,t.row.executeOnce)),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e(i,{prop:"workerAddress",label:p(o)("message.job.instance.workerAddress"),"show-overflow-tooltip":""},null,8,["label"]),e(i,{prop:"executeTime",label:p(o)("message.job.instance.executeTime"),"show-overflow-tooltip":""},null,8,["label"]),e(i,{prop:"completeTime",label:p(o)("message.job.instance.completeTime"),"show-overflow-tooltip":""},null,8,["label"]),e(i,{prop:"lastReportTime",label:p(o)("message.job.instance.lastReportTime"),"show-overflow-tooltip":""},null,8,["label"]),e(i,{prop:"createTime",label:p(o)("message.job.instance.createTime"),"show-overflow-tooltip":""},null,8,["label"]),e(i,{label:p(o)("message.commonMsg.operation"),width:"300"},{default:s(t=>[e(S,{type:"primary",size:"default",onClick:T=>Q("update",t.row)},{default:s(()=>[e(v,null,{default:s(()=>[e(pe)]),_:1}),y(" "+f(r.$t("message.commonBtn.log")),1)]),_:2},1032,["onClick"]),t.row.status===5?(c(),D(S,{key:0,type:"warning",size:"default",onClick:T=>W(t.row)},{default:s(()=>[e(v,null,{default:s(()=>[e(me)]),_:1}),y(" "+f(r.$t("message.commonBtn.stop")),1)]),_:2},1032,["onClick"])):ke("",!0),e(S,{type:"danger",size:"default",onClick:T=>X(t.row)},{default:s(()=>[e(v,null,{default:s(()=>[e(de)]),_:1}),y(" "+f(r.$t("message.commonBtn.delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[ce,d.tableData.loading]]),e(ue,{onSizeChange:Y,onCurrentChange:ee,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":d.tableData.param.pageNum,"onUpdate:current-page":a[9]||(a[9]=t=>d.tableData.param.pageNum=t),background:"","page-size":d.tableData.param.pageSize,"onUpdate:page-size":a[10]||(a[10]=t=>d.tableData.param.pageSize=t),layout:"total, sizes, prev, pager, next, jumper",total:d.tableData.total},null,8,["current-page","page-size","total"])]),e(p(J),{ref_key:"StandaloneDrawerRef",ref:M,onRefresh:a[11]||(a[11]=t=>u())},null,512),e(p(K),{ref_key:"DistributeDrawerRef",ref:$,onRefresh:a[12]||(a[12]=t=>Z())},null,512)])}}});const ea=Re(Ne,[["__scopeId","data-v-a3710154"]]);export{ea as default};
