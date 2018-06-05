import Vue from 'vue'
import Router from 'vue-router'
import Splash from '../components/splash'
import Main from '../components/homepage'
import Home from '../components/home'
import Messages from '../components/messages'
import Explore from '../components/explore'
import Notifications from '../components/notifications'


import store from '../store/'
import {DEBUG} from '../api/config/api-list'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/splash',
      name: 'splash',
      component: Splash
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      meta: {
        checkAuth: true
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'messages',
          name: 'messages',
          component: Messages,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'explore',
          name: 'explore',
          component: Explore,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: Notifications,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/splash'
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('getToken')
  if (to.meta.checkAuth) {
    if (DEBUG) {
      next()
    } else {
      const login = store.getters.login
      if (login) {
        next()
      } else {
        next({
          path: './splash'
        })
      }
    }
  } else {
    next()
  }
  next()
})

export default router
