<template>
	<view class="back-search">
		<image 
		class="image" src="../../static/icons/xiangzuo.png" mode="" 
		@click="pageTo('back')"></image>
		<text>购物车</text>
		<image class="image icon-search" 
		src="../../static/icons/search.png" mode="" 
		@click="pageTo('search')" ></image>
	</view>
</template>

<script>
	export default {
		methods: {
			pageTo(name) {
				if(name === 'back') {
					uni.switchTab({
						url: `../../${this.$store.state.backPage}`,
						fail: (err) => {
							console.log(err)
						}
					})
				} else if (name === 'search') {
					uni.navigateTo({
						url: '../../pages/search/search'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.back-search {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #666;
		background-color: #f2f2f2;
		font-size: 30rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		animation: change 0.2s linear;
		@keyframes change {
			0% {
				transform: translateY(-100rpx);
			}
			100% {
				transform: translateY(-0rpx);
			}
		}
		.image {
			width: 50rpx;
			height: 50rpx;
			&.icon-search {
				width: 70rpx;
				height: 70rpx;
			}
		}
	}
</style>
