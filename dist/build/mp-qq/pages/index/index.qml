<view class="container"><view data-event-opts="{{[['tap',[['toSearch',['$event']]]]]}}" class="mp-search-box" bindtap="__e"><uni-icons class="icon-search" vue-id="1" color="#666" type="search" size="19" bind:__l="__l"></uni-icons><input class="ser-input vue-ref" disabled type="text" data-ref="search" value="{{hotSearchDefault}}"/></view><view class="carousel-section"><view class="titleNview-placing"></view><view class="titleNview-background" style="{{'background-color:'+('#fa436a')+';'}}"></view><swiper class="carousel" circular data-event-opts="{{[['change',[['swiperChange',['$event']]]]]}}" bindchange="__e"><block wx:for="{{carouselList.index_top}}" wx:for-item="item" wx:for-index="index" wx:key="index"><swiper-item data-event-opts="{{[['tap',[['indexTopToDetailPage',['$0','$1'],[[['carouselList.index_top','',index,'jump_type']],[['carouselList.index_top','',index,'jump_link']]]]]]]}}" class="carousel-item" bindtap="__e"><image src="{{item.cover}}"></image></swiper-item></block></swiper><view class="swiper-dots"><text class="num">{{swiperCurrent+1}}</text><text class="sign">/</text><text class="num">{{carouselList.index_top&&carouselList.index_top.length}}</text></view></view><uni-grid class="grid" vue-id="2" column="{{4}}" showBorder="{{false}}" bind:__l="__l" vue-slots="{{['default']}}"><view class="grid-title">分类专区</view><block wx:for="{{productCateList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><uni-grid-item class="grid-item" vue-id="{{('3-'+index)+','+('2')}}" bind:__l="__l" vue-slots="{{['default']}}"><image class="grid-item-image" src="{{item.cover}}" data-event-opts="{{[['tap',[['navToList',['$0'],[[['productCateList','',index,'id']]]]]]]}}" catchtap="__e"></image><text data-event-opts="{{[['tap',[['navToList',['$0'],[[['productCateList','',index,'id']]]]]]]}}" class="grid-item-text" catchtap="__e">{{item.title}}</text></uni-grid-item></block></uni-grid><uni-grid class="grid" vue-id="4" column="{{4}}" showBorder="{{false}}" bind:__l="__l" vue-slots="{{['default']}}"><view class="grid-title">品牌专区</view><block wx:for="{{brandList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><uni-grid-item class="grid-item" vue-id="{{('5-'+index)+','+('4')}}" bind:__l="__l" vue-slots="{{['default']}}"><image class="grid-item-image" src="{{item.cover}}" data-event-opts="{{[['tap',[['toProductList',[['o',['brand_id',item.id]]]]]]]}}" catchtap="__e"></image><text data-event-opts="{{[['tap',[['toProductList',[['o',['brand_id',item.id]]]]]]]}}" class="grid-item-text" catchtap="__e">{{item.title}}</text></uni-grid-item></block></uni-grid><view data-event-opts="{{[['tap',[['indexTopToDetailPage',['$0','$1'],['carouselList.index_new.__$n0.jump_type','carouselList.index_new.__$n0.jump_link']]]]]}}" class="ad-1" bindtap="__e"><image src="{{carouselList.index_new&&carouselList.index_new[0].cover}}" mode="scaleToFill"></image></view><view data-event-opts="{{[['tap',[['toProductList',[['o',['is_new',1]]]]]]]}}" class="f-header m-t" bindtap="__e"><image src="/static/h1.png"></image><view class="tit-box"><text class="tit">新品上市</text><text class="tit2">New Products Listed</text></view><text class="yticon icon-you"></text></view><view class="guess-section"><block wx:for="{{newProductList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['navToDetailPage',['$0'],[[['newProductList','',index,'id']]]]]]]}}" class="guess-item" bindtap="__e"><view class="image-wrapper"><image src="{{item.picture}}" mode="aspectFill"></image><text class="sketch">{{item.sketch}}</text></view><text class="title clamp in2line">{{item.name}}</text><view class="last-line"><text class="price">{{item.price+''}}<block wx:if="{{item.market_price>item.price}}"><text class="m-price">{{"¥ "+item.market_price}}</text></block></text><text class="sales"><text class="red">{{item.sales}}</text>付款</text></view></view></block></view><view data-event-opts="{{[['tap',[['indexTopToDetailPage',['$0','$1'],['carouselList.index_recommend.__$n0.jump_type','carouselList.index_recommend.__$n0.jump_link']]]]]}}" class="ad-1" bindtap="__e"><image src="{{carouselList.index_hot&&carouselList.index_recommend[0].cover}}" mode="scaleToFill"></image></view><view data-event-opts="{{[['tap',[['toProductList',[['o',['is_recommend',1]]]]]]]}}" class="f-header m-t" bindtap="__e"><image src="/static/h1.png"></image><view class="tit-box"><text class="tit">推荐商品</text><text class="tit2">Recommend Product</text></view><text class="yticon icon-you"></text></view><view class="guess-section"><block wx:for="{{recommendProductList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['navToDetailPage',['$0'],[[['recommendProductList','',index,'id']]]]]]]}}" class="guess-item" bindtap="__e"><view class="image-wrapper"><image src="{{item.picture}}" mode="aspectFill"></image><text class="sketch">{{item.sketch}}</text></view><text class="title clamp in2line">{{item.name}}</text><view class="last-line"><text class="price">{{item.price+''}}<block wx:if="{{item.market_price>item.price}}"><text class="m-price">{{"¥ "+item.market_price}}</text></block></text><text class="sales"><text class="red">{{item.sales}}</text>付款</text></view></view></block></view><view data-event-opts="{{[['tap',[['indexTopToDetailPage',['$0','$1'],['carouselList.index_hot.__$n0.jump_type','carouselList.index_hot.__$n0.jump_link']]]]]}}" class="ad-1" bindtap="__e"><image src="{{carouselList.index_hot&&carouselList.index_hot[0].cover}}" mode="scaleToFill"></image></view><view data-event-opts="{{[['tap',[['toProductList',[['o',['is_hot',1]]]]]]]}}" class="f-header m-t" bindtap="__e"><image src="/static/h1.png"></image><view class="tit-box"><text class="tit">热门商品</text><text class="tit2">Hot Product</text></view><text class="yticon icon-you"></text></view><view class="guess-section"><block wx:for="{{hotProductList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['navToDetailPage',['$0'],[[['hotProductList','',index,'id']]]]]]]}}" class="guess-item" bindtap="__e"><view class="image-wrapper"><image src="{{item.picture}}" mode="aspectFill"></image><text class="sketch">{{item.sketch}}</text></view><text class="title clamp in2line">{{item.name}}</text><view class="last-line"><text class="price">{{item.price+''}}<block wx:if="{{item.market_price>item.price}}"><text class="m-price">{{"¥ "+item.market_price}}</text></block></text><text class="sales"><text class="red">{{item.sales}}</text>付款</text></view></view></block></view><view data-event-opts="{{[['tap',[['toProductList',[['o',['guessYouLike',1]]]]]]]}}" class="f-header m-t" bindtap="__e"><image src="/static/h1.png"></image><view class="tit-box"><text class="tit">猜你喜欢</text><text class="tit2">Guess You Like It</text></view><text class="yticon icon-you"></text></view><view class="guess-section"><block wx:for="{{guessYouLikeProductList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['navToDetailPage',['$0'],[[['guessYouLikeProductList','',index,'id']]]]]]]}}" class="guess-item" bindtap="__e"><view class="image-wrapper"><image src="{{item.picture}}" mode="aspectFill"></image><text class="sketch">{{item.sketch}}</text></view><text class="title in2line">{{item.name}}</text><view class="last-line"><text class="price">{{item.price+''}}<block wx:if="{{item.market_price>item.price}}"><text class="m-price">{{"¥ "+item.market_price}}</text></block></text><text class="sales"><text class="red">{{item.sales}}</text>付款</text></view></view></block></view></view>