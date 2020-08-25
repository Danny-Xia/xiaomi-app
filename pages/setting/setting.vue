<template>
	<view class="setting">
		<!-- #ifdef H5 -->
		<view class="setting-header">
			<image class="image" src="../../static/icons/xiangzuo.png" mode="" @click="backUser"></image>
		</view>
		<!-- #endif -->
		<view class="exit-login" @click="exitLogin">
			退出登录
		</view>
	</view>
</template>

<script>
	import BackSearch from '../../components/back-search/back-search.vue'
	export default {
		components: {
			BackSearch
		},
		methods: {
			exitLogin () {
				uni.removeStorageSync('userAllreadyLogin');
				this.$store.commit('changeIsLogin', false);
				uni.showToast({
					title: '已退出登录'
				})
			},
			backUser () {
				uni.switchTab({
					url: '../../pages/user/user'
				})
			}
		}
	}
</script>

<style lang="scss">
	.setting {
		width: 100vw;
		height: 100vh;
		background-color: #f4f4f4;
		.setting-header {
			height: 80rpx;
			background-color: #FFA200;
			display: flex;
			align-items: center;
			.image {
				width: 50rpx;
				height: 50rpx;
				margin-left: 20rpx;
			}
		}
		.exit-login {
			background-color: #fff;
			margin-top: 20rpx;
			text-align: center;
			line-height: 100rpx;
			height: 100rpx;
			width: 100%;
			
		}
	}
</style>
