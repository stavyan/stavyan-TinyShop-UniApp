(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"04a2":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("a34a")),r=n("c4c8");function c(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,i,a,r,c){try{var o=t[r](c),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(i,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function c(t){o(r,i,a,c,u,"next",t)}function u(t){o(r,i,a,c,u,"throw",t)}c(void 0)}))}}var s=function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"cff3"))},d=function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"e395"))},l=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2ba4"))},g={components:{uniGrid:s,uniIcons:l,uniGridItem:d},data:function(){return{showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"},{id:2,src:"url2",img:"/static/img/2.jpg"},{id:3,src:"url3",img:"/static/img/3.jpg"}],categoryList:[{id:1,name:"办公",img:"/static/img/category/1.png"},{id:2,name:"家电",img:"/static/img/category/2.png"},{id:3,name:"服饰",img:"/static/img/category/3.png"},{id:4,name:"日用",img:"/static/img/category/4.png"},{id:5,name:"蔬果",img:"/static/img/category/5.png"},{id:6,name:"运动",img:"/static/img/category/6.png"},{id:7,name:"书籍",img:"/static/img/category/7.png"},{id:8,name:"文具",img:"/static/img/category/8.png"}],titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:{},search:{},hotSearchDefault:"输入关键字搜索",hotProductList:[],recommendProductList:[],guessYouLikeProductList:[],newProductList:[],productCateList:[],brandList:[],config:{}}},onLoad:function(){this.initData()},onPullDownRefresh:function(){this.getIndexList("refresh")},methods:{initData:function(){this.getIndexList()},navToList:function(e){t.navigateTo({url:"/pages/product/list?cate_id=".concat(e)})},indexTopToDetailPage:function(e,n){var i;switch(e){case"product_view":i="/pages/product/product?id=".concat(n);break;case"article_view":t.showToast({title:"article_view",icon:"none"});break;case"coupon_view":i="/pages/coupon/detail?id=".concat(n);break;case"helper_view":t.showToast({title:"helper_view",icon:"none"});break;case"product_list_for_cate":i="/pages/product/list?cate_id=".concat(n);break;default:break}i&&t.navigateTo({url:i})},toProductList:function(e){t.navigateTo({url:"/pages/product/list?params=".concat(JSON.stringify(e))})},getBrandList:function(){var e=u(a.default.mark((function e(){var n=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(r.brandList),{}).then((function(e){200===e.code?n.brandList=e.data:t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(i(t," at pages/index/index.vue:532"))}));case 3:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),getIndexList:function(){var e=u(a.default.mark((function e(n){var c=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(r.indexList),{}).then((function(e){"refresh"===n&&t.stopPullDownRefresh(),200===e.code?(c.getBrandList(),c.productCateList=e.data.cate,c.carouselList=e.data.adv,c.search=e.data.search,c.hotSearchDefault="请输入关键字 如: ".concat(e.data.search.hot_search_default),c.hotProductList=e.data.product_hot,c.recommendProductList=e.data.product_recommend,c.guessYouLikeProductList=e.data.guess_you_like,c.newProductList=e.data.product_new,c.config=e.data.config):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(i(t," at pages/index/index.vue:556"))}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),swiperChange:function(t){var e=t.detail.current;this.swiperCurrent=e},navToDetailPage:function(e){e&&t.navigateTo({url:"/pages/product/product?id=".concat(e)})},toSearch:function(){t.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toCategory:function(){t.reLaunch({url:"/pages/category/category"})}},onNavigationBarSearchInputClicked:function(){var e=u(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))});case 1:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onNavigationBarButtonTap:function(e){var n=e.index;if(0===n)this.$api.msg("点击了扫描");else if(1===n){var i=getCurrentPages(),a=i[i.length-1],r=a.$getAppWebview();r.hideTitleNViewButtonRedDot({index:n}),t.navigateTo({url:"/pages/notice/notice"})}}};e.default=g}).call(this,n("6e42")["default"],n("0de9")["default"])},"7c9b":function(t,e,n){},8069:function(t,e,n){"use strict";n.r(e);var i=n("04a2"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},ae6f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}))},b297:function(t,e,n){"use strict";var i=n("7c9b"),a=n.n(i);a.a},d537:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");i(n("66fd"));var e=i(n("f75a"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f75a:function(t,e,n){"use strict";n.r(e);var i=n("ae6f"),a=n("8069");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("b297");var c=n("2877"),o=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports}},[["d537","common/runtime","common/vendor"]]]);