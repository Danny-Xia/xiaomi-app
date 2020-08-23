<template>
	<!-- 推荐 -->
	<view class="recommend">
		<m-swiper />
		<cells-auto-fill />
		<!-- 新人礼包 + 专享价 未登录时显示 -->
		<view class="new-people" v-if="!$store.state.isLogin">
			<view class="gift view">
				<image class="image" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7fbbd039f083f7e6d5b394d2d7140a9e.jpg?f=webp" mode=""></image>
			</view>
			<view class="new-people-vip view">
				<image class="image" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d10d0b9b5da4532198bd97dc93e7d19c.jpg?f=webp" mode=""></image>
				<image class="image" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9011e16a38d964b2851141cd2614294b.jpg?f=webp" mode=""></image>
			</view>
		</view>
		<view class="publicity-map">
			<view class="left-col view">
				<image class="image" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?f=webp&w=537&h=762&bg=C1DDE9" mode=""></image>
			</view>
			<view class="right-col view">
				<image class="image" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/827a686678f39b1bbdc99c6e6b6a13c8.jpg?f=webp&w=537&h=378&bg=DAECFA" mode=""></image>
				<image class="image" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/267e988a99b5cf4e960747e8aa5fa831.jpg?f=webp&w=537&h=378&bg=EDFBFC" mode=""></image>
			</view>
		</view>
		<advert path-index="0" />
		<recommend-public title="recommend-phone" title-des="小米手机" show-buy-btn />
		<recommend-public title="recommend-tv" title-des="小米电视" show-border show-buy-btn />
		<advert path-index="1" />
		
		<recommend-public title="recommend-book" title-des="小米笔记本" show-buy-btn />
		<advert path-index="2" />
		<!-- 家电 -->
		<recommend-public title="recommend-hea"title-des="米家家电" show-border />
		<advert path-index="3" />
		<!-- 智能 -->
		<recommend-intelligence />
		<view class="photos">
			<image class="image" :src="item.imgSrc" mode="" v-for="item in photos" :key="item.id" />
		</view>
		<advert path-index="4" />
		<!-- 了解小米 -->
		<view class="understand-xiaomi">
			<image class="image" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bbb5bac8089d890338b5bf8ff742cbbc.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import MSwiper from './swiper.vue';
	import CellsAutoFill from './cells_auto_fill.vue';
	import Advert from './advert.vue'
	import RecommendPublic from './recommend_public.vue';
	import RecommendIntelligence from './recommend_intelligence.vue';
	export default {
		data () {
			return {
				photos: [
					{
						id: 'photos-1',
						imgSrc: '//i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17.webp?w=537&h=720&bg=C0A491'
					},
					{
						id: 'photos-2',
						imgSrc: '//i8.mifile.cn/v1/a1/b79cb907-3ae4-2a35-6756-b243b386a95a.webp?w=537&h=720&bg=E8CFCB'
					},
					{
						id: 'photos-3',
						imgSrc: '//i8.mifile.cn/v1/a1/b883172b-5aa3-7855-678f-c615109ee0a7.webp?w=537&h=720&bg=878F9B'
					},
					{
						id: 'photos-4',
						imgSrc: '//i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8.webp?w=537&h=720&bg=9BB5C4'
					},
					{
						id: 'photos-5',
						imgSrc: '//i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff.webp?w=537&h=720&bg=D9D8C3'
					},
					{
						id: 'photos-6',
						imgSrc: '//i8.mifile.cn/v1/a1/ad91499a-59ab-adc3-8fd5-98aefc1c43b4.webp?w=537&h=720&bg=B5C5BE'
					},
				]
			}
		},
		beforeCreate () {
			this.$store.commit('changeHomeSwiperItem', 'recommend-swiper');
			
		},
		components: {
			MSwiper,
			CellsAutoFill,
			Advert,
			RecommendPublic,
			RecommendIntelligence
		}
	}
</script>
	
<style lang="scss">
	@import '../../static/css/home/recommend.scss';
</style>
