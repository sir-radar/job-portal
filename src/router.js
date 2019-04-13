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
        { path: '', name: 'Landing', component: () => import('@/views/Landing.vue') },
        { path: '/all-jobs', name: 'AllJobs', component: () => import('@/views/AllJobs.vue') },
        { path: '/job-details', name: 'JobDetails', component: () => import('@/views/JobDetails.vue') }
      ]
    }
  ]
})
