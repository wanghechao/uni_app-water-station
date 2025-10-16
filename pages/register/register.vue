<template>
	<view class="container">
		<view class="logo">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		<view class="title">账号注册</view>
		<view class="form">
			<input class="input" v-model="username" placeholder="请输入用户名" placeholder-class="ph" />
			<input class="input" v-model="password" password placeholder="请输入密码" placeholder-class="ph" />
			<input class="input" v-model="confirmPassword" password placeholder="请再次输入密码" placeholder-class="ph" />
			<button class="btn primary" @click="onRegisterClick">注册</button>
			<button class="btn ghost" @click="goLogin">已有账号？去登录</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')

const onRegisterClick = () => {
	if (!username.value.trim()) {
		uni.showToast({ title: '请输入用户名', icon: 'none' })
		return
	}
	if (!password.value) {
		uni.showToast({ title: '请输入密码', icon: 'none' })
		return
	}
	if (password.value.length < 6) {
		uni.showToast({ title: '密码至少6位', icon: 'none' })
		return
	}
	if (password.value !== confirmPassword.value) {
		uni.showToast({ title: '两次密码不一致', icon: 'none' })
		return
	}

    // Demo: 本地存储注册信息（用户名+密码），并返回登录页
    uni.setStorageSync('registered_username', username.value)
    uni.setStorageSync('registered_password', password.value)
	uni.showToast({ title: '注册成功', icon: 'success' })
	setTimeout(() => {
		uni.navigateBack({ delta: 1 })
	}, 600)
}

const goLogin = () => {
	uni.navigateBack({ delta: 1 })
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


