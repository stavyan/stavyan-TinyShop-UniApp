(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-collection-collection"],{"040c":function(t,e,n){"use strict";var i=n("bc92"),o=n.n(i);o.a},"1af6":function(t,e,n){var i=n("63b6");i(i.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var i=n("d9f6"),o=n("aebd");t.exports=function(t,e,n){e in t?i.f(t,e,o(0,n)):t[e]=n}},"2b74":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.configList=e.payCreate=e.advList=e.uploadFile=e.transmitCreate=e.collectDel=e.collectCreate=e.provinceList=void 0;var i="/tiny-shop/v1/common/provinces/index";e.provinceList=i;var o="/tiny-shop/v1/common/collect/create";e.collectCreate=o;var c="/tiny-shop/v1/common/collect/delete";e.collectDel=c;var r="/tiny-shop/v1/common/transmit/create";e.transmitCreate=r;var a="/v1/file/images";e.uploadFile=a;var s="/tiny-shop/v1/common/adv/index";e.advList=s;var u="/tiny-shop/v1/common/config/index";e.configList=u;var l="/tiny-shop/v1/common/pay/create";e.payCreate=l},"549b":function(t,e,n){"use strict";var i=n("d864"),o=n("63b6"),c=n("241e"),r=n("b0dc"),a=n("3702"),s=n("b447"),u=n("20fd"),l=n("7cd6");o(o.S+o.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,f,d=c(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,g=0,b=l(d);if(m&&(h=i(h,v>2?arguments[2]:void 0,2)),void 0==b||p==Array&&a(b))for(e=s(d.length),n=new p(e);e>g;g++)u(n,g,m?h(d[g],g):d[g]);else for(f=b.call(d),n=new p;!(o=f.next()).done;g++)u(n,g,m?r(f,h,[o.value,g],!0):o.value);return n.length=g,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"61d5":function(t,e,n){e=t.exports=n("24fb")(!1),e.push([t.i,'.uni-media-list-logo[data-v-fd0c63c2]{width:%?240?%;height:%?180?%}.uni-media-list-body[data-v-fd0c63c2]{height:auto;-webkit-justify-content:space-around;justify-content:space-around}.uni-media-list-text-top[data-v-fd0c63c2]{height:%?74?%;font-size:%?28?%;overflow:hidden}.uni-media-list-text-bottom[data-v-fd0c63c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.price[data-v-fd0c63c2]{font-size:%?28?%;color:#303133}.price[data-v-fd0c63c2]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}',""])},"75fc":function(t,e,n){"use strict";n.r(e);var i=n("a745"),o=n.n(i);function c(t){if(o()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var r=n("774e"),a=n.n(r),s=n("c8bb"),u=n.n(s);function l(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return c(t)||l(t)||f()}n.d(e,"default",(function(){return d}))},"774e":function(t,e,n){t.exports=n("d2d5")},"95d5":function(t,e,n){var i=n("40c3"),o=n("5168")("iterator"),c=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||c.hasOwnProperty(i(e))}},"9a1a":function(t,e,n){"use strict";n.r(e);var i=n("c59e"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=o.a},a745:function(t,e,n){t.exports=n("f410")},bc92:function(t,e,n){var i=n("61d5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("bb45740c",i,!0,{sourceMap:!1,shadowMode:!1})},be59:function(t,e,n){"use strict";n.r(e);var i=n("fb12"),o=n("9a1a");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("040c");var r=n("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"fd0c63c2",null);e["default"]=a.exports},c59e:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("75fc"));n("96cf");var c=i(n("3b8d")),r=n("802d"),a=i(n("09c2")),s=i(n("c7c7")),u=i(n("0cc7")),l=n("2b74"),f=i(n("d138")),d=i(n("6bf2")),p={components:{uniLoadMore:a.default,uniSwipeAction:u.default,empty:f.default},data:function(){return{collectionList:[],errorImg:s.default,page:1,loadingType:"more",token:null,options:[{text:"取消收藏",style:{backgroundColor:"#fa436a"}}]}},filters:{time:function(t){return(0,d.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")}},onLoad:function(){this.initData()},onPageScroll:function(t){},onPullDownRefresh:function(){this.page=1,this.collectionList=[],this.getCollectionList("refresh")},onReachBottom:function(){this.page++,this.getCollectionList()},methods:{bindClick:function(){var t=(0,c.default)(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("取消收藏"!==e.content.text){t.next=4;break}return uni.showLoading({title:"取消收藏中..."}),t.next=4,this.$del("".concat(l.collectDel,"?id=").concat(e.data.id),{page:this.page}).then((function(t){200===t.code?(uni.showToast({title:"取消收藏成功"}),n.page=1,n.collectionList.length=0,n.getCollectionList()):uni.showToast({title:t.message,icon:"none"})})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),initData:function(){this.token=uni.getStorageSync("accessToken")||void 0,this.token&&this.getCollectionList()},getCollectionList:function(){var t=(0,c.default)(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中..."}),t.next=3,this.$get("".concat(r.collectList),{page:this.page}).then((function(t){"refresh"===e&&uni.stopPullDownRefresh(),200===t.code?(n.loadingType=10===t.data.length?"more":"nomore",n.collectionList=[].concat((0,o.default)(n.collectionList),(0,o.default)(t.data))):uni.showToast({title:t.message,icon:"none"})})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onImageError:function(t){this.collectionList[t].product.picture=this.errorImg},goProduct:function(t){var e="/pages/product/product?id=".concat(t);this.token||(e="/pages/public/login"),uni.navigateTo({url:e})}}};e.default=p},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},fb12:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"collection"},[t.collectionList.length>0?n("v-uni-view",[t._l(t.collectionList,(function(e,i){return n("uni-swipe-action",{key:i,staticClass:"uni-list-cell",attrs:{info:e,options:t.options,"hover-class":"uni-list-cell-hover"},on:{click:function(e){e=t.$handleEvent(e),t.bindClick(e)}}},[n("v-uni-view",{staticClass:"uni-media-list",on:{click:function(n){n=t.$handleEvent(n),t.goProduct(e.product.id)}}},[n("v-uni-image",{staticClass:"uni-media-list-logo",attrs:{mode:"aspectFill",src:e.product&&e.product.picture},on:{error:function(e){e=t.$handleEvent(e),t.onImageError(i)}}}),n("v-uni-view",{staticClass:"uni-media-list-body"},[n("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(e.product&&e.product.name))]),n("v-uni-view",{staticClass:"uni-media-list-text-bottom"},[n("v-uni-text",{staticClass:"price"},[t._v(t._s(e.product&&e.product.minPriceSku.price))]),n("v-uni-text",[t._v(t._s(t._f("time")(e.created_at)))])],1)],1)],1)],1)})),n("uni-load-more",{attrs:{status:t.loadingType}})],2):n("empty",{attrs:{info:"快去收藏一些商品吧~"}})],1)},o=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))}}]);