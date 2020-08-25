<script>
export default {
	onLaunch: function() {
		const isLogin = uni.getStorageSync('userAllreadyLogin');
		if(isLogin === 'true') {
			this.$store.commit('changeIsLogin', true);
		}
	},
	onShow: function() {
		// console.log('App Show');
	},
	onHide: function() {
		// console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

uni-tabbar, uni-tabbar .uni-tabbar{  
        box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.05);  
    }
	
page {
	font-size: 30rpx;
}
::-webkit-scrollbar {
	display: none;
}
.icon {
	background-position: center center;
	background-size: cover;
}
</style>
