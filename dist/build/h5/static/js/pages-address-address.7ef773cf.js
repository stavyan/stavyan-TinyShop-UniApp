(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"22e6":function(e,t,i){"use strict";i.r(t);var a=i("e820"),n=i("2ce5");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("539a");var o=i("2877"),d=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"725761a7",null);t["default"]=d.exports},"2ce5":function(e,t,i){"use strict";i.r(t);var a=i("aad8"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},"539a":function(e,t,i){"use strict";var a=i("6ae9"),n=i.n(a);n.a},"6ae9":function(e,t,i){var a=i("b85e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("8f55a2fe",a,!0,{sourceMap:!1,shadowMode:!1})},"802d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderList=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var a="/addons/rf-tiny-shop/v1/member/member/index";t.memberInfo=a;var n="/addons/rf-tiny-shop/v1/member/member/update";t.memberUpdate=n;var s="/addons/rf-tiny-shop/v1/member/address/index";t.addressList=s;var o="/addons/rf-tiny-shop/v1/member/address/default";t.addressDefault=o;var d="/addons/rf-tiny-shop/v1/member/address/view";t.addressDetail=d;var r="/addons/rf-tiny-shop/v1/member/address/create";t.addressCreate=r;var c="/addons/rf-tiny-shop/v1/member/address/update";t.addressUpdate=c;var u="/addons/rf-tiny-shop/v1/member/address/delete";t.addressDelete=u;var l="/addons/rf-tiny-shop/v1/marketing/coupon-type/index";t.couponList=l;var f="/addons/rf-tiny-shop/v1/member/coupon/index";t.myCouponList=f;var v="/addons/rf-tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=v;var b="/addons/rf-tiny-shop/v1/member/order/index";t.orderList=b;var p="/addons/rf-tiny-shop/v1/member/footprint/index";t.footPrintList=p;var m="/addons/rf-tiny-shop/v1/member/footprint/delete";t.footPrintDel=m;var h="/addons/rf-tiny-shop/v1/member/collect/index";t.collectList=h},aad8:function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("3b8d")),s=i("802d"),o={data:function(){return{timeOutEvent:0,source:0,addressList:[]}},onLoad:function(e){this.source=e.source,this.initData()},methods:{goTouchStart:function(e){var t=this;clearTimeout(this.timeOutEvent),this.timeOutEvent=0,this.timeOutEvent=setTimeout((function(){uni.showModal({content:"确定要删除该收货地址吗",success:function(i){i.confirm&&t.$del("".concat(s.addressDelete,"?id=").concat(e)).then((function(e){200===e.code?t.getAddressList():uni.showToast({title:e.message,icon:"none"})}))}})}),500)},goTouchEnd:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent},goTouchMove:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},initData:function(){this.getAddressList()},getAddressList:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(s.addressList)).then((function(e){200===e.code?t.addressList=e.data:uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkAddress:function(e){1==this.source&&(this.$api.prePage().addressData=e,uni.navigateBack())},addAddress:function(e,t){uni.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"&id=").concat(t&&t.id||void 0)})},refreshList:function(e,t){this.addressList.unshift(e),console.log(e,t)}}};t.default=o},b85e:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,"uni-page-body[data-v-725761a7]{padding-bottom:%?120?%}.content[data-v-725761a7]{position:relative}.list[data-v-725761a7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-725761a7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-725761a7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-725761a7]{font-size:%?24?%;color:#fa436a;margin-right:%?10?%;background:#fffafb;border:1px solid #ffb4c7;border-radius:%?4?%;padding:%?4?% %?10?%;line-height:1}.address-box .address[data-v-725761a7]{font-size:%?30?%;color:#303133}.u-box[data-v-725761a7]{font-size:%?28?%;color:#909399;margin-top:%?16?%}.u-box .name[data-v-725761a7]{margin-right:%?30?%}.icon-bianji[data-v-725761a7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#909399;padding-left:%?30?%}.add-btn[data-v-725761a7]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}",""])},e820:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content b-t"},[e._l(e.addressList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"list b-b",on:{click:function(i){i=e.$handleEvent(i),e.checkAddress(t)}}},[i("v-uni-view",{staticClass:"wrapper",on:{touchstart:function(i){i=e.$handleEvent(i),e.goTouchStart(t.id)},touchmove:function(t){t=e.$handleEvent(t),e.goTouchMove(t)},touchend:function(t){t=e.$handleEvent(t),e.goTouchEnd(t)}}},[i("v-uni-view",{staticClass:"address-box"},[1===parseInt(t.is_default,10)?i("v-uni-text",{staticClass:"tag"},[e._v("默认")]):e._e(),i("v-uni-text",{staticClass:"address"},[e._v(e._s(t.address_name)+" "+e._s(t.address_details))])],1),i("v-uni-view",{staticClass:"u-box"},[i("v-uni-text",{staticClass:"name"},[e._v(e._s(t.realname))]),i("v-uni-text",{staticClass:"mobile"},[e._v(e._s(t.mobile))])],1)],1),i("v-uni-text",{staticClass:"yticon icon-bianji",on:{click:function(i){i.stopPropagation(),i=e.$handleEvent(i),e.addAddress("edit",t)}}})],1)})),i("v-uni-text",{staticStyle:{display:"block",padding:"16upx 30upx 10upx","lihe-height":"1.6",color:"#fa436a","font-size":"24upx"}},[e._v("提示：长按可删除当前收货地址。最多只能存在一个默认地址。")]),i("v-uni-button",{staticClass:"add-btn",on:{click:function(t){t=e.$handleEvent(t),e.addAddress("add")}}},[e._v("新增地址")])],2)},n=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}))}}]);