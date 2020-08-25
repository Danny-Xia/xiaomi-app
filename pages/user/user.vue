<template>
	<view class="user">
		<view class="header">
			<view class="header-content" @click="showModal">
				<view class="icon-avatar">
					<image v-if="!isLogin" class="image" src="../../static/icons/user_avatar.png" mode=""></image>
					<image v-else class="image" src="../../static/images/user2_tou.jpg" mode=""></image>
				</view>
				<text class="login-text" v-if="!isLogin">登录/注册</text>
				<text v-else class="login-text user-name">超级管理员</text>
			</view>
		</view>
		<view class="order">
			<view class="my-order-text">
				我的订单
			</view>
			<view class="all-order">
				全部订单
				<text class="icon-xiangyou"></text>
			</view>
		</view>
		<view class="my-order-icons">
			<view class="no-buy view">
				<image class="image" src="../../static/icons/user_no_buy.png" mode=""></image>
				<view>
					待付款
				</view>
			</view>
			<view class="money view">
				<image class="image" src="../../static/icons/user_money.png" mode=""></image>
				<view class="">
					待收货
				</view>
			</view>
			<view class="service view">
				<image class="image" src="../../static/icons/user_service.png" mode=""></image>
				<view class="">
					退换修
				</view>
			</view>
		</view>
		<view class="list-item list-item1">
			<view class="list-item-view vip">
				<view class="icon-box">
					<text class="icon icon-vip"></text>
				</view>
				<view class="text border">
					会员中心
					<text class="icon-xiangyou"></text>
				</view>
			</view>
			<view class="list-item-view hui">
				<view class="icon-box">
					<text class="icon icon-hui"></text>
				</view>
				<view class="text">
					我的优惠
					<text class="icon-xiangyou"></text>
				</view>
			</view>

			<view class="view">
				<text class="icon icon-setting"></text>
			</view>
		</view>
		<view class="list-item list-item2">
			<view class="list-item-view service">
				<view class="icon-box">
					<text class="icon icon-service"></text>
				</view>
				<view class="text border">
					服务中心
					<text class="icon-xiangyou"></text>
				</view>
			</view>
			<view class="list-item-view mijia">
				<view class="icon-box">
					<text class="icon icon-mijia"></text>
				</view>
				<view class="text">
					小米之家
					<text class="icon-xiangyou"></text>
				</view>
			</view>
		
			<view class="view">
				<text class="icon icon-setting"></text>
			</view>
		</view>
		<view class="list-item list-item3">
			<view class="list-item-view f-gift">
				<view class="icon-box">
					<text class="icon icon-f"></text>
				</view>
				<view class="text border">
					我的F码
					<text class="icon-xiangyou"></text>
				</view>
			</view>
			<view class="list-item-view mijia">
				<view class="icon-box">
					<text class="icon icon-gift"></text>
				</view>
				<view class="text">
					礼物码兑换
					<text class="icon-xiangyou"></text>
				</view>
			</view>
		
			<view class="view">
				<text class="icon icon-setting"></text>
			</view>
		</view>
		<view class="setting" @click="pageToSetting">
			<view class="icon-box">
				<text class="icon-setting"></text>
			</view>
			<view class="text">
				设置
				<text class="icon icon-xiangyou"></text>
			</view>
			
		</view>
		<view class="modal" v-if="isShowModal">
			<view class="content">
				<view class="content-top">
					<view class="row1">
						<text class="text">《小米商城用户协议》</text>
						<text class="text">《小米商城隐私政策》</text>
					</view>
					<view class="row2">
						<text class="text">《小米账号用户协议》</text>
						<text class="text">《小米账号隐私政策》</text>
					</view>
					<view class="content-text">
						请您仔细阅读以上协议，其中有对您权力义务的特别约定等重要条款，同意后方可使用本软件
					</view>
				</view>
				<view class="btns">
					<view class="btn disagree" @click="disAgree">
						不同意
					</view>
					<view class="btn agree" @click="agree">
						同意
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				isShowModal: false
			}
		},
		computed: {
			isLogin () {
				return this.$store.state.isLogin;
			}
		},
		onHide () {
			this.$store.commit('changeBackPage', 'pages/user/user');
		},
		onShow () {
			uni.showTabBar();
		},
		methods: {
			showModal () {
				this.isShowModal = true;
				uni.hideTabBar();
			},
			disAgree () {
				this.isShowModal = false;
				uni.showTabBar();
			},
			agree () {
				uni.navigateTo({
					url: `../../pages/login_register/login_register`,
					success: () => {
						this.isShowModal = false;
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			pageToSetting () {
				uni.navigateTo({
					url: '../../pages/setting/setting'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/css/user/index.scss';
</style>
