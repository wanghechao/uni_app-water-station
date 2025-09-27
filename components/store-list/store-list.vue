<template>
	<view>
		<view class="store-list" padding="0" margin="0" spacing="0">
				<view class="list-left">
					<slot name="store_img"></slot>
				</view>
				
				<view class="list-right">
					<view class="store-content">
						<text style="font-size: 35rpx; font-weight: 600;"> <slot name="store_name">默认店名</slot></text>
						<text style="font-size: 25rpx; color: dimgray; font-weight: 500;">人均消费：<slot name="expense">404</slot></text>
						<text style="font-size: 28rpx; color: darkgray; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; width: 300rpx; height: 80rpx;">
							<slot name="introduce">店面介绍</slot>
						</text>
					</view>
					
					<view class="to-shop">
						<uni-icons type="right"></uni-icons>
					</view>
				</view>
			
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.store-list {
	border-radius: 20rpx;
	box-shadow: 0 0 3rpx gray;
	margin-left: 20rpx;
	margin-top: 20rpx;
	width: 95%;
	height: 220rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	
	.list-left {
		width: 240rpx;
		height: 100%;
		image {
			margin-top: 5rpx;
			border-radius: 20rpx;
			width: 95%;
			height: 95%;
		}
	}
	
	.list-right {
		margin-left: 20rpx;
		width: 400rpx;
		height: 100%;
		display: flex;
		justify-content: space-between;
		.store-content {
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
		}
		
		.to-shop {
			margin-top: 70rpx;
			width: 100rpx;
			height: 80rpx;
			border-radius: 50%;
			border: 1px solid skyblue;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	
	
}


</style>