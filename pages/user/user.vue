<template>
	<view>
		<view class="head" @click="handleUserClick">
			<view class="avatar">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="user-name" >
				{{getDisplayText()}}
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
		
		<view class="login-out" @click="logout" v-if="isLoggedIn()">
			退出登录
		</view>
		
		
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { onShow } from '@dcloudio/uni-app';

// 用户信息
const user_name = ref("") // 初始为空，如果有用户名就显示用户名，没有就显示"请登录"

// 判断是否已登录的函数
const isLoggedIn = () => {
	return user_name.value && user_name.value.trim() !== ''
}

// 获取显示文本的函数
const getDisplayText = () => {
	return isLoggedIn() ? user_name.value : "请登录"
}

// 处理用户点击事件
const handleUserClick = () => {
	if (!isLoggedIn()) {
		// 如果未登录，跳转到登录页面
		uni.navigateTo({
			url: '/pages/login/login' // 根据你的实际登录页面路径调整
		})
	} else {
		// 如果已登录，可以显示用户信息或执行其他操作
		console.log('用户已登录:', user_name.value)
	}
}

// 登录函数（示例）
const login = (username) => {
	user_name.value = username
	// 这里可以添加其他登录后的逻辑，比如保存到本地存储
	uni.setStorageSync('username', username)
}

// 退出登录函数
const logout = () => {
	user_name.value = ''
	// 清除本地存储的用户信息
	uni.removeStorageSync('username')
	uni.showToast({
		title: '已退出登录',
		icon: 'success'
	})
}

// 页面加载时从本地存储读取用户信息
const hydrateFromStorage = () => {
	const savedUsername = uni.getStorageSync('username')
	if (savedUsername) {
		user_name.value = savedUsername
	}
}

onMounted(() => {
	hydrateFromStorage()
})

onShow(() => {
	hydrateFromStorage()
})

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
