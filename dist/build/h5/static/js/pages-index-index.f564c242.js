(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"00a1":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c5f6");var r={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(e){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(e){"indexes"===e?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};t.default=r},2284:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var o=r(i("3b8d")),n={props:{headerShow:{type:Boolean,default:!0},inputDisabled:{type:Boolean,default:!1},placeholder:{type:String,default:"输入关键字搜索"},icon:{type:String,default:null},title:{type:String,default:null}},data:function(){return{afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,searchValue:this.placeholder}},methods:{handleSearchValueChange:function(e){console.log(this.searchValue),this.searchValue=e.detail.value},discard:function(){},link:function(){this.$emit("link")},toSearch:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.searchValue),e.next=3,this.$emit("search",{searchValue:this.searchValue});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=n},2667:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"rfFloorIndex",props:{list:{type:Array,default:function(){return[]}},banner:{type:Object,default:function(){return{}}},header:{type:Object,default:function(){return{}}},bannerShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{detail:function(e){this.$emit("detail",{id:e})},toBanner:function(e,t){this.$emit("toBanner",{type:e,id:t})},toList:function(){this.$emit("toList")}}};t.default=r},"268f":function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".uni-swiper__warp[data-v-c3f7ac54]{position:relative;width:100%;box-sizing:border-box;overflow:hidden}.uni-swiper__dots-box[data-v-c3f7ac54]{position:absolute;bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:box-sizing;width:100%}.uni-swiper__dots-item[data-v-c3f7ac54]{-webkit-flex-shrink:0;flex-shrink:0;width:%?16?%;border-radius:50%;margin-left:%?12?%;background:rgba(0,0,0,.3);-webkit-transition:all .2s linear;transition:all .2s linear}.uni-swiper__dots-item[data-v-c3f7ac54]:first-child{margin:0}.uni-swiper__dots-default[data-v-c3f7ac54]{border-radius:50%}.uni-swiper__dots-long[data-v-c3f7ac54]{border-radius:%?100?%}.uni-swiper__dots-bar[data-v-c3f7ac54]{border-radius:%?100?%}.uni-swiper__dots-nav[data-v-c3f7ac54]{bottom:0;height:%?60?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;background:rgba(0,0,0,.2);box-sizing:box-sizing;overflow:hidden;z-index:10}.uni-swiper__dots-nav-item[data-v-c3f7ac54]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?28?%;color:#fff;box-sizing:box-sizing;margin:0 %?30?%}.uni-swiper__dots-indexes[data-v-c3f7ac54]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;font-size:%?24?%}",""])},"2b55":function(e,t,i){var r=i("268f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("4f06").default;o("267cd9ee",r,!0,{sourceMap:!1,shadowMode:!1})},"2b74":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.merchantIndex=t.wechatConfig=t.configList=t.payCreate=t.advList=t.uploadFile=t.transmitCreate=t.collectDel=t.collectCreate=t.provinceList=void 0;var r="/tiny-shop/v1/common/provinces/index";t.provinceList=r;var o="/tiny-shop/v1/common/collect/create";t.collectCreate=o;var n="/tiny-shop/v1/common/collect/delete";t.collectDel=n;var a="/tiny-shop/v1/common/transmit/create";t.transmitCreate=a;var s="/v1/file/images";t.uploadFile=s;var c="/tiny-shop/v1/common/adv/index";t.advList=c;var d="/tiny-shop/v1/common/config/index";t.configList=d;var l="/tiny-shop/v1/common/pay/create";t.payCreate=l;var u="/tiny-shop/v1/third-party/wechat-js-sdk";t.wechatConfig=u;var f="/merchants/v1/merchant/index";t.merchantIndex=f},"2ebe":function(e,t,i){var r=i("5743");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("4f06").default;o("14b0f37f",r,!0,{sourceMap:!1,shadowMode:!1})},3323:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+e.width+";"+(e.square?"height:"+e.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":e.showBorder,"uni-grid-item--border-top":e.showBorder&&e.index<e.column,"uni-highlight":e.highlight},style:{"border-right-color":e.borderColor,"border-bottom-color":e.borderColor,"border-top-color":e.borderColor},on:{click:function(t){t=e.$handleEvent(t),e._onClick(t)}}},[e._t("default")],2)],1):e._e()},o=[];i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}))},"3c05":function(e,t,i){"use strict";i.r(t);var r=i("00a1"),o=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},"3c94":function(e,t,i){"use strict";i.r(t);var r=i("7896"),o=i("3c05");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("514c");var a=i("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"c3f7ac54",null);t["default"]=s.exports},"3f39":function(e,t,i){"use strict";var r=i("f7de"),o=i.n(r);o.a},4204:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".rf-search-bar[data-v-efb22380]{background-color:#fff}.rf-search-bar .status[data-v-efb22380]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.rf-search-bar .header[data-v-efb22380]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}.rf-search-bar .header .addr[data-v-efb22380]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.rf-search-bar .header .addr .icon[data-v-efb22380]{height:%?60?%;margin-right:%?6?%;margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?35?%;color:#fa436a}.rf-search-bar .header .input-box[data-v-efb22380]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rf-search-bar .header .input-box .icon[data-v-efb22380]{z-index:9;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.rf-search-bar .header .input-box uni-input[data-v-efb22380]{width:100%;padding-left:%?28?%;height:%?28?%;color:#888;font-size:%?28?%}.rf-search-bar .place[data-v-efb22380]{background-color:#fff;height:%?100?%}",""])},4516:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":e.showBorder},style:{"border-left-style":"solid","border-left-color":e.borderColor,"border-left-width":e.showBorder?"1px":0},attrs:{id:e.elId}},[e._t("default")],2)],1)},o=[];i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}))},"46aa":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("6b54"),i("c5f6");var r={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:e,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var e=this;setTimeout((function(){e._getSize((function(t){e.children.forEach((function(e,i){e.width=t}))}))}),50)},change:function(e){this.$emit("change",e)},_getSize:function(e){var t=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){t.width=parseInt((i[0].width-1)/t.column)+"px",e(t.width)}))}}};t.default=r},"514c":function(e,t,i){"use strict";var r=i("2b55"),o=i.n(r);o.a},5743:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".uni-grid-item[data-v-9cbe37b8]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-grid-item__box[data-v-9cbe37b8]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-grid-item--border[data-v-9cbe37b8]{position:relative;border-bottom-color:#c8c7cc;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#c8c7cc;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-9cbe37b8]{border-top-color:#c8c7cc;border-top-style:solid;border-top-width:1px;height:100%;box-sizing:border-box}.uni-highlight[data-v-9cbe37b8]:active{background-color:#f1f1f1}",""])},"611b":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"rf-floor-index"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.bannerShow,expression:"bannerShow"}],staticClass:"banner",on:{click:function(t){t=e.$handleEvent(t),e.toBanner(e.banner.jump_type,e.banner.jump_link)}}},[i("v-uni-image",{attrs:{src:e.banner.cover,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"f-header",on:{click:function(t){t=e.$handleEvent(t),e.toList(t)}}},[i("v-uni-image",{attrs:{src:"/static/h1.png"}}),i("v-uni-view",{staticClass:"tit-box"},[i("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.header.title))]),i("v-uni-text",{staticClass:"tit2"},[e._v(e._s(e.header.desc))])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1),i("v-uni-view",{staticClass:"guess-section"},e._l(e.list,(function(t,r){return i("v-uni-view",{key:r,staticClass:"guess-item",on:{click:function(i){i=e.$handleEvent(i),e.detail(t.id)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:t.picture,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"sketch"},[e._v(e._s(t.sketch))])],1),i("v-uni-text",{staticClass:"title clamp in2line"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"last-line"},[i("v-uni-text",{staticClass:"price"},[e._v(e._s(t.price)),t.market_price>t.price?i("v-uni-text",{staticClass:"m-price"},[e._v("¥ "+e._s(t.market_price))]):e._e()],1),i("v-uni-text",{staticClass:"sales"},[i("v-uni-text",{staticClass:"red"},[e._v(e._s(t.sales))]),e._v("付款")],1)],1)],1)})),1)],1)},o=[];i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}))},6279:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("c5f6");var r={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var e=this;this.grid.children.forEach((function(t,i){t===e&&e.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};t.default=r},6662:function(e,t,i){var r=i("8ca3");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("4f06").default;o("a8ebd7ca",r,!0,{sourceMap:!1,shadowMode:!1})},"72ad":function(e,t,i){var r=i("eb3a");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("4f06").default;o("c3471eaa",r,!0,{sourceMap:!1,shadowMode:!1})},"73ae":function(e,t,i){"use strict";var r=i("6662"),o=i.n(r);o.a},7896:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[e._t("default"),"default"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,(function(t,r){return i("v-uni-view",{key:r,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(r===e.current?2*e.dots.width:e.dots.width)+"px",height:e.dots.width/3+"px","background-color":r!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,"border-radius":"0px"}})})),1):e._e(),"dot"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,(function(t,r){return i("v-uni-view",{key:r,staticClass:"uni-swiper__dots-item",style:{width:e.dots.width+"px",height:e.dots.height+"px","background-color":r!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:r!==e.current?e.dots.border:e.dots.selectedBorder}})})),1):e._e(),"round"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,(function(t,r){return i("v-uni-view",{key:r,staticClass:"uni-swiper__dots-item ",class:[r===e.current&&"uni-swiper__dots-long"],style:{width:(r===e.current?3*e.dots.width:e.dots.width)+"px",height:e.dots.height+"px","background-color":r!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:r!==e.current?e.dots.border:e.dots.selectedBorder}})})),1):e._e(),"nav"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":e.dotsStyles.backgroundColor}},[i("v-uni-view",{staticClass:"uni-swiper__dots-nav-item",style:{color:e.dotsStyles.color}},[e._v(e._s(e.current+1+"/"+e.info.length)+"\n\t\t\t\t"+e._s(e.info[e.current]&&e.info[e.current][e.field]))])],1):e._e(),"indexes"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,(function(t,r){return i("v-uni-view",{key:r,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:e.dots.width+"px",height:e.dots.height+"px",color:r===e.current?e.dots.selectedColor:e.dots.color,"background-color":r!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:r!==e.current?e.dots.border:e.dots.selectedBorder}},[e._v(e._s(r+1))])})),1):e._e()],2)},o=[];i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}))},8069:function(e,t,i){"use strict";i.r(t);var r=i("c973"),o=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},8999:function(e,t,i){"use strict";i.r(t);var r=i("2284"),o=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},"8ca3":function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,'.rf-floor-index .banner[data-v-65525ecc]{width:92%;margin:%?20?% 4% 0}.rf-floor-index .banner uni-image[data-v-65525ecc]{width:100%;height:25vw;border-radius:%?20?%;box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.05)}.rf-floor-index .f-header[data-v-65525ecc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?140?%;padding:%?6?% %?30?% %?8?%;background:#fff}.rf-floor-index .f-header uni-image[data-v-65525ecc]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?80?%;margin-right:%?20?%}.rf-floor-index .f-header .tit-box[data-v-65525ecc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.rf-floor-index .f-header .tit[data-v-65525ecc]{font-size:%?34?%;color:#font-color-dark;line-height:1.3}.rf-floor-index .f-header .tit2[data-v-65525ecc]{font-size:%?24?%;color:#909399}.rf-floor-index .f-header .icon-you[data-v-65525ecc]{font-size:%?34?%;color:#909399}.rf-floor-index .hot-floor[data-v-65525ecc]{width:100%;overflow:hidden;margin-bottom:%?20?%}.rf-floor-index .hot-floor .floor-img-box[data-v-65525ecc]{width:100%;height:%?320?%;position:relative}.rf-floor-index .hot-floor .floor-img-box[data-v-65525ecc]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:-webkit-linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8);background:linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8)}.rf-floor-index .hot-floor .floor-img[data-v-65525ecc]{width:100%;height:100%}.rf-floor-index .hot-floor .floor-list[data-v-65525ecc]{white-space:nowrap;padding:%?20?%;padding-right:%?50?%;border-radius:%?6?%;margin-top:%?-140?%;margin-left:%?30?%;background:#fff;box-shadow:1px 1px 5px rgba(0,0,0,.2);position:relative;z-index:1}.rf-floor-index .hot-floor .scoll-wrapper[data-v-65525ecc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.rf-floor-index .hot-floor .floor-item[data-v-65525ecc]{width:%?180?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.rf-floor-index .hot-floor .floor-item uni-image[data-v-65525ecc]{width:%?180?%;height:%?180?%;border-radius:%?6?%}.rf-floor-index .hot-floor .floor-item .price[data-v-65525ecc]{color:#fa436a}.rf-floor-index .hot-floor .more[data-v-65525ecc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;width:%?180?%;height:%?180?%;border-radius:%?6?%;background:#f3f3f3;font-size:%?28?%;color:#909399}.rf-floor-index .hot-floor .more uni-text[data-v-65525ecc]:first-child{margin-bottom:%?4?%}.rf-floor-index .guess-section[data-v-65525ecc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.rf-floor-index .guess-section .guess-item[data-v-65525ecc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?40?%}.rf-floor-index .guess-section .guess-item[data-v-65525ecc]:nth-child(odd){margin-right:4%}.rf-floor-index .guess-section .image-wrapper[data-v-65525ecc]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden;position:relative}.rf-floor-index .guess-section .image-wrapper uni-image[data-v-65525ecc]{width:100%;height:100%;opacity:1}.rf-floor-index .guess-section .image-wrapper .sketch[data-v-65525ecc]{background-color:rgba(0,0,0,.4);position:absolute;bottom:%?4?%;padding:0 %?8?%;right:0;color:#fff;font-size:%?24?%}.rf-floor-index .guess-section .title[data-v-65525ecc]{font-size:%?28?%;color:#303133;line-height:%?40?%}.rf-floor-index .guess-section .last-line[data-v-65525ecc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rf-floor-index .guess-section .last-line .red[data-v-65525ecc]{color:#fa436a;font-size:%?26?%;margin-right:%?4?%}.rf-floor-index .guess-section .price[data-v-65525ecc]{font-size:%?32?%;color:#fa436a;line-height:1}.rf-floor-index .guess-section .price[data-v-65525ecc]:before{content:"￥";font-size:%?26?%}.rf-floor-index .guess-section .price .m-price[data-v-65525ecc]{margin-left:%?8?%;color:#909399;font-size:%?24?%;text-decoration:line-through}',""])},"8e17":function(e,t,i){"use strict";var r=i("72ad"),o=i.n(r);o.a},"9f3a":function(e,t,i){"use strict";i.r(t);var r=i("b57c"),o=i("8999");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("cb0d");var a=i("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"efb22380",null);t["default"]=s.exports},a0f7:function(e,t,i){"use strict";i.r(t);var r=i("46aa"),o=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},a9e7:function(e,t,i){"use strict";i.r(t);var r=i("611b"),o=i("beff");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("73ae");var a=i("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"65525ecc",null);t["default"]=s.exports},b45b:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"index"},[i("rf-search-bar",{attrs:{title:"分类",icon:"icon-fenlei1",headerShow:e.headerShow,placeholder:e.hotSearchDefault},on:{link:function(t){t=e.$handleEvent(t),e.toCategory(t)},search:function(t){t=e.$handleEvent(t),e.toSearch(t)}}}),i("v-uni-view",{staticClass:"swiper"},[i("v-uni-view",{staticClass:"swiper-box"},[i("rf-swipe-dot",{attrs:{info:e.carouselList.index_top,mode:"nav",current:e.current,field:"title"}},[i("v-uni-swiper",{staticClass:"swiper-box",attrs:{autoplay:"true"},on:{change:function(t){t=e.$handleEvent(t),e.handleDotChange(t)}}},e._l(e.carouselList.index_top,(function(t,r){return i("v-uni-swiper-item",{key:r,on:{click:function(i){i=e.$handleEvent(i),e.indexTopToDetailPage(t.jump_type,t.jump_link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:t.cover,mode:"aspectFill"}})],1)],1)})),1)],1)],1)],1),i("v-uni-view",{staticClass:"category-list"},e._l(e.productCateList,(function(t,r){return i("v-uni-view",{key:r,staticClass:"category",on:{click:function(i){i.stopPropagation(),i=e.$handleEvent(i),e.navToList(t.id)}}},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:t.cover,mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"text"},[e._v(e._s(t.title))])],1)})),1),i("rf-floor-index",{attrs:{list:e.newProductList,header:{title:"新品上市",desc:"New Products Listed"},banner:e.carouselList.index_new&&e.carouselList.index_new[0]},on:{toBanner:function(t){t=e.$handleEvent(t),e.indexTopToDetailPage(t)},toList:function(t){t=e.$handleEvent(t),e.toProductList({is_new:1})},detail:function(t){t=e.$handleEvent(t),e.navToDetailPage(t)}}}),i("rf-floor-index",{attrs:{list:e.recommendProductList,header:{title:"推荐商品",desc:"Recommend Product"},banner:e.carouselList.index_recommend&&e.carouselList.index_recommend[0]},on:{toBanner:function(t){t=e.$handleEvent(t),e.indexTopToDetailPage(t)},toList:function(t){t=e.$handleEvent(t),e.toProductList({is_recommend:1})},detail:function(t){t=e.$handleEvent(t),e.navToDetailPage(t)}}}),i("rf-floor-index",{attrs:{list:e.hotProductList,header:{title:"热门商品",desc:"Hot Product"},banner:e.carouselList.index_hot&&e.carouselList.index_hot[0]},on:{toBanner:function(t){t=e.$handleEvent(t),e.indexTopToDetailPage(t)},toList:function(t){t=e.$handleEvent(t),e.toProductList({is_hot:1})},detail:function(t){t=e.$handleEvent(t),e.navToDetailPage(t)}}}),i("rf-floor-index",{attrs:{list:e.guessYouLikeProductList,header:{title:"猜你喜欢",desc:"Guess You Like It"},bannerShow:!1},on:{toList:function(t){t=e.$handleEvent(t),e.toProductList({guessYouLike:1})},detail:function(t){t=e.$handleEvent(t),e.navToDetailPage(t)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.config.web_site_icp,expression:"config.web_site_icp"}],staticClass:"copyright"},[e._v(e._s(e.config.copyright_desc)),i("a",{attrs:{href:"http://www.beian.miit.gov.cn"}},[e._v(e._s(e.config.web_site_icp))])]),i("v-uni-view",{staticClass:"uni-title uni-common-pl"},[e._v("商户切换")]),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[e._v("当前选择")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{"range-key":"title",value:e.index,range:e.merchantList},on:{change:function(t){t=e.$handleEvent(t),e.bindPickerChange(t)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.merchantList[e.index]&&e.merchantList[e.index].title))])],1)],1)],1)],1)],1)},o=[];i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}))},b57c:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"rf-search-bar"},[e.headerShow?i("v-uni-view",{staticClass:"status",style:{position:e.headerPosition,top:e.statusTop,opacity:e.afterHeaderOpacity}}):e._e(),e.headerShow?i("v-uni-view",{staticClass:"header",style:{position:e.headerPosition,top:e.headerTop,opacity:e.afterHeaderOpacity}},[i("v-uni-view",{staticClass:"addr",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.link(t)}}},[i("v-uni-view",{staticClass:"icon yticon",class:e.icon}),e._v(e._s(e.title))],1),e.inputDisabled?i("v-uni-view",{staticClass:"input-box",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.discard(t)}}},[i("v-uni-input",{staticStyle:{color:"#888"},attrs:{value:e.placeholder,"placeholder-style":"color:#ccc;"},on:{confirm:function(t){t=e.$handleEvent(t),e.toSearch(t)},input:function(t){t=e.$handleEvent(t),e.handleSearchValueChange(t)}}}),i("v-uni-view",{staticClass:"icon search",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.toSearch(t)}}})],1):i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{disabled:"",value:e.placeholder,"placeholder-style":"color:#ccc;"},on:{click:function(t){t=e.$handleEvent(t),e.toSearch(t)}}}),i("v-uni-view",{staticClass:"icon search"})],1)],1):e._e(),e.headerShow?i("v-uni-view",{staticClass:"place"}):e._e()],1)},o=[];i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}))},bbc1:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,".uni-grid-wrap[data-v-9de5e218]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%}.uni-grid[data-v-9de5e218]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-9de5e218]{border-left-color:#c8c7cc;border-left-style:solid;border-left-width:1px}",""])},beff:function(e,t,i){"use strict";i.r(t);var r=i("2667"),o=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},c4c8:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderProductExpressDetails=t.brandList=t.orderPreview=t.evaluateList=t.orderFreightFee=t.orderPay=t.orderClose=t.orderCreate=t.cartItemUpdateNum=t.cartItemClear=t.cartItemDel=t.cartItemList=t.cartItemCreate=t.productDetail=t.guessYouLikeList=t.productList=t.productCateList=t.productCate=t.indexList=void 0;var r="/tiny-shop/v1/index/index";t.indexList=r;var o="/tiny-shop/v1/product/cate/index";t.productCate=o;var n="/tiny-shop/v1/product/cate/list";t.productCateList=n;var a="/tiny-shop/v1/product/product/index";t.productList=a;var s="/tiny-shop/v1/product/product/view";t.productDetail=s;var c="/tiny-shop/v1/product/product/guess-you-like";t.guessYouLikeList=c;var d="/tiny-shop/v1/member/cart-item/create";t.cartItemCreate=d;var l="/tiny-shop/v1/member/cart-item/index";t.cartItemList=l;var u="/tiny-shop/v1/member/cart-item/delete-ids";t.cartItemDel=u;var f="/tiny-shop/v1/member/cart-item/clear";t.cartItemClear=f;var h="/tiny-shop/v1/member/cart-item/update-num";t.cartItemUpdateNum=h;var p="/tiny-shop/v1/order/order/create";t.orderCreate=p;var b="/tiny-shop/v1/order/order/preview";t.orderPreview=b;var v="/tiny-shop/v1/member/order/close";t.orderClose=v;var w="/tiny-shop/v1/common/pay/create";t.orderPay=w;var g="/tiny-shop/v1/order/order/freight-fee";t.orderFreightFee=g;var x="/tiny-shop/v1/product/evaluate/index";t.evaluateList=x;var m="/tiny-shop/v1/member/order-product-express/details";t.orderProductExpressDetails=m;var y="/tiny-shop/v1/product/brand/index";t.brandList=y},c973:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("386d"),i("96cf");var o=r(i("3b8d")),n=i("c4c8"),a=r(i("cff3")),s=r(i("e395")),c=r(i("2ba4")),d=r(i("3c94")),l=r(i("a9e7")),u=r(i("9f3a")),f=i("2b74"),h={components:{uniGrid:a.default,uniIcons:c.default,uniGridItem:s.default,rfFloorIndex:l.default,rfSwipeDot:d.default,rfSearchBar:u.default},data:function(){return{current:0,headerShow:!0,carouselList:{},search:{},hotSearchDefault:"输入关键字搜索",hotProductList:[],recommendProductList:[],guessYouLikeProductList:[],newProductList:[],productCateList:[],brandList:[],config:{},index:0,merchantList:[]}},onLoad:function(){this.initData()},onShareAppMessage:function(){return{title:"欢迎来到RageFrame商城",path:"/pages/index/index"}},onPullDownRefresh:function(){this.getIndexList("refresh")},methods:{bindPickerChange:function(e){uni.setStorageSync("merchantId",this.merchantList[e.target.value].id),uni.setStorageSync("merchantIndex",e.target.value),this.index=e.target.value,uni.removeStorage({key:"userInfo"}),uni.removeStorage({key:"accessToken"}),this.getIndexList()},handleDotChange:function(e){this.current=e.detail.current},initData:function(){uni.removeStorageSync("cateTop"),this.getIndexList()},navToList:function(e){uni.navigateTo({url:"/pages/product/list?cate_id=".concat(e)})},indexTopToDetailPage:function(e,t){var i,r,o;switch(t?(o=t,r=e):(r=e.type,o=e.id),r){case"product_view":i="/pages/product/product?id=".concat(o);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":i="/pages/coupon/detail?id=".concat(o);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":i="/pages/product/list?cate_id=".concat(o);break;default:break}i&&uni.navigateTo({url:i})},toProductList:function(e){uni.navigateTo({url:"/pages/product/list?params=".concat(JSON.stringify(e))})},getIndexList:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(n.indexList),{}).then(function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.$get("".concat(f.merchantIndex),{}).then((function(e){i.merchantList=e.data,i.index=uni.getStorageSync("merchantIndex")||e.data.length-1}));case 2:"refresh"===t&&uni.stopPullDownRefresh(),i.productCateList=r.data.cate,i.carouselList=r.data.adv,i.search=r.data.search,uni.setStorageSync("search",i.search),i.hotSearchDefault="请输入关键字 如: ".concat(r.data.search.hot_search_default),uni.setStorage({key:"hotSearchDefault",data:r.data.search.hot_search_default}),i.hotProductList=r.data.product_hot,i.recommendProductList=r.data.product_recommend,i.guessYouLikeProductList=r.data.guess_you_like,i.newProductList=r.data.product_new,i.config=r.data.config;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),navToDetailPage:function(e){var t=e.id;t&&uni.navigateTo({url:"/pages/product/product?id=".concat(t)})},toSearch:function(){uni.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toCategory:function(){uni.reLaunch({url:"/pages/category/category"})}}};t.default=h},cb0d:function(e,t,i){"use strict";var r=i("e251"),o=i.n(r);o.a},cff3:function(e,t,i){"use strict";i.r(t);var r=i("4516"),o=i("a0f7");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("3f39");var a=i("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"9de5e218",null);t["default"]=s.exports},d259:function(e,t,i){"use strict";i.r(t);var r=i("6279"),o=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},e251:function(e,t,i){var r=i("4204");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("4f06").default;o("1db3544c",r,!0,{sourceMap:!1,shadowMode:!1})},e395:function(e,t,i){"use strict";i.r(t);var r=i("3323"),o=i("d259");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("e47d");var a=i("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"9cbe37b8",null);t["default"]=s.exports},e47d:function(e,t,i){"use strict";var r=i("2ebe"),o=i.n(r);o.a},eb3a:function(e,t,i){t=e.exports=i("24fb")(!1),t.push([e.i,"uni-page-body[data-v-73c5359c]{position:relative;background-color:#fff}.index .swiper[data-v-73c5359c]{width:100%;margin-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.index .swiper .swiper-box[data-v-73c5359c]{width:92%;height:40vw;overflow:hidden;border-radius:%?15?%;box-shadow:%?0?% %?8?% %?25?% rgba(0,0,0,.2);position:relative;z-index:1}.index .swiper .swiper-box uni-swiper[data-v-73c5359c]{width:100%;height:40vw}.index .swiper .swiper-box uni-swiper uni-swiper-item uni-image[data-v-73c5359c]{width:100%;height:40vw}.index .category-list[data-v-73c5359c]{width:100%;padding:0 0 %?30?% 0;border-bottom:solid %?2?% #f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.index .category-list .category[data-v-73c5359c]{width:20%;margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.index .category-list .category .img[data-v-73c5359c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.index .category-list .category .img uni-image[data-v-73c5359c]{width:9vw;height:9vw}.index .category-list .category .text[data-v-73c5359c]{margin-top:%?16?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;color:#3c3c3c}.index .banner[data-v-73c5359c]{width:92%;margin:%?20?% 4% 0}.index .banner uni-image[data-v-73c5359c]{width:100%;height:22vw;border-radius:11vw;box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.3)}.index .copyright[data-v-73c5359c]{margin:%?10?% 0;width:100%;text-align:center;color:#666}.index .copyright a[data-v-73c5359c]{display:block;color:#666;text-decoration:none}.index .uni-list[data-v-73c5359c]{padding:%?20?% 0}.index .uni-list .uni-list-cell .uni-input[data-v-73c5359c]{padding:0}body.?%PAGE?%[data-v-73c5359c]{background-color:#fff}",""])},f75a:function(e,t,i){"use strict";i.r(t);var r=i("b45b"),o=i("8069");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("8e17");var a=i("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"73c5359c",null);t["default"]=s.exports},f7de:function(e,t,i){var r=i("bbc1");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=i("4f06").default;o("d87c593a",r,!0,{sourceMap:!1,shadowMode:!1})}}]);