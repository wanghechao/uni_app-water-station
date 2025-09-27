<template>
	<view class="head-top">
		<view class="head-top-address">
			<uni-icons type="location" style="color: gray;">{{ store_name ? store_name : '选择地址'}}</uni-icons>
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
import { ref } from 'vue';
	
	const store_name = ref('')
	
	uni.$on('store_name' , (mes) => {
		store_name.value = mes;
	})

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