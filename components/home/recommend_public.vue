<template>
	<view class="recommend-public">
		<view class="fill-photo">
			<image class="image" :src="content.fillPhoto" mode=""></image>
		</view>
		<view class="main">
			<view :class="{'list-item': true, 'left': !sBB}" v-for="item in content.list" :key="item.id">
				<image :src="item.imgSrc" mode="" class="image"></image>
				<view class="text-des">
					<view class="name">
						{{ item.name }}
					</view>
					<view class="des">
						{{ item.des }}
					</view>
					<view class="price">
						<text class="now-price">￥{{ item.nowPrice }}起</text>
						<text class="old-price" v-show="item.oldPrice !== ''">￥{{ item.oldPrice }}</text>
					</view>
					<button class="buy-btn" type="default" size="mini" v-if="sBB">立即购买</button>
				</view>
			</view>

		</view>
		<view :class="{'more': true, 'show-border': sB || false}">
			更多{{ titleDes }}产品 >
		</view>
	</view>
</template>

<script>
	const recommendPhone = require('../../static/data/recommend-phone.js');
	const recommendTv = require('../../static/data/recommend-tv.js');
	const recommendBook = require('../../static/data/recommend-book.js');
	const recommendHea = require('../../static/data/recommend-hea.js');
	export default {
		data() {
			return {
				content: {
					fillPhoto: '',
					list: [{
						id: '',
						name: '',
						des: '',
						nowPrice: 0,
						oldPrice: 0
					}]
				}
			}
		},
		props: ['title', 'title-des', 'show-border', 'show-buy-btn'],
		created() {

			if (this.t === 'recommend-phone') {
				this.content = recommendPhone.content;
			} else if (this.t === 'recommend-tv') {
				this.content = recommendTv.content;
			} else if (this.t === 'recommend-book') {
				this.content = recommendBook.content;
			} else if (this.t === 'recommend-hea') {
				this.content = recommendHea.content;
			}
		},
		computed: {
			t() {
				return this.title;
			},
			tD() {
				return this.titleDes;
			},
			sB() {
				return this.showBoder;
			},
			sBB() {
				return this.showBuyBtn
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/css/home/recommend-public.scss';
</style>
