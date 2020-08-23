import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
Vue.config.productionTip = false
const app = new Vue({
	...App,
	store
})
app.$mount()
