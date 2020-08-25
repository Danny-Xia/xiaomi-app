<template>
	<view class="classify">
		<back-search />
		<view class="main">
			<scroll-view class="left-nav" scroll-y>
				<view class="item" 
				:class="{'active': index === curNav}" 
				v-for="(item, index) in navList" 
				:key="index"
				@click="scrollTo(index)">
					{{ item }}
				</view>
			</scroll-view>
			<scroll-view class="right-content" scroll-y="true" 
			:scroll-top="scrollTop"
			@scroll="handleScroll($event)">
				<view class="xiaomi-phone" id="content0">
					<right-square v-for="item in xiaomiPhoneSquare" :key="item.id" :source="item" />
				</view>
				<view class="redmi-phone" id="content1">
					<right-square v-for="item in redmiPhoneSquare" :key="item.id" :source="item" />
				</view>
				<view class="no-data">
					别拖了，已经光光了呢~~
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import BackSearch from '../../components/back-search/back-search.vue'
	import rightSquare from '../../components/classify/right-square.vue'
	const list = require('../../static/data/classify.js');
	export default {
		data () {
			return {
				curNav: 0,
				navList: ['小米手机', 'Redmi手机', '黑鲨手机', '5G合约', '小米众筹', '电视', '大家电', '电脑办公', '小爱智能', '路由器', '生活电器', '厨房电器', '智能穿戴', '智能家居', '车载出行', '个护健康', '数码配件', '日用百货', '有品精选', '小米服务', '米粉卡', '小米联名', '零售店', '其它'],
				squareList: [],
				xiaomiPhoneSquare: [],
				redmiPhoneSquare: [],
				scrollTop: 0,
				toPage: ''
			}
		},
		components: {
			BackSearch,
			rightSquare
		},
		methods: {
			scrollTo (index) {
				const self = this;
				this.curNav = index;
				switch (index) {
					case 0: 
						self.scrollTop = 0;
						break;
					case 1:
						self.scrollTop = 832;
						break;
				}
				
			},
			handleData (data) {
				data.forEach(item => {
					if(item.square === 'xiaomi-phone') {
						this.xiaomiPhoneSquare.push(item);
					} else if(item.square === 'redmi-phone') {
						this.redmiPhoneSquare.push(item)
					}
				})
			},
			handleScroll (e) {
				const scrollTop = e.detail.scrollTop;
				if(scrollTop < 832) {
					this.curNav = 0;
				} else if (scrollTop >= 832){
					this.curNav = 1;
				}
			}
		},
		created() {
			this.handleData(list.list);
		},
		onHide () {
			this.$store.commit('changeBackPage', 'pages/classify/classify');
		}
	}
</script>

<style lang="scss">
	@import '../../static/css/classify/classify.scss';
	.no-data {
		// border: 1px solid red;
		text-align: center;
		line-height: 100rpx;
	}
</style>
