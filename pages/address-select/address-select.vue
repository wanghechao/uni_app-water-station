<template>
	<view class="container">
		<view class="map-wrap">
			<map
				:latitude="center.lat"
				:longitude="center.lng"
				:markers="markers"
				style="width: 100%; height: 100%;"
				@markertap="onMarkerTap"
			></map>
		</view>
		<view class="list-wrap">
			<scroll-view scroll-y style="height: 100%;">
				<view class="store-item" v-for="store in stores" :key="store.id" @click="selectStore(store)">
					<view class="store-left">
						<view class="store-name">{{ store.name }}</view>
						<view class="store-meta">{{ store.distance }} · {{ store.address }}</view>
					</view>
					<view class="store-right">{{ store.status }}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const center = ref({ lat: 23.12908, lng: 113.26436 }) // 广州天河坐标示例

const stores = ref([
	{ id: 1, name: '天河智慧门店', distance: '300m', address: '天河北路 123 号', status: '营业中', lat: 23.1301, lng: 113.2649 },
	{ id: 2, name: '珠江新城门店旗舰店', distance: '820m', address: '花城大道 88 号', status: '繁忙', lat: 23.1258, lng: 113.3217 },
	{ id: 3, name: '体育中心自提点', distance: '1.1km', address: '体育西横街 56 号', status: '营业中', lat: 23.1365, lng: 113.3281 },
	{ id: 4, name: '员村社区服务站', distance: '2.3km', address: '员村四横路 7 号', status: '休息中', lat: 23.1197, lng: 113.3751 }
])

const markers = ref([])

onMounted(() => {
	markers.value = stores.value.map(s => ({
		id: s.id,
		latitude: s.lat,
		longitude: s.lng,
		callout: {
			display: 'ALWAYS', 
			content: s.name,
			padding: 4,
			borderRadius: 6
		}
	}))
})

const onMarkerTap = (e) => {
	const id = e.detail.markerId
	const store = stores.value.find(s => s.id === id)
	if (store) selectStore(store)
}

const selectStore = (store) => {
	// 回传门店名称并返回
	uni.$emit('store_name', store.name)
    uni.setStorageSync('selected_store_name', store.name)
	uni.showToast({ title: '已选择：' + store.name, icon: 'success' })
	setTimeout(() => {
		uni.navigateBack({ delta: 1 })
	}, 400)
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #f7f8fa;
}

.map-wrap {
	width: 100%;
	height: 50vh;
	background: #e9eef4;
}

.list-wrap {
	flex: 1;
	background: #fff;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	box-shadow: 0 -6rpx 16rpx rgba(0,0,0,0.04);
	padding: 16rpx 20rpx 8rpx;
}

.store-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20rpx 12rpx;
	border-bottom: 1px solid #f0f0f0;
}
.store-left {
	flex: 1;
	min-width: 0;
}
.store-name {
	font-size: 32rpx;
	font-weight: 600;
	color: #222;
	margin-bottom: 6rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.store-meta {
	font-size: 24rpx;
	color: #888;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.store-right {
	margin-left: 12rpx;
	font-size: 24rpx;
	color: #42c3ff;
}
</style>


