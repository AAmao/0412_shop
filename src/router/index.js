/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite',

    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true  // 标识NavFooter组件是否显示 或者用hideFooter：false用这个全写上
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true  // 标识NavFooter组件是否显示
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true  // 标识NavFooter组件是否显示
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true  // 标识NavFooter组件是否显示
      }
    },
    {
      path: '/login',
      component: Login,

    }
  ]
})
