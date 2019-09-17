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
      component: Course,
      children: [
        {path: "", redirect: "instructions"},
        {path: "instructions", name: "Instructions", component: () => import(/* webpackChunkName: "about" */ './components/SectionInstructions.vue'),},
        {path: "welcome", name: "Welcome", component: () => import(/* webpackChunkName: "about" */ './components/SectionWelcome.vue'),},
        {path: "regulations", name: "Regulations", component: () => import(/* webpackChunkName: "about" */ './components/SectionRegulations.vue'),},
        {path: "exemptions", name: "Exemptions", component: () => import(/* webpackChunkName: "about" */ './components/SectionExemptions.vue'),},
      ]
    },
    { 
      path: '/404', 
      name: "NotFound",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/NotFound.vue')
    },  
    { 
      path: '*', 
      redirect: '/404' 
    }
  ]
})
