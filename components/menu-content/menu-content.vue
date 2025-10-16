<template>
	<view class="menu">
		<view class="top-advertise">
			<swiper class="advertise_icon" vertical circular :autoplay="true" interval="3000">
				<swiper-item v-for="(item,index) in advertise_data" :key="index">
					<uni-icons type="sound" size="14" color="rgb(102 64 215)">{{item}}</uni-icons>
				</swiper-item>
			</swiper>
			<uni-icons type="down" style="margin-right:10rpx;"></uni-icons>
		</view>

		<view class="menu-body">
			<!-- 左菜单栏 -->
			<view class="left-menu">
				<view class="menu-title" v-for="(item , index) in left_menu_title" @tap="left_menu_el_click(index)">
					<view :class="{'on-chose-text' : left_active_title == item}">
						{{item}}
					</view>
					
				</view>
			</view>

			<!-- 右菜单栏 -->
			<scroll-view :scroll-into-view="scroll_into_id" scroll-y scroll-with-animation :show-scrollbar="false" class="right-menu">
				<!-- 商品菜单，根据左侧菜单数量来调整 -->
				<view class="menu-content" v-for="(item, idx) in right_menu_data" :id="'section-' + idx">
					<uni-card spacing="0" padding="0" :isFull="true" style="border-radius: 20rpx;" >
						<!-- 商品菜单主标题 -->
						<template #title>
							<view style="margin-left: 40rpx;margin-top:20rpx; font-size: 25rpx; font-weight: 600;">{{item.title}}
							</view>
							<view style="margin: 5rpx 0rpx 30rpx 40rpx; font-size: 20rpx; color: gray;">{{item.small_title}}
							</view>
						</template>

						<!-- 商品列表 -->
						<view class="water-goods" v-for="goods in item.all_goods_data" @click="show_goods_popup(goods)">
							<view class="left-img">
								<image mode="aspectFill" :src="goods.goods_img"></image>
							</view>

							<view class="water-content">
								<view class="content-top">
									<text style="font-size: 30rpx; font-weight: 500;">{{goods.goods_title}}</text>
									<text style="font-size: 25rpx; font-weight: 500; color: gray;">{{goods.goods_small_title}}</text>
								</view>

								<view class="content-bottom">
									<text>￥{{goods.price}}</text>
								</view>

							</view>

							<view class="water-add-buy">
								<uni-icons type="plusempty" color="white"></uni-icons>

							</view>
						</view>
					</uni-card>
				</view>

			</scroll-view>
		</view>

	</view>
	
	<!-- 弹出层 -->
	<menu-popup ref="child_open" :show_popup_mes="show_popup_data"></menu-popup>
	
</template>

<script setup>
import { onMounted, reactive, ref , watch} from 'vue';
	const advertise_data = ['一次性消费30以上，送小型饮水机一台', '空桶回收，爱护环境', '配送电话：123321123，可预约送达时间']
	const left_menu_title = ['今日特价', '山泉水专区', '怡宝专区']
	const left_active_title = ref('今日特价')
	
const scroll_into_id = ref('section-0')
	
	// 监听地址变化
	// const {address_mes} = defineProps(['address_mes'])


	
	// 点击右侧菜单卡片,弹出查看商品详细页
	const show_popup_data = reactive({
		img_src:'src',
		title:'title',
		price:11
	})

	
	//获取子组件dom
	const child_open = ref(null);
	// 掉用子组件弹出层功能，
	const show_goods_popup = (goods_data) => {
		const {goods_img , goods_title , price} = goods_data;
		show_popup_data.img_src = goods_img;
		show_popup_data.title =goods_title;
		show_popup_data.price = price;
		// 配送地址,又父组件传值
		// show_popup_data.address = address_mes;
		
		child_open.value.popup_mes_fn()
	}
	
	
	
	
// 左边菜单栏点击,右侧菜单栏跳转
const left_menu_el_click = (index) => {
    left_active_title.value = left_menu_title[index];
    scroll_into_id.value = 'section-' + index
}
	
	
	
	const right_menu_data = [
		{
			title: "今日特价",
			small_title: "疯狂星期四，购水9折起",
			all_goods_data: [
				{
				goods_img:'../../static/水店3.jpg',
				goods_title:'怡宝桶装水',
				goods_small_title: '老牌推荐',
				price:'12'
			},
			{
				goods_img:'../../static/水店2.jpeg',
				goods_title:'桶装水',
				goods_small_title: '推荐',
				price:'11'
			},
			]
		},
		{
			title: "山泉水专区",
			small_title: "纯净山泉，补充人体所需矿物质",
			all_goods_data: [
				{
				goods_img:'../../static/水店3.jpg',
				goods_title:'百岁山桶装水',
				goods_small_title: '老牌推荐',
				price:'22'
			},
			{
				goods_img:'../../static/水店.jpg',
				goods_title:'飘宝桶装水',
				goods_small_title: '推荐购买',
				price:'15'
			},
			{
				goods_img:'../../static/水店2.jpeg',
				goods_title:'力的桶装水',
				goods_small_title: '好物推荐',
				price:'14'
			},
			]
		},
		{
			title: "怡宝专区",
			small_title: "老品牌，好品质",
			all_goods_data: [
				{
				goods_img:'../../static/水店3.jpg',
				goods_title:'怡宝桶装水',
				goods_small_title: '老牌推荐',
				price:'12'
			}
			]
		}
		
	]
</script>

<style lang="scss" scoped>
	.menu {
		background-color: #f0f0f0;

		.top-advertise {
			height: 50rpx;
			width: 100%;
			background-color: #cbcfff;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.advertise_icon {
				width: 100%;
				height: 100%;
			}
		}

		.menu-body {
			display: flex;
			justify-content: space-between;
			margin-top: 20rpx;

			.left-menu {
				// border: 1px solid black;
				width: 150rpx;
				height: 1000rpx;

				.menu-title {
					width: 100%;
					height: 70rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 23rpx;
					font-weight: 500;
					.on-chose-text {
						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: #e1e1e1;
					}
					
				}
			}

			.right-menu {
				width: 74%;
				height: 1000rpx;
				margin-right: 20rpx;
				border-radius: 20rpx;
				background-color: white;

				.water-goods {
					widows: 100%;
					height: 200rpx;
					padding: 0;
					display: flex;
					justify-content: space-between;

					.left-img {
						flex: 0.8;
						height: 140rpx;
						margin: 20rpx 20rpx 0 10rpx;

						image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}

					.water-content {
						flex: 2;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin: 20rpx 0rpx 20rpx 0rpx;

						.content-top {
							display: flex;
							flex-direction: column;
							color: black;
						}

						.content-bottom {
							color: black;
							font-size: 30rpx;
							font-weight: 600;
							color: #684adf;
						}
					}

					.water-add-buy {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-top: 120rpx;
						background-color: #684adf;
					}
				}
			}
		}


	}
</style>