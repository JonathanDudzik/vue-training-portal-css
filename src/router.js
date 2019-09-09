import Vue from 'vue'
import Router from 'vue-router'
import Course from './views/Course.vue'
import Menu from './views/Menu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/menu"
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/course',
      name: 'Course',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Course.vue')
    },
    { 
      path: '/404', 
      name: "NotFound",
      component: () => import(/* webpackChunkName: "about" */ './views/NotFound.vue')
    },  
    { 
      path: '*', 
      redirect: '/404' 
    }
  ]
})
