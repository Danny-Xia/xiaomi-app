<template>
	<view class="home">
		<!-- 头部区域 -->
		<view class="header">
			<!-- 顶部广告，未登录时显示 -->
			<!-- #ifdef H5 -->
			<view class="advert" v-if="!$store.state.isLogin"><image class="image" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1d048f5d1008fa344cc4cba529b4433.png" mode=""></image></view>
			<!-- #endif -->
			
			<view class="header-main">
				<!-- logo + 搜索框  + user-->
				<view class="logo-inp-user">
					<view class="logo"><image src="../../static/logo.png" mode=""></image></view>
					<view class="inp-box" @click="jumpSearch">
						<view class="icon icon-search"></view>
						<input class="input" type="text" disabled value="搜索商品名称" />
					</view>
					<!-- user 点击跳转至我的页面 -->
					<view class="icon icon-user" @click="jumpUser"></view>
				</view>
				<!-- 导航菜单 -->
				<view :class="{ 'nav-box': true, 'drop-nav': isShowMenu }">
					<scroll-view scroll-x="true" class="nav-scroll-view" :scroll-left="navScrollLeft">
						<view class="all" v-if="isShowMenu">全部</view>
						<view class="nav">
							<view class="view" v-for="(item, index) in navList" :key="item" :class="{ active: index === homeCurItem }" @click="changeCurItem(index)">{{ item }}</view>
						</view>
					</scroll-view>
					<view :class="{ icon: true, 'icon-dropdown': true, drop: isShowMenu }" @click="changeIsShowMenu"></view>
				</view>
			</view>
		</view>
		<!-- 主要内容区 -->
		<view class="main" :class="{'allready-login': $store.state.isLogin}">
			<home-main />
		</view>
	</view>
</template>

<script>
	import HomeMain from '../../components/home/homemain.vue'
export default {
	data() {
		return {
			navList: ['推荐', '手机', '智能', '电视', '笔记本', '家电', '生活周边'],
			isShowMenu: false
		};
	},
	components: {
		HomeMain
	},
	computed: {
		homeCurItem () {
			return this.$store.state.homeCurItem;
		},
		navScrollLeft () {
			return this.$store.state.homeNavScrollLeft;
		}
	},
	onHide () {
		this.$store.commit('changeBackPage', 'pages/index/index');
	},
	methods: {
		jumpSearch() {
			uni.navigateTo({
				url: '../search/search'
			});
		},
		jumpUser() {
			uni.switchTab({
				url: '../user/user'
			});
		},
		changeIsShowMenu() {
			this.isShowMenu = !this.isShowMenu;
		},
		changeCurItem(index) {
			
			const num = this.navList.length - 1;
			const obj = {
				num,
				index
			}
			this.$store.commit('changeCurItem', obj);
			this.isShowMenu = false;
			this.$store.commit('changeHomeCurItem', index);
		}
	}
};
</script>

<style lang="scss">
@import '../../static/css/home/home.scss';
</style>
