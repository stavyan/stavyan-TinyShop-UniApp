(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-about"],{"0184":function(t,e,i){var n=i("178c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("caad8220",n,!0,{sourceMap:!1,shadowMode:!1})},"0b62":function(t,e,i){"use strict";i.r(e);var n=i("d389"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"135b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"about"},[i("uni-list",t._l(t.navList,(function(e){return i("uni-list-item",{key:e.title,attrs:{title:e.title},on:{click:function(i){i=t.$handleEvent(i),t.navTo("/pages/about/detail?field="+e.url+"&title="+e.title)}}})})),1),i("v-uni-view",{staticClass:"history-section icon"},[i("v-uni-view",{staticClass:"sec-header"},[i("v-uni-text",{staticClass:"yticon icon-share"}),i("v-uni-text",[t._v("分享商城二维码给好友")])],1),i("v-uni-view",{staticClass:"qrcode-wrapper"},[i("v-uni-view",{staticClass:"qrcode-section"},[i("v-uni-image",{staticClass:"qrcode",attrs:{src:t.aboutInfo.web_qrcode,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"info"},[t._v("商城二维码")])],1),i("v-uni-view",{staticClass:"qrcode-section"},[i("v-uni-image",{staticClass:"qrcode",attrs:{src:t.aboutInfo.web_wechat_qrcode,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"info"},[t._v("商城公众号二维码")])],1)],1)],1)],1)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},"178c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.uni-list[data-v-68ffef10]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-list[data-v-68ffef10]:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}.uni-list[data-v-68ffef10]:before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},2412:function(t,e,i){"use strict";i.r(e);var n=i("9952"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},2650:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list-item",class:t.disabled?"uni-list-item--disabled":"",attrs:{"hover-class":t.disabled||t.showSwitch?"":"uni-list-item--hover"},on:{click:function(e){e=t.$handleEvent(e),t.onClick(e)}}},[i("v-uni-view",{staticClass:"uni-list-item__container"},[t.thumb?i("v-uni-view",{staticClass:"uni-list-item__icon"},[i("v-uni-image",{staticClass:"uni-list-item__icon-img",attrs:{src:t.thumb}})],1):t.showExtraIcon?i("v-uni-view",{staticClass:"uni-list-item__icon"},[i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{color:t.extraIcon.color,size:t.extraIcon.size,type:t.extraIcon.type}})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[i("v-uni-view",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]),t.note?i("v-uni-view",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.note))]):t._e()],1),t.showBadge||t.showArrow||t.showSwitch?i("v-uni-view",{staticClass:"uni-list-item__extra"},[t.showBadge?i("uni-badge",{attrs:{type:t.badgeType,text:t.badgeText}}):t._e(),t.showSwitch?i("v-uni-switch",{attrs:{disabled:t.disabled,checked:t.switchChecked},on:{change:function(e){e=t.$handleEvent(e),t.onSwitchChange(e)}}}):t._e(),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:20,color:"#bbb",type:"arrowright"}}):t._e()],1):t._e()],1)],1)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},"2b74":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.configList=e.advList=e.uploadFile=e.transmitCreate=e.collectDel=e.collectCreate=e.provinceList=void 0;var n="/tiny-shop/v1/common/provinces/index";e.provinceList=n;var a="/tiny-shop/v1/common/collect/create";e.collectCreate=a;var o="/tiny-shop/v1/common/collect/delete";e.collectDel=o;var r="/tiny-shop/v1/common/transmit/create";e.transmitCreate=r;var c="/v1/file/images";e.uploadFile=c;var s="/tiny-shop/v1/common/adv/index";e.advList=s;var l="/tiny-shop/v1/common/config/index";e.configList=l},3970:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniList"};e.default=n},"3fa3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-text",{staticClass:"uni-badge",class:t.inverted?"uni-badge-"+t.type+" uni-badge--"+t.size+" uni-badge-inverted":"uni-badge-"+t.type+" uni-badge--"+t.size,on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.text))]):t._e()},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},"4c2b":function(t,e,i){"use strict";i.r(e);var n=i("2650"),a=i("0b62");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b667");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"182f96f6",null);e["default"]=c.exports},"51b1":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list"},[t._t("default")],2)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},"6a92":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.uni-list-item[data-v-182f96f6]{font-size:%?32?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item--disabled[data-v-182f96f6]{opacity:.3}.uni-list-item--hover[data-v-182f96f6]{background-color:#f1f1f1}.uni-list-item__container[data-v-182f96f6]{padding:%?24?% %?30?%;width:100%;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__container[data-v-182f96f6]:after{position:absolute;z-index:3;right:0;bottom:0;left:%?30?%;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}.uni-list-item__content[data-v-182f96f6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#3b4144}.uni-list-item__content-title[data-v-182f96f6]{\n\t/*font-size: 24upx;*/text-overflow:ellipsis;white-space:nowrap;color:inherit;line-height:1.5;overflow:hidden}.uni-list-item__content-note[data-v-182f96f6]{margin-top:%?6?%;color:#999;font-size:%?28?%;white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.uni-list-item__extra[data-v-182f96f6]{width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__icon[data-v-182f96f6]{margin-right:%?18?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__icon-img[data-v-182f96f6]{height:%?52?%;width:%?52?%}.uni-list>.uni-list-item:last-child .uni-list-item-container[data-v-182f96f6]:after{height:0}',""]),t.exports=e},"7c9d":function(t,e,i){"use strict";i.r(e);var n=i("135b"),a=i("9476");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9810");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"fe59dad8",null);e["default"]=c.exports},"7eb1":function(t,e,i){"use strict";i.r(e);var n=i("3fa3"),a=i("2412");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f876");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"04e57569",null);e["default"]=c.exports},"7f33":function(t,e,i){"use strict";i.r(e);var n=i("51b1"),a=i("d1cb");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a8b7");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"68ffef10",null);e["default"]=c.exports},"7fc6":function(t,e,i){var n=i("a21a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("a0345d7c",n,!0,{sourceMap:!1,shadowMode:!1})},"86c0":function(t,e,i){var n=i("d8c1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("204dd580",n,!0,{sourceMap:!1,shadowMode:!1})},9476:function(t,e,i){"use strict";i.r(e);var n=i("d610"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},9810:function(t,e,i){"use strict";var n=i("86c0"),a=i.n(n);a.a},9952:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},a21a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-badge[data-v-04e57569]{font-family:Helvetica Neue,Helvetica,sans-serif;box-sizing:border-box;font-size:12px;line-height:1;display:inline-block;padding:3px 6px;color:#333;border-radius:100px;background-color:#f1f1f1}.uni-badge.uni-badge-inverted[data-v-04e57569]{padding:0 5px 0 0;color:#999;background-color:initial}.uni-badge-primary[data-v-04e57569]{color:#fff;background-color:#007aff}.uni-badge-primary.uni-badge-inverted[data-v-04e57569]{color:#007aff;background-color:initial}.uni-badge-success[data-v-04e57569]{color:#fff;background-color:#4cd964}.uni-badge-success.uni-badge-inverted[data-v-04e57569]{color:#4cd964;background-color:initial}.uni-badge-warning[data-v-04e57569]{color:#fff;background-color:#f0ad4e}.uni-badge-warning.uni-badge-inverted[data-v-04e57569]{color:#f0ad4e;background-color:initial}.uni-badge-error[data-v-04e57569]{color:#fff;background-color:#dd524d}.uni-badge-error.uni-badge-inverted[data-v-04e57569]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-04e57569]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""]),t.exports=e},a8b7:function(t,e,i){"use strict";var n=i("0184"),a=i.n(n);a.a},b0fb:function(t,e,i){var n=i("6a92");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("656038d8",n,!0,{sourceMap:!1,shadowMode:!1})},b667:function(t,e,i){"use strict";var n=i("b0fb"),a=i.n(n);a.a},d1cb:function(t,e,i){"use strict";i.r(e);var n=i("3970"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d389:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2ba4")),o=n(i("7eb1")),r={name:"UniListItem",components:{uniIcons:a.default,uniBadge:o.default},props:{title:{type:String,default:""},note:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},showArrow:{type:[Boolean,String],default:!0},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},thumb:{type:String,default:""},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:20}}}},data:function(){return{}},methods:{onClick:function(){this.$emit("click")},onSwitchChange:function(t){this.$emit("switchChange",t.detail)}}};e.default=r},d610:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("3b8d")),o=n(i("7f33")),r=n(i("4c2b")),c=i("2b74"),s={data:function(){return{aboutInfo:{},navList:[{title:"商城介绍",url:"title,web_url,key_words,web_desc,web_logo,web_phone,web_email,web_qq,web_weixin,web_address,shouhou_date"},{title:"版权信息",url:"copyright_companyname,copyright_desc,copyright_url"},{title:"证照信息",url:""},{title:"注册协议",url:"protocol_register"},{title:"隐私协议",url:"protocol_privacy"}]}},components:{uniList:o.default,uniListItem:r.default},onLoad:function(){this.initData()},methods:{initData:function(){this.token=uni.getStorageSync("accessToken")||void 0,this.token&&this.getConfigList()},getConfigList:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(c.configList),{field:"web_qrcode,web_wechat_qrcode"}).then((function(t){200===t.code?e.aboutInfo=t.data:uni.showToast({title:t.message,icon:"none"})})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),navTo:function(t){uni.navigateTo({url:t})}}};e.default=s},d8c1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-fe59dad8]{position:relative;background-color:#f5f5f5}uni-page-body .about[data-v-fe59dad8]{margin:%?20?% 0}.history-section[data-v-fe59dad8]{padding:%?30?% 0 0;margin-top:%?20?%;background:#fff;border-radius:%?10?%}.history-section .sec-header[data-v-fe59dad8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#303133;line-height:%?40?%;margin-left:%?30?%}.history-section .sec-header .yticon[data-v-fe59dad8]{font-size:%?44?%;color:#5eba8f;margin-right:%?16?%;line-height:%?40?%}.history-section .qrcode-wrapper[data-v-fe59dad8]{margin:%?40?% auto;display:-webkit-box;display:-webkit-flex;display:flex}.history-section .qrcode-wrapper .qrcode-section[data-v-fe59dad8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;text-align:center}.history-section .qrcode-wrapper .qrcode-section .qrcode[data-v-fe59dad8]{width:%?280?%;height:%?280?%}.history-section .qrcode-wrapper .qrcode-section .info[data-v-fe59dad8]{display:block;margin-bottom:%?40?%}body.?%PAGE?%[data-v-fe59dad8]{background-color:#f5f5f5}",""]),t.exports=e},f876:function(t,e,i){"use strict";var n=i("7fc6"),a=i.n(n);a.a}}]);