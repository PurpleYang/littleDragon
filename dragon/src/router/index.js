import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import goods from '@/components/goods'
import goodslist from '@/components/goodslist'
import goodsdetails from '@/components/goodsdetails'
import my from '@/components/my'
import news from '@/components/news'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/goodsdetails',
      name: 'goodsdetails',
      component: goodsdetails
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: goodslist
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
})
