(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"461a":function(t,e,a){"use strict";a.r(e);var n=a("b7be"),r=a("475c");for(var c in r)"default"!==c&&function(t){a.d(e,t,(function(){return r[t]}))}(c);a("f966");var i=a("2877"),o=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"18a0d29a",null);e["default"]=o.exports},"475c":function(t,e,a){"use strict";a.r(e);var n=a("d397"),r=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=r.a},5243:function(t,e,a){},b7be:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},d397:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("a34a")),r=a("c4c8"),c=a("2b74");function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,a,n,r,c,i){try{var o=t[c](i),u=o.value}catch(s){return void a(s)}o.done?e(u):Promise.resolve(u).then(n,r)}function u(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var c=t.apply(e,a);function i(t){o(c,n,r,i,u,"next",t)}function u(t){o(c,n,r,i,u,"throw",t)}i(void 0)}))}}var s=function(){return a.e("components/rf-search-bar/rf-search-bar").then(a.bind(null,"9f3a"))},f={components:{rfSearchBar:s},data:function(){return{headerShow:!0,hotSearchDefault:"请输入关键字",fList:[],sList:[],tList:[],showCategoryIndex:0,categoryList:[],search:"",cateTop:{}}},onShow:function(){this.initData()},methods:{navToList:function(e){t.navigateTo({url:"/pages/product/list?cate_id=".concat(e)})},initData:function(){var e=u(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.search=t.getStorageSync("search"),this.hotSearchDefault="请输入关键字 "+(this.search?"如: "+this.search.hot_search_default:""),this.getProductCate();case 3:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),getProductCate:function(){var e=u(n.default.mark((function e(){var a=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.fList=[],this.sList=[],this.tList=[],t.showLoading({title:"加载中..."}),e.next=6,this.$get("".concat(r.productCate)).then((function(e){a.cateTop=t.getStorageSync("cateTop"),a.cateTop||a.getAdvList(),a.categoryList=e.data;for(var n=0;n<e.data.length;n++)if(e.data[n].child.length>0){a.showCategoryIndex=n;break}}));case 6:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),getAdvList:function(){var e=u(n.default.mark((function e(){var a=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(c.advList),{location:"cate_top"}).then((function(e){a.cateTop=e.data.cate_top[0],t.setStorageSync("cateTop",e.data.cate_top[0])}));case 3:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),showCategory:function(t){this.showCategoryIndex=t},toSearch:function(){t.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toIndex:function(){t.reLaunch({url:"/pages/index/index"})},indexTopToDetailPage:function(e,a){switch(e){case"product_view":a="/pages/product/product?id=".concat(a);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":a="/pages/coupon/detail?id=".concat(a);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":a="/pages/product/list?cate_id=".concat(a);break;default:break}a&&t.navigateTo({url:a})}}};e.default=f}).call(this,a("a821")["default"])},d7ed:function(t,e,a){"use strict";(function(t){a("6cdc"),a("921b");n(a("66fd"));var e=n(a("461a"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("a821")["createPage"])},f966:function(t,e,a){"use strict";var n=a("5243"),r=a.n(n);r.a}},[["d7ed","common/runtime","common/vendor"]]]);