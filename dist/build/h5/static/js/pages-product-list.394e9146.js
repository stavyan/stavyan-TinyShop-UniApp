(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"09c2":function(t,e,i){"use strict";i.r(e);var a=i("650a"),n=i("ba86");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7d1b");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"aec3283c",null);e["default"]=s.exports},"1af6":function(t,e,i){var a=i("63b6");a(a.S,"Array",{isArray:i("9003")})},"20fd":function(t,e,i){"use strict";var a=i("d9f6"),n=i("aebd");t.exports=function(t,e,i){e in t?a.f(t,e,n(0,i)):t[e]=i}},"2dfd":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-load-more[data-v-aec3283c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-aec3283c]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-aec3283c]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-aec3283c]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-aec3283c 1.56s ease infinite;animation:load-data-v-aec3283c 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]:nth-child(4){top:11px;left:0}.load1[data-v-aec3283c],.load2[data-v-aec3283c],.load3[data-v-aec3283c]{height:24px;width:24px}.load2[data-v-aec3283c]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-aec3283c]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-aec3283c]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-aec3283c]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-aec3283c]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-aec3283c]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-aec3283c]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-aec3283c]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-aec3283c]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-aec3283c]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-aec3283c]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-aec3283c]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-aec3283c]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-aec3283c]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-aec3283c{0%{opacity:1}to{opacity:.2}}",""]),t.exports=e},"31fb":function(t,e,i){"use strict";var a=i("8abc"),n=i.n(a);n.a},"35bd":function(t,e,i){"use strict";i.r(e);var a=i("7208"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"3a4f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[t.showHeader?i("v-uni-view",{staticClass:"status",style:{position:t.headerPosition1,top:t.statusTop,opacity:t.afterHeaderOpacity}}):t._e(),t.showHeader?i("v-uni-view",{staticClass:"header",style:{position:t.headerPosition1,top:t.headerTop1,opacity:t.afterHeaderOpacity}},[i("v-uni-view",{staticClass:"addr",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.toHome(e)}}},[i("v-uni-view",{staticClass:"icon yticon icon-xiatubiao--copy"}),t._v("主页")],1),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{value:t.hotSearchDefault,"placeholder-style":"color:#999;"},on:{confirm:function(e){e=t.$handleEvent(e),t.handleSearchProduct(e)}}}),i("v-uni-view",{staticClass:"icon search",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.handleSearchProduct(e)}}})],1)],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isShowNavBar,expression:"isShowNavBar"}],staticClass:"navbar"},[i("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("综合排序")]),i("v-uni-view",{staticClass:"nav-item",class:{current:1===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(1)}}},[i("v-uni-text",[t._v("销量")]),i("v-uni-view",{staticClass:"p-box"},[i("v-uni-text",{staticClass:"yticon icon-shang",class:{active:1===t.salesOrder&&1===t.filterIndex}}),i("v-uni-text",{staticClass:"yticon icon-shang xia",class:{active:2===t.salesOrder&&1===t.filterIndex}})],1)],1),i("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(2)}}},[t._v("浏览量")]),i("v-uni-view",{staticClass:"nav-item",class:{current:3===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(3)}}},[t._v("收藏")]),i("v-uni-view",{staticClass:"nav-item",class:{current:4===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(4)}}},[i("v-uni-text",[t._v("价格")]),i("v-uni-view",{staticClass:"p-box"},[i("v-uni-text",{staticClass:"yticon icon-shang",class:{active:1===t.priceOrder&&4===t.filterIndex}}),i("v-uni-text",{staticClass:"yticon icon-shang xia",class:{active:2===t.priceOrder&&4===t.filterIndex}})],1)],1),i("v-uni-text",{staticClass:"cate-item yticon icon-fenlei1",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask("show")}}})],1),i("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-item",on:{click:function(i){i=t.$handleEvent(i),t.navToDetailPage(e)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:e.picture,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"title clamp in2line"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price)),e.market_price>e.price?i("v-uni-text",{staticClass:"m-price"},[t._v("¥ "+t._s(e.market_price))]):t._e()],1),i("v-uni-text",[t._v(t._s(e.sales)+"人付款")])],1)],1)})),1),i("uni-load-more",{attrs:{status:t.loadingType}}),0===t.goodsList.length?i("empty",{attrs:{info:"赶紧通知老板进货"}}):t._e(),i("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask(e)}}},[i("v-uni-view",{staticClass:"cate-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[i("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":""}},t._l(t.cateList,(function(e){return i("v-uni-view",{key:e.id},[i("v-uni-view",{staticClass:"cate-item one",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.changeCate(e.id)}}},[t._v(t._s(e.title))]),t._l(e.child,(function(e){return i("v-uni-view",{key:e.id,staticClass:"cate-item two",class:{active:e.id==t.cateId},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.changeCate(e.id)}}},[t._v(t._s(e.title)),t._l(e.child,(function(e){return i("v-uni-view",{key:e.id,staticClass:"cate-item three",class:{active:e.id==t.cateId},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.changeCate(e.id)}}},[t._v(t._s(e.title))])}))],2)}))],2)})),1)],1)],1)],1)},n=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}))},"549b":function(t,e,i){"use strict";var a=i("d864"),n=i("63b6"),o=i("241e"),r=i("b0dc"),s=i("3702"),c=i("b447"),l=i("20fd"),d=i("7cd6");n(n.S+n.F*!i("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,n,u,f=o(t),v="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,b=void 0!==p,g=0,w=d(f);if(b&&(p=a(p,h>2?arguments[2]:void 0,2)),void 0==w||v==Array&&s(w))for(e=c(f.length),i=new v(e);e>g;g++)l(i,g,b?p(f[g],g):f[g]);else for(u=w.call(f),i=new v;!(n=u.next()).done;g++)l(i,g,b?r(u,p,[n.value,g],!0):n.value);return i.length=g,i}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"650a":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}))},7208:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8e6e"),i("ac6a"),i("456d"),i("55dd");var n=a(i("75fc")),o=a(i("bd86"));i("96cf");var r=a(i("3b8d")),s=a(i("09c2")),c=a(i("d138")),l=a(i("2ba4")),d=i("c4c8");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){(0,o.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var v={components:{uniLoadMore:s.default,empty:c.default,uniIcons:l.default},data:function(){return{showHeader:!0,afterHeaderOpacity:1,headerPosition1:"fixed",headerTop1:"0px",statusTop:null,nVueTitle:null,cateMaskState:0,headerPosition:"fixed",headerTop:"0px",contentTop:"96upx",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,salesOrder:0,cateList:[],goodsList:[],keyword:null,cateParams:null,page:1,filterParams:{},isShowNavBar:!0,hotSearchDefault:"请输入关键词"}},onLoad:function(t){this.initData(t)},onShow:function(){navigator&&(this.headerTop=document.getElementsByTagName("uni-page-head")[0]&&document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px")},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.filterParams={},this.page=1,this.goodsList=[],this.getProductList("refresh")},onReachBottom:function(){this.page++,this.getProductList()},methods:{initData:function(t){if(navigator&&(this.headerTop=document.getElementsByTagName("uni-page-head")[0]&&document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px"),this.hotSearchDefault=uni.getStorageSync("hotSearchDefault"),this.cateId=t.cate_id,t.params&&(this.cateParams=JSON.parse(t.params),1===this.cateParams.guessYouLike))return this.isShowNavBar=!1,this.contentTop="20upx",void this.getGuessYouLikeList();this.keyword=t.keyword,this.getProductCate(),this.getProductList()},handleSearchProduct:function(t){this.keyword=t.detail.value,this.page=1,this.goodsList=[],this.filterParams={},this.getProductList()},toHome:function(){uni.reLaunch({url:"/pages/index/index"})},getProductList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={},this.keyword?i.keyword=this.keyword:this.cateId?i.cate_id=this.cateId:this.cateParams&&(i=f({},this.cateParams)),i.page=this.page,uni.showLoading({title:"加载中..."}),t.next=6,this.$get("".concat(d.productList),f({},i,{},this.filterParams)).then((function(t){"refresh"===e&&uni.stopPullDownRefresh(),200===t.code?(a.loadingType=10===t.data.length?"more":"nomore",a.goodsList=[].concat((0,n.default)(a.goodsList),(0,n.default)(t.data))):uni.showToast({title:t.message,icon:"none"})})).catch((function(t){console.log(t)}));case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getGuessYouLikeList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中..."}),t.next=3,this.$get("".concat(d.guessYouLikeList),{}).then((function(t){"refresh"===e&&uni.stopPullDownRefresh(),200===t.code?(i.loadingType=10===t.data.length?"more":"nomore",i.goodsList=[].concat((0,n.default)(i.goodsList),(0,n.default)(t.data))):uni.showToast({title:t.message,icon:"none"})})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getProductCate:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中..."}),t.next=3,this.$get("".concat(d.productCate)).then((function(t){200===t.code?(e.cateList=t.data,e.cateList.unshift({title:"全部商品",id:""})):uni.showToast({title:t.message,icon:"none"})})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadData:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,i,a,n=this,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]?o[0]:"add",i=o.length>1?o[1]:void 0,"add"!==e){t.next=8;break}if("nomore"!==this.loadingType){t.next=5;break}return t.abrupt("return");case 5:this.loadingType="loading",t.next=9;break;case 8:this.loadingType="more";case 9:return t.next=11,this.$api.json("goodsList");case 11:a=t.sent,"refresh"===e&&(this.goodsList=[]),1===this.filterIndex&&a.sort((function(t,e){return e.sales-t.sales})),2===this.filterIndex&&a.sort((function(t,e){return 1==n.priceOrder?t.price-e.price:e.price-t.price})),this.goodsList=this.goodsList.concat(a),this.loadingType=this.goodsList.length>20?"nomore":"more","refresh"===e&&(1==i?uni.hideLoading():uni.stopPullDownRefresh());case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),toBack:function(){uni.navigateBack({delta:1})},tabClick:function(t){this.filterParams={},this.filterIndex===t&&4!==t&&1!==t||(this.filterIndex=t,0===t?this.filterParams={}:1===t?1===this.salesOrder?(this.filterParams.sales="desc",this.salesOrder=2):(this.filterParams.sales="asc",this.salesOrder=1):2===t?this.filterParams.view="desc":3===t?this.filterParams.collect="desc":4===t&&(1===this.priceOrder?(this.filterParams.price="desc",this.priceOrder=2):(this.filterParams.price="asc",this.priceOrder=1)),uni.pageScrollTo({duration:300,scrollTop:0}),this.page=1,this.goodsList=[],this.getProductList())},toggleCateMask:function(t){var e=this,i="show"===t?10:300,a="show"===t?1:0;this.cateMaskState=2,setTimeout((function(){e.cateMaskState=a}),i)},changeCate:function(t){t||(this.cateParams=null,this.cateId=null,this.keywords=null),this.cateId=t,this.keyword=void 0,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.page=1,this.goodsList=[],this.filterParams={},this.getProductList("refresh")},navToDetailPage:function(t){uni.navigateTo({url:"/pages/product/product?id=".concat(t.id)})},stopPrevent:function(){}}};e.default=v},"75fc":function(t,e,i){"use strict";i.r(e);var a=i("a745"),n=i.n(a);function o(t){if(n()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var r=i("774e"),s=i.n(r),c=i("c8bb"),l=i.n(c);function d(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||d(t)||u()}i.d(e,"default",(function(){return f}))},"774e":function(t,e,i){t.exports=i("d2d5")},"7d1b":function(t,e,i){"use strict";var a=i("e583"),n=i.n(a);n.a},"8abc":function(t,e,i){var a=i("dd0a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("181b967e",a,!0,{sourceMap:!1,shadowMode:!1})},"95d5":function(t,e,i){var a=i("40c3"),n=i("5168")("iterator"),o=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||o.hasOwnProperty(a(e))}},"9ae3":function(t,e,i){"use strict";i.r(e);var a=i("3a4f"),n=i("35bd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("31fb");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"8255b83e",null);e["default"]=s.exports},a745:function(t,e,i){t.exports=i("f410")},ba86:function(t,e,i){"use strict";i.r(e);var a=i("e48b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c4c8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.brandList=e.orderPreview=e.evaluateList=e.orderFreightFee=e.orderPay=e.orderClose=e.orderCreate=e.cartItemUpdateNum=e.cartItemClear=e.cartItemDel=e.cartItemList=e.cartItemCreate=e.productDetail=e.guessYouLikeList=e.productList=e.productCateList=e.productCate=e.indexList=void 0;var a="/tiny-shop/v1/index/index";e.indexList=a;var n="/tiny-shop/v1/product/cate/index";e.productCate=n;var o="/tiny-shop/v1/product/cate/list";e.productCateList=o;var r="/tiny-shop/v1/product/product/index";e.productList=r;var s="/tiny-shop/v1/product/product/view";e.productDetail=s;var c="/tiny-shop/v1/product/product/guess-you-like";e.guessYouLikeList=c;var l="/tiny-shop/v1/member/cart-item/create";e.cartItemCreate=l;var d="/tiny-shop/v1/member/cart-item/index";e.cartItemList=d;var u="/tiny-shop/v1/member/cart-item/delete-ids";e.cartItemDel=u;var f="/tiny-shop/v1/member/cart-item/clear";e.cartItemClear=f;var v="/tiny-shop/v1/member/cart-item/update-num";e.cartItemUpdateNum=v;var h="/tiny-shop/v1/order/order/create";e.orderCreate=h;var p="/tiny-shop/v1/order/order/preview";e.orderPreview=p;var b="/tiny-shop/v1/member/order/close";e.orderClose=b;var g="/tiny-shop/v1/common/pay/create";e.orderPay=g;var w="/tiny-shop/v1/order/order/freight-fee";e.orderFreightFee=w;var m="/tiny-shop/v1/product/evaluate/index";e.evaluateList=m;var x="/tiny-shop/v1/product/brand/index";e.brandList=x},c8bb:function(t,e,i){t.exports=i("54a1")},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},dd0a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'uni-page-body[data-v-8255b83e]{background:#f8f8f8}.navbar[data-v-8255b83e]{position:fixed;left:0;top:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?80?%;background:#fff;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-8255b83e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.navbar .nav-item.current[data-v-8255b83e]{color:#fa436a}.navbar .nav-item.current[data-v-8255b83e]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #fa436a}.navbar .p-box[data-v-8255b83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.navbar .p-box .yticon[data-v-8255b83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#888}.navbar .p-box .yticon.active[data-v-8255b83e]{color:#fa436a}.navbar .p-box .xia[data-v-8255b83e]{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.navbar .cate-item[data-v-8255b83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.navbar .cate-item[data-v-8255b83e]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}.cate-mask[data-v-8255b83e]{position:fixed;left:0;top:40px;bottom:0;width:100%;background:transparent;z-index:95;-webkit-transition:.3s;transition:.3s}.cate-mask .cate-content[data-v-8255b83e]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:.3s;transition:.3s}.cate-mask.none[data-v-8255b83e]{display:none}.cate-mask.show[data-v-8255b83e]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-8255b83e]{-webkit-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-8255b83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%}.cate-list .cate-item[data-v-8255b83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?70?%;padding-left:%?30?%;font-size:%?30?%;position:relative;color:#303133}.cate-list .one[data-v-8255b83e]{background:#eee}.cate-list .two[data-v-8255b83e]{background:#f8f8f8;color:#606266;height:%?60?%;font-size:%?28?%;padding-left:%?50?%}.cate-list .three[data-v-8255b83e]{font-size:%?26?%;color:#606266}.cate-list .active[data-v-8255b83e]{color:#fa436a}.goods-list[data-v-8255b83e]{margin-top:%?176?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.goods-list .goods-item[data-v-8255b83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-8255b83e]:nth-child(odd){margin-right:4%}.goods-list .image-wrapper[data-v-8255b83e]{width:100%;height:%?330?%;border-radius:3px;margin-top:%?15?%;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-8255b83e]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-8255b83e]{font-size:%?28?%;color:#303133;line-height:%?40?%}.goods-list .price-box[data-v-8255b83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-8255b83e]{font-size:%?28?%;color:#fa436a;line-height:1}.goods-list .price[data-v-8255b83e]:before{content:"￥";font-size:%?26?%}.goods-list .price .m-price[data-v-8255b83e]{margin-left:%?8?%;color:#909399;font-size:%?24?%;text-decoration:line-through}.status[data-v-8255b83e]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.header[data-v-8255b83e]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}.header .addr[data-v-8255b83e]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.header .addr .icon[data-v-8255b83e]{height:%?60?%;margin-right:%?5?%;margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?36?%;color:#fa436a}.header .input-box[data-v-8255b83e]{width:100%;height:%?60?%;margin:0 %?15?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .input-box .icon[data-v-8255b83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.header .input-box uni-input[data-v-8255b83e]{width:100%;padding-left:%?28?%;height:%?28?%;font-size:%?28?%}.header .icon-btn[data-v-8255b83e]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .icon-btn .icon[data-v-8255b83e]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}body.?%PAGE?%[data-v-8255b83e]{background:#f8f8f8}',""]),t.exports=e},e48b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"—— 全部都被你看完了 ——"}}}},data:function(){return{}}};e.default=a},e583:function(t,e,i){var a=i("2dfd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("448deab0",a,!0,{sourceMap:!1,shadowMode:!1})},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray}}]);