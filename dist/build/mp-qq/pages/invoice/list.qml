<view class="content b-t"><block wx:if="{{invoiceList.length>0}}"><view><block wx:for="{{$root.l0}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['navTo',['$0'],[[['invoiceList','',index,'order_id']]]]]]]}}" class="list b-b" bindtap="__e"><view class="wrapper"><view class="address-box"><view class="order-fl">订单编号:<text class="order-sn">{{item.$orig.order_sn}}</text></view><view class="order-wrapper"><text class="address">{{item.$orig.title}}</text><text class="address">{{"开票金额: "+item.$orig.tax_money}}</text></view></view><view class="u-box"><view><text class="name">{{item.m0===1?'公司':'个人'}}</text><text class="mobile">{{item.$orig.duty_paragraph||'个人发票无税号'}}</text></view><text class="time">{{item.f0}}</text></view></view></view></block><rf-load-more vue-id="1" status="{{loadingType}}" bind:__l="__l"></rf-load-more></view></block><block wx:else><empty vue-id="2" info="您还未购买任何商品~" bind:__l="__l"></empty></block></view>