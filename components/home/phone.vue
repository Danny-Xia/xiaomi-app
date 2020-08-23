<template>
	<view class="phone">
		<!-- 手机 -->
		<m-swiper />
		
	</view>
</template>

<script>
	import MSwiper from './swiper.vue';
	export default {
		data () {
			return {
				
			}
		},
		created () {
			this.$store.commit('changeHomeSwiperItem', 'phone-swiper');
		},
		components: {
			MSwiper
		}
	}
</script>

<style>
</style>
