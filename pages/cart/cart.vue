<template>
	<view class="cart">
		<back-search />
		<view class="go-login" v-if="!isLogin" @click="toLogin">
			<text>登陆后享受更多优惠</text>
			<text class="login-text">
				去登陆
				<text class="icon-xiangyou"></text>
			</text>
		</view>
		<view class="cart-area">
			<view class="icon-cart-space">
				
			</view>
			<text class="text">购物车还是空的</text>
			<view class="go-buy">
				去逛逛
			</view>
		</view>
		<view class="like">
			<image class="image" src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" mode=""></image>
			<view class="list">
				<view class="list-item" v-for="item in likeList" :key="item.id">
					<image class="image" :src="item.imgSrc" mode=""></image>
					<view class="name">
						{{ item.name }}
					</view>
					<view class="price">
						<text class="now-price">￥{{ item.now_price }}</text>
						<text class="old-price" v-if="item.old_price !== ''">￥{{ item.old_price }}</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import BackSearch from '../../components/back-search/back-search.vue'
	export default {
		data () {
			return {
				likeList: [
					{
						id: 'like-1',
						name: '米家驱蚊器 智能版',
						now_price: 59,
						old_price: '',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-2',
						name: '米家直流变频落地扇1X',
						now_price: 269,
						old_price: 299,
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-3',
						name: '手机USB micro 数据线',
						now_price: 9.9,
						old_price: '',
						imgSrc: '//i8.mifile.cn/b2c-mimall-media/652ae759d82f68d40caea9329e266044!360x360.jpg'
					},
					{
						id: 'like-4',
						name: '米家IH电饭煲 4L',
						now_price: 499,
						old_price: 599,
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f735084aaa49c1b832af24eca6cc5a01.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-5',
						name: '电视4A 50\" 影院版',
						now_price: 1698,
						old_price: 2098,
						imgSrc: '//i8.mifile.cn/b2c-mimall-media/7bac9c4c9044173389f56b41de154f8d!360x360.jpg'
					},
					{
						id: 'like-6',
						name: '米家电饭煲4L',
						now_price: 249,
						old_price: 299,
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2dd222540cc2c130003aaebc178c83f6.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-7',
						name: '8H多功能青春床垫X1',
						now_price: 349,
						old_price: 399,
						imgSrc: '//i8.mifile.cn/b2c-mimall-media/9a3d60e8947d19eb5cc2d2cb0e0822fa!360x360.jpg'
					},
					{
						id: 'like-8',
						name: '米家洗烘一体机Pro',
						now_price: 2999,
						old_price: '',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-9',
						name: '米家照片打印机',
						now_price: 499,
						old_price: '',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/739c1321d2a05d48c0b8b86cd459c4d4.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-10',
						name: '小米巨能写中性笔10...',
						now_price: 9.99,
						old_price: '',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6a8abf50e2134139e24c30c9293871c.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-11',
						name: '米家互联网燃气灶',
						now_price: 699,
						old_price: 799,
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa0f388a9e6ba57caa623e1e18e9b3fe.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-12',
						name: '知吾煮汤锅 米家定制',
						now_price: 99,
						old_price: '',
						imgSrc: '//i8.mifile.cn/b2c-mimall-media/72f7329a96a5c89bf160fba8cd2745be!360x360.jpg'
					},
					{
						id: 'like-13',
						name: '米家电子温湿度计Pro',
						now_price: 69,
						old_price: 79,
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fcc8cd115c4d1417d8cb7860fe66049.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-14',
						name: '小米活塞耳机',
						now_price: 29,
						old_price: '',
						imgSrc: '//i8.mifile.cn/b2c-mimall-media/e73a38fa0dca982ea6685e045d05a163!360x360.jpg'
					},
					{
						id: 'like-15',
						name: '照片打印机彩色相纸',
						now_price: 59,
						old_price: '',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e315bf299f209996e7e91b77a75512c.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-16',
						name: '小米电视音响',
						now_price: 399,
						old_price: '',
						imgSrc: '//i8.mifile.cn/b2c-mimall-media/f0ed6c9712b59561f24104553a206e3f!360x360.jpg'
					},
					{
						id: 'like-17',
						name: '智睿LED灯泡 米家定制',
						now_price: 14.9,
						old_price: '',
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6dd0d348fc7d5718a81c8d5a9ff63563.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-18',
						name: '小米净水器600G',
						now_price: 1699,
						old_price: 2499,
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/efae8106bc194e6a730294c9ee531caf.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-19',
						name: '米家电压力锅',
						now_price: 549,
						old_price: 599,
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/088b2e2150928479e7b425fe2117fdaa.jpg?thumb=1&w=360&h=360'
					},
					{
						id: 'like-20',
						name: '8H乳胶床垫·青春版',
						now_price: 549,
						old_price: 599,
						imgSrc: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9360bfc6414561f94c66eee9d8613f1a.jpg?thumb=1&w=360&h=360'
					},
				]
			}
		},
		components: {
			BackSearch
		},
		onHide () {
			this.$store.commit('changeBackPage', 'pages/cart/cart');
		},
		methods: {
			toLogin () {
				uni.navigateTo({
					url: '../../pages/login_register/login_register',
					fail: err => {
						console.log(err)
					}
				})
			}
		},
		computed: {
			isLogin () {
				return this.$store.state.isLogin;
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/css/cart/cart.scss';
</style>
