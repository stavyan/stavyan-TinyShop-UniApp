(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"461a":function(t,e,i){"use strict";i.r(e);var a=i("7523"),o=i("475c");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("ef75");var n=i("2877"),c=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"13247482",null);e["default"]=c.exports},"475c":function(t,e,i){"use strict";i.r(e);var a=i("59bb"),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"59bb":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("96cf");var o=a(i("3b8d")),r=i("c4c8"),n={data:function(){return{showHeader:!0,hotSearchDefault:"输入关键字搜索",fList:[],sList:[],tList:[],showCategoryIndex:0,headerTop:null,statusTop:null,nVueTitle:null,afterHeaderOpacity:1,headerPosition:"fixed",city:"北京",categoryList:[]}},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onLoad:function(){this.initData()},methods:{navToList:function(t){uni.navigateTo({url:"/pages/product/list?cate_id=".concat(t)})},initData:function(){this.getProductCate()},getProductCate:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.fList=[],this.sList=[],this.tList=[],uni.showLoading({title:"加载中..."}),t.next=6,this.$get("".concat(r.productCate)).then((function(t){if(200===t.code){e.categoryList=t.data;for(var i=0;i<t.data.length;i++)if(t.data[i].child.length>0){e.showCategoryIndex=i;break}t.data.forEach((function(t){t.child.length>0&&(e.fList.push(t),t.child instanceof Array&&t.child.forEach((function(t){t.child.length>0&&(e.sList.push(t),t.child instanceof Array&&t.child.forEach((function(t){e.tList.push(t)})))})))}))}else uni.showToast({title:t.message,icon:"none"})})).catch((function(t){console.log(t)}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),showCategory:function(t){this.showCategoryIndex=t},toCategory:function(t){uni.setStorageSync("catName",t.name),uni.navigateTo({url:"../../goods/goods-list/goods-list?cid="+t.id+"&name="+t.name})},toSearch:function(){uni.showToast({title:"建议跳转到新页面做搜索功能"})}}};e.default=n},7523:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{attrs:{id:"category"}},[t.showHeader?i("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop,opacity:t.afterHeaderOpacity}}):t._e(),t.showHeader?i("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop,opacity:t.afterHeaderOpacity}},[i("v-uni-view",{staticClass:"addr",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.toCategory(e)}}},[i("v-uni-view",{staticClass:"icon yticon icon-xiatubiao--copy"}),t._v("主页")],1),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{disabled:"",value:t.hotSearchDefault,"placeholder-style":"color:#ccc;"},on:{click:function(e){e=t.$handleEvent(e),t.toSearch(e)}}}),i("v-uni-view",{staticClass:"icon search"})],1)],1):t._e(),t.showHeader?i("v-uni-view",{staticClass:"place"}):t._e(),i("v-uni-view",{staticClass:"category-list"},[i("v-uni-scroll-view",{staticClass:"left",attrs:{"scroll-y":"true"}},t._l(t.categoryList,(function(e,a){return e.child.length>0?i("v-uni-view",{key:e.id,staticClass:"row",class:[a==t.showCategoryIndex?"on":""],on:{click:function(e){e=t.$handleEvent(e),t.showCategory(a)}}},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"block"}),t._v(t._s(e.title))],1)],1):t._e()})),1),t._v("右侧子导航"),i("v-uni-scroll-view",{staticClass:"right",attrs:{"scroll-y":"true"}},t._l(t.categoryList,(function(e,a){return e.child.length>0?i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:a==t.showCategoryIndex,expression:"index==showCategoryIndex"}],key:e.id,staticClass:"category"},[i("v-uni-view",{staticClass:"banner"},[i("v-uni-image",{attrs:{src:"https://www.yllook.com/attachment/images/2019/12/09/image_157589717555555751.jpg"}})],1),t._l(e.child,(function(e,a){return i("v-uni-view",{key:a,staticClass:"box",on:{click:function(i){i=t.$handleEvent(i),t.navToList(e.id)}}},[i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.title))]),e.child.length>0?i("v-uni-view",{staticClass:"list"},t._l(e.child,(function(e,a){return i("v-uni-view",{key:a,staticClass:"box",on:{click:function(i){i=t.$handleEvent(i),t.navToList(e.id)}}},[i("v-uni-image",{attrs:{src:e.cover}}),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.title))])],1)})),1):i("v-uni-view",{staticClass:"no-data"},[t._v("该栏目暂无分类~")])],1)}))],2):t._e()})),1)],1)],1)},o=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}))},"7dfa":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-13247482]{background-color:#fff}#category .status[data-v-13247482]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}#category .header[data-v-13247482]{width:96%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}#category .header .addr[data-v-13247482]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}#category .header .addr .icon[data-v-13247482]{height:%?60?%;margin-right:%?5?%;margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?38?%;color:#fa436a}#category .header .input-box[data-v-13247482]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}#category .header .input-box .icon[data-v-13247482]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}#category .header .input-box uni-input[data-v-13247482]{width:100%;padding-left:%?28?%;height:%?28?%;color:#888;font-size:%?28?%}#category .place[data-v-13247482]{background-color:#fff;height:%?100?%}#category .category-list[data-v-13247482]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex}#category .category-list .left[data-v-13247482],#category .category-list .right[data-v-13247482]{position:absolute;top:%?100?%;bottom:%?0?%}#category .category-list .left[data-v-13247482]{width:24%;left:%?0?%;background-color:#f2f2f2}#category .category-list .left .row[data-v-13247482]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}#category .category-list .left .row .text[data-v-13247482]{width:100%;position:relative;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3c3c3c}#category .category-list .left .row .text .block[data-v-13247482]{position:absolute;width:%?0?%;left:0}#category .category-list .left .row.on[data-v-13247482]{height:%?100?%;background-color:#fff}#category .category-list .left .row.on .text[data-v-13247482]{font-size:%?30?%;font-weight:600;color:#2d2d2d}#category .category-list .left .row.on .text .block[data-v-13247482]{width:%?10?%;height:80%;top:10%;background-color:#f06c7a}#category .category-list .right[data-v-13247482]{width:76%;left:24%}#category .category-list .right .category[data-v-13247482]{width:calc(100%);padding:%?20?% %?15?%}#category .category-list .right .category .banner[data-v-13247482]{width:96%;margin:0 auto %?20?%;height:24.262vw;border-radius:%?10?%;overflow:hidden;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.3)}#category .category-list .right .category .banner uni-image[data-v-13247482]{width:100%;height:24.262vw}#category .category-list .right .category .list[data-v-13247482]{margin-top:%?40?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}#category .category-list .right .category .list .box[data-v-13247482]{width:calc(71.44vw / 3);margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}#category .category-list .right .category .list .box uni-image[data-v-13247482]{width:64%;height:calc(71.44vw / 3 * .64)}#category .category-list .right .category .list .box .text[data-v-13247482]{margin-top:%?8?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%}#category .category-list .right .category .no-data[data-v-13247482]{text-align:center;margin:%?30?% 0;color:#909399}body.?%PAGE?%[data-v-13247482]{background-color:#fff}",""]),t.exports=e},c4c8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.brandList=e.orderPreview=e.evaluateList=e.orderFreightFee=e.orderPay=e.orderClose=e.orderCreate=e.cartItemUpdateNum=e.cartItemClear=e.cartItemDel=e.cartItemList=e.cartItemCreate=e.productDetail=e.guessYouLikeList=e.productList=e.productCateList=e.productCate=e.indexList=void 0;var a="/tiny-shop/v1/index/index";e.indexList=a;var o="/tiny-shop/v1/product/cate/index";e.productCate=o;var r="/tiny-shop/v1/product/cate/list";e.productCateList=r;var n="/tiny-shop/v1/product/product/index";e.productList=n;var c="/tiny-shop/v1/product/product/view";e.productDetail=c;var s="/tiny-shop/v1/product/product/guess-you-like";e.guessYouLikeList=s;var l="/tiny-shop/v1/member/cart-item/create";e.cartItemCreate=l;var d="/tiny-shop/v1/member/cart-item/index";e.cartItemList=d;var u="/tiny-shop/v1/member/cart-item/delete-ids";e.cartItemDel=u;var g="/tiny-shop/v1/member/cart-item/clear";e.cartItemClear=g;var h="/tiny-shop/v1/member/cart-item/update-num";e.cartItemUpdateNum=h;var f="/tiny-shop/v1/order/order/create";e.orderCreate=f;var v="/tiny-shop/v1/order/order/preview";e.orderPreview=v;var y="/tiny-shop/v1/member/order/close";e.orderClose=y;var p="/tiny-shop/v1/common/pay/create";e.orderPay=p;var w="/tiny-shop/v1/order/order/freight-fee";e.orderFreightFee=w;var b="/tiny-shop/v1/product/evaluate/index";e.evaluateList=b;var x="/tiny-shop/v1/product/brand/index";e.brandList=x},e4a8:function(t,e,i){var a=i("7dfa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("1f4dc7b8",a,!0,{sourceMap:!1,shadowMode:!1})},ef75:function(t,e,i){"use strict";var a=i("e4a8"),o=i.n(a);o.a}}]);