(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invoice-invoice"],{"0661":function(e,t,i){"use strict";i.r(t);var n=i("d382"),o=i("cd26");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("65bc");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"489ae065",null);t["default"]=s.exports},"49f6":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var o=n(i("3b8d")),a=i("802d"),r={data:function(){return{timeOutEvent:0,source:0,invoiceList:[]}},onShow:function(){this.initData()},onLoad:function(e){this.source=e.source},methods:{goTouchStart:function(e){var t=this;clearTimeout(this.timeOutEvent),this.timeOutEvent=0,this.timeOutEvent=setTimeout((function(){uni.showModal({content:"确定要删除该收货地址吗",success:function(i){i.confirm&&t.$del("".concat(a.invoiceDel,"?id=").concat(e)).then((function(e){200===e.code?t.getInvoiceList():uni.showToast({title:e.message,icon:"none"})}))}})}),500)},goTouchEnd:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent},goTouchMove:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},initData:function(){this.getInvoiceList()},getInvoiceList:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(a.invoiceList)).then((function(e){200===e.code?t.invoiceList=e.data:uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkAddress:function(e){1==this.source&&(this.$api.prePage().invoiceItem=e,uni.navigateBack())},addInvoice:function(e,t){uni.navigateTo({url:"/pages/invoice/invoiceManage?type=".concat(e,"&id=").concat(t&&t.id||void 0)})},refreshList:function(e,t){this.invoiceList.unshift(e),console.log(e,t)}}};t.default=r},"5d8b":function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,"uni-page-body[data-v-489ae065]{padding-bottom:%?120?%}.content[data-v-489ae065]{position:relative}.list[data-v-489ae065]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-489ae065]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-489ae065]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-489ae065]{font-size:%?24?%;color:#fa436a;margin-right:%?10?%;background:#fffafb;border:1px solid #ffb4c7;border-radius:%?4?%;padding:%?4?% %?10?%;line-height:1}.address-box .address[data-v-489ae065]{font-size:%?30?%;color:#303133}.u-box[data-v-489ae065]{font-size:%?28?%;color:#909399;margin-top:%?16?%}.u-box .name[data-v-489ae065]{margin-right:%?30?%}.icon-bianji[data-v-489ae065]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#909399;padding-left:%?30?%}.add-btn[data-v-489ae065]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}.tips[data-v-489ae065]{display:block;padding:%?16?% %?30?% %?10?%;color:#fa436a;font-size:%?24?%}",""])},"65bc":function(e,t,i){"use strict";var n=i("d768"),o=i.n(n);o.a},"802d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uploadImage=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var n="/tiny-shop/v1/member/member/index";t.memberInfo=n;var o="/tiny-shop/v1/member/member/update";t.memberUpdate=o;var a="/tiny-shop/v1/member/address/index";t.addressList=a;var r="/tiny-shop/v1/member/address/default";t.addressDefault=r;var s="/tiny-shop/v1/member/address/view";t.addressDetail=s;var d="/tiny-shop/v1/member/address/create";t.addressCreate=d;var c="/tiny-shop/v1/member/address/update";t.addressUpdate=c;var v="/tiny-shop/v1/member/address/delete";t.addressDelete=v;var l="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=l;var u="/tiny-shop/v1/member/coupon/index";t.myCouponList=u;var p="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=p;var f="/tiny-shop/v1/member/coupon/clear";t.couponClear=f;var b="/tiny-shop/v1/member/order/index";t.orderList=b;var m="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=m;var h="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=h;var y="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=y;var g="/tiny-shop/v1/member/order/view";t.orderDetail=g;var x="/tiny-shop/v1/member/order/delete";t.orderDelete=x;var w="/tiny-shop/v1/member/footprint/index";t.footPrintList=w;var k="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=k;var L="/tiny-shop/v1/member/collect/index";t.collectList=L;var D="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=D;var C="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=C;var _="/tiny-shop/v1/member/invoice/index";t.invoiceList=_;var E="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=E;var T="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=T;var I="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=I;var O="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=O;var $="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=$;var M="https://www.yllook.com/api/v1/file/images";t.uploadImage=M},cd26:function(e,t,i){"use strict";i.r(t);var n=i("49f6"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},d382:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content b-t"},[e._l(e.invoiceList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"list b-b",on:{click:function(i){i=e.$handleEvent(i),e.checkAddress(t)}}},[i("v-uni-view",{staticClass:"wrapper",on:{touchstart:function(i){i=e.$handleEvent(i),e.goTouchStart(t.id)},touchmove:function(t){t=e.$handleEvent(t),e.goTouchMove(t)},touchend:function(t){t=e.$handleEvent(t),e.goTouchEnd(t)}}},[i("v-uni-view",{staticClass:"address-box"},[1===parseInt(t.is_default,10)?i("v-uni-text",{staticClass:"tag"},[e._v("默认")]):e._e(),i("v-uni-text",{staticClass:"address"},[e._v(e._s(t.title))])],1),i("v-uni-view",{staticClass:"u-box"},[i("v-uni-text",{staticClass:"name"},[e._v(e._s(1===parseInt(t.type,10)?"公司":"个人"))]),i("v-uni-text",{staticClass:"mobile"},[e._v(e._s(t.duty_paragraph||"个人发票无税号"))])],1)],1),i("v-uni-text",{staticClass:"yticon icon-bianji",on:{click:function(i){i.stopPropagation(),i=e.$handleEvent(i),e.addInvoice("edit",t)}}})],1)})),i("v-uni-text",{staticClass:"tips"},[e._v("提示：长按可删除当前发票。最多只能存在一个默认发票。")]),i("v-uni-button",{staticClass:"add-btn",on:{click:function(t){t=e.$handleEvent(t),e.addInvoice("add")}}},[e._v("新增发票")])],2)},o=[];i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o}))},d768:function(e,t,i){var n=i("5d8b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("2bed65bc",n,!0,{sourceMap:!1,shadowMode:!1})}}]);