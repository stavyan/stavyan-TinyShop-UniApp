(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-evaluation-evaluation"],{"0eef":function(e,t,a){var n=a("e3c3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("2a58d625",n,!0,{sourceMap:!1,shadowMode:!1})},1193:function(e,t,a){"use strict";var n=a("0eef"),i=a.n(n);i.a},"1b4c":function(e,t,a){"use strict";a.r(t);var n=a("7ec7"),i=a("4607");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("1193");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"905bb5c2",null);t["default"]=s.exports},4607:function(e,t,a){"use strict";a.r(t);var n=a("ecea"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"7ec7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"evaluation"},[a("v-uni-view",{staticClass:"product-info"},[a("v-uni-image",{staticClass:"product-image",attrs:{mode:"aspectFill",src:e.productInfo.product_picture}}),a("v-uni-view",{staticClass:"product-content"},[a("v-uni-text",{staticClass:"product-name in2line"},[e._v(e._s(e.productInfo.product_name))]),a("v-uni-text",{staticClass:"product-sku-name"},[e._v(e._s(e.productInfo.sku_name||"基础款"))]),a("v-uni-text",{staticClass:"product-price"},[e._v(e._s(e.productInfo.product_money)+" * "+e._s(e.productInfo.num))])],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"add"!==e.evaluationType,expression:"evaluationType !== 'add'"}],staticClass:"product-rate"},[e._v("整体评价"),a("v-uni-view",{staticClass:"product-rate-wrapper"},[a("uni-rate",{staticClass:"rate",attrs:{size:"24",value:e.evaluate.scores,margin:12,"active-color":"#fa436a"},on:{change:function(t){t=e.$handleEvent(t),e.handleScoreChange(t)}}})],1)],1),a("v-uni-view",{staticClass:"product-textarea"},[a("v-uni-textarea",{staticClass:"textarea",attrs:{maxlength:"140",value:e.evaluate.content,"placeholder-style":"color:#ccc; font-size: 24upx",placeholder:"宝贝满足你的期待吗？说说你的使用心得，分享给你想买的他们吧"},on:{input:function(t){t=e.$handleEvent(t),e.handleContentChange(t)}}}),a("v-uni-view",{staticClass:"tips"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.evaluate.content.length>0&&e.evaluate.content.length<40,expression:"evaluate.content.length > 0 && evaluate.content.length < 40"}]},[e._v("您已输入"),a("v-uni-text",{staticClass:"f"},[e._v(e._s(e.evaluate.content.length))]),e._v("字")],1),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.evaluate.content.length>=40,expression:"evaluate.content.length >= 40"}]},[e._v("还可输入"),a("v-uni-text",{staticClass:"s"},[e._v(e._s(e.wordLimit))]),e._v("字")],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"add"!==e.evaluationType,expression:"evaluationType !== 'add'"}],staticClass:"anonymous"},[a("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#fa436a"},on:{change:function(t){t=e.$handleEvent(t),e.handleAnonymousChange(t)}}}),a("v-uni-text",[e._v(e._s(e.anonymousText))])],1)],1),a("v-uni-view",{staticClass:"upload-image"},[e._l(e.imageList,(function(t,n){return a("v-uni-view",{key:t,staticClass:"upload-image-wrapper"},[a("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:t}}),a("uni-icons",{staticClass:"image-close",attrs:{color:"#333",type:"close",size:"20"},on:{click:function(t){t=e.$handleEvent(t),e.handleImageDelete(n)}}})],1)})),a("v-uni-view",{staticClass:"add",on:{click:function(t){t=e.$handleEvent(t),e.uploadImage(t)}}},[e._v("+")])],2),a("v-uni-button",{staticClass:"confirm-btn",on:{click:function(t){t=e.$handleEvent(t),e.handleEvaluate(t)}}},[e._v(e._s("add"===e.evaluationType?"我要追评":"发表评价"))])],1)},i=[];a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}))},"802d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadBase64Image=t.uploadImage=t.orderInvoiceList=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var n="/tiny-shop/v1/member/member/index";t.memberInfo=n;var i="/tiny-shop/v1/member/member/update";t.memberUpdate=i;var o="/tiny-shop/v1/member/address/index";t.addressList=o;var r="/tiny-shop/v1/member/address/default";t.addressDefault=r;var s="/tiny-shop/v1/member/address/view";t.addressDetail=s;var c="/tiny-shop/v1/member/address/create";t.addressCreate=c;var u="/tiny-shop/v1/member/address/update";t.addressUpdate=u;var l="/tiny-shop/v1/member/address/delete";t.addressDelete=l;var d="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=d;var v="/tiny-shop/v1/member/coupon/index";t.myCouponList=v;var p="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=p;var m="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=m;var h="/tiny-shop/v1/member/coupon/clear";t.couponClear=h;var f="/tiny-shop/v1/member/order/index";t.orderList=f;var b="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=b;var g="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=g;var y="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=y;var w="/tiny-shop/v1/member/order/view";t.orderDetail=w;var x="/tiny-shop/v1/member/order/delete";t.orderDelete=x;var C="/tiny-shop/v1/member/footprint/index";t.footPrintList=C;var _="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=_;var k="/tiny-shop/v1/member/collect/index";t.collectList=k;var L="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=L;var D="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=D;var O="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=O;var I="/tiny-shop/v1/member/invoice/index";t.invoiceList=I;var T="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=T;var P="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=P;var E="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=E;var A="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=A;var j="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=j;var R="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=R;var z="/tiny-shop/v1/member/opinion/index";t.opinionList=z;var S="/tiny-shop/v1/member/opinion/create";t.opinionCreate=S;var N="/tiny-shop/v1/member/opinion/view";t.opinionDetail=N;var $="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=$;var U="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=U;var F="https://www.yllook.com/api/tiny-shop/v1/common/file/images";t.uploadImage=F;var J="https://www.yllook.com/api/tiny-shop/v1/common/file/base64";t.uploadBase64Image=J},e3c3:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".evaluation[data-v-905bb5c2]{background:#fff;padding:%?20?%}.evaluation .product-info[data-v-905bb5c2]{display:-webkit-box;display:-webkit-flex;display:flex}.evaluation .product-info .product-image[data-v-905bb5c2]{width:%?200?%;height:%?150?%}.evaluation .product-info .product-content[data-v-905bb5c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?20?%}.evaluation .product-info .product-content .product-name[data-v-905bb5c2]{font-size:%?28?%;color:#303133;line-height:%?32?%;min-height:%?60?%}.evaluation .product-info .product-content .product-sku-name[data-v-905bb5c2]{display:block;font-size:%?28?%;color:#303133}.evaluation .product-rate[data-v-905bb5c2]{font-size:%?32?%;color:#303133;padding:%?20?% 0;border-bottom:1px solid rgba(0,0,0,.1)}.evaluation .product-rate .product-rate-wrapper[data-v-905bb5c2]{display:inline-block}.evaluation .product-textarea[data-v-905bb5c2]{margin-top:%?20?%;height:%?300?%;border-bottom:1px solid rgba(0,0,0,.1);position:relative}.evaluation .product-textarea .textarea[data-v-905bb5c2]{width:100%}.evaluation .product-textarea .tips[data-v-905bb5c2]{position:absolute;bottom:%?10?%;right:0;font-size:%?24?%;color:#909399}.evaluation .product-textarea .tips .f[data-v-905bb5c2]{color:#4cd964}.evaluation .product-textarea .tips .s[data-v-905bb5c2]{color:#fa436a}.evaluation .product-textarea .anonymous[data-v-905bb5c2]{color:#909399;font-size:%?24?%;position:absolute;bottom:0;left:0}.evaluation .upload-image[data-v-905bb5c2]{overflow:hidden;margin:%?40?% 0}.evaluation .upload-image .upload-image-wrapper[data-v-905bb5c2]{display:inline-block;position:relative;width:%?200?%;height:%?200?%;padding:%?10?%;margin:%?10?%}.evaluation .upload-image .upload-image-wrapper .image[data-v-905bb5c2]{display:inline-block;width:%?180?%;height:%?180?%}.evaluation .upload-image .upload-image-wrapper .image-close[data-v-905bb5c2]{position:absolute;top:%?-10?%;right:%?-10?%}.evaluation .upload-image .add[data-v-905bb5c2]{display:inline-block;overflow:hidden;width:%?180?%;height:%?180?%;text-align:center;border:1px solid rgba(0,0,0,.05);font-size:%?88?%;color:#606266;font-weight:100}.evaluation .confirm-btn[data-v-905bb5c2]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?50?%;background:#fa436a;color:#fff;font-size:%?32?%}.evaluation .confirm-btn[data-v-905bb5c2]:after{border-radius:100px}",""]),e.exports=t},ecea:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("8e6e"),a("456d");var i=n(a("bd86"));a("96cf");var o=n(a("3b8d"));a("ac6a");var r=n(a("f96a")),s=a("802d"),c=n(a("2ba4"));function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,i.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={components:{uniRate:r.default,uniIcons:c.default},data:function(){return{productInfo:{},token:null,imageList:[],content:"",anonymousText:"不匿名",evaluationType:null,evaluate:{scores:5,content:"",is_anonymous:"0",covers:"",order_product_id:""}}},computed:{wordLimit:function(){return 140-this.evaluate.content.length}},onLoad:function(e){this.productInfo=JSON.parse(e.data),this.evaluationType=e.type,this.token=uni.getStorageSync("accessToken")||void 0;var t="发表评价";"add"===e.type&&(t="追加评价"),uni.setNavigationBarTitle({title:t})},methods:{handleContentChange:function(e){this.evaluate.content=e.detail.value},handleScoreChange:function(e){this.evaluate.scores=e.value},handleImageDelete:function(e){this.imageList.splice(e,1)},handleAnonymousChange:function(e){e.detail.value?(this.evaluate.is_anonymous=1,this.anonymousText="匿名"):(this.evaluate.is_anonymous=0,this.anonymousText="不匿名")},uploadImage:function(){var e=this;uni.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.handleUploadFile(t.tempFilePaths)}})},handleUploadFile:function(e){var t=this;e.forEach((function(e){uni.uploadFile({url:s.uploadImage,filePath:e,name:"file",header:{"x-api-key":t.token,"merchant-id":1},formData:{"access-token":t.token,"merchant-id":1},success:function(e){uni.hideLoading();var a=JSON.parse(e.data);200===a.code?t.imageList.push(a.data.url):uni.showToast({title:a.message,icon:"none"})}})}))},handleEvaluate:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.evaluate.order_product_id=this.productInfo.id,this.evaluate.covers=this.imageList,t={},uni.showLoading({title:"评价中..."}),"add"!==this.evaluationType?(a=[],a.push(this.evaluate),t.evaluate=JSON.stringify(a),this.handleEvaluateCreate(t)):(t.again_content=this.evaluate.content,t.again_covers=JSON.stringify(this.imageList),this.handleEvaluateAgain(t));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleEvaluateCreate:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$post("".concat(s.evaluateCreate),l({},t)).then((function(e){200===e.code?uni.navigateBack({delta:2}):uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleEvaluateAgain:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$post("".concat(s.evaluateAgain,"?order_product_id=").concat(this.productInfo.id),l({},t)).then((function(e){200===e.code?uni.navigateBack({delta:2}):uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=d}}]);