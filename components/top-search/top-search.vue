<template>
	<view class="head-top">
		<view class="head-top-address" @click="goSelectAddress">
			<uni-icons type="location" style="color: gray;"></uni-icons>
			<view class="address-text">{{ store_name ? store_name : '选择地址'}}</view>
			<uni-icons type="forward"></uni-icons>
		</view>
		<view class="head-top-search">
			<uni-icons type="search"></uni-icons>
			<text>点击搜索</text>
		</view>
		
		<slot name="deliver_method"></slot>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
	
	const store_name = ref('')
	
	uni.$on('store_name' , (mes) => {
		store_name.value = mes;
	})

	onMounted(() => {
		const saved = uni.getStorageSync('selected_store_name')
		if (saved) store_name.value = saved
	})

	const goSelectAddress = () => {
		uni.navigateTo({ url: '/pages/address-select/address-select' })
	}

</script>

<style lang="scss" scoped>
	.head-top {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		overflow: hidden;
		.head-top-address {
			display: flex;
			align-items: center;
			height: 100%;
			width: 230rpx;
			.address-text {
				flex: 1;
				min-width: 0; // 让 flex 子项可收缩
				margin: 0 8rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		.head-top-search {
			background-color: #cccccc;
			border-radius: 50rpx;
			text-align: center;
			line-height: 60rpx;
			font-size: 25rpx;
			height: 80%;
			color: dimgray;
			width: 300rpx;
			opacity: 0.5;
		}
		
	}
	
</style>