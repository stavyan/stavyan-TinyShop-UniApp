(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userinfo-userinfo"],{"802d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDetail=t.orderList=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var n="/addons/rf-tiny-shop/v1/member/member/index";t.memberInfo=n;var i="/addons/rf-tiny-shop/v1/member/member/update";t.memberUpdate=i;var a="/addons/rf-tiny-shop/v1/member/address/index";t.addressList=a;var o="/addons/rf-tiny-shop/v1/member/address/default";t.addressDefault=o;var s="/addons/rf-tiny-shop/v1/member/address/view";t.addressDetail=s;var c="/addons/rf-tiny-shop/v1/member/address/create";t.addressCreate=c;var u="/addons/rf-tiny-shop/v1/member/address/update";t.addressUpdate=u;var d="/addons/rf-tiny-shop/v1/member/address/delete";t.addressDelete=d;var l="/addons/rf-tiny-shop/v1/marketing/coupon-type/index";t.couponList=l;var f="/addons/rf-tiny-shop/v1/member/coupon/index";t.myCouponList=f;var p="/addons/rf-tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=p;var v="/addons/rf-tiny-shop/v1/member/order/index";t.orderList=v;var m="/addons/rf-tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=m;var b="/addons/rf-tiny-shop/v1/member/order/view";t.orderDetail=b;var h="/addons/rf-tiny-shop/v1/member/footprint/index";t.footPrintList=h;var g="/addons/rf-tiny-shop/v1/member/footprint/delete";t.footPrintDel=g;var w="/addons/rf-tiny-shop/v1/member/collect/index";t.collectList=w;var y="/addons/rf-tiny-shop/v1/member/credits-log/index";t.creditsLogList=y;var k="/addons/rf-tiny-shop/v1/member/evaluate/create";t.evaluateCreate=k;var x="/addons/rf-tiny-shop/v1/member/invoice/index";t.invoiceList=x;var C="/addons/rf-tiny-shop/v1/member/invoice/create";t.invoiceCreate=C;var D="/addons/rf-tiny-shop/v1/member/invoice/update";t.invoiceUpdate=D;var M="/addons/rf-tiny-shop/v1/member/invoice/view";t.invoiceDetail=M;var L="/addons/rf-tiny-shop/v1/member/invoice/default";t.invoiceDefault=L;var R="/addons/rf-tiny-shop/v1/member/invoice/delete";t.invoiceDel=R},"86e1":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",[r("v-uni-view",{staticClass:"user-section"},[r("v-uni-image",{staticClass:"bg",attrs:{src:"/static/user-bg.jpg"}}),r("v-uni-text",{staticClass:"bg-upload-btn yticon icon-paizhao"}),r("v-uni-view",{staticClass:"portrait-box"},[r("v-uni-image",{staticClass:"portrait",attrs:{src:e.profileInfo.head_portrait||"/static/missing-face.png"}})],1)],1),r("v-uni-view",{staticClass:"input-content"},[r("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.toUpdateInfo(t)}}},[r("v-uni-view",{staticClass:"input-item"},[r("v-uni-text",{staticClass:"tit"},[e._v("手机号码")]),r("v-uni-input",{attrs:{type:"number",name:"mobile",value:e.profileInfo.mobile,disabled:"",placeholder:"请输入手机号码"}})],1),r("v-uni-view",{staticClass:"input-item"},[r("v-uni-text",{staticClass:"tit"},[e._v("用户昵称")]),r("v-uni-input",{attrs:{type:"text",value:e.profileInfo.nickname,name:"nickname",placeholder:"请输入您的昵称"}})],1),r("v-uni-view",{staticClass:"input-item"},[r("v-uni-text",{staticClass:"tit"},[e._v("真实姓名")]),r("v-uni-input",{attrs:{type:"text",value:e.profileInfo.realname,name:"realname",placeholder:"请输入您的姓名"}})],1),r("v-uni-view",{staticClass:"input-item"},[r("v-uni-text",{staticClass:"tit"},[e._v("性别")]),r("v-uni-view",{staticClass:"uni-list"},[r("v-uni-radio-group",{staticClass:"gender",attrs:{name:"gender"}},e._l(e.genders,(function(t,n){return r("v-uni-label",{key:n,staticClass:"gender-item"},[r("v-uni-radio",{staticClass:"gender-item-radio",attrs:{value:t.value,checked:t.value===e.profileInfo.gender}}),r("v-uni-text",{staticClass:"gender-item-text"},[e._v(e._s(t.name))])],1)})),1)],1)],1),r("v-uni-view",{staticClass:"input-item"},[r("v-uni-text",{staticClass:"tit"},[e._v("生日")]),r("v-uni-picker",{attrs:{mode:"date",value:e.date},on:{change:function(t){t=e.$handleEvent(t),e.bindDateChange(t)}}},[r("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.date))])],1)],1),r("v-uni-view",{staticClass:"input-item"},[r("v-uni-text",{staticClass:"tit"},[e._v("QQ")]),r("v-uni-input",{attrs:{type:"number",value:e.profileInfo.qq,name:"qq",placeholder:"请输入您的QQ"}})],1),r("v-uni-view",{staticClass:"input-item"},[r("v-uni-text",{staticClass:"tit"},[e._v("邮箱")]),r("v-uni-input",{attrs:{type:"number",value:e.profileInfo.email,name:"email",placeholder:"请输入您的邮箱"}})],1),r("v-uni-button",{staticClass:"confirm-btn",attrs:{formType:"submit"}},[e._v("修改资料")])],1)],1)],1)},i=[];r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}))},9564:function(e,t,r){"use strict";r("c5f6"),r("28a5"),r("3b2b"),e.exports={error:"",check:function(e,t){for(var r=0;r<t.length;r++){if(!t[r].checkType)return!0;if(!t[r].name)return!0;if(!t[r].errorMsg)return!0;if(!e[t[r].name])return this.error=t[r].errorMsg,!1;switch(t[r].checkType){case"string":var n=new RegExp("^.{"+t[r].checkRule+"}$");if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[r].checkRule+"}$");if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[r].name]))return this.error=t[r].errorMsg,!1;var i=t[r].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[r].name]>i[1]||e[t[r].name]<i[0])return this.error=t[r].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;i=t[r].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[r].name]>i[1]||e[t[r].name]<i[0])return this.error=t[r].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;i=t[r].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[r].name]>i[1]||e[t[r].name]<i[0])return this.error=t[r].errorMsg,!1;break;case"same":if(e[t[r].name]!=t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"notsame":if(e[t[r].name]==t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"reg":n=new RegExp(t[r].checkRule);if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"in":if(-1==t[r].checkRule.indexOf(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"notnull":if(null==e[t[r].name]||e[t[r].name].length<1)return this.error=t[r].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},"9cb6":function(e,t,r){var n=r("ce90");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("8a767c60",n,!0,{sourceMap:!1,shadowMode:!1})},"9f2c":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("8e6e"),r("ac6a"),r("456d");var i=n(r("bd86"));r("96cf");var a=n(r("3b8d")),o=r("802d");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("9564"),d={data:function(){var e=this.getDate({format:!0});return{profileInfo:{},genders:[{value:"0",name:"未知"},{value:"1",name:"男"},{value:"2",name:"女"}],date:e,token:null}},computed:{},onLoad:function(){this.initData()},methods:{bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},initData:function(){this.token=uni.getStorageSync("accessToken")||void 0,this.token?this.getMemberInfo():uni.reLaunch({url:"/pages/public/login"})},getMemberInfo:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$get(o.memberInfo).then((function(e){200===e.code?(t.profileInfo=e.data,t.date=t.profileInfo.birthday):uni.showToast({title:e.message,icon:"none"})}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),toUpdateInfo:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.detail.value,n=[{name:"mobile",checkType:"phoneno",checkRule:"11,11",errorMsg:"请输入正确的手机号"}],i=u.check(r,n),i){e.next=6;break}return uni.showToast({title:u.error,icon:"none"}),e.abrupt("return");case 6:this.handleUpdateInfo(r);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleUpdateInfo:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"资料修改中..."}),e.next=3,this.$put("".concat(o.memberUpdate,"?id=").concat(this.profileInfo.id),c({},t,{birthday:this.date})).then((function(e){200===e.code?uni.showToast({title:"恭喜您, 资料修改成功！",icon:"none"}):uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=d},b3af:function(e,t,r){"use strict";r.r(t);var n=r("9f2c"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},b889:function(e,t,r){"use strict";var n=r("9cb6"),i=r.n(n);i.a},ce90:function(e,t,r){t=e.exports=r("24fb")(!1),t.push([e.i,".user-section[data-v-8579e7fc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?460?%;padding:%?40?% %?30?% 0;position:relative}.user-section .bg[data-v-8579e7fc]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-filter:blur(1px);filter:blur(1px);opacity:.7}.user-section .portrait-box[data-v-8579e7fc]{width:%?200?%;height:%?200?%;border:%?6?% solid #fff;border-radius:50%;position:relative;z-index:2}.user-section .portrait[data-v-8579e7fc]{position:relative;width:100%;height:100%;border-radius:50%}.user-section .yticon[data-v-8579e7fc]{position:absolute;line-height:1;z-index:5;font-size:%?48?%;color:#fff;padding:%?4?% %?6?%;border-radius:%?6?%;background:rgba(0,0,0,.4)}.user-section .pt-upload-btn[data-v-8579e7fc]{right:0;bottom:%?10?%}.user-section .bg-upload-btn[data-v-8579e7fc]{right:%?20?%;bottom:%?16?%}.input-content[data-v-8579e7fc]{padding:%?40?% %?60?%}.input-content .input-item[data-v-8579e7fc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?30?%;background:#f8f6fc;height:%?120?%;border-radius:4px;margin-bottom:%?50?%}.input-content .input-item .uni-input[data-v-8579e7fc]{font-size:%?32?%;color:#303133}.input-content .input-item[data-v-8579e7fc]:last-child{margin-bottom:0}.input-content .input-item .tit[data-v-8579e7fc]{height:%?50?%;line-height:%?56?%;font-size:%?26?%;color:#606266}.input-content .input-item uni-input[data-v-8579e7fc]{height:%?60?%;font-size:%?30?%;color:#303133;width:100%}.input-content .input-item .gender[data-v-8579e7fc]{margin:%?10?% 0;color:#303133;font-size:%?28?%}.input-content .input-item .gender .gender-item[data-v-8579e7fc]{margin-right:%?20?%}.input-content .input-item .gender .gender-item .gender-item-text[data-v-8579e7fc]{padding:0 %?10?%}.input-content .input-item .gender .gender-item uni-radio .wx-radio-input.wx-radio-input-checked[data-v-8579e7fc]{background:#fa436a;border-color:#fa436a}.input-content .confirm-btn[data-v-8579e7fc]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?70?%;background:#fa436a;color:#fff;font-size:%?32?%}.input-content .confirm-btn[data-v-8579e7fc]:after{border-radius:100px}",""])},d9a9:function(e,t,r){"use strict";r.r(t);var n=r("86e1"),i=r("b3af");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("b889");var o=r("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"8579e7fc",null);t["default"]=s.exports}}]);