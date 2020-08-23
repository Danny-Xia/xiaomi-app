<template>
	<view class="login_register">
		<view class="logo-area">
			<view class="help">
				<image src="../../static/icons/help.png" mode=""></image>
			</view>
			<view class="logo-img">
				<image src="../../static/milogo.png" mode=""></image>
			</view>
			<view class="login-text">
				<text>小米账号登录</text>
			</view>
		</view>
		<view class="login-inp-area">
			<view class="account">
				<input type="text" value="" placeholder="请输入账号" />
			</view>
			<view class="pwd">
				<input type="password" value="" placeholder="请输入密码" />
			</view>
			<view class="btns">
				<view class="register-btn" :class="{'active': cur === 'register'}">
					立即登录/注册
				</view>
				<view class="login-btn" :class="{'active': cur === 'login'}">
					用户名密码登录
				</view>
			</view>
			<view class="yzm">
				收不到验证码？
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
				cur: 'register'
			}
		}
	}
</script>

<style>
</style>
