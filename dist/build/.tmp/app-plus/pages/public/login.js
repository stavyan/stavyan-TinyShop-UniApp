(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/login"],{3747:function(e,n,t){"use strict";(function(e){t("6cdc"),t("921b");o(t("66fd"));var n=o(t("e334"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"8a72":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}))},"95d8":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("a34a")),r=t("2f62"),i=t("7ded");function a(e){return e&&e.__esModule?e:{default:e}}function s(e,n,t,o,r,i,a){try{var s=e[i](a),u=s.value}catch(c){return void t(c)}s.done?n(u):Promise.resolve(u).then(o,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var i=e.apply(n,t);function a(e){s(i,o,r,a,u,"next",e)}function u(e){s(i,o,r,a,u,"throw",e)}a(void 0)}))}}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=t("9564"),h={data:function(){return{mobile:"",password:"",code:"",logining:!1,loginByPass:!0,smsCodeBtnDisabled:!1,codeSeconds:60,userInfo:null}},onLoad:function(e){this.userInfo=e.userInfo},methods:l({},(0,r.mapMutations)(["login"]),{checkPhoneIsValid:function(e){var n=/^1[0-9]{10,10}$/;return!!n.test(e)||(this.$api.msg("请输入正确的手机号"),!1)},getSmsCode:function(){var n=this;this.checkPhoneIsValid(this.mobile)&&(e.showLoading({title:"获取中..."}),this.$post(i.smsCode,{mobile:this.mobile,usage:"login"}).then((function(e){n.$api.msg("验证码发送成功, 验证码是".concat(e.data),3e3),n.smsCodeBtnDisabled=!0;var t=59,o=setInterval((function(){0===t?(clearInterval(o),n.smsCodeBtnDisabled=!1):(n.codeSeconds=t,n.smsCodeBtnDisabled=!0,t--)}),1e3)})))},blurMobileChange:function(e){this.mobile=e.detail.value},showLoginBySmsCode:function(){this.loginByPass=!this.loginByPass},navBack:function(){e.navigateBack()},navTo:function(n){e.navigateTo({url:n})},toHome:function(){e.switchTab({url:"/pages/index/index"})},toLogin:function(){var n=u(o.default.mark((function n(t){var r,i,a,s;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.detail.value,i={},i.mobile=r.mobile,a=[{name:"mobile",checkType:"phoneno",checkRule:"11,11",errorMsg:"请输入正确的手机号"}],this.loginByPass?(i.password=r.password,a[1]={name:"password",checkType:"string",checkRule:"6,20",errorMsg:"密码长度为6-20位"}):(i.code=r.code,a[1]={name:"code",checkType:"notnull",checkRule:"",errorMsg:"请输入验证码"}),s=f.check(r,a),s){n.next=9;break}return this.$api.msg(f.error),n.abrupt("return");case 9:e.showLoading({title:"登录中..."}),i.group="tinyShopApp",this.loginByPass?this.handleLoginByPass(i):this.handleLoginBySmsCode(i);case 12:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),handleLoginByPass:function(n){var t=this;n.group="tinyShopApp",this.$post(i.loginByPass,l({},n)).then((function(n){if(t.$api.msg("恭喜您，登录成功！"),t.login(n.data),t.userInfo){var o={oauth_client:"wechat"},r=JSON.parse(t.userInfo);t.$post(i.authLogin,l({},r,{},o,{gender:r.sex||r.gender,oauth_client_user_id:r.openid||r.openId,head_portrait:r.headimgurl||r.avatarUrl}))}e.reLaunch({url:"/pages/user/user"})}))},handleLoginBySmsCode:function(n){var t=this;n.group="tinyShopApp",this.$post(i.loginBySmsCode,l({},n)).then((function(n){t.$api.msg("恭喜您，登录成功！"),t.login(n.data),e.switchTab({url:"/pages/user/user"})}))}})};n.default=h}).call(this,t("6e42")["default"])},"9dd7":function(e,n,t){"use strict";var o=t("a522"),r=t.n(o);r.a},a522:function(e,n,t){},dece:function(e,n,t){"use strict";t.r(n);var o=t("95d8"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},e334:function(e,n,t){"use strict";t.r(n);var o=t("8a72"),r=t("dece");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("9dd7");var a=t("2877"),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports}},[["3747","common/runtime","common/vendor"]]]);