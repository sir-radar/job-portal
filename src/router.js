import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Default.vue'),
      children: [
        { path: '', name: 'JobsWithTag', component: () => import('@/components/JobsWithTag.vue') },
        { path: '/jobs', name: 'JobsDefault', component: () => import('@/components/JobsDefault.vue') }
      ]
    }
  ]
})
