(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoice/invoice"],{"0661":function(t,n,e){"use strict";e.r(n);var i=e("a50e"),o=e("cd26");for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);e("62b8");var u=e("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=a.exports},"5c84":function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("0661"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"62b8":function(t,n,e){"use strict";var i=e("da58"),o=e.n(i);o.a},a234:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("a34a")),c=e("802d");function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,o,c,u){try{var a=t[c](u),r=a.value}catch(s){return void e(s)}a.done?n(r):Promise.resolve(r).then(i,o)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var c=t.apply(n,e);function u(t){a(c,i,o,u,r,"next",t)}function r(t){a(c,i,o,u,r,"throw",t)}u(void 0)}))}}var s={data:function(){return{timeOutEvent:0,source:0,invoiceList:[]}},onShow:function(){this.initData()},onLoad:function(t){this.source=t.source},methods:{goTouchStart:function(n){var e=this;clearTimeout(this.timeOutEvent),this.timeOutEvent=0,this.timeOutEvent=setTimeout((function(){t.showModal({content:"确定要删除该收货地址吗",success:function(i){i.confirm&&e.$del("".concat(c.invoiceDel,"?id=").concat(n)).then((function(n){200===n.code?e.getInvoiceList():t.showToast({title:n.message,icon:"none"})}))}})}),500)},goTouchEnd:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent},goTouchMove:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},initData:function(){this.getInvoiceList()},getInvoiceList:function(){var n=r(o.default.mark((function n(){var e=this;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showLoading({title:"加载中..."}),n.next=3,this.$get("".concat(c.invoiceList)).then((function(n){200===n.code?e.invoiceList=n.data:t.showToast({title:n.message,icon:"none"})})).catch((function(t){console.log(i(t," at pages/invoice/invoice.vue:100"))}));case 3:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),checkAddress:function(n){1==this.source&&(this.$api.prePage().invoiceItem=n,t.navigateBack())},addInvoice:function(n,e){t.navigateTo({url:"/pages/invoice/invoiceManage?type=".concat(n,"&id=").concat(e&&e.id||void 0)})},refreshList:function(t,n){this.invoiceList.unshift(t),console.log(i(t,n," at pages/invoice/invoice.vue:120"))}}};n.default=s}).call(this,e("6e42")["default"],e("0de9")["default"])},a50e:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.invoiceList,(function(n,e){var i=parseInt(n.is_default,10),o=parseInt(n.type,10);return{$orig:t.__get_orig(n),m0:i,m1:o}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},o=[];e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}))},cd26:function(t,n,e){"use strict";e.r(n);var i=e("a234"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=o.a},da58:function(t,n,e){}},[["5c84","common/runtime","common/vendor"]]]);