(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"0c73":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/userinfo/userinfo")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("个人资料")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/public/password?type=1")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("修改密码")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/third-party/list")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("授权管理")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/invoice/invoice")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("发票管理")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/invoice/list")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("开票历史")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell m-t"},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("消息推送")]),i("v-uni-switch",{attrs:{checked:"",color:"#fa436a"},on:{change:function(e){e=t.$handleEvent(e),t.switchChange(e)}}})],1),i("v-uni-view",{staticClass:"list-cell m-t b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("清除缓存")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("清除缓存")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.currentStorageSize)+" kb")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/about/about")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("关于RF商城")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("当前版本")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("当前版本 beta 1.0")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell m-t",on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/feedback/list")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("意见反馈")]),i("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),i("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(e){e=t.$handleEvent(e),t.toLogout(e)}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("退出登录")])],1)],1)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},2018:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8e6e"),i("ac6a"),i("456d");var a=n(i("bd86")),l=i("2f62"),s=i("7ded");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach((function(e){(0,a.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var r={data:function(){return{currentStorageSize:0}},onLoad:function(){this.initData()},computed:o({},(0,l.mapState)(["userInfo"])),methods:o({initData:function(){var t=this;uni.getStorageInfo({success:function(e){t.currentStorageSize=e.currentSize}})}},(0,l.mapMutations)(["logout"]),{navTo:function(t){var e=this;"清除缓存"===t?uni.showModal({content:"确定要清除缓存吗",success:function(t){t.confirm&&(e.currentStorageSize=0)}}):t?uni.navigateTo({url:t}):uni.showToast({title:"我还没写",icon:"none"})},toLogout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&t.$post("".concat(s.logout)).then((function(e){200===e.code?(t.logout(),uni.reLaunch({url:"/pages/user/user"})):uni.showToast({title:e.message,icon:"none"})}))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=r},"65c1":function(t,e,i){var n=i("fa21");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7fef630d",n,!0,{sourceMap:!1,shadowMode:!1})},bc09:function(t,e,i){"use strict";i.r(e);var n=i("0c73"),a=i("eb44");for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("d3c9");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"b1996234",null);e["default"]=c.exports},d3c9:function(t,e,i){"use strict";var n=i("65c1"),a=i.n(n);a.a},eb44:function(t,e,i){"use strict";i.r(e);var n=i("2018"),a=i.n(n);for(var l in n)"default"!==l&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a},fa21:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,"uni-page-body[data-v-b1996234]{background:#f8f8f8}.list-cell[data-v-b1996234]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.log-out-btn[data-v-b1996234]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-b1996234]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-b1996234]{background:#fafafa}.list-cell.b-b[data-v-b1996234]:after{left:%?30?%}.list-cell.m-t[data-v-b1996234]{margin-top:%?16?%}.list-cell .cell-more[data-v-b1996234]{-webkit-align-self:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-b1996234]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-b1996234]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-b1996234]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-b1996234]{background:#f8f8f8}",""])}}]);