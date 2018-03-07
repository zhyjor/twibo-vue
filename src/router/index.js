import Vue from 'vue'
import Router from 'vue-router'
import Splash from '../components/splash'
import Main from '../components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: []
    }
  ]
})
