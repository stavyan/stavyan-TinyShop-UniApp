<view class="footprint"><uni-calendar class="date" vue-id="1" insert="{{true}}" lunar="{{true}}" start-date="2019-3-2" end-date="2019-5-20" data-event-opts="{{[['^change',[['handleDateChange']]]]}}" bind:change="__e" bind:__l="__l"></uni-calendar><block wx:for="{{$root.l0}}" wx:for-item="item" wx:for-index="index" wx:key="index"><uni-swipe-action class="uni-list-cell" vue-id="{{'2-'+index}}" info="{{item.$orig}}" options="{{options}}" hover-class="uni-list-cell-hover" data-event-opts="{{[['^click',[['bindClick',['$0'],[[['footPrintList','',index]]]]]]]}}" bind:click="__e" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['goProduct',['$0'],[[['footPrintList','',index,'product.id']]]]]]]}}" class="uni-media-list" bindtap="__e"><image class="uni-media-list-logo" mode="aspectFill" src="{{item.$orig.product&&item.$orig.product.picture}}" data-event-opts="{{[['error',[['onImageError',[index]]]]]}}" binderror="__e"></image><view class="uni-media-list-body"><view class="uni-media-list-text-top">{{item.$orig.product&&item.$orig.product.name}}</view><view class="uni-media-list-text-bottom"><text class="price">{{item.$orig.product&&item.$orig.product.minPriceSku.price}}</text><text>{{item.f0}}</text></view></view></view></uni-swipe-action></block><block wx:if="{{footPrintList.length===0}}"><view class="empty"><image class="empty-content-image" src="{{empty}}" mode="aspectFit"></image><text class="empty-content-text">这一天没有足迹哦</text></view></block><block wx:else><uni-load-more vue-id="3" status="{{loadingType}}" bind:__l="__l"></uni-load-more></block></view>