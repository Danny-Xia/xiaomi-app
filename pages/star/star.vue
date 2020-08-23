<template>
	<scroll-view class="star" scroll-y="true" @scrolltolower="scrollBottom">
		<view class="nav">
			<text :class="{'active': index === curIndex}" v-for="(item, index) in navList" :key="index">{{ item }}</text>
			<view class="icon icon-bell"></view>
			<view class="icon icon-star-login"></view>
		</view>
		<!-- 此区域应单独封装为组件，动态传递要显示的内容，
			此处吾因只写此一个页面故没做封装
		 -->
		<view class="interest-area">
			<view class="title">
				<text>兴趣圈</text>
				<view class="number">
					<text>1.7万人已加入</text>
					<view class="avatar-box">
						<view class="avatar" :class="{'active': i === curAvatar}" v-for="(item,i) in avatarList" :key="i">
							<image class="image" :src="item" mode=""></image>
						</view>
					</view>
					<view class="icon icon-xiangyou">
						
					</view>
				</view>
			</view>
			<scroll-view class="scroll-view" scroll-x="true" >
				<view class="content">
					<view class="item" v-for="item in interestList" :key="item.id">
						<image class="image" :src="item.imgSrc" mode=""></image>
						<view v-if="item.icon !== ''" class="icon-top-right">
							{{ item.icon }}
						</view>
						<view class="name">
							{{ item.name }}
						</view>
						<view class="des">
							{{ item.des }}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="nav-container">
			<image class="image" v-for="(item,i) in navContainerList" :key="i" :src="item" mode=""></image>
		</view>
		<view class="main">
			<view class="lefts lists" id="item-left">
				<view class="item" v-for="(item,index) in mainLeft" :key="index">
					<image class="image" :src="item.imgSrc" mode=""></image>
					<view class="info">
						<view class="des">
							<text v-if="item.desTag !== 'true'" class="text">#</text>
							<image class="image" v-else src="../../static/icons/icon-bao.png" mode=""></image>
							<text>{{ item.des }}</text>
						</view>
						<view class="name">
							{{ item.name }}
						</view>
						<view class="user">
							<view class="l">
								<view class="avatar">
									<image class="image" :src="item.userAvatar" mode=""></image>
								</view>
								<view class="user-name">
									{{ item.userName }}
								</view>
							</view>
							<view class="r">
								<view class="icon-eye">
									<image class="image" src="../../static/icons/eye.png" mode=""></image>
								</view>
								<view class="number">
									{{ item.number }}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="rights lists" id="item-right">
				<view class="item" v-for="(item,index) in mainRight" :key="index">
					<image class="image" :src="item.imgSrc" mode=""></image>
					<view class="info">
						<view class="des">
							<text v-if="item.desTag !== 'true'" class="text">#</text>
							<image class="image" v-else src="../../static/icons/icon-bao.png" mode=""></image>
							<text class="des-text">{{ item.des }}</text>
						</view>
						<view class="name">
							{{ item.name }}
						</view>
						<view class="user">
							<view class="l">
								<view class="avatar">
									<image class="image" :src="item.userAvatar" mode=""></image>
								</view>
								<view class="user-name">
									{{ item.userName }}
								</view>
							</view>
							<view class="r">
								<view class="icon-eye">
									<image class="image" src="../../static/icons/eye.png" mode=""></image>
								</view>
								<view class="number">
									{{ item.number }}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="photograph">
			<image class="image" src="../../static/icons/publish.png" mode=""></image>
		</view>
		<view class="footer">
			正在加载数据中~~~
		</view>
	</scroll-view>
</template>

<script>
	const dataList = require('../../static/data/star.js');
	export default {
		data() {
			return {
				navList: ['推荐', '上新了小米', '小米智能生活'],
				curIndex: 0,
				curAvatar: 0,
				mainLeft: [],
				mainRight: [],
				interestList: [
					{
						id: 'interest-1',
						name: '我和小米10年',
						des: '一往无前',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3137f0bbbc2736b17861e6765a88d120.jpg',
						icon: ''
					},
					{
						id: 'interest-2',
						name: '5G讨论组',
						des: '关于5G的一切',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd7ffb7809b7a3e62640edecb2216e75.jpg',
						icon: '5G'
					},
					{
						id: 'interest-3',
						name: 'K30',
						des: 'K30讨论圈',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6feebed920b66dfc4da9885c73fe0a5.jpg',
						icon: ''
					},
					{
						id: 'interest-4',
						name: '小米10',
						des: '小米10讨论圈',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2fe1915ff45295c595ef06c39c9eb15.jpg',
						icon: ''
					},
					{
						id: 'interest-5',
						name: '居家男人',
						des: '打造智慧家庭',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a5d114c52b59b6054e63fb63d43ceaa.jpg',
						icon: ''
					},
					{
						id: 'interest-6',
						name: '意见反馈',
						des: '收集您的建议',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/117f6c6f05e57440dc52c29082437e55.jpg',
						icon: ''
					},
					{
						id: 'interest-7',
						name: '学生部落',
						des: '年轻就这样',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3016c4904afaa71fc4868ce85bf4f78b.jpg',
						icon: ''
					},
					{
						id: 'interest-8',
						name: '10X系列',
						des: '全芯超越',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e3d40746be6f87b88841e80a9b00292.png',
						icon: ''
					},
					{
						id: 'interest-9',
						name: 'MIUI11',
						des: '升级刷机一点通',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d5e2e00f58b72b98ca0af3336c275fe7.jpg',
						icon: '系统'
					},
					{
						id: 'interest-10',
						name: '米10青春版',
						des: '清薄5G手机',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/33c46a92898cca7b5bd61140b9f4bdb0.png',
						icon: ''
					},
					{
						id: 'interest-11',
						name: '王一博',
						des: '王一博粉丝集合',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a215ef9cbbd066dd026f2a494ff6e89.jpg',
						icon: ''
					},{
						id: 'interest-12',
						name: 'Redmi9',
						des: '新品讨论圈',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ca03ab02045cec31abc5ba0b11d15de.jpg',
						icon: ''
					},
					{
						id: 'interest-13',
						name: '萌宝俱乐部',
						des: '育儿伊甸园',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b31cb0d7316fdeee965c8130304dae5.jpg',
						icon: ''
					},
					{
						id: 'interest-14',
						name: '游戏玩家',
						des: '集结游戏党',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b25a30c3ea9c391e881c33f56268240f.jpg',
						icon: ''
					}
				],
				avatarList: [
					'../../static/images/user1_tou.jpg',
					'../../static/images/user2_tou.jpg',
					'../../static/images/user3_tou.jpg',
					'../../static/images/user4_tou.jpeg',
					'../../static/images/user5_tou.jpg'
				],
				navContainerList: [
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9789c223e17334a461fe8414bf2036c8.png?w=750&h=600',
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2cc6f8f92801c4f5e48586fb588c971d.png?w=750&h=600',
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5f4c83f5ca2a8871442d12a6abd56af.png?w=750&h=600',
					'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/984b977fc37d90fcc1106e58a99fb6ca.png?w=750&h=600'
				]
			}
		},
		created () {
			setInterval(() => {
				this.curAvatar = (this.curAvatar + 1) % 5;
			}, 3000)
			this.handleData(dataList.list)
		},
		onHide () {
			this.$store.commit('changeBackPage', 'pages/star/star')
		},
		methods: {
			handleData (data) {
				const index = Math.floor(data.length / 2);
				const leftList = data.slice(0, index);
				const rightList = data.slice(index, data.length);
				this.mainLeft = [...this.mainLeft, ...leftList];
				this.mainRight = [...this.mainRight, ...rightList];
			},
			scrollBottom () {
				this.getData();
			},
			getData () {
				this.handleData(dataList.list);
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/css/star/star.scss';
</style>
