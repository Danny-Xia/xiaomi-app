<template>
	<view class="advert">
		<image class="image" :src="path" mode=""></image>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				list: [
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE',
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/067047e99bc9517e85bbc5d2d854779a.jpg?f=webp&w=1080&h=420&bg=241941',
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/85ea26a99c704861af8e29bf7f249fed.jpg?f=webp&w=1080&h=420&bg=E5E9EA',
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a56394373382e7d98a395b25c709cfcb.jpg?w=1080&h=420&bg=D2D4E9',
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4c4a11536a720ee0f1b516e53e4d868.jpg?f=webp&w=1080&h=420&bg=873FFA'
				]
			}
		},
		props: ['data-path', 'pathIndex'],
		created () {
		},
		computed: {
			path () {
				return this.list[this.pathIndex];
			}
		}
	}
</script>

<style lang="scss">
	.advert {
		width: 100%;
		height: 296rpx;
		margin: 16rpx 0;
		.image {
			width: 100%;
			height: 100%;
		}
	}
</style>
