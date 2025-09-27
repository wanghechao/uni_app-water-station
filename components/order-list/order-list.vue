<template>
	<view style="margin-top: 40rpx;" v-for="item in order_data">

		<!-- title属性这里注意驼峰，prop接收的数据不识别斜杠'-' -->
		<uni-card :title="item.status"  :isFull="true" :extra="'下单时间:' + item.order_time">
			<view class="uni-body">
				<text>
					{{item.goods_title}}￥{{item.goods_price}} 
				</text>
				<text>
					x{{item.goods_count}}
				</text>
			</view>
			<view slot="actions" class="card-actions">
				<text>
					共1件商品-实付{{item.goods_total_price}}元
				</text>
				<text>
					查看更多>
				</text>
			</view>
		</uni-card>
	</view>
</template>

<script setup>
	import { defineProps, onMounted, reactive, ref } from 'vue';

			  uni.$on('orderPayParams', (params) => {
				const {title , price , count , total_price} = params;
				
				const new_data = {
					status:'待付款',
					order_time:new Date().toLocaleDateString(),
					goods_title:'桶装水',
					goods_price:'11',
					goods_count:'1',
					goods_total_price:'11'
				}
			    
				new_data.goods_title = title;
				new_data.goods_price = price;
				new_data.goods_count = count;
				new_data.goods_total_price = total_price
				
				order_data.unshift(new_data)
			  })
	
	
	const order_data = reactive([{
		status:'待付款',
		order_time:'2024/5/4',
		goods_title:'桶装水',
		goods_price:'11',
		goods_count:'1',
		goods_total_price:'11'
	}])
	
	
	

</script>

<style lang="scss" scoped>
	.uni-body {
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.card-actions {
		margin-top: 25rpx;
		padding-top: 20rpx;
		border-top: 1px solid gray;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>