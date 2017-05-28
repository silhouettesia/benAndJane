import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import main from '@/components/main'
import home from '@/components/home'
import jewellery from '@/components/page-jewellery'
import series from '@/components/page-series'
import product from '@/components/page-product'
import historybook from '@/components/page-historybook'
import haute from '@/components/page-haute'
import about from '@/components/page-about'
import contact from '@/components/page-contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/home',
      component: main,
      children: [
        {
          path: '',
          components: {
            main: home
          }
        },
        {
          name: 'jewellery',
          path: '/jewellery/:category',
          components: {
            main: jewellery
          }
        },
        {
          name: 'series',
          path: '/series/:category',
          components: {
            main: series
          }
        },
        {
          path: '/product/:id',
          components: {
            main: product
          }
        },
        {
          name: 'historybook',
          path: '/historybook/:year',
          components: {
            main: historybook
          }
        },
        {
          path: '/haute',
          components: {
            main: haute
          }
        },
        {
          path: '/about',
          components: {
            main: about
          }
        },
        {
          path: '/contact',
          components: {
            main: contact
          }
        },
        {
          name: 'search',
          path: '/search/:query',
          components: {
            main: jewellery
          }
        },
      ]
    },
  ]
})
