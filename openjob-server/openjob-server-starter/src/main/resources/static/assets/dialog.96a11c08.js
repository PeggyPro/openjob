import{_ as G}from"./preload-helper.101896b7.js";import{h as I,ap as H,r as Q,K as W,a9 as p,j as m,k as c,D as o,x as a,l as X,B as b,C as _,u as s,F as g,Z as P,y as f,E as y,v as x}from"./vue.bd0669ce.js";import{u as Y}from"./vue-i18n.cjs.2a00fe88.js";import{d as ee}from"./data.a7368d0d.js";import{a as le}from"./index.7c5dfd4e.js";import{_ as oe}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./index.3f2ce315.js";import"./request.386cf962.js";import"./storage.b628b270.js";import"./index.c3b4fd97.js";import"./index.aa7cec2e.js";import"./themeConfig.cb88f033.js";import"./index.f64fca3a.js";import"./index.e8f4f9cf.js";import"./index.ee56f1f7.js";import"./header.9390c1c5.js";const ae={class:"system-role-dialog-container"},re={class:"dialog-footer"},te=I({name:"systemRoleDialog"}),se=I({...te,emits:["refresh"],setup(ne,{expose:j,emit:C}){const F=H(()=>G(()=>import("./monaco.c8c1dd6a.js").then(r=>r.a),["assets/monaco.c8c1dd6a.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/monaco.82344604.css"])),{t:n}=Y(),U=le(),v=Q(),e=W({rowState:{inputProcessor:!0,kettleProcessor:!1,httpProcessor:!1,shellProcessor:!1,shardingParams:!1,paramsProcessor:!1},syncEditor:!1,shellEditor:{editorStyle:"width: 95%;height: 260px;",language:"shell"},paramsEditor:{editorStyle:"width: 95%;height: 260px;"},paramsExtEditor:{editorStyle:"width: 95%;height: 120px;"},shellType:[{value:"unix",label:"unix"},{value:"windows",label:"windows"}],processorType:[{value:"processor",label:"processor"},{value:"shell",label:"shell"},{value:"kettle",label:"kettle"},{value:"http",label:"http"}],contentType:[{value:"plaintext",label:"plaintext"},{value:"json",label:"json"},{value:"yaml",label:"yaml"},{value:"properties",label:"properties"}],fromRules:{},appList:[],ruleForm:{id:0,appId:0,processorType:"java",processorInfo:"",shellProcessorInfo:"",shellProcessorType:"unix",kettleProcessorInfo:"",kettleProcessorType:"unix",paramsType:"text",params:"",extendParamsType:"text",extendParams:"",id:0,name:""},menuData:[],menuProps:{children:"children",label:"label"},dialog:{isShowDialog:!1,type:"",title:""}}),D=async r=>{var t;(t=v.value)==null||t.clearValidate(),await A(r),e.syncEditor=!0,await O(r),e.syncEditor=!1,r.processorType=="shell"?(e.paramsEditor.editorStyle="width: 95%;height: 60px;",e.paramsExtEditor.editorStyle="width: 95%;height: 60px;"):(e.paramsEditor.editorStyle="width: 95%;height: 260px;",e.paramsExtEditor.editorStyle="width: 95%;height: 120px;"),e.dialog.title=n("message.job.job.executeJobTitle"),e.dialog.isShowDialog=!0},A=async r=>{e.appList=await ee(),e.ruleForm.appId=r.appId},w=()=>{e.dialog.isShowDialog=!1},B=()=>{w()},L=async r=>{!r||await r.validate(t=>{if(t)M();else return!1})},M=async()=>{await U.execute({id:e.ruleForm.id,params:e.ruleForm.params,extendParams:e.ruleForm.extendParams}),w(),C("refresh")},R=r=>{e.ruleForm.paramsType=r},J=r=>{e.ruleForm.extendParamsType=r},z=r=>{e.ruleForm.shellProcessorInfo=r},N=r=>{e.ruleForm.params=r},$=r=>{e.ruleForm.extendParams=r},O=async r=>{e.ruleForm.id=r.id,e.ruleForm.appId=r.appId,e.ruleForm.name=r.name,e.ruleForm.processorType=r.processorType,e.ruleForm.processorInfo=r.processorInfo;const t=r.processorType;t=="shell"?(e.rowState.inputProcessor=!1,e.rowState.shellProcessor=!0,e.rowState.kettleProcessor=!1,e.rowState.paramsProcessor=!1,e.rowState.httpProcessor=!1,e.ruleForm.shellProcessorInfo=r.shellProcessorInfo,e.ruleForm.shellProcessorType=r.shellProcessorType):t=="kettle"?(e.rowState.inputProcessor=!1,e.rowState.shellProcessor=!1,e.rowState.kettleProcessor=!0,e.rowState.paramsProcessor=!1,e.rowState.httpProcessor=!1,e.ruleForm.kettleProcessorType=r.kettleProcessorType,e.ruleForm.kettleProcessorInfo=r.kettleProcessorInfo):t=="http"?(e.rowState.inputProcessor=!1,e.rowState.shellProcessor=!1,e.rowState.kettleProcessor=!1,e.rowState.paramsProcessor=!1,e.rowState.httpProcessor=!0):(e.rowState.inputProcessor=!0,e.rowState.shellProcessor=!1,e.rowState.kettleProcessor=!1,e.rowState.paramsProcessor=!0,e.rowState.httpProcessor=!1,e.ruleForm.paramsType=r.paramsType,e.ruleForm.params=r.params,e.ruleForm.extendParamsType=r.extendParamsType,e.ruleForm.extendParams=r.extendParams)};return j({openDialog:D}),(r,t)=>{const T=p("el-input"),u=p("el-form-item"),d=p("el-col"),i=p("el-row"),V=p("el-option"),k=p("el-select"),h=p("el-radio"),S=p("el-radio-group"),K=p("el-form"),E=p("el-button"),Z=p("el-dialog");return m(),c("div",ae,[o(Z,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":t[10]||(t[10]=l=>e.dialog.isShowDialog=l),width:"800"},{footer:a(()=>[X("span",re,[o(E,{onClick:B,size:"default"},{default:a(()=>[b(_(s(n)("message.commonBtn.cancel")),1)]),_:1}),o(E,{type:"primary",onClick:t[9]||(t[9]=l=>L(v.value)),size:"default"},{default:a(()=>[b(_(s(n)("message.commonBtn.confirm")),1)]),_:1})])]),default:a(()=>[o(K,{ref_key:"appDialogFormRef",ref:v,model:e.ruleForm,"label-width":"110px",rules:e.fromRules,size:"default"},{default:a(()=>[o(i,null,{default:a(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.name"),prop:"name"},{default:a(()=>[o(T,{modelValue:e.ruleForm.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.ruleForm.name=l),clearable:"",disabled:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),o(i,null,{default:a(()=>[o(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.application"),prop:"appId"},{default:a(()=>[o(k,{modelValue:e.ruleForm.appId,"onUpdate:modelValue":t[1]||(t[1]=l=>e.ruleForm.appId=l),class:"m-2",filterable:"",placeholder:s(n)("message.commonMsg.emptySelect"),style:{width:"100%"},disabled:""},{default:a(()=>[(m(!0),c(g,null,P(e.appList,l=>(m(),x(V,{key:l.id,label:l.label,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),o(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.processorType"),prop:"processorType"},{default:a(()=>[o(k,{modelValue:e.ruleForm.processorType,"onUpdate:modelValue":t[2]||(t[2]=l=>e.ruleForm.processorType=l),class:"m-2",placeholder:s(n)("message.commonMsg.emptySelect"),style:{width:"100%"},disabled:""},{default:a(()=>[(m(!0),c(g,null,P(e.processorType,l=>(m(),x(V,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),f(o(i,null,{default:a(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.processorInfo"),prop:"processorInfo"},{default:a(()=>[o(T,{modelValue:e.ruleForm.processorInfo,"onUpdate:modelValue":t[3]||(t[3]=l=>e.ruleForm.processorInfo=l),disabled:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},512),[[y,e.rowState.inputProcessor]]),f(o(i,null,{default:a(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.kettleCommand"),prop:"kettleProcessorInfo"},{default:a(()=>[o(T,{modelValue:e.ruleForm.kettleProcessorInfo,"onUpdate:modelValue":t[4]||(t[4]=l=>e.ruleForm.kettleProcessorInfo=l),disabled:""},null,8,["modelValue"])]),_:1},8,["label"]),o(S,{modelValue:e.ruleForm.kettleProcessorType,"onUpdate:modelValue":t[5]||(t[5]=l=>e.ruleForm.kettleProcessorType=l),style:{"margin-left":"110px"}},{default:a(()=>[(m(!0),c(g,null,P(e.shellType,l=>(m(),x(h,{key:l.value,label:l.label,disabled:""},{default:a(()=>[b(_(l.value),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},512),[[y,e.rowState.kettleProcessor]]),f(o(i,null,{default:a(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.processorInfo"),prop:"shellProcessorInfo"},{default:a(()=>[o(s(F),{ref:"shellProcessorMonacoEditor",editorStyle:e.shellEditor.editorStyle,language:e.shellEditor.language,value:e.ruleForm.shellProcessorInfo,syncValue:e.syncEditor,readOnly:!0,onUpdateContent:z},null,8,["editorStyle","language","value","syncValue"])]),_:1},8,["label"]),o(S,{modelValue:e.ruleForm.shellProcessorType,"onUpdate:modelValue":t[6]||(t[6]=l=>e.ruleForm.shellProcessorType=l),style:{"margin-left":"110px"}},{default:a(()=>[(m(!0),c(g,null,P(e.shellType,l=>(m(),x(h,{key:l.value,label:l.label,disabled:""},{default:a(()=>[b(_(l.value),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},512),[[y,e.rowState.shellProcessor]]),f(o(i,null,{default:a(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.paramsType"),prop:"paramsType"},{default:a(()=>[o(S,{modelValue:e.ruleForm.paramsType,"onUpdate:modelValue":t[7]||(t[7]=l=>e.ruleForm.paramsType=l)},{default:a(()=>[(m(!0),c(g,null,P(e.contentType,l=>(m(),x(h,{key:l.value,label:l.label,onClick:q=>R(l.value)},{default:a(()=>[b(_(l.value),1)]),_:2},1032,["label","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},512),[[y,e.rowState.paramsProcessor]]),f(o(i,null,{default:a(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.params"),prop:"params"},{default:a(()=>[o(s(F),{ref:"JobExecuteParamsMonacoEditor",editorStyle:e.paramsEditor.editorStyle,language:e.ruleForm.paramsType,value:e.ruleForm.params,syncValue:e.syncEditor,onUpdateContent:N},null,8,["editorStyle","language","value","syncValue"])]),_:1},8,["label"])]),_:1})]),_:1},512),[[y,e.rowState.paramsProcessor]]),f(o(i,null,{default:a(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.extendParamsType"),prop:"extendParamsType"},{default:a(()=>[o(S,{modelValue:e.ruleForm.extendParamsType,"onUpdate:modelValue":t[8]||(t[8]=l=>e.ruleForm.extendParamsType=l)},{default:a(()=>[(m(!0),c(g,null,P(e.contentType,l=>(m(),x(h,{key:l.value,label:l.label,onClick:q=>J(l.value)},{default:a(()=>[b(_(l.value),1)]),_:2},1032,["label","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},512),[[y,e.rowState.paramsProcessor]]),f(o(i,null,{default:a(()=>[o(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(u,{label:s(n)("message.job.job.extendParams"),prop:"extendParams"},{default:a(()=>[o(s(F),{ref:"JobExecuteExtParamsMonacoEditor",editorStyle:e.paramsExtEditor.editorStyle,language:e.ruleForm.extendParamsType,value:e.ruleForm.extendParams,syncValue:e.syncEditor,onUpdateContent:$},null,8,["editorStyle","language","value","syncValue"])]),_:1},8,["label"])]),_:1})]),_:1},512),[[y,e.rowState.paramsProcessor]])]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});const Te=oe(se,[["__scopeId","data-v-f23fbc82"]]);export{Te as default};
