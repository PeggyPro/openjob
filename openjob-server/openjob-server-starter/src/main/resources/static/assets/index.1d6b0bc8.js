import{g as x}from"./_commonjsHelpers.35101cd5.js";import{h as O,r as T,a9 as v,j as A,k as I,D as j,x as S,B as L}from"./vue.bd0669ce.js";var w={exports:{}};(function(P,M){(function(f,n){P.exports=n()})(window,function(){return function(m){var f={};function n(r){if(f[r])return f[r].exports;var s=f[r]={i:r,l:!1,exports:{}};return m[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=m,n.c=f,n.d=function(r,s,d){n.o(r,s)||Object.defineProperty(r,s,{enumerable:!0,get:d})},n.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,s){if(s&1&&(r=n(r)),s&8||s&4&&typeof r=="object"&&r&&r.__esModule)return r;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:r}),s&2&&typeof r!="string")for(var y in r)n.d(d,y,function(i){return r[i]}.bind(null,y));return d},n.n=function(r){var s=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(s,"a",s),s},n.o=function(r,s){return Object.prototype.hasOwnProperty.call(r,s)},n.p="",n(n.s=0)}({"./src/index.js":function(m,f,n){n.r(f),n("./src/sass/index.scss");var r=n("./src/js/init.js"),s=r.default.init;typeof window<"u"&&(window.printJS=s),f.default=s},"./src/js/browser.js":function(m,f,n){n.r(f);var r={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!r.isIE()&&!!window.StyleMedia},isChrome:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!d.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};f.default=r},"./src/js/functions.js":function(m,f,n){n.r(f),n.d(f,"addWrapper",function(){return y}),n.d(f,"capitalizePrint",function(){return i}),n.d(f,"collectStyles",function(){return l}),n.d(f,"addHeader",function(){return e}),n.d(f,"cleanUp",function(){return u}),n.d(f,"isRawHTML",function(){return p});var r=n("./src/js/modal.js"),s=n("./src/js/browser.js");function d(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(c){return typeof c}:d=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},d(t)}function y(t,a){var c="font-family:"+a.font+" !important; font-size: "+a.font_size+" !important; width:100%;";return'<div style="'+c+'">'+t+"</div>"}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,a){for(var c=document.defaultView||window,h="",b=c.getComputedStyle(t,""),E=0;E<b.length;E++)(a.targetStyles.indexOf("*")!==-1||a.targetStyle.indexOf(b[E])!==-1||o(a.targetStyles,b[E]))&&b.getPropertyValue(b[E])&&(h+=b[E]+":"+b.getPropertyValue(b[E])+";");return h+="max-width: "+a.maxWidth+"px !important; font-size: "+a.font_size+" !important;",h}function o(t,a){for(var c=0;c<t.length;c++)if(d(a)==="object"&&a.indexOf(t[c])!==-1)return!0;return!1}function e(t,a){var c=document.createElement("div");if(p(a.header))c.innerHTML=a.header;else{var h=document.createElement("h1"),b=document.createTextNode(a.header);h.appendChild(b),h.setAttribute("style",a.headerStyle),c.appendChild(h)}t.insertBefore(c,t.childNodes[0])}function u(t){t.showModal&&r.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var a="mouseover";(s.default.isChrome()||s.default.isFirefox())&&(a="focus");var c=function h(){window.removeEventListener(a,h),t.onPrintDialogClose();var b=document.getElementById(t.frameId);b&&b.remove()};window.addEventListener(a,c)}function p(t){var a=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return a.test(t)}},"./src/js/html.js":function(m,f,n){n.r(f);var r=n("./src/js/functions.js"),s=n("./src/js/print.js");function d(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(e){return typeof e}:d=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(l)}f.default={print:function(o,e){var u=i(o.printable)?o.printable:document.getElementById(o.printable);if(!u){window.console.error("Invalid HTML element id: "+o.printable);return}o.printableElement=y(u,o),o.header&&Object(r.addHeader)(o.printableElement,o),s.default.send(o,e)}};function y(l,o){for(var e=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),p=0;p<u.length;p++)if(o.ignoreElements.indexOf(u[p].id)===-1){var t=y(u[p],o);e.appendChild(t)}switch(o.scanStyles&&l.nodeType===1&&e.setAttribute("style",Object(r.collectStyles)(l,o)),l.tagName){case"SELECT":e.value=l.value;break;case"CANVAS":e.getContext("2d").drawImage(l,0,0);break}return e}function i(l){return d(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(m,f,n){n.r(f);var r=n("./src/js/functions.js"),s=n("./src/js/print.js"),d=n("./src/js/browser.js");f.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(o){var e=document.createElement("img");if(e.setAttribute("style",i.imageStyle),e.src=o,d.default.isFirefox()){var u=e.src;e.src=u}var p=document.createElement("div");p.appendChild(e),i.printableElement.appendChild(p)}),i.header&&Object(r.addHeader)(i.printableElement,i),s.default.send(i,l)}}},"./src/js/init.js":function(m,f,n){n.r(f);var r=n("./src/js/browser.js"),s=n("./src/js/modal.js"),d=n("./src/js/pdf.js"),y=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),o=n("./src/js/json.js");function e(p){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(a){return typeof a}:e=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e(p)}var u=["pdf","html","image","json","raw-html"];f.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(C){throw C},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},a=arguments[0];if(a===void 0)throw new Error("printJS expects at least 1 attribute.");switch(e(a)){case"string":t.printable=encodeURI(a),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=a.printable,t.fallbackPrintable=typeof a.fallbackPrintable<"u"?a.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var c in t)c==="printable"||c==="fallbackPrintable"||(t[c]=typeof a[c]<"u"?a[c]:t[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+e(a))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||u.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&s.default.show(t),t.onLoadingStart&&t.onLoadingStart();var h=document.getElementById(t.frameId);h&&h.parentNode.removeChild(h);var b=document.createElement("iframe");switch(r.default.isFirefox()?b.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):b.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),b.setAttribute("id",t.frameId),t.type!=="pdf"&&(b.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(g){b.srcdoc+='<link rel="stylesheet" href="'+g+'">'})),b.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(r.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var E=window.open(t.fallbackPrintable,"_blank");E.focus(),t.onIncompatibleBrowser()}catch(g){t.onError(g)}finally{t.showModal&&s.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else d.default.print(t,b);break;case"image":l.default.print(t,b);break;case"html":y.default.print(t,b);break;case"raw-html":i.default.print(t,b);break;case"json":o.default.print(t,b);break}}}},"./src/js/json.js":function(m,f,n){n.r(f);var r=n("./src/js/functions.js"),s=n("./src/js/print.js");function d(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(o){return typeof o}:d=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d(i)}f.default={print:function(l,o){if(d(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(e){return{field:d(e)==="object"?e.field:e,displayName:d(e)==="object"?e.displayName:e,columnSize:d(e)==="object"&&e.columnSize?e.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(r.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=y(l),s.default.send(l,o)}};function y(i){var l=i.printable,o=i.properties,e='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(e+="<thead>"),e+="<tr>";for(var u=0;u<o.length;u++)e+='<th style="width:'+o[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(r.capitalizePrint)(o[u].displayName)+"</th>";e+="</tr>",i.repeatTableHeader&&(e+="</thead>"),e+="<tbody>";for(var p=0;p<l.length;p++){e+="<tr>";for(var t=0;t<o.length;t++){var a=l[p],c=o[t].field.split(".");if(c.length>1)for(var h=0;h<c.length;h++)a=a[c[h]];else a=a[o[t].field];e+='<td style="width:'+o[t].columnSize+i.gridStyle+'">'+a+"</td>"}e+="</tr>"}return e+="</tbody></table>",e}},"./src/js/modal.js":function(m,f,n){n.r(f);var r={show:function(d){var y="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",y),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var o=document.createElement("div");o.setAttribute("class","printClose"),o.setAttribute("id","printClose"),l.appendChild(o);var e=document.createElement("span");e.setAttribute("class","printSpinner"),l.appendChild(e);var u=document.createTextNode(d.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){r.close()})},close:function(){var d=document.getElementById("printJS-Modal");d&&d.parentNode.removeChild(d)}};f.default=r},"./src/js/pdf.js":function(m,f,n){n.r(f);var r=n("./src/js/print.js"),s=n("./src/js/functions.js");f.default={print:function(i,l){if(i.base64){var o=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});d(i,l,o);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var e=new window.XMLHttpRequest;e.responseType="arraybuffer",e.addEventListener("error",function(){Object(s.cleanUp)(i),i.onError(e.statusText,e)}),e.addEventListener("load",function(){if([200,201].indexOf(e.status)===-1){Object(s.cleanUp)(i),i.onError(e.statusText,e);return}d(i,l,e.response)}),e.open("GET",i.printable,!0),e.send()}};function d(y,i,l){var o=new window.Blob([l],{type:"application/pdf"});o=window.URL.createObjectURL(o),i.setAttribute("src",o),r.default.send(y,i)}},"./src/js/print.js":function(m,f,n){n.r(f);var r=n("./src/js/browser.js"),s=n("./src/js/functions.js"),d={send:function(e,u){document.getElementsByTagName("body")[0].appendChild(u);var p=document.getElementById(e.frameId);p.onload=function(){if(e.type==="pdf"){r.default.isFirefox()?setTimeout(function(){return y(p,e)},1e3):y(p,e);return}var t=p.contentWindow||p.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.type!=="pdf"&&e.style){var a=document.createElement("style");a.innerHTML=e.style,t.head.appendChild(a)}var c=t.getElementsByTagName("img");c.length>0?i(Array.from(c)).then(function(){return y(p,e)}):y(p,e)}}};function y(o,e){try{if(o.focus(),r.default.isEdge()||r.default.isIE())try{o.contentWindow.document.execCommand("print",!1,null)}catch{o.contentWindow.print()}else o.contentWindow.print()}catch(u){e.onError(u)}finally{r.default.isFirefox()&&(o.style.visibility="hidden",o.style.left="-1px"),Object(s.cleanUp)(e)}}function i(o){var e=o.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(e)}function l(o){return new Promise(function(e){var u=function p(){!o||typeof o.naturalWidth>"u"||o.naturalWidth===0||!o.complete?setTimeout(p,500):e()};u()})}f.default=d},"./src/js/raw-html.js":function(m,f,n){n.r(f);var r=n("./src/js/print.js");f.default={print:function(d,y){d.printableElement=document.createElement("div"),d.printableElement.setAttribute("style","width:100%"),d.printableElement.innerHTML=d.printable,r.default.send(d,y)}}},"./src/sass/index.scss":function(m,f,n){},0:function(m,f,n){m.exports=n("./src/index.js")}}).default})})(w);const D=x(w.exports),B=O({name:"funPrintJs"}),W=O({...B,setup(P){const M=T(),m=()=>{D({printable:M.value,type:"html",css:["//at.alicdn.com/t/c/font_2298093_rnp72ifj3ba.css","//unpkg.com/element-plus/dist/index.css"],scanStyles:!1,style:"@media print{.mb15{margin-bottom:15px;}.el-button--small i.iconfont{font-size: 12px !important;margin-right: 5px;}}"})};return(f,n)=>{const r=v("el-alert"),s=v("SvgIcon"),d=v("el-button"),y=v("el-card");return A(),I("div",{ref_key:"printRef",ref:M,class:"layout-pd"},[j(y,{shadow:"hover",header:"打印演示"},{default:S(()=>[j(r,{title:"感谢优秀的 `print-js`，项目地址：https://github.com/crabbly/Print.js。请在打印弹窗 `更多设置` 中开启 `背景图形。`",type:"success",closable:!1,class:"mb15"}),j(d,{onClick:m,size:"default",type:"primary"},{default:S(()=>[j(s,{name:"iconfont icon-dayin"}),L(" 点击打印演示 ")]),_:1})]),_:1})],512)}}});export{W as default};
