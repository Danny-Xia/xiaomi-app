<template>
	<view class="intelligence">
		<!-- 智能 -->
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
			this.$store.commit('changeHomeSwiperItem', 'intelligence-swiper')
		},
		components: {
			MSwiper
		}
	}
</script>

<style>
</style>
