(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collection/collection"],{"14a1":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=l(e("a34a")),c=e("802d"),r=l(e("c7c7")),a=e("2b74"),u=l(e("c1df"));function l(t){return t&&t.__esModule?t:{default:t}}function s(t){return h(t)||d(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function p(t,n,e,o,i,c,r){try{var a=t[c](r),u=a.value}catch(l){return void e(l)}a.done?n(u):Promise.resolve(u).then(o,i)}function g(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var c=t.apply(n,e);function r(t){p(c,o,i,r,a,"next",t)}function a(t){p(c,o,i,r,a,"throw",t)}r(void 0)}))}}var m=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"09c2"))},v=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-swipe-action/uni-swipe-action")]).then(e.bind(null,"0cc7"))},b=function(){return e.e("components/empty").then(e.bind(null,"d138"))},w={components:{uniLoadMore:m,uniSwipeAction:v,empty:b},data:function(){return{collectionList:[],errorImg:r.default,page:1,loadingType:"more",token:null,options:[{text:"取消收藏",style:{backgroundColor:"#fa436a"}}]}},filters:{time:function(t){return(0,u.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")}},onLoad:function(){this.initData()},onPageScroll:function(t){},onPullDownRefresh:function(){this.page=1,this.collectionList=[],this.getCollectionList("refresh")},onReachBottom:function(){this.page++,this.getCollectionList()},methods:{bindClick:function(){var n=g(i.default.mark((function n(e){var c=this;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("取消收藏"!==e.content.text){n.next=4;break}return t.showLoading({title:"取消收藏中..."}),n.next=4,this.$del("".concat(a.collectDel,"?id=").concat(e.data.id),{page:this.page}).then((function(n){200===n.code?(t.showToast({title:"取消收藏成功"}),c.page=1,c.collectionList.length=0,c.getCollectionList()):t.showToast({title:n.message,icon:"none"})})).catch((function(t){console.log(o(t," at pages/collection/collection.vue:108"))}));case 4:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),initData:function(){this.token=t.getStorageSync("accessToken")||void 0,this.token&&this.getCollectionList()},getCollectionList:function(){var n=g(i.default.mark((function n(e){var r=this;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showLoading({title:"加载中..."}),n.next=3,this.$get("".concat(c.collectList),{page:this.page}).then((function(n){"refresh"===e&&t.stopPullDownRefresh(),200===n.code?(r.loadingType=10===n.data.length?"more":"nomore",r.collectionList=[].concat(s(r.collectionList),s(n.data))):t.showToast({title:n.message,icon:"none"})})).catch((function(t){console.log(o(t," at pages/collection/collection.vue:135"))}));case 3:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),onImageError:function(t){this.collectionList[t].product.picture=this.errorImg},goProduct:function(n){var e="/pages/product/product?id=".concat(n);this.token||(e="/pages/public/login"),t.navigateTo({url:e})}}};n.default=w}).call(this,e("6e42")["default"],e("0de9")["default"])},"1a3c":function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");o(e("66fd"));var n=o(e("be59"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"618a":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.collectionList,(function(n,e){var o=t._f("time")(n.created_at);return{$orig:t.__get_orig(n),f0:o}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}))},"7d65":function(t,n,e){"use strict";var o=e("a3c4"),i=e.n(o);i.a},"9a1a":function(t,n,e){"use strict";e.r(n);var o=e("14a1"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a},a3c4:function(t,n,e){},be59:function(t,n,e){"use strict";e.r(n);var o=e("618a"),i=e("9a1a");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("7d65");var r=e("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=a.exports}},[["1a3c","common/runtime","common/vendor"]]]);