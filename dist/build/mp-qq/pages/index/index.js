(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"04a2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a")),r=n("c4c8"),c=n("2b74");function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,a,r,c,i){try{var o=t[c](i),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var c=t.apply(e,n);function i(t){o(c,a,r,i,u,"next",t)}function u(t){o(c,a,r,i,u,"throw",t)}i(void 0)}))}}var s=function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"cff3"))},d=function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"e395"))},f=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2ba4"))},l=function(){return n.e("components/rf-swipe-dot/rf-swipe-dot").then(n.bind(null,"3c94"))},h=function(){return n.e("components/rf-floor-index/rf-floor-index").then(n.bind(null,"a9e7"))},p=function(){return n.e("components/rf-search-bar/rf-search-bar").then(n.bind(null,"9f3a"))},g={components:{uniGrid:s,uniIcons:f,uniGridItem:d,rfFloorIndex:h,rfSwipeDot:l,rfSearchBar:p},data:function(){return{current:0,headerShow:!0,carouselList:{},search:{},hotSearchDefault:"输入关键字搜索",hotProductList:[],recommendProductList:[],guessYouLikeProductList:[],newProductList:[],productCateList:[],brandList:[],config:{},index:0,merchantList:[]}},onLoad:function(){this.initData()},onShareAppMessage:function(){return{title:"欢迎来到RageFrame商城",path:"/pages/index/index"}},onPullDownRefresh:function(){this.getIndexList("refresh")},methods:{bindPickerChange:function(e){t.setStorageSync("merchantId",this.merchantList[e.target.value].id),t.setStorageSync("merchantIndex",e.target.value),this.index=e.target.value,t.removeStorage({key:"userInfo"}),t.removeStorage({key:"accessToken"}),this.getIndexList()},handleDotChange:function(t){this.current=t.detail.current},initData:function(){t.removeStorageSync("cateTop"),this.getIndexList()},navToList:function(e){t.navigateTo({url:"/pages/product/list?cate_id=".concat(e)})},indexTopToDetailPage:function(e,n){var a,r,c;switch(n?(c=n,r=e):(r=e.type,c=e.id),r){case"product_view":a="/pages/product/product?id=".concat(c);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":a="/pages/coupon/detail?id=".concat(c);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":a="/pages/product/list?cate_id=".concat(c);break;default:break}a&&t.navigateTo({url:a})},toProductList:function(e){t.navigateTo({url:"/pages/product/list?params=".concat(JSON.stringify(e))})},getIndexList:function(){var e=u(a.default.mark((function e(n){var i=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(r.indexList),{}).then(function(){var e=u(a.default.mark((function e(r){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.$get("".concat(c.merchantIndex),{}).then((function(e){i.merchantList=e.data,i.index=t.getStorageSync("merchantIndex")||e.data.length-1}));case 2:"refresh"===n&&t.stopPullDownRefresh(),i.productCateList=r.data.cate,i.carouselList=r.data.adv,i.search=r.data.search,t.setStorageSync("search",i.search),i.hotSearchDefault="请输入关键字 如: ".concat(r.data.search.hot_search_default),t.setStorage({key:"hotSearchDefault",data:r.data.search.hot_search_default}),i.hotProductList=r.data.product_hot,i.recommendProductList=r.data.product_recommend,i.guessYouLikeProductList=r.data.guess_you_like,i.newProductList=r.data.product_new,i.config=r.data.config;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),navToDetailPage:function(e){var n=e.id;n&&t.navigateTo({url:"/pages/product/product?id=".concat(n)})},toSearch:function(){t.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toCategory:function(){t.reLaunch({url:"/pages/category/category"})}}};e.default=g}).call(this,n("a821")["default"])},"165e":function(t,e,n){"use strict";var a=n("cf8c"),r=n.n(a);r.a},8069:function(t,e,n){"use strict";n.r(e);var a=n("04a2"),r=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=r.a},"9a07":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,{title:"新品上市",desc:"New Products Listed"}),a={title:"推荐商品",desc:"Recommend Product"},r={title:"热门商品",desc:"Hot Product"},c={title:"猜你喜欢",desc:"Guess You Like It"};t.$mp.data=Object.assign({},{$root:{a0:n,a1:a,a2:r,a3:c}})},r=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}))},cf8c:function(t,e,n){},d537:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");a(n("66fd"));var e=a(n("f75a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])},f75a:function(t,e,n){"use strict";n.r(e);var a=n("9a07"),r=n("8069");for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);n("165e");var i=n("2877"),o=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"0bb93279",null);e["default"]=o.exports}},[["d537","common/runtime","common/vendor"]]]);