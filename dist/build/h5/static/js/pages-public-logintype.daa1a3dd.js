(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-logintype"],{1714:function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("8e6e"),n("ac6a"),n("456d"),n("4917");var i=o(n("bd86"));n("96cf");var a=o(n("3b8d")),r=n("7ded"),c=n("2f62");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={data:function(){return{}},onLoad:function(t){var e=this;this.code=t.code,this.code&&this.$get(r.wechatH5Login,{code:this.code}).then(function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(200!==n.code){t.next=11;break}if(n.data.login){t.next=6;break}e.user_info=n.data.user_info.original,uni.showModal({content:"你尚未绑定账号，是否跳转登录页面？",success:function(t){if(t.confirm){var n="/pages/public/login?userInfo=".concat(JSON.stringify(e.user_info));uni.navigateTo({url:n})}}}),t.next=11;break;case 6:return t.next=8,_this.login(n.data.user_info);case 8:uni.showToast({title:"已为您授权登录",icon:"none"}),o="/pages/user/user",uni.reLaunch({url:o});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methods:u({},(0,c.mapMutations)(["login"]),{toProtocol:function(){this.$api.msg("我就是RangeFrame使用协议 / 隐私协议！",2e3)},toLogin:function(){uni.navigateTo({url:"/pages/public/login"})},toAuthLogin:function(){this.isWechat()?uni.showModal({content:"是否授权登录?",success:function(t){if(t.confirm){var e=window.location.href;window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?\n\t\t\t\t\t\t\t\tappid=wxc052ebc5038f31c0&\n\t\t\t\t\t\t\t\tredirect_uri=".concat(e,"&\n\t\t\t\t\t\t\t\tresponse_type=code&\n\t\t\t\t\t\t\t\tscope=snsapi_userinfo&\n\t\t\t\t\t\t\t\tstate=STATE#wechat_redirect")}t.cancel&&uni.navigateTo({url:url})}}):this.$api.msg("当前平台不支持授权登录~")},isWechat:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/micromessenger/i)}})};e.default=f},"21fc":function(t,e,n){var o=n("6bdc");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("10a51415",o,!0,{sourceMap:!1,shadowMode:!1})},"5d82":function(t,e,n){"use strict";n.r(e);var o=n("1714"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"62c5":function(t,e,n){"use strict";var o=n("21fc"),i=n.n(o);i.a},"6bdc":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-05b7e8cc]{background:#fff;height:calc(100% - %?88?%)}.login-type[data-v-05b7e8cc]{padding-top:%?120?%}.login-type .logo[data-v-05b7e8cc]{text-align:center;margin-bottom:%?60?%}.login-type .logo uni-image[data-v-05b7e8cc]{width:%?144?%;height:%?144?%}.login-type .confirm-btn[data-v-05b7e8cc]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:%?12?%;margin-bottom:%?40?%;background-color:#fa436a;color:#fff;font-size:%?32?%}.login-type .plain[data-v-05b7e8cc]{background:none;color:#fa436a;border:%?1?% solid #fa436a}.login-type .footer[data-v-05b7e8cc]{width:100%;text-align:center;position:fixed;bottom:%?40?%;font-size:%?24?%}.login-type .footer .protocol[data-v-05b7e8cc]{color:#fa436a;margin:0 %?10?%}body.?%PAGE?%[data-v-05b7e8cc]{background:#fff}",""]),t.exports=e},"703d":function(t,e,n){"use strict";n.r(e);var o=n("e24a"),i=n("5d82");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("62c5");var r=n("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"05b7e8cc",null);e["default"]=c.exports},e24a:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login-type"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{attrs:{src:"/static/missing-face.png"}})],1),n("v-uni-view",[n("v-uni-button",{staticClass:"confirm-btn",attrs:{"open-type":"getUserInfo",formType:"submit"},on:{click:function(e){e=t.$handleEvent(e),t.toAuthLogin(e)}}},[t._v("授权登录")]),n("v-uni-button",{staticClass:"confirm-btn plain",attrs:{plain:""},on:{click:function(e){e=t.$handleEvent(e),t.toLogin(e)}}},[t._v("已有RF账号登录")])],1),n("v-uni-view",{staticClass:"footer"},[t._v("登录表示同意"),n("v-uni-text",{staticClass:"protocol",on:{click:function(e){e=t.$handleEvent(e),t.toProtocol(e)}}},[t._v("RangeFrame使用协议 / 隐私协议")])],1)],1)},i=[];n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}))}}]);