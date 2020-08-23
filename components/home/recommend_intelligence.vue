<template>
	<view class="recommend-intelligence">
		<view class="fill">
			<image class="image" :src="content.fillPhoto" mode=""></image>
		</view>
		<view class="main">
			<view class="list-item" v-for="(item, index) in content.list" :key="item.id">
				<view class="img-box" :style="{'order': (index + 1) % 2 === 0 ?  2 : 1}">
					<image class="image" :src="item.imgSrc" mode=""></image>
				</view>
				<view class="text-des" :style="{'order': (index + 1) % 2 === 0 ?  1 : 2}">
					<view class="name">
						{{item.name}}
					</view>
					<view class="des">
						{{item.des}}
					</view>
					<view class="price">
						<text class="now-price">￥{{ item.nowPrice }}</text>
						<text class="old-price" v-if="item.oldPrice !== ''">￥{{ item.oldPrice }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="more">
			风多米家智能产品 >
		</view>
	</view>
</template>

<script>
	const recommendIntelligence = require('../../static/data/recommend-intelligence.js');
	export default {
		data () {
			return {
				content: {}
			}
		},
		created () {
			this.content = recommendIntelligence.content;
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/css/home/recommend-intelligence.scss';
</style>
