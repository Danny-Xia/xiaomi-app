<template>
	<view class="login_register">
		<view class="logo-area">
			<view class="help">
				<image class="image" src="../../static/icons/help.png" mode=""></image>
			</view>
			<view class="logo-img">
				<image class="image" src="../../static/milogo.png" mode=""></image>
			</view>
			<view class="login-text">
				<text>小米账号登录</text>
			</view>
		</view>
		<view class="login-inp-area">
			<view class="login-inp account" :class="{'err': errClass === 'account'}">
				<label class="label" for="account">账号：</label>
				<input v-model="account" 
				class="input" id="account" 
				type="text" 
				placeholder="请输入账号"
				@focus="clearErr"
				 />
				<image v-show="account !== ''" 
				@click="clearAccount" 
				class="login-inp-btn del-btn" 
				src="../../static/icons/del.png" mode=""></image>
			</view>
			<view class="login-inp pwd" :class="{'err': errClass === 'password'}">
				<label class="label" for="password">密码：</label>
				<input 
				v-model="password" 
				class="input" 
				id="password" 
				:type="pwdType" 
				@focus="clearErr"
				placeholder="请输入密码" />
				<image class="login-inp-btn eye-btn" 
				:src="eyePath" mode=""
				@click="lookPwd"
				></image>
			</view>
			<view class="error-des" v-show="errorMsg !== ''">
				<icon class="icon-warn" type="warn" size="16" color="#ff6700"></icon>
				<text class="text">{{ errorMsg }}</text>
			</view>
			<view class="btns">
				<view class="register-btn btn" 
				>
					<view class="view" 
					:class="{'active': cur === 'register'}" 
					v-show="cur === 'register'"
					@click="register"
					>立即登录/注册</view>
					<view class="view" 
					:class="{'active': cur === 'login'}" 
					v-show="cur === 'login'"
					@click="login"
					>登录</view>
				</view>
				<view class="login-btn btn" 
				>
					<view class="view" 
					v-show="cur === 'register'" 
					:class="{'active': cur === 'login'}"
					@click="handleLogin"
					>用户名密码登录</view>
					<view class="view" 
					:class="{'active': cur === 'register'}" 
					v-show="cur === 'login'"
					@click="handleRegister"
					>手机短信登录/注册</view>
				</view>
			</view>
			<view class="yzm">
				<text v-show="cur === 'register'">收不到验证码？</text>
				<view v-show="cur === 'login'">
					<text>立即注册</text>
					<text class="gun">|</text>
					<text>忘记密码?</text>
				</view>
			</view>
		</view>
		<view class="other">
			<view class="other-text">
				其他方式登录
			</view>
			<view class="other-items">
				<view class="other-item weibo">
					
				</view>
				<view class="other-item zhifubao">
					
				</view>
				<view class="other-item weixin">
					
				</view>
				<view class="other-item pingguo">
					
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="nav-item" v-for="(item, index) in navList" :key="index">
				{{ item }}
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data () {
			return {
				navList: ['简体', '繁体', 'English', '常见问题', '隐私政策'],
				cur: 'register',
				account: '',
				password: '',
				errorMsg: '',
				eyePath: '../../static/icons/eye-1.png',
				pwdType: 'password',
				errClass: ''
			}
		},
		methods: {
			handleRegister () {
				if(this.cur === 'register') {
					return;
				} else {
					this.cur = 'register';
				}
			},
			handleLogin () {
				if(this.cur === 'login') {
					return;
				} else {
					this.cur = 'login';
				}
			},
			register () {
				console.log('注册');
				const result = this.check();
				if(result === 'ok') {
					// 发送请求进行注册
					let url = '/api/student/stuRegister';
					// #ifdef APP-PLUS || MP-WEIXIN
					url = 'https://open.duyiedu.com/api/student/stuRegister'
					// #endif
					
					this.sendRequest(url, {
						username: '超级管理员',
						rePassword: this.password
					})
					
				}
			},
			login () {
				console.log('登录');
				const result = this.check();
				if(result === 'ok') {
					// 发送请求进行登录
					let url = '/api/student/stuLogin';
					// #ifdef APP-PLUS || MP-WEIXIN
					url = 'https://open.duyiedu.com/api/student/stuLogin'
					// #endif
					this.sendRequest(url, {});
				}
			},
			clearAccount () {
				this.account = '';
			},
			clearErr () {
				this.errorMsg = '';
				this.errClass = '';
				this.errClass = '';
			},
			lookPwd () {
				if(this.pwdType === 'password') {
					this.pwdType = 'text';
					this.eyePath = '../../static/icons/eye-2.png';
				} else if (this.pwdType === 'text') {
					this.pwdType = 'password';
					this.eyePath = '../../static/icons/eye-1.png';
				}
			},
			check () {
				if(this.account.trim() === '') {
					this.errorMsg = '账号不能为空';
					this.errClass = 'account';
					return;
				} else if (this.password.trim() === '') {
					this.errorMsg = '密码不能为空';
					this.errClass = 'password';
					return;
				}
				
				return 'ok';
			},
			sendRequest (url, obj) {
				let isLogin = uni.getStorageSync('userAllreadyLogin');
				if(isLogin) {
					this.$store.commit('changeIsLogin', 'true');
					uni.switchTab({
						url: '../../pages/user/user',
						fail: err => {
							console.log(err)
						}
					})
					return;
				}
				const defaultObj = {
					appkey: 'Danny_1569673058582',
					account: this.account,
					password: this.password,
				}
				const data = Object.assign({}, defaultObj, obj);
				uni.request({
					url,
					method: 'POST',
					dataType: 'json',
					data,
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						if(res.data.status === 'success') {
							// 成功请求
							uni.setStorage({
								key: 'userAllreadyLogin',
								data: 'true',
								success: () => {
									this.$store.commit('changeIsLogin', 'true');
									console.log('success');
								}
							})
							uni.switchTab({
								url: '../../pages/user/user',
								fail: err => {
									console.log(err)
								}
							})
						} else {
							this.errorMsg = res.data.msg;
						}
					},
					fail: err => {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/css/login_register/login_register.scss';
</style>
