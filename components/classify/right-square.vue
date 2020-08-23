<template>
	<view class="right-square">
		
		<!-- #ifdef H5 || APP-PLUS -->
		<image class="fill-photo"
		v-if="source.fillSrc"
		:src="source.fillSrc" mode=""
		:style="`width: ${source.fillPhotoWidth}rpx;height: ${source.fillPhotoHeight}rpx`"
		></image>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<image class="fill-photo"
		v-if="source.fillSrc"
		:src="source.fillSrc" mode=""
		></image>
		<!-- #endif -->
		
		<view class="title">
			<text class="text">{{ source.title }}</text>
		</view>
		<view class="content">
			<view class="content-item" v-for="item in source.list" :key="item.id">
				<image class="image" :src="item.imgSrc" mode=""></image>
				<view class="name">
					{{ item.name }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['source'],
		created () {
			// console.log(this.source)
		}
	}
</script>

<style lang="scss">
	.right-square {
		// border: 1px solid red;
		// margin-bottom: 20rpx;
		.fill-photo {
			margin: 0 auto 70rpx;
			display: block;
			/* #ifdef MP-WEIXIN */
			height: 212rpx;
			width: 516rpx;
			/* #endif */
		}
		.title {
			text-align: center;
			margin-bottom: 70rpx;
			.text {
				margin: 0 20rpx;
			} 
			&::before {
				content: '';
				height: 2rpx;
				width: 40rpx;
				background-color: #ddd;
				display: inline-block;
				vertical-align: middle;
			}
			&::after {
				content: '';
				height: 2rpx;
				width: 40rpx;
				background-color: #ddd;
				display: inline-block;
				vertical-align: middle;
			}
		}
		.content {
			display: flex;
			flex-wrap: wrap;
			padding: 0 30rpx;
			box-sizing: border-box;
			.content-item {
				text-align: center;
				width: 33.333%;
				margin-bottom: 54rpx;
				.image {
					width: 100rpx;
					height: 110rpx;
				}
				.name {
					color: rgba(0,0,0,.54);
					font-size: 26rpx;
				}
			}
		}
	}
</style>
