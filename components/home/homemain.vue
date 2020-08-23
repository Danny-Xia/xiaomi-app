<template>
	<view class="homemain">
		<swiper duration="300" 
		:current="current"
		class="homemain-swiper"
		@change="handleTurn($event)"
		>
			<swiper-item class="homemain-swiper-item">
				<recommend />
			</swiper-item>
			<swiper-item class="homemain-swiper-item">
				<phone />
			</swiper-item>
			<swiper-item class="homemain-swiper-item">
				<intelligence />
			</swiper-item>
			<swiper-item class="homemain-swiper-item">
				<tv />
			</swiper-item>
			<swiper-item class="homemain-swiper-item">
				<note-book />
			</swiper-item>
			<swiper-item>
				<hea />
			</swiper-item>
			<swiper-item class="homemain-swiper-item">
				<lefe />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	// 推荐
	import Recommend from './recommend.vue';
	// 手机
	import Phone from './phone.vue';
	// 智能
	import Intelligence from './intelligence.vue';
	// 电视
	import Tv from './tv.vue';
	// 笔记本
	import NoteBook from './notebook.vue';
	// 家电
	import Hea from './hea.vue';
	// 生活
	import Lefe from './lefe.vue';
	export default {
		data() {
			return {
				
			};
		},
		components: {
			Intelligence,
			Phone,
			Recommend,
			Tv,
			NoteBook,
			Hea,
			Lefe
		},
		methods: {
			handleTurn (e) {
				const index = e.detail.current;
				this.$store.commit('changeHomeCurItem', index);
				this.$store.commit('changeCurItem', {index})
			}
		},
		computed: {
			current () {
				return this.$store.state.homeCurItem;
			}
		}
	}
</script>

<style lang="scss">
@import '../../static/css/home/homemain.scss';
</style>
