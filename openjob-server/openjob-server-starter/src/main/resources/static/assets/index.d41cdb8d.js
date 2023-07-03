import{h as x,r as C,K as A,o as D,a9 as d,j as w,k as v,D as m,x as _,F as T,Z as k,l,B as I,J as q,v as M,q as b,C as E,n as O,aE as R,aF as B}from"./vue.bd0669ce.js";import{_ as P}from"./_plugin-vue_export-helper.c27b6911.js";var y=globalThis&&globalThis.__assign||function(){return(y=Object.assign||function(i){for(var e,n=1,o=arguments.length;n<o;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i}).apply(this,arguments)},F=function(){function i(e,n,o){var t=this;this.endVal=n,this.options=o,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(s){t.startTime||(t.startTime=s);var r=s-t.startTime;t.remaining=t.duration-r,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(r,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(r,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(r/t.duration);var a=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=a?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),r<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(s){var r,a,u,h,g=s<0?"-":"";r=Math.abs(s).toFixed(t.options.decimalPlaces);var f=(r+="").split(".");if(a=f[0],u=f.length>1?t.options.decimal+f[1]:"",t.options.useGrouping){h="";for(var p=0,V=a.length;p<V;++p)p!==0&&p%3==0&&(h=t.options.separator+h),h=a[V-p-1]+h;a=h}return t.options.numerals&&t.options.numerals.length&&(a=a.replace(/[0-9]/g,function(c){return t.options.numerals[+c]}),u=u.replace(/[0-9]/g,function(c){return t.options.numerals[+c]})),g+t.options.prefix+a+u+t.options.suffix},this.easeOutExpo=function(s,r,a,u){return a*(1-Math.pow(2,-10*s/u))*1024/1023+r},this.options=y(y({},this.defaults),o),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(s){return s()})},this.handleScroll(this)))}return i.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,o=e.el.getBoundingClientRect(),t=o.top+o.height+window.pageYOffset;t<n&&t>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>t&&!e.paused&&e.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var n=e-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var o=this.countDown?1:-1;this.endVal=e+o*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(e){var n=this.formattingFn(e);this.el.tagName==="INPUT"?this.el.value=n:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=n:this.el.innerHTML=n},i.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},i.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}();const S=i=>(R("data-v-6fdeb3d1"),i=i(),B(),i),j={class:"layout-pd"},U={class:"countup-card-item-title pb3"},L=S(()=>l("div",{class:"countup-card-item-title-num pb6"},null,-1)),Y={class:"countup-card-item-tip pb3"},z=S(()=>l("div",{class:"countup-card-item-tip-num"},null,-1)),G={class:"flex-warp"},H={class:"flex-warp-item"},J={class:"flex-warp-item-box"},K=x({name:"funCountup"}),Z=x({...K,setup(i){const e=C([]),n=A({topCardItemList:[{title:"今日访问人数",titleNum:"123",tip:"在场人数",tipNum:"911",color:"--el-color-primary",iconColor:"#ffcb47",icon:"iconfont icon-jinridaiban"},{title:"实验室总数",titleNum:"123",tip:"使用中",tipNum:"611",color:"--el-color-success",iconColor:"#70cf41",icon:"iconfont icon-AIshiyanshi"},{title:"申请人数（月）",titleNum:"123",tip:"通过人数",tipNum:"911",color:"--el-color-warning",iconColor:"#dfae64",icon:"iconfont icon-shenqingkaiban"},{title:"销售情况",titleNum:"123",tip:"销售数",tipNum:"911",color:"--el-color-danger",iconColor:"#e56565",icon:"iconfont icon-ditu"}]}),o=()=>{q(()=>{e.value.forEach(s=>{new F(s.querySelector(".countup-card-item-title-num"),Math.random()*1e4).start(),new F(s.querySelector(".countup-card-item-tip-num"),Math.random()*1e3).start()})})},t=()=>{o()};return D(()=>{o()}),(s,r)=>{const a=d("el-alert"),u=d("el-col"),h=d("el-row"),g=d("ele-RefreshRight"),f=d("el-icon"),p=d("el-button"),V=d("el-card");return w(),v("div",j,[m(V,{shadow:"hover",header:"数字滚动演示"},{default:_(()=>[m(a,{title:"感谢优秀的 `countup.js`，项目地址：https://github.com/inorganik/countUp.js",type:"success",closable:!1,class:"mb15"}),m(h,{gutter:20},{default:_(()=>[(w(!0),v(T,null,k(n.topCardItemList,(c,N)=>(w(),M(u,{sm:6,class:"mb15",key:N},{default:_(()=>[l("div",{class:"countup-card-item countup-card-item-box",style:b({background:`var(${c.color})`})},[l("div",{class:"countup-card-item-flex",ref_for:!0,ref_key:"topCardItemRefs",ref:e},[l("div",U,E(c.title),1),L,l("div",Y,E(c.tip),1),z],512),l("i",{class:O(c.icon),style:b({color:c.iconColor})},null,6)],4)]),_:2},1024))),128))]),_:1}),l("div",G,[l("div",H,[l("div",J,[m(p,{type:"primary",size:"default",onClick:t},{default:_(()=>[m(f,null,{default:_(()=>[m(g)]),_:1}),I(" 重置/刷新数值 ")]),_:1})])])])]),_:1})])}}});const W=P(Z,[["__scopeId","data-v-6fdeb3d1"]]);export{W as default};
