(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-evaluation-evaluation"],{"1b4c":function(t,e,a){"use strict";a.r(e);var n=a("b01d"),o=a("4607");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("c989");var c=a("2877"),r=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"2c72bc40",null);e["default"]=r.exports},4607:function(t,e,a){"use strict";a.r(e);var n=a("ecea"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},b01d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"evaluation"},[a("v-uni-view",{staticClass:"product-info"},[a("v-uni-image",{staticClass:"product-image",attrs:{mode:"aspectFill",src:t.productInfo.product_picture}}),a("v-uni-view",{staticClass:"product-content"},[a("v-uni-text",{staticClass:"product-name in2line"},[t._v(t._s(t.productInfo.product_name))]),a("v-uni-text",{staticClass:"product-sku-name"},[t._v(t._s(t.productInfo.skuName||"基础款"))]),a("v-uni-text",{staticClass:"product-price"},[t._v(t._s(t.productInfo.product_money)+" * "+t._s(t.productInfo.num))])],1)],1),a("v-uni-view",{staticClass:"product-rate"},[t._v("整体评价"),a("v-uni-view",{staticClass:"product-rate-wrapper"},[a("uni-rate",{staticClass:"rate",attrs:{size:"24",value:t.evaluate.scores,margin:12,"active-color":"#fa436a"}})],1)],1),a("v-uni-view",{staticClass:"product-textarea"},[a("v-uni-textarea",{staticClass:"textarea",attrs:{maxlength:"140",value:t.evaluate.content,"placeholder-style":"color:#ccc; font-size: 24upx",placeholder:"宝贝满足你的期待吗？说说你的使用心得，分享给你想买的他们吧"},on:{input:function(e){e=t.$handleEvent(e),t.handleContentChange(e)}}}),a("v-uni-view",{staticClass:"tips"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.evaluate.content.length>0&&t.evaluate.content.length<40,expression:"evaluate.content.length > 0 && evaluate.content.length < 40"}]},[t._v("您已输入"),a("v-uni-text",{staticClass:"f"},[t._v(t._s(t.evaluate.content.length))]),t._v("字")],1),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.evaluate.content.length>=40,expression:"evaluate.content.length >= 40"}]},[t._v("还可输入"),a("v-uni-text",{staticClass:"s"},[t._v(t._s(t.wordLimit))]),t._v("字")],1)],1),a("v-uni-view",{staticClass:"anonymous"},[a("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#fa436a"},on:{change:function(e){e=t.$handleEvent(e),t.handleAnonymousChange(e)}}}),a("v-uni-text",[t._v(t._s(t.anonymousText))])],1)],1),a("v-uni-view",{staticClass:"upload-image"},[t._l(t.imageList,(function(e,n){return a("v-uni-view",{key:e,staticClass:"upload-image-wrapper"},[a("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:e}}),a("uni-icons",{staticClass:"image-close",attrs:{color:"#333",type:"close",size:"20"},on:{click:function(e){e=t.$handleEvent(e),t.handleImageDelete(n)}}})],1)})),a("v-uni-view",{staticClass:"add",on:{click:function(e){e=t.$handleEvent(e),t.uploadImage(e)}}},[t._v("+")])],2),a("v-uni-button",{staticClass:"confirm-btn",on:{click:function(e){e=t.$handleEvent(e),t.handleEvaluate(e)}}},[t._v("评价")])],1)},o=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}))},c989:function(t,e,a){"use strict";var n=a("f524"),o=a.n(n);o.a},d54a:function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,".evaluation[data-v-2c72bc40]{background:#fff;padding:%?20?%}.evaluation .product-info[data-v-2c72bc40]{display:-webkit-box;display:-webkit-flex;display:flex}.evaluation .product-info .product-image[data-v-2c72bc40]{width:%?200?%;height:%?150?%}.evaluation .product-info .product-content[data-v-2c72bc40]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?20?%}.evaluation .product-info .product-content .product-name[data-v-2c72bc40]{font-size:%?32?%;color:#303133;line-height:%?32?%;min-height:%?60?%}.evaluation .product-info .product-content .product-sku-name[data-v-2c72bc40]{display:block;font-size:%?28?%;color:#303133}.evaluation .product-rate[data-v-2c72bc40]{font-size:%?32?%;color:#303133;padding:%?20?% 0;border-bottom:1px solid rgba(0,0,0,.1)}.evaluation .product-rate .product-rate-wrapper[data-v-2c72bc40]{display:inline-block}.evaluation .product-textarea[data-v-2c72bc40]{margin-top:%?20?%;height:%?300?%;border-bottom:1px solid rgba(0,0,0,.1);position:relative}.evaluation .product-textarea .textarea[data-v-2c72bc40]{width:100%}.evaluation .product-textarea .tips[data-v-2c72bc40]{position:absolute;bottom:%?10?%;right:0;font-size:%?24?%;color:#909399}.evaluation .product-textarea .tips .f[data-v-2c72bc40]{color:#4cd964}.evaluation .product-textarea .tips .s[data-v-2c72bc40]{color:#fa436a}.evaluation .product-textarea .anonymous[data-v-2c72bc40]{color:#909399;font-size:%?24?%;position:absolute;bottom:0;left:0}.evaluation .upload-image[data-v-2c72bc40]{overflow:hidden;margin:%?40?% 0}.evaluation .upload-image .upload-image-wrapper[data-v-2c72bc40]{display:inline-block;position:relative;width:%?200?%;height:%?200?%;padding:%?10?%;margin:%?10?%}.evaluation .upload-image .upload-image-wrapper .image[data-v-2c72bc40]{display:inline-block;width:%?180?%;height:%?180?%}.evaluation .upload-image .upload-image-wrapper .image-close[data-v-2c72bc40]{position:absolute;top:%?-10?%;right:%?-10?%}.evaluation .upload-image .add[data-v-2c72bc40]{display:inline-block;overflow:hidden;width:%?180?%;height:%?180?%;text-align:center;border:1px solid rgba(0,0,0,.05);font-size:%?88?%;color:#606266;font-weight:100}.evaluation .confirm-btn[data-v-2c72bc40]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?50?%;background:#fa436a;color:#fff;font-size:%?32?%}.evaluation .confirm-btn[data-v-2c72bc40]:after{border-radius:100px}",""])},ecea:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("8e6e"),a("456d");var o=n(a("bd86"));a("96cf");var i=n(a("3b8d"));a("ac6a");var c=n(a("f96a")),r=a("802d"),s=n(a("2ba4"));function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){(0,o.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={components:{uniRate:c.default,uniIcons:s.default},data:function(){return{productInfo:{},token:null,imageList:[],content:"",anonymousText:"不匿名",evaluate:{scores:3,content:"",is_anonymous:"0",covers:"",order_product_id:""}}},computed:{wordLimit:function(){return 140-this.evaluate.content.length}},onLoad:function(t){this.productInfo=JSON.parse(t.data),this.token=uni.getStorageSync("accessToken")||void 0},methods:{handleContentChange:function(t){this.evaluate.content=t.detail.value},handleImageDelete:function(t){this.imageList.splice(t,1)},handleAnonymousChange:function(t){t.detail.value?(this.evaluate.is_anonymous=1,this.anonymousText="匿名"):(this.evaluate.is_anonymous=0,this.anonymousText="不匿名")},uploadImage:function(){var t=this;uni.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.handleUploadFile(e.tempFilePaths)}})},handleUploadFile:function(t){var e=this;t.forEach((function(t){uni.uploadFile({url:"https://www.yllook.com/api/v1/file/images",filePath:t,name:"file",header:{"x-api-key":e.token,"merchant-id":1},formData:{"access-token":e.token,"merchant-id":1},success:function(t){uni.hideLoading();var a=JSON.parse(t.data);200===a.code?e.imageList.push(a.data.url):uni.showToast({title:a.message,icon:"none"})}})}))},handleEvaluate:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.evaluate.order_product_id=this.productInfo.id,this.evaluate.covers=this.imageList,e={},a=[],a.push(this.evaluate),e.evaluate=JSON.stringify(a),uni.showLoading({title:"评论中..."}),t.next=9,this.$post("".concat(r.evaluateCreate),l({},e)).then((function(t){200===t.code?uni.navigateBack({delta:2}):uni.showToast({title:t.message,icon:"none"})})).catch((function(t){console.log(t)}));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=d},f524:function(t,e,a){var n=a("d54a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("c936fb70",n,!0,{sourceMap:!1,shadowMode:!1})}}]);