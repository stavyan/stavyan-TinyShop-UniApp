(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{2284:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=i(a("3b8d")),n={props:{headerShow:{type:Boolean,default:!0},inputDisabled:{type:Boolean,default:!1},placeholder:{type:String,default:"输入关键字搜索"},icon:{type:String,default:null},title:{type:String,default:null}},data:function(){return{afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,searchValue:this.placeholder}},methods:{handleSearchValueChange:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.detail.value;case 2:this.searchValue=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),discard:function(){},link:function(){this.$emit("link")},toSearch:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$emit("search",{searchValue:this.searchValue});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=n},"2b74":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.wechatConfig=e.configList=e.payCreate=e.advList=e.uploadFile=e.transmitCreate=e.collectDel=e.collectCreate=e.provinceList=void 0;var i="/tiny-shop/v1/common/provinces/index";e.provinceList=i;var r="/tiny-shop/v1/common/collect/create";e.collectCreate=r;var n="/tiny-shop/v1/common/collect/delete";e.collectDel=n;var o="/tiny-shop/v1/common/transmit/create";e.transmitCreate=o;var c="/v1/file/images";e.uploadFile=c;var s="/tiny-shop/v1/common/adv/index";e.advList=s;var l="/tiny-shop/v1/common/config/index";e.configList=l;var d="/tiny-shop/v1/common/pay/create";e.payCreate=d;var u="/tiny-shop/v1/third-party/wechat-js-sdk";e.wechatConfig=u},"398a":function(t,e,a){var i=a("c0c6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("6655c640",i,!0,{sourceMap:!1,shadowMode:!1})},"461a":function(t,e,a){"use strict";a.r(e);var i=a("d643"),r=a("475c");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("b7ce");var o=a("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"57443994",null);e["default"]=c.exports},"475c":function(t,e,a){"use strict";a.r(e);var i=a("59bb"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},"59bb":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("386d"),a("96cf");var r=i(a("3b8d")),n=a("c4c8"),o=i(a("9f3a")),c=a("2b74"),s={components:{rfSearchBar:o.default},data:function(){return{headerShow:!0,hotSearchDefault:"请输入关键字",fList:[],sList:[],tList:[],showCategoryIndex:0,categoryList:[],search:"",cateTop:null}},onLoad:function(){this.initData()},methods:{navToList:function(t){uni.navigateTo({url:"/pages/product/list?cate_id=".concat(t)})},initData:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.search=uni.getStorageSync("search"),this.hotSearchDefault="请输入关键字 "+(this.search?"如: "+this.search.hot_search_default:""),this.getProductCate();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getProductCate:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.fList=[],this.sList=[],this.tList=[],uni.showLoading({title:"加载中..."}),t.next=6,this.$get("".concat(n.productCate)).then((function(t){e.cateTop=uni.getStorageSync("cateTop"),e.cateTop||e.getAdvList(),e.categoryList=t.data;for(var a=0;a<t.data.length;a++)if(t.data[a].child.length>0){e.showCategoryIndex=a;break}}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getAdvList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中..."}),t.next=3,this.$get("".concat(c.advList),{location:"cate_top"}).then((function(t){e.cateTop=t.data.cate_top[0],uni.setStorageSync("cateTop",t.data.cate_top[0])}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),showCategory:function(t){this.showCategoryIndex=t},toSearch:function(){uni.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toIndex:function(){uni.reLaunch({url:"/pages/index/index"})},indexTopToDetailPage:function(t,e){switch(t){case"product_view":e="/pages/product/product?id=".concat(e);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":e="/pages/coupon/detail?id=".concat(e);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":e="/pages/product/list?cate_id=".concat(e);break;default:break}e&&uni.navigateTo({url:e})}}};e.default=s},8301:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".rf-search-bar[data-v-cf594112]{background-color:#fff}.rf-search-bar .status[data-v-cf594112]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.rf-search-bar .header[data-v-cf594112]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}.rf-search-bar .header .addr[data-v-cf594112]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.rf-search-bar .header .addr .icon[data-v-cf594112]{height:%?60?%;margin-right:%?6?%;margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?35?%;color:#fa436a}.rf-search-bar .header .input-box[data-v-cf594112]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rf-search-bar .header .input-box .icon[data-v-cf594112]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.rf-search-bar .header .input-box uni-input[data-v-cf594112]{width:100%;padding-left:%?28?%;height:%?28?%;color:#888;font-size:%?28?%}.rf-search-bar .place[data-v-cf594112]{background-color:#fff;height:%?100?%}",""]),t.exports=e},8999:function(t,e,a){"use strict";a.r(e);var i=a("2284"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},"9f3a":function(t,e,a){"use strict";a.r(e);var i=a("d93f"),r=a("8999");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("bd58");var o=a("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"cf594112",null);e["default"]=c.exports},b7ce:function(t,e,a){"use strict";var i=a("398a"),r=a.n(i);r.a},bd58:function(t,e,a){"use strict";var i=a("e050"),r=a.n(i);r.a},c0c6:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-57443994]{background-color:#fff}#category .category-list[data-v-57443994]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex}#category .category-list .left[data-v-57443994],#category .category-list .right[data-v-57443994]{position:absolute;top:%?100?%;bottom:%?0?%}#category .category-list .left[data-v-57443994]{width:24%;left:%?0?%;background-color:#f2f2f2}#category .category-list .left .row[data-v-57443994]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}#category .category-list .left .row .text[data-v-57443994]{width:100%;position:relative;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3c3c3c}#category .category-list .left .row .text .block[data-v-57443994]{position:absolute;width:%?0?%;left:0}#category .category-list .left .row.on[data-v-57443994]{height:%?100?%;background-color:#fff}#category .category-list .left .row.on .text[data-v-57443994]{font-size:%?30?%;font-weight:600;color:#2d2d2d}#category .category-list .left .row.on .text .block[data-v-57443994]{width:%?10?%;height:80%;top:10%;background-color:#f06c7a}#category .category-list .right[data-v-57443994]{width:76%;left:24%}#category .category-list .right .category[data-v-57443994]{width:calc(100%);padding:%?20?% %?15?%}#category .category-list .right .category .banner[data-v-57443994]{width:96%;margin:0 auto %?20?%;height:24.262vw;border-radius:%?10?%;overflow:hidden;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.3)}#category .category-list .right .category .banner uni-image[data-v-57443994]{width:100%;height:24.262vw}#category .category-list .right .category .list[data-v-57443994]{margin-top:%?40?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}#category .category-list .right .category .list .box[data-v-57443994]{width:calc(71.44vw / 3);margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}#category .category-list .right .category .list .box uni-image[data-v-57443994]{width:64%;height:calc(71.44vw / 3 * .64)}#category .category-list .right .category .list .box .text[data-v-57443994]{margin-top:%?8?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%}#category .category-list .right .category .no-data[data-v-57443994]{text-align:center;margin:%?30?% 0;color:#909399}body.?%PAGE?%[data-v-57443994]{background-color:#fff}",""]),t.exports=e},c4c8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.brandList=e.orderPreview=e.evaluateList=e.orderFreightFee=e.orderPay=e.orderClose=e.orderCreate=e.cartItemUpdateNum=e.cartItemClear=e.cartItemDel=e.cartItemList=e.cartItemCreate=e.productDetail=e.guessYouLikeList=e.productList=e.productCateList=e.productCate=e.indexList=void 0;var i="/tiny-shop/v1/index/index";e.indexList=i;var r="/tiny-shop/v1/product/cate/index";e.productCate=r;var n="/tiny-shop/v1/product/cate/list";e.productCateList=n;var o="/tiny-shop/v1/product/product/index";e.productList=o;var c="/tiny-shop/v1/product/product/view";e.productDetail=c;var s="/tiny-shop/v1/product/product/guess-you-like";e.guessYouLikeList=s;var l="/tiny-shop/v1/member/cart-item/create";e.cartItemCreate=l;var d="/tiny-shop/v1/member/cart-item/index";e.cartItemList=d;var u="/tiny-shop/v1/member/cart-item/delete-ids";e.cartItemDel=u;var h="/tiny-shop/v1/member/cart-item/clear";e.cartItemClear=h;var f="/tiny-shop/v1/member/cart-item/update-num";e.cartItemUpdateNum=f;var p="/tiny-shop/v1/order/order/create";e.orderCreate=p;var v="/tiny-shop/v1/order/order/preview";e.orderPreview=v;var g="/tiny-shop/v1/member/order/close";e.orderClose=g;var y="/tiny-shop/v1/common/pay/create";e.orderPay=y;var w="/tiny-shop/v1/order/order/freight-fee";e.orderFreightFee=w;var b="/tiny-shop/v1/product/evaluate/index";e.evaluateList=b;var x="/tiny-shop/v1/product/brand/index";e.brandList=x},d643:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{attrs:{id:"category"}},[a("rf-search-bar",{attrs:{icon:"icon-xiatubiao--copy",title:"主页",headerShow:t.headerShow,placeholder:t.hotSearchDefault},on:{link:function(e){e=t.$handleEvent(e),t.toIndex(e)},search:function(e){e=t.$handleEvent(e),t.toSearch(e)}}}),a("v-uni-view",{staticClass:"category-list"},[a("v-uni-scroll-view",{staticClass:"left",attrs:{"scroll-y":"true"}},t._l(t.categoryList,(function(e,i){return e.child.length>0?a("v-uni-view",{key:e.id,staticClass:"row",class:[i==t.showCategoryIndex?"on":""],on:{click:function(e){e=t.$handleEvent(e),t.showCategory(i)}}},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"block"}),t._v(t._s(e.title))],1)],1):t._e()})),1),a("v-uni-scroll-view",{staticClass:"right",attrs:{"scroll-y":"true"}},t._l(t.categoryList,(function(e,i){return e.child.length>0?a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:i==t.showCategoryIndex,expression:"index==showCategoryIndex"}],key:e.id,staticClass:"category"},[a("v-uni-view",{staticClass:"banner",on:{click:function(e){e=t.$handleEvent(e),t.indexTopToDetailPage(t.cateTop.jump_type,t.cateTop.jump_link)}}},[a("v-uni-image",{attrs:{src:t.cateTop.cover,mode:"aspectFill"}})],1),t._l(e.child,(function(e,i){return a("v-uni-view",{key:i,staticClass:"box",on:{click:function(a){a=t.$handleEvent(a),t.navToList(e.id)}}},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(e.title))]),e.child.length>0?a("v-uni-view",{staticClass:"list"},t._l(e.child,(function(e,i){return a("v-uni-view",{key:i,staticClass:"box",on:{click:function(a){a.stopPropagation(),a=t.$handleEvent(a),t.navToList(e.id)}}},[a("v-uni-image",{attrs:{src:e.cover}}),a("v-uni-view",{staticClass:"text"},[t._v(t._s(e.title))])],1)})),1):a("v-uni-view",{staticClass:"no-data"},[t._v("该栏目暂无分类~")])],1)}))],2):t._e()})),1)],1)],1)},r=[];a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r}))},d93f:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"rf-search-bar"},[t.headerShow?a("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop,opacity:t.afterHeaderOpacity}}):t._e(),t.headerShow?a("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop,opacity:t.afterHeaderOpacity}},[a("v-uni-view",{staticClass:"addr",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.link(e)}}},[a("v-uni-view",{staticClass:"icon yticon",class:t.icon}),t._v(t._s(t.title))],1),t.inputDisabled?a("v-uni-view",{staticClass:"input-box",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.discard(e)}}},[a("v-uni-input",{staticStyle:{color:"#888"},attrs:{value:t.placeholder,"placeholder-style":"color:#ccc;"},on:{confirm:function(e){e=t.$handleEvent(e),t.toSearch(e)},change:function(e){e=t.$handleEvent(e),t.handleSearchValueChange(e)}}}),a("v-uni-view",{staticClass:"icon search",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.toSearch(e)}}})],1):a("v-uni-view",{staticClass:"input-box"},[a("v-uni-input",{attrs:{disabled:"",value:t.placeholder,"placeholder-style":"color:#ccc;"},on:{click:function(e){e=t.$handleEvent(e),t.toSearch(e)}}}),a("v-uni-view",{staticClass:"icon search"})],1)],1):t._e(),t.headerShow?a("v-uni-view",{staticClass:"place"}):t._e()],1)},r=[];a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r}))},e050:function(t,e,a){var i=a("8301");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("6ad5f97f",i,!0,{sourceMap:!1,shadowMode:!1})}}]);