<template>
	<view>
		<view class="store-list" padding="0" margin="0" spacing="0" v-for="item in store_list" @click="$emit('store_click' , item.store_name)">
				<view class="list-left">
					<image :src="item.store_img_src" style="width: 100%; height: 100%;"></image>
				</view>
				
				<view class="list-right">
					<view class="store-content">
						<text style="font-size: 35rpx; font-weight: 600;">{{item.store_name}}</text>
						<text style="font-size: 25rpx; color: dimgray; font-weight: 500;">人均消费：{{item.store_expense}}</text>
						<text style="font-size: 28rpx; color: darkgray; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; width: 300rpx; height: 80rpx;">
							{{item.store_introduce}}
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
import { reactive } from 'vue';
	
	
	const store_list = [
		{
			store_img_src:"../../static/水店.jpg",
			store_name:"农夫山泉水站",
			store_expense:"15",
			store_introduce:"农夫山泉股份有限公司是中国饮料20强之一,专注于研发、推广饮用天然水、果蔬汁饮料、特殊用途饮料和茶饮料等各类软饮料。"
		},
		{
			store_img_src:"../../static/水店2.jpeg",
			store_name:"百岁山水站",
			store_expense:"11",
			store_introduce:"农夫山泉股份有限公司是中国饮料20强之一,专注于研发、推广饮用天然水、果蔬汁饮料、特殊用途饮料和茶饮料等各类软饮料。"
		},
		{
			store_img_src:"../../static/水店3.jpg",
			store_name:"怡宝水站",
			store_expense:"8",
			store_introduce:"农夫山泉股份有限公司是中国饮料20强之一,专注于研发、推广饮用天然水、果蔬汁饮料、特殊用途饮料和茶饮料等各类软饮料。"
		}
			
	]
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