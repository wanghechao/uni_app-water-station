<template>
	<view>
		<view class="order-head-change">
			<text v-for="(item, idx) in top_nav" :key="idx" :class="{'chose_text' : active_tab === item}"
				@tap="handle_tab_click"
				:data-on_change_value="idx"
				>{{item}}
			</text>
		</view>
		<order-list >
		</order-list>
	</view>
</template>

<script setup>
	import {reactive, ref} from 'vue';
	
	
	
	const top_nav = ['全部', '待支付', '待服务', '已完成', '已取消']
	const active_tab = ref('全部')
	const onchange_tab_value = ref(0)
	
	// uni.$on('store_name' , (mes) => {
	// 	new_order_data.store_name = mes;
	// })
	
	
	// // 组件传值
	// const new_order_data = reactive({
	// 	store_name:'农夫水站',
	// 	status:'待付款',
	// 	order_time:'2024-5-4',
	// 	goods_title:'桶装水',
	// 	goods_price:'11',
	// 	goods_count:'1',
	// 	goods_total_price:'11'
	// })

	// 显示选中的tab标签索引
	const handle_tab_click = (e)=> {
		const { on_change_value } = e.currentTarget.dataset;
		active_tab.value = top_nav[on_change_value];
	}
	
	
</script>

<style lang="scss" scoped>
	.chose_text {
		font-weight: 800;
		color: black !important
	}
	.order-head-change {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 20rpx;
		text {
			color: gray;
		}
		
		// 使用伪类实现下划线
						// &::after {
						// 	content: '';
						// 	position: absolute;
						// 	bottom: 10rpx;
						// 	height: 4rpx;
						// 	background-color: #000; /* 下划线颜色 */
						// 	transition: all 0.3s ease; /* 平滑过渡 */
						// 	// 使用CSS变量控制宽度和位置
						// 	width: 100rpx;
						// 	left: var(--left-val)rpx;
						// }
		
	}


</style>