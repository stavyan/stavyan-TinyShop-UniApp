(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderItem"],{4371:function(t,e,n){"use strict";n.r(e);var a=n("a936"),r=n("c573");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("dd52");var u=n("2877"),i=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"50d0":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");a(n("66fd"));var e=a(n("4371"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},a88c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a")),r=i(n("c7c7")),o=n("802d"),u=i(n("c1df"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,r,o,u){try{var i=t[o](u),s=i.value}catch(c){return void n(c)}i.done?e(s):Promise.resolve(s).then(a,r)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function u(t){s(o,a,r,u,i,"next",t)}function i(t){s(o,a,r,u,i,"throw",t)}u(void 0)}))}}var l=function(){return n.e("components/rf-load-more/rf-load-more").then(n.bind(null,"f97d"))},f=function(){return n.e("components/uni-tag/uni-tag").then(n.bind(null,"d719"))},d=function(){return n.e("components/rf-swipe-action/rf-swipe-action").then(n.bind(null,"9b83"))},p=function(){return Promise.all([n.e("common/vendor"),n.e("components/rf-swipe-action-item/rf-swipe-action-item")]).then(n.bind(null,"5449"))},v={components:{rfSwipeAction:d,rfSwipeActionItem:p,rfLoadMore:l,uniTag:f},data:function(){return{orderItemList:[],errorImg:r.default,page:1,loadingType:"more",token:null,options:[],orderStatus:null}},filters:{time:function(t){return(0,u.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")},filterIsEvaluate:function(t){var e=["未评价","已评价","已追评"];return e[parseInt(t,10)]},filterEvaluateType:function(t){var e=["primary","warning","success"];return e[parseInt(t,10)]},filterProductStatus:function(t){var e=null;if(0!==parseInt(t.refund_status,10)){var n=[{key:1,value:"退款申请"},{key:2,value:"等待退货"},{key:3,value:"等待确认收货"},{key:4,value:"等待确认退款"},{key:5,value:"同意退款"},{key:-1,value:"退款已拒绝"},{key:-2,value:"退款已关闭"},{key:-3,value:"退款不通过"}];n.forEach((function(n){n.key==t.refund_status&&(e=n.value)}))}else if(4===parseInt(t.order_status,10)){var a=[{key:0,value:"未评价"},{key:1,value:"已评价"},{key:2,value:"已追评"}];a.forEach((function(n){n.key==t.is_evaluate&&(e=n.value)}))}else{var r=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];r.forEach((function(n){n.key==t.order_status&&(e=n.value)}))}return e}},computed:{itemOptions:function(){return function(t,e){var n=[],a=this.orderStatus;if(1===parseInt(a,10))switch(e){case"0":n.push({text:"仅退款"});break;case"1":n.push({text:"取消",style:{backgroundColor:"rgb(254,156,1)"}});break;default:break}else if(2===parseInt(a,10))switch(e){case"0":n.push({text:"退款/退货"});break;case"1":n.push({text:"取消",style:{backgroundColor:"rgb(254,156,1)"}});break;default:break}else if(4===parseInt(a,10))switch(t){case"0":n.push({text:"评价",style:{backgroundColor:"rgb(254,156,1)"}});break;case"1":n.push({text:"追加评价",style:{backgroundColor:"rgb(255,58,49)"}});break;case 2:break;default:break}return n}}},onLoad:function(t){this.initData(t)},methods:{bindClick:function(e){if("仅退款"===e.content.text){if(0!==parseInt(e.data.refund_status,10))return void t.showToast({title:"您已经提交了退款申请",icon:"none"});this.goRefund(e.data,1)}else if("退款/退货"===e.content.text){if(0!==parseInt(e.data.refund_status,10))return void t.showToast({title:"您已经提交了退货申请",icon:"none"});this.goRefund(e.data,2)}else"取消"===e.content.text||"取消"===e.content.text?this.handleCloseOrderRefundApply(e.data.id):"评价"===e.content.text?this.goEvaluation(e.data):"追加评价"===e.content.text&&this.goEvaluation(e.data,"add")},handleCloseOrderRefundApply:function(){var e=c(a.default.mark((function e(n){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$post("".concat(o.closeOrderRefundApply),{id:n}).then((function(e){200===e.code?t.navigateBack({delta:1}):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),initData:function(){var e=c(a.default.mark((function e(n){var r=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.token=t.getStorageSync("accessToken")||void 0,e.next=3,this.$get("".concat(o.orderDetail),{id:n.id}).then((function(e){200===e.code?(r.orderItemList=e.data.product,r.orderStatus=e.data.order_status):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),initOptions:function(t){if(1===parseInt(t,10))this.options.push({text:"退款"}),this.options.push({text:"取消退款",style:{backgroundColor:"rgb(254,156,1)"}});else if(2===parseInt(t,10))this.options.push({text:"退货"}),this.options.push({text:"取消退货",style:{backgroundColor:"rgb(254,156,1)"}});else if(3===parseInt(t,10)){var e=[],n=[];this.orderItemList.forEach((function(t){0===parseInt(t.is_evaluate)?e.push({text:"评价",style:{backgroundColor:"rgb(254,156,1)"}}):1===parseInt(t.is_evaluate)&&n.push({text:"追加评价",style:{backgroundColor:"rgb(255,58,49)"}})})),this.options=e||n||[]}},onImageError:function(t){this.orderItemList[t].picture=this.errorImg},goEvaluation:function(e,n){t.navigateTo({url:"/pages/evaluation/evaluation?data=".concat(JSON.stringify(e),"&type=").concat(n)})},goRefund:function(e,n){t.navigateTo({url:"/pages/refund/refund?data=".concat(JSON.stringify(e),"&refundType=").concat(n)})}}};e.default=v}).call(this,n("543d")["default"])},a936:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.orderItemList,(function(e,n){var a=t.itemOptions(e.is_evaluate,e.refund_status),r=t._f("filterProductStatus")(e),o=t._f("time")(e.created_at);return{$orig:t.__get_orig(e),m0:a,f0:r,f1:o}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}))},c573:function(t,e,n){"use strict";n.r(e);var a=n("a88c"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=r.a},dd52:function(t,e,n){"use strict";var a=n("fe04"),r=n.n(a);r.a},fe04:function(t,e,n){}},[["50d0","common/runtime","common/vendor"]]]);