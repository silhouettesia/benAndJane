import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import wrap from '@/components/wrap'
import header from '@/components/header'
import aside from '@/components/aside'
import main from '@/components/main'
import footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      component: wrap,
    }
  ]
})
