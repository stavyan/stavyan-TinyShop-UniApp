(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoice/invoiceManage"],{"17fd":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");a(n("66fd"));var e=a(n("b6e7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])},"18e8":function(t,e,n){},6029:function(t,e,n){"use strict";var a=n("18e8"),i=n.n(a);i.a},"77b5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a")),i=n("802d");n("2b74");function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n,a,i,o,r){try{var c=t[o](r),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(a,i)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function r(t){s(o,a,i,r,c,"next",t)}function c(t){s(o,a,i,r,c,"throw",t)}r(void 0)}))}}var f={data:function(){return{invoiceData:{type:2,title:"",duty_paragraph:"",is_default:""},invoiceType:[{name:"公司",value:1},{name:"个人",value:2}]}},onLoad:function(t){this.initData(t)},methods:{initData:function(){var e=l(a.default.mark((function e(n){var i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i="新增发票","edit"!==n.type){e.next=5;break}return i="编辑发票",e.next=5,this.getInvoiceDetail(n.id);case 5:this.manageType=n.type,t.setNavigationBarTitle({title:i});case 7:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),getInvoiceDetail:function(){var e=l(a.default.mark((function e(n){var o=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(i.invoiceDetail),{id:n}).then(function(){var e=l(a.default.mark((function e(n){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:200===n.code?o.invoiceData=n.data:t.showToast({title:n.message,icon:"none"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),handleTitleChange:function(t){this.invoiceData.title=t.detail.value},handleInvoiceTypeChange:function(t){this.invoiceData.type=t.detail.value},handleDutyParagraphChange:function(t){console.log(t.detail),this.invoiceData.duty_paragraph=t.detail.value},switchChange:function(t){this.invoiceData.is_default=t.detail.value?"1":"0"},confirm:function(){var e=this.invoiceData;e.title?1!==e.type||e.duty_paragraph?"edit"===this.manageType?this.handleInvoiceUpdate(e):this.handleInvoiceCreate(e):t.showToast({title:"请填写发票税号",icon:"none"}):t.showToast({title:"请填写发票抬头",icon:"none"})},handleInvoiceUpdate:function(){var e=l(a.default.mark((function e(n){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"发票修改中..."}),console.log(n),e.next=4,this.$put("".concat(i.invoiceUpdate,"?id=").concat(n.id),{type:n.type,title:n.title,duty_paragraph:n.duty_paragraph,is_default:n.is_default}).then((function(e){200===e.code?(t.showToast({title:"恭喜您, 发票修改成功！",icon:"none"}),t.navigateBack({url:"/pages/invoice/invoice"})):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),handleInvoiceCreate:function(){var e=l(a.default.mark((function e(n){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"创建中..."}),e.next=3,this.$post("".concat(i.invoiceCreate),c({},n)).then((function(e){200===e.code?(t.showToast({title:"恭喜您, 发票添加成功！",icon:"none"}),t.navigateBack({url:"/pages/invoice/invoice"})):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()}};e.default=f}).call(this,n("a821")["default"])},a6fa:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,parseInt(t.invoiceData.type,10));t.$mp.data=Object.assign({},{$root:{m0:n}})},i=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}))},b6e7:function(t,e,n){"use strict";n.r(e);var a=n("a6fa"),i=n("f932");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("6029");var r=n("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},f932:function(t,e,n){"use strict";n.r(e);var a=n("77b5"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}},[["17fd","common/runtime","common/vendor"]]]);