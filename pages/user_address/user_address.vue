<template>
	<view v-for="(item , index) in address_data" :key="index">
		<uni-card @click="use_address(item.user_address)" :title="item.user_name" :isFull="true"
			:sub-title="'电话号码:' + item.user_phone_number">
			<view class="delete_btn">
				<button type="warn" plain size="mini" @click="remove_address(index)">
					删除
				</button>

			</view>
			<text class="uni-body">{{item.user_address}}</text>
		</uni-card>
	</view>

	<uni-popup ref="add_new_address_popup" type="bottom">
		<view class="add_new_address">
			<uni-forms ref="valiForm" :modelValue="formData" :rules="rule">
				<uni-forms-item name="name" label="姓名" required label-align="right">
					<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item name="phone" label="电话号码" required label-width="100" label-align="right">
					<uni-easyinput type="text" v-model="formData.phone" placeholder="请输入电话号码" />
				</uni-forms-item>
				<uni-forms-item name="address" label="收货地址" required label-width="100" label-align="right">
					<textarea type="text" style="border: 1px solid black;width: 100%;" v-model="formData.address"
						placeholder="请输入收货地址" />
				</uni-forms-item>
			</uni-forms>

			<button type="primary" @click="add_new_address">确认提交</button>
		</view>
	</uni-popup>

	<button type="primary" class="add_address" @click="show_popup_address">添加新收货地址</button>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	
	uni.setNavigationBarTitle({
		title:'选择地址'
	})

	const valiForm = ref(null)

	const address_data = ref([{
		user_name: 'hc',
		user_phone_number: '123321',
		user_address: '广东省广州市天河区22号'
	}])

	const formData = ref({
		name: '',
		phone: '',
		address: ''
	})

	// 选中地址信息进行传递
	const use_address = (address) => {
		// uni.setStorageSync('user_address' , address)
		uni.$emit('sent_address' , address)
		uni.navigateBack()

	}
	
	// 删除地址信息
	const remove_address = (item_index) => {
		
		if (item_index >= 0 && item_index < address_data.value.length) {
			// 使用 splice 方法删除对应下标的元素，第二个参数 1 表示删除 1 个元素
			
			address_data.value.splice(item_index, 1);
			
			uni.showToast({
				title: '删除成功'
			})
		} else {
			console.error('无此下标');
		}
	}


	// 添加新地址弹出层
	const add_new_address_popup = ref(null)
	const show_popup_address = () => {
		add_new_address_popup.value.open()
	}

	// 表单校验

	const rule = {
		name: {
			rules: [{
				required: true,
				errorMessage: '姓名不能为空'
			}]
		},
		phone: {
			rules: [{
				required: true,
				errorMessage: '电话号码不能为空'
			}]
		},
		address: {
			rules: [{
				required: true,
				errorMessage: '收货地址不能为空'
			}]
		}
	}


	// 确认表单无误,添加新地址,关闭弹出层
	const add_new_address = () => {
		valiForm.value.validate().then(res => {
			address_data.value.push({
				user_name: formData.value.name,
				user_phone_number: formData.value.phone,
				user_address: formData.value.address
			})
			add_new_address_popup.value.close();
			uni.showToast({
				title: '添加成功'
			});
		}).catch(err => {
			console.log(err);
		})


	}
</script>

<style lang="scss" scoped>
	.add_address {
		margin-left: 70rpx;
		margin-bottom: 30rpx;
		width: 80%;

		bottom: 20rpx;
		position: fixed;
	}

	.add_new_address {
		width: 95%;
		background-color: white;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.delete_btn {
		position: absolute;
		top: 30rpx;
		right: 10rpx;
		border-radius: 10rpx;
		width: 150rpx;
		text-align: center;
		line-height: 100rpx;
	}
</style>