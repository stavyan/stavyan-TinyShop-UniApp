(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"098a":function(t,e,n){"use strict";var r=n("b94b"),i=n.n(r);i.a},"2c17":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=n("c4c8");function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return u(t)||c(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){f(o,r,i,a,s,"next",t)}function s(t){f(o,r,i,a,s,"throw",t)}a(void 0)}))}}var g=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"09c2"))},m=function(){return n.e("components/empty").then(n.bind(null,"d138"))},v={components:{uniLoadMore:g,empty:m},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",contentTop:"96upx",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,salesOrder:0,cateList:[],goodsList:[],keyword:null,cateParams:null,page:1,filterParams:{},isShowNavBar:!0}},onLoad:function(t){this.initData(t)},onShow:function(){navigator&&(this.headerTop=document.getElementsByTagName("uni-page-head")[0]&&document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px")},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.filterParams={},this.page=1,this.goodsList=[],this.getProductList()},onReachBottom:function(){this.page++,this.getProductList()},methods:{initData:function(t){if(navigator&&(this.headerTop=document.getElementsByTagName("uni-page-head")[0]&&document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px"),this.cateId=t.cate_id,t.params&&(this.cateParams=JSON.parse(t.params),1===this.cateParams.guessYouLike))return this.isShowNavBar=!1,this.contentTop="20upx",void this.getGuessYouLikeList();this.keyword=t.keyword,this.getProductCate(),this.getProductList()},getProductList:function(){var e=p(r.default.mark((function e(n){var o,s=this;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o={},this.keyword?o.keyword=this.keyword:this.cateId?o.cate_id=this.cateId:this.cateParams&&(o=d({},this.cateParams)),o.page=this.page,t.showLoading({title:"加载中..."}),e.next=6,this.$get("".concat(i.productList),d({},o,{},this.filterParams)).then((function(e){"refresh"===n&&t.stopPullDownRefresh(),200===e.code?(s.loadingType=10===e.data.length?"more":"nomore",s.goodsList=[].concat(a(s.goodsList),a(e.data))):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(t)}));case 6:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),getGuessYouLikeList:function(){var e=p(r.default.mark((function e(n){var o=this;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(i.guessYouLikeList),{}).then((function(e){"refresh"===n&&t.stopPullDownRefresh(),200===e.code?(o.loadingType=10===e.data.length?"more":"nomore",o.goodsList=[].concat(a(o.goodsList),a(e.data))):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),getProductCate:function(){var e=p(r.default.mark((function e(){var n=this;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(i.productCate)).then((function(e){200===e.code?(n.cateList=e.data,n.cateList.unshift({title:"全部商品",id:""})):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),loadData:function(){var e=p(r.default.mark((function e(){var n,i,o,a=this,s=arguments;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.length>0&&void 0!==s[0]?s[0]:"add",i=s.length>1?s[1]:void 0,"add"!==n){e.next=8;break}if("nomore"!==this.loadingType){e.next=5;break}return e.abrupt("return");case 5:this.loadingType="loading",e.next=9;break;case 8:this.loadingType="more";case 9:return e.next=11,this.$api.json("goodsList");case 11:o=e.sent,"refresh"===n&&(this.goodsList=[]),1===this.filterIndex&&o.sort((function(t,e){return e.sales-t.sales})),2===this.filterIndex&&o.sort((function(t,e){return 1==a.priceOrder?t.price-e.price:e.price-t.price})),this.goodsList=this.goodsList.concat(o),this.loadingType=this.goodsList.length>20?"nomore":"more","refresh"===n&&(1==i?t.hideLoading():t.stopPullDownRefresh());case 18:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),tabClick:function(e){this.filterParams={},this.filterIndex===e&&4!==e&&1!==e||(this.filterIndex=e,0===e?this.filterParams={}:1===e?1===this.salesOrder?(this.filterParams.sales="desc",this.salesOrder=2):(this.filterParams.sales="asc",this.salesOrder=1):2===e?this.filterParams.view="desc":3===e?this.filterParams.collect="desc":4===e&&(1===this.priceOrder?(this.filterParams.price="desc",this.priceOrder=2):(this.filterParams.price="asc",this.priceOrder=1)),t.pageScrollTo({duration:300,scrollTop:0}),this.page=1,this.goodsList=[],this.getProductList())},toggleCateMask:function(t){var e=this,n="show"===t?10:300,r="show"===t?1:0;this.cateMaskState=2,setTimeout((function(){e.cateMaskState=r}),n)},changeCate:function(e){e||(this.cateParams=null,this.cateId=null,this.keywords=null),this.cateId=e,this.keyword=void 0,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.page=1,this.goodsList=[],this.filterParams={},this.getProductList("refresh")},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(e.id)})},stopPrevent:function(){}}};e.default=v}).call(this,n("a821")["default"])},"35bd":function(t,e,n){"use strict";n.r(e);var r=n("2c17"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"8a73":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");r(n("66fd"));var e=r(n("9ae3"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])},"9ae3":function(t,e,n){"use strict";n.r(e);var r=n("fc39"),i=n("35bd");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("098a");var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},b94b:function(t,e,n){},fc39:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))}},[["8a73","common/runtime","common/vendor"]]]);