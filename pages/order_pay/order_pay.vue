<template>
	<view class="order_detail">

		<view class="address">
			<uni-section title="收货地址" type="line">
				<text style="padding-left: 20rpx;">{{order_data.address}}</text>
			</uni-section>

		</view>

		<view class="body">
			<uni-section title="商品信息" type="line">
			</uni-section>
			
			<view class="goods_content">
				<view class="left">
					<image :src='order_data.img' style="width:180rpx; height: 180rpx;"></image>
					<view style="display: flex; flex-direction: column; margin-left: 30rpx; margin-top: 20rpx;">
						<text>{{order_data.title}}</text>
						<text style="font-size: 25rpx;">￥{{order_data.price}}</text>
					</view>

				</view>

				<text>x{{order_data.count}}</text>
			</view>
		</view>

		<view class="pay_method">
			<uni-section title="支付方式" type="line"></uni-section>
			<view class="chose_pay_method">
				<uni-data-checkbox mode='list' icon="right" v-model="radio" :localdata="pay"></uni-data-checkbox>
			</view>
		</view>
	</view>

	<view class="popup-card-body-bottom">
		<view class="content-form">
			<text>价格：{{total_price}}￥</text>
			<view class="go_buy" @click="go_buy">
				去支付
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		getCurrentInstance,
		onMounted,
		reactive,
		ref
	} from 'vue';
	
	
	// 获取数据,然后进行展示
	const order_data = reactive({
		address:'',
		count:'',
		img:'',
		price:'',
		title:'',
		store_name:''
	})
	
    onMounted(() => {
      const instance = getCurrentInstance().proxy
      const eventChannel = instance.getOpenerEventChannel();
	// 从menu-popup页面接收参数
      eventChannel.on('acceptData', function(data) {
		  const {address , count ,img ,  price , title } = data
        order_data.address = address
		order_data.count = count
		order_data.img = img
		order_data.price = price
		order_data.title = title
      })
    })
	const total_price = computed(() => order_data.price * order_data.count)
	// 获取数据,然后进行展示
	
	const go_buy = () => {
		
		uni.$emit('orderPayParams', {
			title:order_data.title,
			price:order_data.price,
			count:order_data.count,
			total_price: total_price.value
		})
		uni.switchTab({
			url:'/pages/order/order',
		})
		
		
	}
	
	const radio = ref(0)
	const pay = [{
	
			text: '微信支付',
			value: 0
		},
		{
			text: '线下支付',
			value: 1
		}
	]
</script>

<style lang="scss" scoped>
	.order_detail {
		width: 100%;
		height: 1150rpx;
		display: flex;
		flex-direction: column;
		background-color: #f0f0f0;

		.address {
			width: 100%;
			height: 180rpx;
			display: flex;
			flex-direction: column;
			background-color: white;
			margin-bottom: 20rpx;

			text {
				margin-left: 20rpx;
			}
		}


		.body {
			.goods_content {
				padding: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: white;
				margin-bottom: 20rpx;

				.left {
					display: flex;
				}
			}
		}

		.chose_pay_method {
			width: 100%;
			background-color: white;
			padding: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	.popup-card-body-bottom {
		position: absolute;
		background-color: #f0f0f0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100rpx;

		.content-form {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 95%;

			.go_buy {
				line-height: 100rpx;
				text-align: center;
				background-color: #442cbc;
				color: white;
				width: 200rpx;
				height: 100%;
			}
		}
	}
</style>