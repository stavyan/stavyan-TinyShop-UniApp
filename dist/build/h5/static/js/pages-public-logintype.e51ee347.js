(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-logintype"],{1714:function(t,n,e){"use strict";var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("8e6e"),e("ac6a"),e("456d"),e("4917");var i=o(e("bd86"));e("96cf");var a=o(e("3b8d")),r=e("7ded"),c=e("2f62");function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){(0,i.default)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var s={data:function(){return{}},onLoad:function(t){var n=this;this.code=t.code,this.code&&this.$get(r.wechatH5Login,{code:this.code}).then(function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(200!==e.code){t.next=11;break}if(e.data.login){t.next=6;break}n.user_info=e.data.user_info.original,uni.showModal({content:"你尚未绑定账号，是否跳转登录页面？",success:function(t){if(t.confirm){var e="/pages/public/login?userInfo=".concat(JSON.stringify(n.user_info));uni.navigateTo({url:e})}}}),t.next=11;break;case 6:return t.next=8,n.login(e.data.user_info);case 8:uni.showToast({title:"已为您授权登录",icon:"none"}),o="/pages/user/user",uni.reLaunch({url:o});case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())},methods:u({},(0,c.mapMutations)(["login"]),{toProtocol:function(){this.$api.msg("我就是RangeFrame使用协议 / 隐私协议！",2e3)},toLogin:function(){uni.navigateTo({url:"/pages/public/login"})},toAuthLogin:function(){this.isWechat()?uni.showModal({content:"是否授权登录?",success:function(t){if(t.confirm){var n=window.location.href;window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?\n\t\t\t\t\t\t\t\tappid=wxc052ebc5038f31c0&\n\t\t\t\t\t\t\t\tredirect_uri=".concat(n,"&\n\t\t\t\t\t\t\t\tresponse_type=code&\n\t\t\t\t\t\t\t\tscope=snsapi_userinfo&\n\t\t\t\t\t\t\t\tstate=STATE#wechat_redirect")}t.cancel&&uni.navigateTo({url:url})}}):this.$api.msg("当前平台不支持授权登录~")},isWechat:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/micromessenger/i)}})};n.default=s},3158:function(t,n,e){"use strict";var o=e("535e"),i=e.n(o);i.a},"535e":function(t,n,e){var o=e("90e9");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("6a7e9f3b",o,!0,{sourceMap:!1,shadowMode:!1})},"5d82":function(t,n,e){"use strict";e.r(n);var o=e("1714"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"703d":function(t,n,e){"use strict";e.r(n);var o=e("d132"),i=e("5d82");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("3158");var r=e("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"83d3fffc",null);n["default"]=c.exports},"90e9":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,"uni-page-body[data-v-83d3fffc]{background:#fff;height:calc(100% - %?88?%)}.login-type[data-v-83d3fffc]{padding-top:%?120?%}.login-type .logo[data-v-83d3fffc]{text-align:center;margin-bottom:%?100?%}.login-type .logo uni-image[data-v-83d3fffc]{width:%?180?%;height:%?180?%}.login-type .confirm-btn[data-v-83d3fffc]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:%?12?%;margin-bottom:%?40?%;background-color:#fa436a;color:#fff;font-size:%?32?%}.login-type .plain[data-v-83d3fffc]{background:none;color:#fa436a;border:%?1?% solid #fa436a}.login-type .footer[data-v-83d3fffc]{width:100%;text-align:center;position:fixed;bottom:%?40?%;font-size:%?24?%}.login-type .footer .protocol[data-v-83d3fffc]{color:#fa436a;margin:0 %?10?%}body.?%PAGE?%[data-v-83d3fffc]{background:#fff}",""]),t.exports=n},d132:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"login-type"},[e("v-uni-view",{staticClass:"logo"},[e("v-uni-image",{attrs:{src:"/static/missing-face.png"}})],1),e("v-uni-view",[e("v-uni-button",{staticClass:"confirm-btn",attrs:{"open-type":"getUserInfo",formType:"submit"},on:{click:function(n){n=t.$handleEvent(n),t.toAuthLogin(n)}}},[t._v("授权登录")]),e("v-uni-button",{staticClass:"confirm-btn plain",attrs:{plain:""},on:{click:function(n){n=t.$handleEvent(n),t.toLogin(n)}}},[t._v("已有RF账号登录")])],1),e("v-uni-view",{staticClass:"footer"},[t._v("登录表示同意"),e("v-uni-text",{staticClass:"protocol",on:{click:function(n){n=t.$handleEvent(n),t.toProtocol(n)}}},[t._v("RangeFrame使用协议 / 隐私协议")])],1)],1)},i=[];e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}))}}]);