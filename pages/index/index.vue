<template>
	<view>
		<view class="head">
			
			<!-- 顶部搜索组件 -->
			<top-search></top-search>
			
			<swiper class="head-banner" autoplay="false" indicator-dots="true" :interval="5000" circular>
				<swiper-item v-for="item in banner_list">
					<image mode="aspectFit" :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="content">
			<!-- 选择送水方式 -->
			<view class="content-chose-method">
				<view class="method-left" data-deliver-method="0" @click="chose_method">
					<text style="font-weight: 600;">
						到店自提
					</text>
					<text style="font-size: 20rpx;">
						价格优惠，无配送费
					</text>
					<text style="border: 1px solid white; line-height: 45rpx; border-radius: 50rpx; width:150rpx; height: 50rpx; font-size: 25rpx; text-align: center;">
						立刻进入
					</text>
					
					<view class="bg-image">
						<image src="../../static/店铺.png"></image>
					</view>
				</view>
				<view class="method-right" data-deliver-method="1" @click="chose_method">
					<text style="font-weight: 600;">
						送货上门
					</text>
					<text style="font-size: 20rpx;">
						足不出户，即刻畅饮
					</text>
					<text style="border: 1px solid white; line-height: 45rpx; border-radius: 50rpx; width:150rpx; height: 50rpx; font-size: 25rpx; text-align: center;">
						立刻进入
					</text>
					
					<view class="bg-image">
						<image src="../../static/外卖.png"></image>
					</view>
				</view>
			</view>
			
			<view class="content-recommended-store">
				<text style="margin-left: 20rpx;">推荐店铺</text>
			</view>
			
			<view class="store-list">
				<store-list v-for="item in store_list" @click="go_menu(item.store_name)">
					<template #store_img><image :src="item.store_img_src" style="width: 100%; height: 100%;"></image></template>
					<template #store_name>{{item.store_name}}</template>
					<template #expense>{{item.store_expense}}</template>
					<template #introduce>{{item.store_introduce}}</template>
				</store-list>
			</view>
		</view>
	</view>
</template>

<script setup>
	

const banner_list = ["../../static/首页banner.jpg" , "../../static/首页banner2.png" , "../../static/首页banner3.jpg"]
const chose_method = (e) => {
	uni.setStorageSync('deliver_method' , e.currentTarget.dataset.deliverMethod)
	uni.switchTab({
		url:'../menu/menu'
	})
}

	
const go_menu = (store_name) => {
	uni.switchTab({
		url: '/pages/menu/menu'
	})
	uni.$emit('store_name' , store_name)
}


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

.head {
	width: 100%;

	.head-banner {
		width: 100%;
		height: 400rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	
}

.content {
	width: 100%;
	.content-chose-method {
		width: 100%;
		height: 250rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.method-left {
			position: relative;
			height: 60%;
			margin: 10rpx;
			padding: 20rpx;
			width: 45%;
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			background: deepskyblue;
			color: white;
			.bg-image {
				position: absolute;
				right: 10rpx;
				
				width: 100rpx;
				height: 100rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.method-right {
			height: 70%;
			margin: 10rpx;
			padding: 10rpx;
			width: 45%;
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			background: lightskyblue;
			color: white;
			.bg-image {
				position: absolute;
				right: 20rpx;
				width: 100rpx;
				height: 100rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		
	}
	
	.content-recommended-store {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		font-weight: 600;
		color: deepskyblue;
		border-top: 1px solid gray;
		background-color: #f0f0f0;
	}
	
}
</style>
