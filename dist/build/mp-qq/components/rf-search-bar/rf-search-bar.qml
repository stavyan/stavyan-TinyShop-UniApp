<view class="rf-search-bar data-v-2f3fb74a"><block wx:if="{{headerShow}}"><view class="status data-v-2f3fb74a" style="{{'position:'+(headerPosition)+';'+('top:'+(statusTop)+';')+('opacity:'+(afterHeaderOpacity)+';')}}"></view></block><block wx:if="{{headerShow}}"><view class="header data-v-2f3fb74a" style="{{'position:'+(headerPosition)+';'+('top:'+(headerTop)+';')+('opacity:'+(afterHeaderOpacity)+';')}}"><view data-event-opts="{{[['tap',[['link',['$event']]]]]}}" class="addr data-v-2f3fb74a" catchtap="__e"><view class="{{['icon yticon data-v-2f3fb74a',icon]}}"></view>{{''+title+''}}</view><block wx:if="{{inputDisabled}}"><view data-event-opts="{{[['tap',[['discard',['$event']]]]]}}" class="input-box data-v-2f3fb74a" catchtap="__e"><input style="color:#888;" placeholder-style="color:#ccc;" data-event-opts="{{[['confirm',[['toSearch',['$event']]]],['input',[['handleSearchValueChange',['$event']]]]]}}" value="{{placeholder}}" bindconfirm="__e" bindinput="__e" class="data-v-2f3fb74a"/><view data-event-opts="{{[['tap',[['toSearch',['$event']]]]]}}" class="icon search data-v-2f3fb74a" catchtap="__e"></view></view></block><block wx:else><view class="input-box data-v-2f3fb74a"><input disabled placeholder-style="color:#ccc;" data-event-opts="{{[['tap',[['toSearch',['$event']]]]]}}" value="{{placeholder}}" bindtap="__e" class="data-v-2f3fb74a"/><view class="icon search data-v-2f3fb74a"></view></view></block></view></block><block wx:if="{{headerShow}}"><view class="place data-v-2f3fb74a"></view></block></view>