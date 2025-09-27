<template>
	<view class="menu">
		<view class="top">
			<view class="top-content">
				<top-search>
					<template #deliver_method>
						<view class="deliver_chose_button" @click="chose_btn">
							<text data-method="0" :class="{'on-chose-method' : active_method_btn == 0}">自提</text>
							<text data-method="1" :class="{'on-chose-method' : active_method_btn == 1}">外送</text>
						</view>
					</template>
				</top-search>
			</view>
		</view>

		<view class="body" >
			<menu-content v-if='has_store'></menu-content>
			<view class="no-address" v-else>
				<text style="margin-bottom: 30rpx;">没有选择店铺</text>
				<button type="primary" size="mini" @click="go_find_store">去寻找店铺</button>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		onShow
	} from '@dcloudio/uni-app';
	import {
		provide,
		ref
	} from 'vue';
	
	const has_store = ref(false) 
	uni.$on('store_name' , (mes) => {
		has_store.value = true
	})
	
	
	const show_popup_mes = ref('')
	
	// 如果没选择店铺那就去寻找店铺
	const go_find_store = () => {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
	

	// 从首页进来时,查看是选择自提还是外送方式
	onShow(() => {

		const method_vlaue = uni.getStorageSync('deliver_method')
		active_method_btn.value = method_vlaue;
		
		// if(uni.getStorageSync('user_address')) {
		// 	user_address.value = uni.getStorageSync('user_address');
		// }
	})

	// 选择配送方式,切换样式
	const active_method_btn = ref(0)
	const chose_btn = (e) => {
		const {
			method
		} = e.target.dataset;
		active_method_btn.value = method;

		uni.setStorageSync('deliver_method', active_method_btn.value)
	}
	


</script>

<style lang="scss" scoped>
	.top {
		width: 100%;
		height: 80rpx;
		background-color: #f0f0f0;
		padding: 5rpx;

		.top-content {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;

			.deliver_chose_button {
				height: 50rpx;
				width: 200rpx;
				margin-left: 30rpx;
				margin-right: 20rpx;
				border: 1px solid lightskyblue;
				border-radius: 50rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				font-size: 25rpx;

				text {
					width: 50%;
					text-align: center;
				}

				.on-chose-method {
					width: 50%;
					height: 100%;
					border-radius: 50rpx;
					background-color: skyblue;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: 0.3s linear;
				}
			}
		}
	}

.no-address {
	height: 1100rpx;
	width: 100%;
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>