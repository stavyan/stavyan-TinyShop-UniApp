(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-detail"],{"0135":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("3b8d")),o=i("2b74"),s=a(i("d138")),r={components:{empty:s.default},data:function(){return{detail:{},title:null}},onLoad:function(e){this.initData(e)},methods:{initData:function(e){this.token=uni.getStorageSync("accessToken")||void 0,this.title=e.title,uni.setNavigationBarTitle({title:e.title}),this.token&&this.getConfigList(e.field)},getConfigList:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$get("".concat(o.configList),{field:t}).then((function(e){200===e.code?i.detail=e.data:uni.showToast({title:e.message,icon:"none"})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=r},"2b74":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wechatConfig=t.configList=t.payCreate=t.advList=t.uploadFile=t.transmitCreate=t.collectDel=t.collectCreate=t.provinceList=void 0;var a="/tiny-shop/v1/common/provinces/index";t.provinceList=a;var n="/tiny-shop/v1/common/collect/create";t.collectCreate=n;var o="/tiny-shop/v1/common/collect/delete";t.collectDel=o;var s="/tiny-shop/v1/common/transmit/create";t.transmitCreate=s;var r="/v1/file/images";t.uploadFile=r;var v="/tiny-shop/v1/common/adv/index";t.advList=v;var l="/tiny-shop/v1/common/config/index";t.configList=l;var u="/tiny-shop/v1/common/pay/create";t.payCreate=u;var c="/tiny-shop/v1/third-party/wechat-js-sdk";t.wechatConfig=c},"4c98":function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,"uni-page-body[data-v-32410d3b]{position:relative;background-color:#f5f5f5}uni-page-body .about .shop-info[data-v-32410d3b]{margin:%?100?% 0;text-align:center}uni-page-body .about .shop-info uni-image[data-v-32410d3b]{width:%?240?%;height:%?240?%;border-radius:50%}body.?%PAGE?%[data-v-32410d3b]{background-color:#f5f5f5}",""])},6269:function(e,t,i){"use strict";i.r(t);var a=i("0135"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},aab0:function(e,t,i){"use strict";var a=i("f986"),n=i.n(a);n.a},af80:function(e,t,i){"use strict";i.r(t);var a=i("d4c5"),n=i("6269");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("aab0");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"32410d3b",null);t["default"]=r.exports},d4c5:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"about"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"商城介绍"===e.title,expression:"title === '商城介绍'"}],staticClass:"shop-info"},[i("v-uni-image",{attrs:{src:e.detail.web_logo}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.title,expression:"detail.title"}]},[i("v-uni-text",[e._v("商城名称:")]),i("v-uni-text",[e._v(e._s(e.detail.title))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.web_url,expression:"detail.web_url"}]},[i("v-uni-text",[e._v("官方网址:")]),i("v-uni-text",[e._v(e._s(e.detail.web_url))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.web_phone,expression:"detail.web_phone"}]},[i("v-uni-text",[e._v("商城联系方式:")]),i("v-uni-text",[e._v(e._s(e.detail.web_phone))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.web_email,expression:"detail.web_email"}]},[i("v-uni-text",[e._v("商城邮箱:")]),i("v-uni-text",[e._v(e._s(e.detail.web_email))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.web_qq,expression:"detail.web_qq"}]},[i("v-uni-text",[e._v("商城QQ号:")]),i("v-uni-text",[e._v(e._s(e.detail.web_qq))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.web_weixin,expression:"detail.web_weixin"}]},[i("v-uni-text",[e._v("商城微信号:")]),i("v-uni-text",[e._v(e._s(e.detail.web_weixin))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.web_address,expression:"detail.web_address"}]},[i("v-uni-text",[e._v("联系地址:")]),i("v-uni-text",[e._v(e._s(e.detail.web_address))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.shouhou_date,expression:"detail.shouhou_date"}]},[i("v-uni-text",[e._v("售后设置:")]),i("v-uni-text",[e._v(e._s(e.detail.shouhou_date))])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"版权信息"===e.title,expression:"title === '版权信息'"}],staticClass:"shop-info"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.copyright_companyname,expression:"detail.copyright_companyname"}]},[i("v-uni-text",[e._v("公司名称:")]),i("v-uni-text",[e._v(e._s(e.detail.copyright_companyname))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.copyright_url,expression:"detail.copyright_url"}]},[i("v-uni-text",[e._v("版权链接:")]),i("v-uni-text",[e._v(e._s(e.detail.copyright_url))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.copyright_desc,expression:"detail.copyright_desc"}]},[i("v-uni-text",[e._v("版权信息:")]),i("v-uni-text",[e._v(e._s(e.detail.copyright_desc))])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"证照信息"===e.title,expression:"title === '证照信息'"}],staticClass:"shop-info"}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"注册协议"===e.title,expression:"title === '注册协议'"}],staticClass:"shop-info"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.protocol_register,expression:"detail.protocol_register"}]},[i("v-uni-text",[e._v("注册协议:")]),i("v-uni-text",[e._v(e._s(e.detail.protocol_register))])],1),e.detail.protocol_register?e._e():i("empty",{attrs:{info:"暂无"+e.title}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"隐私协议"===e.title,expression:"title === '隐私协议'"}],staticClass:"shop-info"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.detail.protocol_privacy,expression:"detail.protocol_privacy"}]},[i("v-uni-text",[e._v("隐私协议:")]),i("v-uni-text",[e._v(e._s(e.detail.protocol_privacy))])],1),e.detail.protocol_privacy?e._e():i("empty",{attrs:{info:"暂无"+e.title}})],1),0===e.detail.length?i("empty",{attrs:{info:"暂无"+e.title}}):e._e()],1)},n=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}))},f986:function(e,t,i){var a=i("4c98");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("4589286e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);