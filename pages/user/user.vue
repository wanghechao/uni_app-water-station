<template>
	<view>
		<view class="head">
			<view class="avatar">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="user-name">
				{{user_name}}
			</view>
		</view>
		
		<view class="content">
			<!-- 最底下标签 -->
			<view class="list-lable" v-for="item in user_content_list">
				<view class="left-icon">
					<image :src="item.icon" mode="aspectFill"></image>
				</view>
				<view class="text-area">
					{{item.text}}
				</view>
			</view>
		</view>
		
		<view class="login-out">
			退出登录
		</view>
		
		
	</view>
</template>

<script setup>
	const user_name = "和潮"

	// const user_content_top = [
	// 	{
	// 				icon: "../../static/定位.png",
	// 				text: "我的订单"
	// 	},
	// 	{
	// 				icon: "../../static/定位.png",
	// 				text: "联系客服"
	// 	},
	// ]
	const user_content_list = [
		{
			icon: "../../static/定位.png",
			text: "水卡充值"
		},
		{
			icon: "../../static/定位.png",
			text: "水桶押金"
		},
		{
			icon: "../../static/定位.png",
			text: "送货地址"
		},
		{
			icon:"../../static/对话.png",
			text:"意见反馈"
		},
		{
			icon:"../../static/价值评估.png",
			text:"下载软件"
		}
	]
</script>

<style lang="scss" scoped>
	.head {
		width: 100%;
		height: 450rpx;
		background-color: #42c3ff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.avatar {
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.user-name {
			margin-top: 50rpx;
			font-size: 40rpx;
			color: whitesmoke;
		}
	}
	
	.content {
		margin-left: 15rpx;
		width: 95%;
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 3rpx rgba(0, 0, 0, 0.3);
		
		
		.list-lable {
			display: flex;
			align-items: center;
			height: 70rpx;
			width: 95%;
			margin: 5rpx;
			border-bottom: 1px solid #eee;
			&:last-child {
				border-bottom: 0;
			}
			.left-icon {
				width: 50rpx;
				height: 50rpx;
				margin-right: 30rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

.login-out {
	width: 95%;
	height: 80rpx;
	text-align: center;
	line-height: 80rpx;
	color: white;
	margin: 15rpx;
	background-color: #e83d3d;
	box-shadow: 0 0 5rpx gray;
	margin-top: 120rpx;
}
</style>
