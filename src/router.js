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
        {path: "welcome", name: "Welcome", component: () => import(/* webpackChunkName: "about" */ './components/SectionWelcome.vue'),},
        {path: "objectives", name: "Objectives", component: () => import(/* webpackChunkName: "about" */ './components/SectionObjectives.vue'),},
        {path: "cad-definition", name: "CAD Definition", component: () => import(/* webpackChunkName: "about" */ './components/SectionCadDefine.vue'),},
        {path: "cad-regulatations", name: "CAD Regulations", component: () => import(/* webpackChunkName: "about" */ './components/SectionCadRegs.vue'),},
        {path: "cad-process", name: "How the Process Works", component: () => import(/* webpackChunkName: "about" */ './components/SectionProcessTimeline.vue'),},
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
