import Vue from 'vue'
import Router from 'vue-router'
import Menu from './router-views/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/course/menu"
    },
    {
      path: '/course/:section',
      name: 'Course',
      component: Menu,
    }
  ]
})
