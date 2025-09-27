<template>

	<uni-popup ref="goods_info_pop" type="bottom">
		<view class="popup_content" v-for="item in popup_data">
			<!-- 弹出层图片 -->
			<image :src="item.goods_img" style="width: 100%; height: 500rpx;" mode="aspectFill"></image>
			<!-- 弹出层内容 -->
			<view class="card-body">
				<!-- 弹出层商品标题 -->
				<view class="popup-card-body-title">
					<text style="font-size: 35rpx;">{{item.goods_title}}</text>
					<text style="font-size: 25rpx; color: gray;">{{item.goods_small_title}}</text>
				</view>

				<!-- 配送的详细信息配置 -->
				<view class="popup-card-body-content">
					<view class="content-form">
						<text>配送方式</text>
						<view>
							<picker @change="bindPickerChange" :value="popup_deliver_index"
								:range="popup_deliver_array">
								<text>{{ popup_deliver_array[popup_deliver_index] }}</text>
								<uni-icons type="right"></uni-icons>
							</picker>
						</view>
					</view>
					<view class="content-form">
						<text>配送时间</text>
						<view>
							<picker mode="date" @change="bindPickerTime" :value="deliver_time" :start="today">
								<text>{{ deliver_time }}</text>
								<uni-icons type="right"></uni-icons>
							</picker>
						</view>
					</view>

					<view class="content-form">
						<text>配送地址</text>
						<navigator url="/pages/user_address/user_address">
							<view>
								<text>{{deliver_address ? deliver_address : '选择地址'}}</text>
								<uni-icons type="right"></uni-icons>
							</view>
						</navigator>

					</view>

					<view class="content-form">
						<text>联系电话</text>
						<view>
							<textarea v-model="phone_ref" style="text-align: right; width: 500rpx;"
								placeholder="请填写你的联系电话" maxlength="11" auto-height="true"></textarea>
						</view>
					</view>

					<view class="content-form">
						<text>购买数量</text>
						<view>
							<uni-number-box :min="1" :max="9" v-model="buy_water_number" />
						</view>
					</view>


				</view>

				<view class="popup-card-body-bottom">
					<view class="content-form">
						<text>价格：{{total_water_price}}￥</text>
						<view class="go_buy" @click="create_order">
							确认下单
						</view>
					</view>
				</view>
			</view>
		</view>
	</uni-popup>

</template>

<script setup>
	import {
		computed,
		nextTick,
		ref,
		watch
	} from 'vue';



	// 从父组件获取值，然后进行弹出层展示
	const {
		show_popup_mes
	} = defineProps(['show_popup_mes']);

	const goods_info_pop = ref(null)


	// 弹出层配置代码
	const popup_data = [{
			goods_img: '../../static/水店.jpg',
			goods_title: '怡宝桶装水',
			goods_small_title: '容量1L，环保pc材质'
		}

	]

	// 获得选择配送地址后的数据
	const deliver_address = ref('')
	uni.$on('sent_address', (data) => {
		deliver_address.value = data;
	})


	// 父组件传值,子组件获取并展示
	const popup_mes_fn = () => {
		// console.log("功能正常");
		goods_info_pop.value.open();
		const {
			img_src,
			title,
			price
		} = show_popup_mes;

		popup_data[0].goods_img = img_src;
		popup_data[0].goods_title = title;
		buy_water_price.value = price;
	}
	defineExpose({
		popup_mes_fn
	})
	// 暴露功能给父组件调用,弹出窗口

	// 计算数量与价格,得出总价格
	const buy_water_price = ref(11)
	const buy_water_number = ref(1)
	const total_water_price = computed(() => buy_water_price.value * buy_water_number.value)

	// 配送方式代码
	const popup_deliver_index = ref(0)
	const popup_deliver_array = ['外送', '自提']

	// 配送时间
	const time = new Date()
	const get_now_time = () => {
		return time.getFullYear() + '-' + `${ time.getMonth()+1}` + '-' + time.getDate()
	}
	const today = get_now_time();
	const deliver_time = ref(get_now_time())
	const bindPickerChange = (e) => {
		popup_deliver_index.value = e.detail.value;
	}
	const bindPickerTime = (e) => {
		deliver_time.value = e.detail.value;
	}
	// 配送时间代码以上

	// 确认下单
	const phone_ref = ref('')
	const create_order = () => {
		// 如果配送地址与联系电话都没问题则创建订单
		if (deliver_address.value && phone_ref.value.length > 10) {

			// 创建订单信息
			// uni.$emit('order_mes' , {
			// 	address:deliver_address.value,
			// 	img:popup_data[0].goods_img,
			// 	title:popup_data[0].goods_title,
			// 	price:buy_water_price.value,
			// 	count:popup_deliver_index.value
			// })

			uni.navigateTo({
				url: '/pages/order_pay/order_pay',
				events: {
					// 调用被跳转的页面的函数（没啥用）
					// acceptData(res) {
					// 	console.log(res);
					// }
				},
				success(res) {
					// 成功跳转就在被跳转的页面加个函数，给跳转的页面传递数据
					res.eventChannel.emit('acceptData', {
						address: deliver_address.value,
						img: popup_data[0].goods_img,
						title: popup_data[0].goods_title,
						price: buy_water_price.value,
						count: buy_water_number.value,
						
					})
				}
			})

			return;
		}

		uni.showToast({
			title: '配送地址或电话有误',
			icon: 'error'
		})
	}
</script>

<style lang="scss" scoped>
	.popup_content {
		width: 100%;
		height: 1000rpx;
		display: flex;
		flex-direction: column;

		.card-body {
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			background-color: white;

			.popup-card-body-title {
				display: flex;
				flex-direction: column;
				width: 100%;
			}

			.popup-card-body-content {
				display: flex;
				flex-direction: column;
				width: 100%;

				.content-form {
					margin-top: 20rpx;
					padding-bottom: 10rpx;
					border-bottom: 1px solid gray;
					display: flex;
					justify-content: space-between;
					width: 95%;

					.go_buy {}

				}

			}

			.popup-card-body-bottom {
				position: absolute;
				background-color: #f0f0f0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 95%;
				height: 100rpx;
				bottom: 10%;

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
		}
	}
</style>