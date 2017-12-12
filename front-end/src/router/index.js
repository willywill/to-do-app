import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home.vue'
import Todo from '@/components/Todo.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'

import store from '@/store/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/my-to-do',
      name: 'todo',
      component: Todo,
      beforeEnter: requireAuth
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

function requireAuth (to, from, next) {
  if (!store.state.isUserLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
