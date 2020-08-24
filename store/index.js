import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		isLogin: false,
		homeCurItem: 0,
		homeSwiperItem: '', // 记录首页展示的轮播图
		backPage: '' ,//用于返回按钮记录要返回的页面路径
		homeNavScrollLeft: 0 //首页nav滚动条位置
	},
    mutations: {
		changeIsLogin (state, isLogin) {
			state.isLogin = isLogin;
		},
		changeHomeCurItem (state, index) {
			state.homeCurItem = index;
		},
		changeHomeSwiperItem (state, item) {
			state.homeSwiperItem = item;
		},
		changeBackPage (state, page) {
			state.backPage = page;
		},
		changeCurItem (state, obj) {
			if (obj.index >= 4) {
				if(obj.index === obj.num - 1 || 6) {
					state.homeNavScrollLeft = 80;
				} else {
					state.homeNavScrollLeft += 50;
				}
					
			} else {
				state.homeNavScrollLeft = 0;
			}
		}
	},
    actions: {}
})
export default store