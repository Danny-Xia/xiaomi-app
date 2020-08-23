<template>
	<view class="search">
		<view class="search-header">
			<view class="icon icon-xiangzuo" @click="backPage"></view>
			<input class="input" type="text" focus placeholder="搜索商品名称" />
			<view class="icon icon-search">
				
			</view>
		</view>
		<view class="title">
			搜索发现
		</view>
		<image class="search-bottom-img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02c48d28f8ee3644d6fbf3ae8706c513.jpg?w=984&h=160&bg=333333" mode=""></image>
		<view class="rec-list">
			<view class="list-item" v-for="item in recList" :key="item.id">
				{{ item.text }}
				<image class="list-item-img" v-if="item.imgSrc !== ''" :src="item.imgSrc" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				recList: [
					{
						id: 'rec-1',
						text: 'Redmi K30 Pro',
						imgSrc: ''
					},
					{
						id: 'rec-2',
						text: '小米816主会场',
						imgSrc: '/static/icons/huodong.png'
					},
					{
						id: 'rec-3',
						text: 'K30 5G券后最高优惠700元',
						imgSrc: ''
					},
					{
						id: 'rec-4',
						text: '黑鲨',
						imgSrc: ''
					},
					{
						id: 'rec-5',
						text: '空调',
						imgSrc: ''
					},
					{
						id: 'rec-6',
						text: '小米10',
						imgSrc: ''
					},
					{
						id: 'rec-7',
						text: '电视',
						imgSrc: '/static/icons/fenlei.png'
					},
					{
						id: 'rec-8',
						text: '家电',
						imgSrc: '/static/icons/fenlei.png'
					},
					{
						id: 'rec-9',
						text: '全部商品',
						imgSrc: ''
					},
					{
						id: 'rec-10',
						text: '米家插线板 快充版 27W',
						imgSrc: ''
					}
				]
			}
		},
		methods: {
			backPage () {
				uni.switchTab({
					url: `../../${this.$store.state.backPage}`
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/css/search/search.scss';
</style>
