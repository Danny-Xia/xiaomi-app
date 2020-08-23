<template>
	<swiper 
	:indicator-dots="true" 
	:autoplay="true" 
	:interval="3000" 
	:duration="500" 
	class="swiper">
		
			<swiper-item
			v-for="item in dataList" 
			:key="item.id" class="swiper-item">
			<image :src="item.imgSrc" class="image"></image>
			</swiper-item>
		
	</swiper>
</template>

<script>
	const recommendSwiper = require('../../static/data/recommend-swiper.js');
	const intelligenceSwiper = require('../../static/data/intelligence-swiper.js');
	const phoneSwiper = require('../../static/data/phone-swiper.js');
export default {
	data() {
		return {
			dataList: []
		};
	},
	created () {
		const name = this.$store.state.homeSwiperItem;
		if(name === 'recommend-swiper') {
			this.dataList = recommendSwiper.list;
		} else if (name === 'intelligence-swiper'){
			this.dataList = intelligenceSwiper.list;
		} else if (name === 'phone-swiper') {
			this.dataList = phoneSwiper.list;
		}
	}
};
</script>

<style lang="scss">
@import '../../static/css/home/swiper.scss';
</style>
