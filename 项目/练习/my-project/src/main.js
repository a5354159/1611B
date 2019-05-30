import Vue from 'vue'
import App from './App'
import store from './store/store'
Vue.config.productionTip = false
App.mpType = 'app'
// console.log(store)
console.log(this)
Vue.prototype.$store = store;
const app = new Vue(App)
app.$mount()
