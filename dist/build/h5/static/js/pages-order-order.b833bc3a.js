(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"04fd":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"navbar"},e._l(e.navList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"nav-item",class:{current:e.tabCurrentIndex===i},on:{click:function(t){t=e.$handleEvent(t),e.tabClick(i)}}},[e._v(e._s(t.text))])})),1),a("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:e.tabCurrentIndex,duration:"300"},on:{change:function(t){t=e.$handleEvent(t),e.changeTab(t)}}},e._l(e.navList,(function(t,i){return a("v-uni-swiper-item",{key:i,staticClass:"tab-content"},[a("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":""},on:{scrolltolower:function(t){t=e.$handleEvent(t),e.getMoreOrderList(t)}}},[0===e.orderList.length?a("empty",{attrs:{info:"快去商城逛逛吧"}}):e._e(),e._l(e.orderList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"order-item"},[a("v-uni-view",{staticClass:"i-top b-b"},[a("v-uni-text",{staticClass:"time"},[e._v(e._s(e._f("time")(t.created_at)))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0!==parseInt(t.order_status,10),expression:"parseInt(item.order_status, 10) !== 0"}],staticClass:"state"},[e._v(e._s(e._f("orderStatusFilter")(t.order_status)))]),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===parseInt(t.order_status,10),expression:"parseInt(item.order_status, 10) ===0"}],staticClass:"example-body"},[a("uni-count-down",{attrs:{"show-day":!1,second:e.second(t.created_at),color:"#FFFFFF","background-color":"#fa436a","border-color":"#fa436a"},on:{timeup:function(a){a=e.$handleEvent(a),e.timeUp(t)}}})],1)],1),t&&t.product&&t.product.length>1?a("v-uni-scroll-view",{staticClass:"goods-box",attrs:{"scroll-x":""}},e._l(t.product,(function(t,i){return a("v-uni-view",{key:i,staticClass:"goods-item"},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:t.product_picture,mode:"aspectFill"}}),a("v-uni-text",{staticClass:"goods-title"},[e._v(e._s(t.product_name))])],1)})),1):e._e(),e._l(t.product,(function(i,n){return t.product&&1===t.product.length?a("v-uni-view",{key:n,staticClass:"goods-box-single"},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:i.product_picture,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",{staticClass:"title clamp"},[e._v(e._s(i.product_name))]),a("v-uni-text",{staticClass:"attr-box"},[e._v(e._s(i.sku_name)+"  x "+e._s(i.num))]),a("v-uni-text",{staticClass:"price"},[e._v(e._s(i.cost_price))])],1)],1):e._e()})),a("v-uni-view",{staticClass:"price-box"},[e._v("共"),a("v-uni-text",{staticClass:"num"},[e._v(e._s(t.product_count))]),e._v("件商品 实付款"),a("v-uni-text",{staticClass:"price"},[e._v(e._s(t.product_money))])],1),a("v-uni-view",{staticClass:"action-box b-t"},[a("v-uni-button",{staticClass:"action-btn",on:{click:function(a){a=e.$handleEvent(a),e.handleOrderOperation(t,"detail")}}},[e._v("订单详情")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:0==t.order_status,expression:"item.order_status == 0"}],staticClass:"action-btn",on:{click:function(a){a=e.$handleEvent(a),e.handleOrderOperation(t,"close")}}},[e._v("取消订单")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:0==t.order_status,expression:"item.order_status == 0"}],staticClass:"action-btn recom",on:{click:function(a){a=e.$handleEvent(a),e.handlePayment(t)}}},[e._v("立即支付")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:1==t.order_status,expression:"item.order_status == 1"}],staticClass:"action-btn recom",on:{click:function(a){a=e.$handleEvent(a),e.handleOrderOperation(t,"refund",1)}}},[e._v("申请退款")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:4==t.order_status||2==t.order_status,expression:"item.order_status == 4 || item.order_status == 2"}],staticClass:"action-btn",on:{click:function(a){a=e.$handleEvent(a),e.handleOrderOperation(t,"shipping")}}},[e._v("查看物流")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:2==t.order_status,expression:"item.order_status == 2"}],staticClass:"action-btn",on:{click:function(a){a=e.$handleEvent(a),e.handleOrderOperation(t,"refund",2)}}},[e._v("申请退货")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:2==t.order_status,expression:"item.order_status == 2"}],staticClass:"action-btn recom",on:{click:function(a){a=e.$handleEvent(a),e.handleOrderOperation(t,"delivery")}}},[e._v("确认收货")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:4==t.order_status,expression:"item.order_status == 4"}],staticClass:"action-btn recom",on:{click:function(a){a=e.$handleEvent(a),e.handleOrderOperation(t,"evaluation")}}},[e._v("我要评价")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:-4==t.order_status,expression:"item.order_status == -4"}],staticClass:"action-btn recom",on:{click:function(a){a=e.$handleEvent(a),e.handleOrderOperation(t,"delete")}}},[e._v("删除订单")])],1)],2)})),a("uni-load-more",{attrs:{status:e.loadingType}})],2)],1)})),1)],1)},n=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}))},"09c2":function(e,t,a){"use strict";a.r(t);var i=a("650a"),n=a("ba86");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("7d1b");var r=a("2877"),d=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"aec3283c",null);t["default"]=d.exports},"1af6":function(e,t,a){var i=a("63b6");i(i.S,"Array",{isArray:a("9003")})},"20fd":function(e,t,a){"use strict";var i=a("d9f6"),n=a("aebd");e.exports=function(e,t,a){t in e?i.f(e,t,n(0,a)):e[t]=a}},"2dfd":function(e,t,a){t=e.exports=a("24fb")(!1),t.push([e.i,".uni-load-more[data-v-aec3283c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-aec3283c]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-aec3283c]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-aec3283c]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-aec3283c 1.56s ease infinite;animation:load-data-v-aec3283c 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-aec3283c]:nth-child(4){top:11px;left:0}.load1[data-v-aec3283c],.load2[data-v-aec3283c],.load3[data-v-aec3283c]{height:24px;width:24px}.load2[data-v-aec3283c]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-aec3283c]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-aec3283c]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-aec3283c]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-aec3283c]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-aec3283c]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-aec3283c]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-aec3283c]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-aec3283c]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-aec3283c]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-aec3283c]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-aec3283c]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-aec3283c]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-aec3283c]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-aec3283c{0%{opacity:1}to{opacity:.2}}",""])},"3d49":function(e,t,a){"use strict";a.r(t);var i=a("fc07"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},4952:function(e,t,a){"use strict";var i=a("a60a"),n=a.n(i);n.a},"4b03":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-countdown"},[e.showDay?a("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:e.borderColor,color:e.color,background:e.backgroundColor}},[e._v(e._s(e.d))]):e._e(),e.showDay?a("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:e.splitorColor}},[e._v("天")]):e._e(),a("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:e.borderColor,color:e.color,background:e.backgroundColor}},[e._v(e._s(e.h))]),a("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:e.splitorColor}},[e._v(e._s(e.showColon?":":"时"))]),a("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:e.borderColor,color:e.color,background:e.backgroundColor}},[e._v(e._s(e.i))]),a("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:e.splitorColor}},[e._v(e._s(e.showColon?":":"分"))]),a("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:e.borderColor,color:e.color,background:e.backgroundColor}},[e._v(e._s(e.s))]),e.showColon?e._e():a("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:e.splitorColor}},[e._v("秒")])],1)},n=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}))},"51f2":function(e,t,a){t=e.exports=a("24fb")(!1),t.push([e.i,".uni-countdown[data-v-033b3fa4]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-countdown__splitor[data-v-033b3fa4]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?28?%}.uni-countdown__number[data-v-033b3fa4]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?44?%;border-radius:%?6?%;margin:0 %?5?%;font-size:%?28?%;border:1px solid #000;font-size:%?24?%;padding:0 %?10?%}",""])},"549b":function(e,t,a){"use strict";var i=a("d864"),n=a("63b6"),o=a("241e"),r=a("b0dc"),d=a("3702"),s=a("b447"),c=a("20fd"),l=a("7cd6");n(n.S+n.F*!a("4ee1")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,n,u,v=o(e),f="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,b=void 0!==m,h=0,w=l(v);if(b&&(m=i(m,p>2?arguments[2]:void 0,2)),void 0==w||f==Array&&d(w))for(t=s(v.length),a=new f(t);t>h;h++)c(a,h,b?m(v[h],h):v[h]);else for(u=w.call(v),a=new f;!(n=u.next()).done;h++)c(a,h,b?r(u,m,[n.value,h],!0):n.value);return a.length=h,a}})},"54a1":function(e,t,a){a("6c1c"),a("1654"),e.exports=a("95d5")},"614d":function(e,t,a){"use strict";var i=a("d562"),n=a.n(i);n.a},"639e":function(e,t,a){t=e.exports=a("24fb")(!1),t.push([e.i,'.content[data-v-7ad27081],uni-page-body[data-v-7ad27081]{background:#f8f8f8;height:100%}.swiper-box[data-v-7ad27081]{height:calc(100% - 40px)}.list-scroll-content[data-v-7ad27081]{height:100%}.navbar[data-v-7ad27081]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-7ad27081]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-7ad27081]{color:#fa436a}.navbar .nav-item.current[data-v-7ad27081]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-7ad27081]{height:auto}.order-item[data-v-7ad27081]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-left:%?30?%;background:#fff;margin-top:%?16?%}.order-item .i-top[data-v-7ad27081]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;padding-right:%?30?%;font-size:%?28?%;color:#303133;position:relative}.order-item .i-top .time[data-v-7ad27081]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.order-item .i-top .state[data-v-7ad27081]{color:#fa436a}.order-item .i-top .del-btn[data-v-7ad27081]{padding:%?10?% 0 %?10?% %?36?%;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-7ad27081]:after{content:"";width:0;height:%?30?%;border-left:1px solid #dcdfe6;position:absolute;left:%?20?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box[data-v-7ad27081]{height:%?180?%;padding-top:%?20?%;white-space:nowrap}.order-item .goods-box .goods-item[data-v-7ad27081]{width:%?120?%;height:%?120?%;display:inline-block;margin-right:%?24?%}.order-item .goods-box .goods-img[data-v-7ad27081]{display:block;width:100%;height:100%}.order-item .goods-box .goods-title[data-v-7ad27081]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-box-orient:vertical!important;-webkit-line-clamp:1;font-size:%?14?%}.order-item .goods-box-single[data-v-7ad27081]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.order-item .goods-box-single .goods-img[data-v-7ad27081]{display:block;width:%?120?%;height:%?120?%}.order-item .goods-box-single .right[data-v-7ad27081]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?30?% 0 %?24?%;overflow:hidden}.order-item .goods-box-single .right .title[data-v-7ad27081]{font-size:%?30?%;color:#303133;line-height:1}.order-item .goods-box-single .right .attr-box[data-v-7ad27081]{font-size:%?26?%;color:#909399;padding:%?10?% %?12?%}.order-item .goods-box-single .right .price[data-v-7ad27081]{font-size:%?30?%;color:#303133}.order-item .goods-box-single .right .price[data-v-7ad27081]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .price-box[data-v-7ad27081]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?15?% %?30?%;font-size:%?26?%;color:#909399}.order-item .price-box .num[data-v-7ad27081]{margin:0 %?8?%;color:#303133}.order-item .price-box .price[data-v-7ad27081]{font-size:%?32?%;color:#303133}.order-item .price-box .price[data-v-7ad27081]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .action-box[data-v-7ad27081]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;position:relative;padding-right:%?30?%}.order-item .action-btn[data-v-7ad27081]{width:%?160?%;height:%?60?%;margin:0;margin-left:%?24?%;padding:0;text-align:center;line-height:%?60?%;font-size:%?26?%;color:#303133;background:#fff;border-radius:100px}.order-item .action-btn[data-v-7ad27081]:after{border-radius:100px}.order-item .action-btn.recom[data-v-7ad27081]{background:#fff9f9;color:#fa436a}.order-item .action-btn.recom[data-v-7ad27081]:after{border-color:#f7bcc8}.uni-load-more[data-v-7ad27081]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-7ad27081]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-7ad27081]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-7ad27081]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-7ad27081]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-7ad27081 1.56s ease infinite;animation:load-data-v-7ad27081 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-7ad27081]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-7ad27081]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-7ad27081]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-7ad27081]:nth-child(4){top:11px;left:0}.load1[data-v-7ad27081],.load2[data-v-7ad27081],.load3[data-v-7ad27081]{height:24px;width:24px}.load2[data-v-7ad27081]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-7ad27081]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-7ad27081]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-7ad27081]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-7ad27081]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-7ad27081]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-7ad27081]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-7ad27081]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-7ad27081]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-7ad27081]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-7ad27081]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-7ad27081]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-7ad27081]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-7ad27081]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-7ad27081{0%{opacity:1}to{opacity:.2}}body.?%PAGE?%[data-v-7ad27081]{background:#f8f8f8}',""])},"650a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===e.status&&e.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}}),a("v-uni-view",{style:{background:e.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:e.color}},[e._v(e._s("more"===e.status?e.contentText.contentdown:"loading"===e.status?e.contentText.contentrefresh:e.contentText.contentnomore))])],1)},n=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}))},"75fc":function(e,t,a){"use strict";a.r(t);var i=a("a745"),n=a.n(i);function o(e){if(n()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var r=a("774e"),d=a.n(r),s=a("c8bb"),c=a.n(s);function l(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return d()(e)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(e){return o(e)||l(e)||u()}a.d(t,"default",(function(){return v}))},"774e":function(e,t,a){e.exports=a("d2d5")},"7d1b":function(e,t,a){"use strict";var i=a("e583"),n=a.n(i);n.a},"7fcc":function(e,t,a){"use strict";a.r(t);var i=a("4b03"),n=a("3d49");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("4952");var r=a("2877"),d=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"033b3fa4",null);t["default"]=d.exports},"802d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDetail=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var i="/addons/rf-tiny-shop/v1/member/member/index";t.memberInfo=i;var n="/addons/rf-tiny-shop/v1/member/member/update";t.memberUpdate=n;var o="/addons/rf-tiny-shop/v1/member/address/index";t.addressList=o;var r="/addons/rf-tiny-shop/v1/member/address/default";t.addressDefault=r;var d="/addons/rf-tiny-shop/v1/member/address/view";t.addressDetail=d;var s="/addons/rf-tiny-shop/v1/member/address/create";t.addressCreate=s;var c="/addons/rf-tiny-shop/v1/member/address/update";t.addressUpdate=c;var l="/addons/rf-tiny-shop/v1/member/address/delete";t.addressDelete=l;var u="/addons/rf-tiny-shop/v1/marketing/coupon-type/index";t.couponList=u;var v="/addons/rf-tiny-shop/v1/member/coupon/index";t.myCouponList=v;var f="/addons/rf-tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=f;var p="/addons/rf-tiny-shop/v1/member/order/index";t.orderList=p;var m="/addons/rf-tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=m;var b="/addons/rf-tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=b;var h="/addons/rf-tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=h;var w="/addons/rf-tiny-shop/v1/member/order/view";t.orderDetail=w;var g="/addons/rf-tiny-shop/v1/member/footprint/index";t.footPrintList=g;var y="/addons/rf-tiny-shop/v1/member/footprint/delete";t.footPrintDel=y;var x="/addons/rf-tiny-shop/v1/member/collect/index";t.collectList=x;var k="/addons/rf-tiny-shop/v1/member/credits-log/index";t.creditsLogList=k;var _="/addons/rf-tiny-shop/v1/member/evaluate/create";t.evaluateCreate=_;var C="/addons/rf-tiny-shop/v1/member/invoice/index";t.invoiceList=C;var O="/addons/rf-tiny-shop/v1/member/invoice/create";t.invoiceCreate=O;var L="/addons/rf-tiny-shop/v1/member/invoice/update";t.invoiceUpdate=L;var D="/addons/rf-tiny-shop/v1/member/invoice/view";t.invoiceDetail=D;var j="/addons/rf-tiny-shop/v1/member/invoice/default";t.invoiceDefault=j;var I="/addons/rf-tiny-shop/v1/member/invoice/delete";t.invoiceDel=I},"95d5":function(e,t,a){var i=a("40c3"),n=a("5168")("iterator"),o=a("481b");e.exports=a("584a").isIterable=function(e){var t=Object(e);return void 0!==t[n]||"@@iterator"in t||o.hasOwnProperty(i(t))}},a60a:function(e,t,a){var i=a("51f2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("c25bf178",i,!0,{sourceMap:!1,shadowMode:!1})},a745:function(e,t,a){e.exports=a("f410")},ba86:function(e,t,a){"use strict";a.r(t);var i=a("e48b"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},c4c8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderPreview=t.evaluateList=t.orderFreightFee=t.orderPay=t.orderClose=t.orderCreate=t.cartItemUpdateNum=t.cartItemClear=t.cartItemDel=t.cartItemList=t.cartItemCreate=t.productDetail=t.productList=t.productCateList=t.productCate=void 0;var i="/addons/rf-tiny-shop/v1/product/cate/index";t.productCate=i;var n="/addons/rf-tiny-shop/v1/product/cate/list";t.productCateList=n;var o="/addons/rf-tiny-shop/v1/product/product/index";t.productList=o;var r="/addons/rf-tiny-shop/v1/product/product/view";t.productDetail=r;var d="/addons/rf-tiny-shop/v1/member/cart-item/create";t.cartItemCreate=d;var s="/addons/rf-tiny-shop/v1/member/cart-item/index";t.cartItemList=s;var c="/addons/rf-tiny-shop/v1/member/cart-item/delete-ids";t.cartItemDel=c;var l="/addons/rf-tiny-shop/v1/member/cart-item/clear";t.cartItemClear=l;var u="/addons/rf-tiny-shop/v1/member/cart-item/update-num";t.cartItemUpdateNum=u;var v="/addons/rf-tiny-shop/v1/order/order/create";t.orderCreate=v;var f="/addons/rf-tiny-shop/v1/order/order/preview";t.orderPreview=f;var p="/addons/rf-tiny-shop/v1/member/order/close";t.orderClose=p;var m="/addons/rf-tiny-shop/v1/common/pay/create";t.orderPay=m;var b="/addons/rf-tiny-shop/v1/order/order/freight-fee";t.orderFreightFee=b;var h="/addons/rf-tiny-shop/v1/product/evaluate/index";t.evaluateList=h},c8bb:function(e,t,a){e.exports=a("54a1")},d2d5:function(e,t,a){a("1654"),a("549b"),e.exports=a("584a").Array.from},d562:function(e,t,a){var i=a("639e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("47f288d7",i,!0,{sourceMap:!1,shadowMode:!1})},e48b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"—— 全部都被你看完了 ——"}}}},data:function(){return{}}};t.default=i},e583:function(e,t,a){var i=a("2dfd");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("448deab0",i,!0,{sourceMap:!1,shadowMode:!1})},e8b3:function(e,t,a){"use strict";a.r(t);var i=a("f6aa"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},ebc4:function(e,t,a){"use strict";a.r(t);var i=a("04fd"),n=a("e8b3");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("614d");var r=a("2877"),d=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"7ad27081",null);t["default"]=d.exports},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray},f6aa:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("8e6e"),a("456d"),a("ac6a");var n=i(a("75fc")),o=i(a("bd86"));a("96cf");var r=i(a("3b8d")),d=i(a("09c2")),s=i(a("d138")),c=i(a("ad19")),l=i(a("6bf2")),u=a("802d"),v=i(a("7fcc")),f=a("c4c8");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){(0,o.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={components:{uniLoadMore:d.default,empty:s.default,uniCountDown:v.default},data:function(){return{tabCurrentIndex:0,loadingType:"more",navList:[{state:void 0,text:"全部"},{state:0,text:"待付款"},{state:1,text:"待发货"},{state:2,text:"待收货"},{state:3,text:"评价"}],orderList:[],page:1}},computed:{second:function(){return function(e){return Math.floor(900-(new Date/1e3-e))}}},filters:{time:function(e){return(0,l.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,a=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return a.forEach((function(a){a.key==e&&(t=a.value)})),t}},onLoad:function(e){this.tabCurrentIndex=+e.state+1,this.initData()},onPullDownRefresh:function(){this.page=1,this.orderList=[],this.getOrderList("refresh")},onReachBottom:function(){this.page++,this.getOrderList()},methods:{timeUp:function(e){0===parseInt(e.order_status,10)&&this.handleOrderClose(e.id)},handleOrderOperation:function(e,t,a){switch(t){case"detail":this.toOrderDetail(e.id);break;case"evaluation":this.handleOrderEvaluation(e,"evaluation");break;case"close":this.handleOrderClose(e.id);break;case"delete":uni.showToast({title:"删除订单",icon:"none"});break;case"shipping":uni.showToast({title:"后台没写",icon:"none"});break;case"refund":this.handleOrderEvaluation(e,"refund",a);break;case"delivery":this.handleOrderTakeDelivery(e.id);break}},handleOrderEvaluation:function(e,t,a){uni.navigateTo({url:"/pages/order/orderItem?list=".concat(JSON.stringify(e.product),"&orderStatus=").concat(e.order_status)})},toOrderDetail:function(e){uni.navigateTo({url:"/pages/order/detail?id=".concat(e)})},handleOrderClose:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(f.orderClose),{id:t}).then((function(e){200===e.code?(a.page=1,a.orderList=[],a.getOrderList()):uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleOrderTakeDelivery:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(u.orderTakeDelivery),{id:t}).then((function(e){200===e.code?(a.page=1,a.orderList=[],a.getOrderList()):uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handlePayment:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a={},a.order_id=parseInt(t.id,10),uni.navigateTo({url:"/pages/money/pay?data=".concat(JSON.stringify(a),"&money=").concat(t.product_money)});case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),initData:function(){this.getOrderList()},getOrderList:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var a,i,o,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=this.tabCurrentIndex,i=this.navList[a],o={},(i.state||0===i.state)&&(o.synthesize_status=i.state),o.page=this.page,uni.showLoading({title:"加载中..."}),e.next=8,this.$get("".concat(u.orderList),m({},o)).then((function(e){"refresh"===t&&uni.stopPullDownRefresh(),200===e.code?(r.loadingType=10===e.data.length?"more":"nomore",r.orderList=[].concat((0,n.default)(r.orderList),(0,n.default)(e.data))):uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),loadData:function(e){var t=this,a=this.tabCurrentIndex,i=this.navList[a],n=i.state;"tabChange"===e&&!0===i.loaded||"loading"!==i.loadingType&&(i.loadingType="loading",setTimeout((function(){var e=c.default.orderList.filter((function(e){return e=Object.assign(e,t.orderStateExp(e.state)),0===n?e:e.state===n}));e.forEach((function(e){i.orderList.push(e)})),t.$set(i,"loaded",!0),i.loadingType="more"}),600))},changeTab:function(e){this.page=1,this.orderList=[],this.tabCurrentIndex=e.target.current,this.getOrderList()},tabClick:function(e){this.page=1,this.orderList=[],this.tabCurrentIndex=e},getMoreOrderList:function(){this.page++,this.getOrderList()},deleteOrder:function(e){var t=this;uni.showLoading({title:"请稍后"}),setTimeout((function(){t.navList[t.tabCurrentIndex].orderList.splice(e,1),uni.hideLoading()}),600)},orderStateExp:function(e){var t="",a="#fa436a";switch(+e){case 1:t="待付款";break;case 2:t="待发货";break;case 9:t="订单已关闭",a="#909399";break}return{stateTip:t,stateTipColor:a}}}};t.default=b},fc07:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("c5f6");var i={name:"UniCountDown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(e){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(e,t,a,i){return 60*e*60*24+60*t*60+60*a+i},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var e=this.seconds,t=0,a=0,i=0,n=0;e>0?(t=Math.floor(e/86400),a=Math.floor(e/3600)-24*t,i=Math.floor(e/60)-24*t*60-60*a,n=Math.floor(e)-24*t*60*60-60*a*60-60*i):this.timeUp(),t<10&&(t="0"+t),a<10&&(a="0"+a),i<10&&(i="0"+i),n<10&&(n="0"+n),this.d=t,this.h=a,this.i=i,this.s=n}}};t.default=i}}]);