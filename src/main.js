import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import store from './store'
Vue.component('HeaderTop',HeaderTop)

new Vue({
  el: '#app',
  render: h => h(App),
  router,//配置路由器==》所有组件对象多了个#router、$route属性
  store,//配置vuex的store==》所有组件对象多了个#store属性

})
