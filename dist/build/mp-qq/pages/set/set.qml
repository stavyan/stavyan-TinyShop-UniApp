<view class="container"><view class="list-cell b-b m-t" hover-class="cell-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/userinfo/userinfo']]]]]}}" bindtap="__e"><text class="cell-tit">个人资料</text><text class="cell-more yticon icon-you"></text></view><view class="list-cell b-b" hover-class="cell-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/public/password?type=1']]]]]}}" bindtap="__e"><text class="cell-tit">修改密码</text><text class="cell-more yticon icon-you"></text></view><view class="list-cell b-b m-t" hover-class="cell-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/invoice/invoice']]]]]}}" bindtap="__e"><text class="cell-tit">发票管理</text><text class="cell-more yticon icon-you"></text></view><view class="list-cell b-b" hover-class="cell-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/invoice/list']]]]]}}" bindtap="__e"><text class="cell-tit">开票历史</text><text class="cell-more yticon icon-you"></text></view><view class="list-cell m-t"><text class="cell-tit">消息推送</text><switch checked color="#fa436a" data-event-opts="{{[['change',[['switchChange',['$event']]]]]}}" bindchange="__e"></switch></view><view class="list-cell m-t b-b" hover-class="cell-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['清除缓存']]]]]}}" bindtap="__e"><text class="cell-tit">清除缓存</text><text class="cell-tip">{{currentStorageSize+" kb"}}</text><text class="cell-more yticon icon-you"></text></view><view class="list-cell b-b" hover-class="cell-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/about/about']]]]]}}" bindtap="__e"><text class="cell-tit">关于RF商城</text><text class="cell-more yticon icon-you"></text></view><view class="list-cell b-b"><text class="cell-tit">当前版本</text><text class="cell-tip">当前版本 beta 1.0</text><text class="cell-more yticon icon-you"></text></view><view data-event-opts="{{[['tap',[['navTo',['/pages/feedback/list']]]]]}}" class="list-cell m-t" bindtap="__e"><text class="cell-tit">意见反馈</text><text class="cell-more yticon icon-you"></text></view><view data-event-opts="{{[['tap',[['toLogout',['$event']]]]]}}" class="list-cell log-out-btn" bindtap="__e"><text class="cell-tit">退出登录</text></view></view>