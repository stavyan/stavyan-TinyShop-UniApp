(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-detail"],{"5ffd":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("3b8d")),r=a("802d"),s=i(a("f97d")),o=i(a("d138")),l=i(a("8f09")),c=i(a("6e16")),u=i(a("7f33")),b=i(a("4c2b")),d={components:{rfLoadMore:s.default,empty:o.default,uniDrawer:c.default,uniList:u.default,uniListItem:b.default},data:function(){return{headerTop:0,typeClass:"valid",theIndex:null,oldIndex:null,state:1,isStop:!1,couponList:[],loadingType:"more",token:null,page:1,showRight:!1,currentCoupon:{}}},filters:{time:function(t){return(0,l.default)(1e3*t).format("YYYY-MM-DD")},timeFull:function(t){return(0,l.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")}},onLoad:function(t){this.initData(t)},methods:{show:function(t){0!==t.usableProduct.length&&(this.currentCoupon=t,this.showRight=!0)},hide:function(){this.showRight=!1},closeDrawer:function(){this.showRight=!1},initData:function(t){this.token=uni.getStorageSync("accessToken")||void 0,this.token,this.getMyCouponDetail(t.id)},getCoupon:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.token){t.next=3;break}return this.$api.msg("请您先登录！"),t.abrupt("return");case 3:if(0!=e.is_get){t.next=6;break}return this.$api.msg("该优惠券暂不可领取！"),t.abrupt("return");case 6:return t.next=8,this.$post("".concat(r.couponReceive),{id:e.id}).then((function(t){a.$api.msg("领取成功"),setTimeout((function(){a.couponList=[],a.getMyCouponDetail(id)}),1500)})).catch((function(t){console.log(t)}));case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),navTo:function(t,e){e?uni.switchTab({url:t}):"login"!==t&&uni.navigateTo({url:t})},getMyCouponDetail:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(r.couponDetail),{id:e}).then((function(t){a.couponList.push(t.data)})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=d},"6f7b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"coupon-detail"},[a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"sub-list valid",style:{marginTop:3===t.state?"40upx":0}},t._l(t.couponList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"row"},[a("v-uni-view",{staticClass:"carrier"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"in1line title"},[a("v-uni-text",{staticClass:"cell-icon"},[t._v(t._s(2===parseInt(e.range_type,10)?"限":"全"))]),t._v(t._s(e.title))],1),2!==t.state?a("v-uni-view",{staticClass:"term"},[t._v(t._s(t._f("time")(e.start_time))+" ~ "+t._s(t._f("time")(e.end_time)))]):a("v-uni-view",{staticClass:"term"},[t._v("使用时间："+t._s(t._f("timeFull")(e.use_time)))]),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:3===t.state,expression:"state === 3"}],staticClass:"icon shixiao"}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.state,expression:"state === 2"}],staticClass:"used"},[t._v("已使用")]),a("v-uni-view",{staticClass:"usage"},[t._v(t._s(0===parseInt(e.max_fetch,10)?"不限":"每人限领 "+e.max_fetch)+"\n\t\t\t\t\t\t\t\t总领取 "+t._s(e.get_count)),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.percentage,expression:"row.percentage"}]},[t._v("剩余"+t._s(e.percentage)+"%")])],1)],1),a("v-uni-view",{staticClass:"right",class:{invalid:1!==t.state}},[a("v-uni-view",{staticClass:"ticket"},[a("v-uni-view",{staticClass:"num"},[t._v(t._s(e.money?"￥"+e.money:e.discount+"折"))])],1),a("v-uni-view",{staticClass:"criteria"},[t._v("满"+t._s(e.at_least)+"使用")]),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===parseInt(e.range_type,10),expression:"parseInt(row.range_type, 10) === 2"}],staticClass:"use view",on:{click:function(a){a=t.$handleEvent(a),t.show(e)}}},[t._v("商品")]),a("v-uni-view",{staticClass:"use",on:{click:function(a){a=t.$handleEvent(a),t.getCoupon(e)}}},[t._v("领取")])],1)],1)],1)})),1),0===t.couponList.length?a("empty",{attrs:{info:"暂无优惠券"}}):t._e()],1),a("uni-drawer",{staticClass:"drawer",attrs:{visible:t.showRight,mode:"right"},on:{close:function(e){e=t.$handleEvent(e),t.closeDrawer()}}},[t._l(t.currentCoupon.usableProduct,(function(e){return a("uni-list",{key:e.id},[a("uni-list-item",{staticClass:"in1line",attrs:{title:e.name.split("】")[0],note:e.name.split("】")[1]},on:{click:function(a){a=t.$handleEvent(a),t.navTo("/pages/product/product?id="+e.id)}}})],1)})),a("v-uni-view",{staticClass:"close"},[a("v-uni-button",{staticClass:"btn",attrs:{plain:"true",size:"small",type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)}}},[t._v("关闭")])],1)],2)],1)},n=[];a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}))},7390:function(t,e,a){"use strict";a.r(e);var i=a("5ffd"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},b2be:function(t,e,a){var i=a("ef10");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("ecdac828",i,!0,{sourceMap:!1,shadowMode:!1})},cb3c:function(t,e,a){"use strict";var i=a("b2be"),n=a.n(i);n.a},e4af:function(t,e,a){"use strict";a.r(e);var i=a("6f7b"),n=a("7390");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("cb3c");var s=a("2877"),o=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"7be05776",null);e["default"]=o.exports},ef10:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-view[data-v-7be05776]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}uni-page-body[data-v-7be05776]{position:relative;background-color:#f5f5f5}.list[data-v-7be05776]{width:100%;display:block;position:relative}.list .empty-invalid[data-v-7be05776]{position:absolute;right:%?20?%;top:%?10?%;font-size:%?28?%;color:#fa436a}.list .empty-invalid .icon[data-v-7be05776]{font-size:%?28?%;color:#fa436a;margin-right:%?8?%}@-webkit-keyframes showValid-data-v-7be05776{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes showValid-data-v-7be05776{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes showInvalid-data-v-7be05776{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes showInvalid-data-v-7be05776{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}.sub-list[data-v-7be05776]{width:100%;padding-top:%?10?%}.sub-list.invalid[data-v-7be05776]{position:absolute;top:0;left:100%;display:none}.sub-list.showvalid[data-v-7be05776]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-animation:showValid-data-v-7be05776 .2s linear both;animation:showValid-data-v-7be05776 .2s linear both}.sub-list.showinvalid[data-v-7be05776]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-animation:showInvalid-data-v-7be05776 .2s linear both;animation:showInvalid-data-v-7be05776 .2s linear both}.sub-list .tis[data-v-7be05776]{width:100%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%}.sub-list .row[data-v-7be05776]{width:92%;height:24vw;margin:%?20?% auto %?10?% auto;border-radius:%?8?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;overflow:hidden;z-index:4;border:0}.sub-list .row .menu[data-v-7be05776]{position:absolute;width:28%;height:100%;right:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fa436a;color:#fff;z-index:2}.sub-list .row .menu .icon[data-v-7be05776]{color:#fff;font-size:%?50?%}.sub-list .row .carrier[data-v-7be05776]{background-color:#fff;position:absolute;width:100%;padding:0 0;height:100%;z-index:3;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}@-webkit-keyframes showMenu-data-v-7be05776{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-28%);transform:translateX(-28%)}}@keyframes showMenu-data-v-7be05776{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-28%);transform:translateX(-28%)}}@-webkit-keyframes closeMenu-data-v-7be05776{0%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes closeMenu-data-v-7be05776{0%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}.sub-list .row .carrier.open[data-v-7be05776]{-webkit-animation:showMenu-data-v-7be05776 .25s linear both;animation:showMenu-data-v-7be05776 .25s linear both}.sub-list .row .carrier.close[data-v-7be05776]{-webkit-animation:closeMenu-data-v-7be05776 .15s linear both;animation:closeMenu-data-v-7be05776 .15s linear both}.sub-list .row .carrier .left[data-v-7be05776]{width:100%;position:relative}.sub-list .row .carrier .left .title[data-v-7be05776]{padding-top:3vw;width:90%;margin:0 5%;font-size:%?36?%}.sub-list .row .carrier .left .title .cell-icon[data-v-7be05776]{display:inline-block;height:%?32?%;margin-top:%?15?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.sub-list .row .carrier .left .title .cell-icon.hb[data-v-7be05776]{background:#ffaa0e}.sub-list .row .carrier .left .title .cell-icon.lpk[data-v-7be05776]{background:#3ab54a}.sub-list .row .carrier .left .term[data-v-7be05776]{width:90%;margin:0 5%;font-size:%?26?%;color:#999}.sub-list .row .carrier .left .usage[data-v-7be05776]{width:90%;margin:0 5%;font-size:%?26?%;color:#909399}.sub-list .row .carrier .left .gap-bottom[data-v-7be05776],.sub-list .row .carrier .left .gap-top[data-v-7be05776]{position:absolute;width:%?20?%;height:%?20?%;right:%?-10?%;border-radius:100%;background-color:#f5f5f5}.sub-list .row .carrier .left .gap-top[data-v-7be05776]{top:%?-10?%}.sub-list .row .carrier .left .gap-bottom[data-v-7be05776]{bottom:%?-10?%}.sub-list .row .carrier .left .used[data-v-7be05776]{position:absolute;right:%?10?%;bottom:%?5?%;font-size:%?24?%;color:#fa436a}.sub-list .row .carrier .left .shixiao[data-v-7be05776]{position:absolute;right:0;top:%?-20?%;font-size:%?150?%;z-index:6;color:hsla(0,0%,60%,.2)}.sub-list .row .carrier .right[data-v-7be05776]{-webkit-flex-shrink:0;flex-shrink:0;width:28%;color:#fff;background:-webkit-linear-gradient(left,rgba(250,67,106,.72),rgba(250,67,106,.64));background:linear-gradient(90deg,rgba(250,67,106,.72),rgba(250,67,106,.64));-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.sub-list .row .carrier .right.invalid[data-v-7be05776]{background:-webkit-linear-gradient(left,#aaa,#999);background:linear-gradient(90deg,#aaa,#999)}.sub-list .row .carrier .right.invalid .use[data-v-7be05776]{color:#aaa}.sub-list .row .carrier .right .criteria[data-v-7be05776],.sub-list .row .carrier .right .ticket[data-v-7be05776]{width:100%}.sub-list .row .carrier .right .ticket[data-v-7be05776]{padding-top:1vw;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;height:6vw}.sub-list .row .carrier .right .ticket .num[data-v-7be05776]{font-size:%?42?%;font-weight:600}.sub-list .row .carrier .right .ticket .unit[data-v-7be05776]{font-size:%?24?%}.sub-list .row .carrier .right .criteria[data-v-7be05776]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.sub-list .row .carrier .right .use[data-v-7be05776]{width:45%;margin:0 2.5%;height:%?40?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;background-color:#fff;color:#fa436a;border-radius:%?40?%;padding:0 %?4?%}.drawer .close .btn[data-v-7be05776]{width:%?320?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?70?%;background:#fa436a;color:#fff;font-size:%?32?%;border:none}.drawer .close .btn[data-v-7be05776]:after{border-radius:100px}body.?%PAGE?%[data-v-7be05776]{background-color:#f5f5f5}",""]),t.exports=e}}]);