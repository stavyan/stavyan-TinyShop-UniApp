(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"0760":function(e,t,n){},5379:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.navList,(function(t,n){var r=e.__map(e.orderList,(function(t,n){var r=e._f("time")(t.created_at),a=parseInt(t.order_status,10),i=e._f("orderStatusFilter")(t.order_status),o=e.second(t.created_at);return{$orig:e.__get_orig(t),f0:r,m0:a,f1:i,m1:o}}));return{$orig:e.__get_orig(t),l0:r}})));e.$mp.data=Object.assign({},{$root:{l1:n}})},a=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}))},"74c4":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");r(n("66fd"));var t=r(n("ebc4"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("a821")["createPage"])},"7c2d":function(e,t,n){"use strict";var r=n("0760"),a=n.n(r);a.a},"7d5a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=u(n("c1df")),i=n("802d"),o=n("c4c8");function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return l(e)||d(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function l(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t,n,r,a,i,o){try{var u=e[i](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){v(i,r,a,o,u,"next",e)}function u(e){v(i,r,a,o,u,"throw",e)}o(void 0)}))}}var b=function(){return n.e("components/rf-load-more/rf-load-more").then(n.bind(null,"f97d"))},m=function(){return n.e("components/empty").then(n.bind(null,"d138"))},y=function(){return n.e("components/rf-count-down/rf-count-down").then(n.bind(null,"71e5"))},O={components:{rfLoadMore:b,empty:m,rfCountDown:y},data:function(){return{tabCurrentIndex:0,loadingType:"more",navList:[{state:void 0,text:"全部"},{state:0,text:"待付款"},{state:1,text:"待发货"},{state:2,text:"待收货"},{state:3,text:"评价"}],orderList:[],page:1}},computed:{second:function(){return function(e){return Math.floor(900-(new Date/1e3-e))}}},filters:{time:function(e){return(0,a.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,n=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return n.forEach((function(n){n.key==e&&(t=n.value)})),t}},onShow:function(){},onLoad:function(e){this.tabCurrentIndex=+e.state+1},onPullDownRefresh:function(){this.page=1,this.orderList.length=0,this.getOrderList("refresh")},onReachBottom:function(){this.page++,this.getOrderList()},methods:{timeUp:function(e){this.handleOrderClose(e.id)},handleOrderOperation:function(e,t,n){switch(t){case"detail":this.toOrderDetail(e.id);break;case"evaluation":this.handleOrderEvaluation(e,"evaluation");break;case"close":this.handleOrderClose(e.id);break;case"delete":this.handleOrderDelete(e.id);break;case"shipping":this.$api.msg("后台没写");break;case"refund":this.handleOrderEvaluation(e,"refund",n);break;case"delivery":this.handleOrderTakeDelivery(e.id);break}},handleOrderEvaluation:function(t,n,r){e.navigateTo({url:"/pages/order/orderItem?id=".concat(t.id)})},toOrderDetail:function(t){e.navigateTo({url:"/pages/order/detail?id=".concat(t)})},handleOrderClose:function(){var t=g(r.default.mark((function t(n){var a=this;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showLoading({title:"加载中..."}),t.next=3,this.$get("".concat(o.orderClose),{id:n}).then((function(){a.page=1,a.orderList.length=0,a.getOrderList()}));case 3:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),handleOrderDelete:function(){var t=g(r.default.mark((function t(n){var a=this;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showLoading({title:"加载中..."}),t.next=3,this.$del("".concat(i.orderDelete,"?id=").concat(n),{}).then((function(){a.$api.msg("订单删除成功"),setTimeout((function(){a.page=1,a.orderList.length=0,a.getOrderList()}),500)}));case 3:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),handleOrderTakeDelivery:function(){var t=g(r.default.mark((function t(n){var a=this;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showLoading({title:"加载中..."}),t.next=3,this.$get("".concat(i.orderTakeDelivery),{id:n}).then((function(){a.page=1,a.orderList.length=0,a.getOrderList()}));case 3:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),handlePayment:function(){var t=g(r.default.mark((function t(n){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.navigateTo({url:"/pages/money/pay?id=".concat(n.id)});case 1:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}(),initData:function(){this.getOrderList()},getOrderList:function(){var t=g(r.default.mark((function t(n){var a,o,u,s=this;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=this.tabCurrentIndex,o=this.navList[a],u={},(o.state||0===o.state)&&(u.synthesize_status=o.state),u.page=this.page,e.showLoading({title:"加载中..."}),t.next=8,this.$get("".concat(i.orderList),h({},u)).then((function(t){"refresh"===n&&e.stopPullDownRefresh(),s.loadingType=10===t.data.length?"more":"nomore",s.orderList=[].concat(c(s.orderList),c(t.data))}));case 8:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),changeTab:function(e){this.page=1,this.orderList.length=0,this.tabCurrentIndex=e.target.current,this.getOrderList()},tabClick:function(e){this.page=1,this.orderList.length=0,this.tabCurrentIndex=e},getMoreOrderList:function(){this.page++,this.getOrderList()}}};t.default=O}).call(this,n("a821")["default"])},e8b3:function(e,t,n){"use strict";n.r(t);var r=n("7d5a"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},ebc4:function(e,t,n){"use strict";n.r(t);var r=n("5379"),a=n("e8b3");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("7c2d");var o=n("2877"),u=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports}},[["74c4","common/runtime","common/vendor"]]]);