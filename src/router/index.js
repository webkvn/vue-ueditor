import Vue from 'vue'
import Router from 'vue-router'
import UET from '@/page/ue_test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: UET
    }
  ]
})