(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"030f":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("a34a")),r=i("c4c8");function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e,i,n,s,r,a){try{var c=t[r](a),o=c.value}catch(u){return void i(u)}c.done?e(o):Promise.resolve(o).then(n,s)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var r=t.apply(e,i);function a(t){c(r,n,s,a,o,"next",t)}function o(t){c(r,n,s,a,o,"throw",t)}a(void 0)}))}}var u={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,theIndex:null,oldIndex:null,isStop:!1,cartList:[],token:null,oldDiscount:0}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,this.getCartItemList("refresh")},onShow:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.initData()},methods:{deleteCartItem:function(){var e=o(s.default.mark((function e(i,a){var c,o,u=this;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=[],a)c.push(parseInt(i,10));else for(o=0;o<this.cartList.length;o++)this.cartList[o].selected&&c.push(parseInt(this.cartList[o].sku_id,10));return t.showLoading({title:"正在将商品从购物车移除..."}),e.next=5,this.$post("".concat(r.cartItemDel),{sku_ids:JSON.stringify(c)}).then((function(e){200===e.code?(u.selectedList.length=0,u.isAllselected=!1,u.sumPrice=0,u.getCartItemList(),u.oldIndex=null,u.theIndex=null):t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(n(t," at pages/cart/cart.vue:156"))}));case 5:case"end":return e.stop()}}),e,this)})));function i(t,i){return e.apply(this,arguments)}return i}(),initData:function(){this.token=t.getStorageSync("accessToken")||void 0,this.token&&(this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,this.getCartItemList())},navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},getCartItemList:function(){var e=o(s.default.mark((function e(i){var a=this;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(r.cartItemList),{},{},this).then((function(e){"refresh"===i&&t.stopPullDownRefresh(),200===e.code?a.cartList=e.data:t.showToast({title:e.message,icon:"none"})})).catch((function(t){console.log(n(t," at pages/cart/cart.vue:204"))}));case 3:case"end":return e.stop()}}),e,this)})));function i(t){return e.apply(this,arguments)}return i}(),clearCart:function(){var e=this;t.showModal({content:"清空购物车？",success:function(){var i=o(s.default.mark((function i(a){return s.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!a.confirm){i.next=4;break}return t.showLoading({title:"正在清空购物车..."}),i.next=4,e.$post("".concat(r.cartItemClear)).then((function(i){200===i.code?(e.selectedList.length=0,e.isAllselected=!1,e.sumPrice=0,e.getCartItemList()):t.showToast({title:i.message,icon:"none"})})).catch((function(t){console.log(n(t," at pages/cart/cart.vue:224"))}));case 4:case"end":return i.stop()}}),i)})));function a(t){return i.apply(this,arguments)}return a}()})},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],s=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(s)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout((function(){i.oldIndex=null}),150)))}},touchEnd:function(t,e){this.isStop=!1},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(e)})},selected:function(t){this.cartList[t].selected=!this.cartList[t].selected;var e=this.selectedList.indexOf(this.cartList[t].id);e>-1?this.selectedList.splice(e,1):this.selectedList.push(this.cartList[t].id),this.isAllselected=this.selectedList.length==this.cartList.length,this.sum()},allSelect:function(){for(var t=this.cartList.length,e=[],i=0;i<t;i++)this.cartList[i].selected=!this.isAllselected,e.push(this.cartList[i].id);this.selectedList=this.isAllselected?[]:e,this.isAllselected=!this.isAllselected&&0!=this.cartList.length,this.sum()},sub:function(t,e){this.cartList[e].number<=1||(this.cartList[e].number--,this.numberChange(t))},add:function(t,e){this.cartList[e].number++,this.numberChange(t,void 0,e,"add")},numberChange:function(){var e=o(s.default.mark((function e(i,a,c,o){var u=this;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a&&(this.cartList[c].number=a.detail.value),t.showLoading({title:"加载中..."}),e.next=4,this.$post("".concat(r.cartItemUpdateNum),{sku_id:i.sku_id,num:i.number}).then((function(e){200===e.code?u.sum():("add"===o&&u.cartList[c].number--,t.showToast({title:e.message,icon:"none"}))})).catch((function(t){"add"===o&&u.cartList[c].number--,console.log(n(t," at pages/cart/cart.vue:339"))}));case 4:case"end":return e.stop()}}),e,this)})));function i(t,i,n,s){return e.apply(this,arguments)}return i}(),createOrder:function(){var e=o(s.default.mark((function e(){var i,n,r,a;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==this.selectedList.length){e.next=2;break}return e.abrupt("return");case 2:for(i={},n=[],r=this.cartList.length,a=0;a<r;a++)this.cartList[a].selected&&n.push(parseInt(this.cartList[a].id,10));i.type="cart",i.data=n.join(","),this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,t.navigateTo({url:"/pages/order/createOrder?data=".concat(JSON.stringify(i))});case 12:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),sum:function(){this.sumPrice=0;for(var t=this.cartList.length,e=[],i=0;i<t;i++)this.cartList[i].selected&&(e.push(this.cartList[i]),this.sumPrice=this.arrSort(e));this.sumPrice=this.sumPrice.toFixed(2)},floor:function(t){return Math.floor(100*t)/100},ceil:function(t){return Math.ceil(100*t)/100},discard:function(){},arrSort:function(t){for(var e=this,i={},s=[],r=0;r<t.length;r++){var a=t[r];if(i[a.product.id])for(var c=0;c<s.length;c++){var o=s[c];if(o.data[0].product.id===a.product.id){o.data.push(a);break}}else s.push({id:a.product.id,num:0,price:0,data:[a]}),i[a.product.id]=a}var u=[];s.forEach((function(t){t.data.forEach((function(e){t.num+=parseInt(e.number,10),t.price+=parseInt(e.number,10)*e.price})),console.log(n(t," at pages/cart/cart.vue:454"));for(var e=t.data[0].ladderPreferential,i=0;i<e.length;i++)if(t.num>=parseInt(e[i].quantity,10)){e[i].num=t.num,e[i].itemPrice=t.data[0].price,e[i].totalPrice=t.price,u.push(e[i]);break}}));var l=0,h=0;return u.forEach((function(t){1===parseInt(t.type,10)?h+=t.price*t.num:h+=t.totalPrice-e.floor(t.itemPrice*t.price/100)*t.num})),s.forEach((function(t){l+=t.price})),console.error(n("discount",h," at pages/cart/cart.vue:478")),console.warn(n("amount",l," at pages/cart/cart.vue:479")),l-h}}};e.default=u}).call(this,i("6e42")["default"],i("0de9")["default"])},"2c90":function(t,e,i){"use strict";i.r(e);var n=i("030f"),s=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=s.a},"463e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}))},"587c":function(t,e,i){"use strict";(function(t){i("6cdc"),i("921b");n(i("66fd"));var e=n(i("bf12"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},a07f:function(t,e,i){},bf12:function(t,e,i){"use strict";i.r(e);var n=i("463e"),s=i("2c90");for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("d18b");var a=i("2877"),c=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},d18b:function(t,e,i){"use strict";var n=i("a07f"),s=i.n(n);s.a}},[["587c","common/runtime","common/vendor"]]]);