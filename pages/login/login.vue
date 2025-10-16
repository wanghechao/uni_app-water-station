<template>
	<view class="container">
		<view class="logo">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		<view class="title">账号登录</view>
		<view class="form">
			<input class="input" v-model="username" placeholder="请输入用户名" placeholder-class="ph" />
			<input class="input" v-model="password" password placeholder="请输入密码" placeholder-class="ph" />
			<button class="btn primary" @click="onLoginClick">登录</button>
			<button class="btn ghost" @click="goRegister">去注册</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'

const username = ref('')
const password = ref('')

const onLoginClick = () => {
	if (!username.value.trim()) {
		uni.showToast({ title: '请输入用户名', icon: 'none' })
		return
	}
	if (!password.value) {
		uni.showToast({ title: '请输入密码', icon: 'none' })
		return
	}

	const registeredUsername = uni.getStorageSync('registered_username')
	const registeredPassword = uni.getStorageSync('registered_password')

	if (!registeredUsername) {
		uni.showToast({ title: '请先注册账号', icon: 'none' })
		return
	}
	if (username.value !== registeredUsername || password.value !== registeredPassword) {
		uni.showToast({ title: '用户名或密码错误', icon: 'none' })
		return
	}

	// 登录成功：保存用户名并返回上一页/跳转个人中心
	uni.setStorageSync('username', username.value)
	uni.showToast({ title: '登录成功', icon: 'success' })
	setTimeout(() => {
		// 如果是从用户页来的，navigateBack即可
		uni.navigateBack({ delta: 1 })
	}, 500)
}

// 回填注册过的用户名
onShow(() => {
	const prefill = uni.getStorageSync('registered_username')
	if (prefill && !username.value) {
		username.value = prefill
	}
})

const goRegister = () => {
	uni.navigateTo({ url: '/pages/register/register' })
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100vh;
	background-color: #f7f8fa;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 120rpx;
}

.logo {
	width: 180rpx;
	height: 180rpx;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.06);
	image {
		width: 100%;
		height: 100%;
	}
}

.title {
	margin-top: 40rpx;
	font-size: 40rpx;
	color: #222;
}

.form {
	margin-top: 60rpx;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.input {
	width: 100%;
	height: 88rpx;
	border-radius: 12rpx;
	background: #fff;
	box-shadow: 0 0 6rpx rgba(0, 0, 0, 0.06);
	padding: 0 28rpx;
	margin-bottom: 28rpx;
}

.ph {
	color: #b5b5b5;
}

.btn {
	width: 100%;
	height: 88rpx;
	border-radius: 12rpx;
	margin-top: 12rpx;
	font-size: 32rpx;
}

.primary {
	background-color: #42c3ff;
	color: #fff;
}

.ghost {
	background-color: transparent;
	color: #42c3ff;
	border: 2rpx solid #42c3ff;
}
</style>


