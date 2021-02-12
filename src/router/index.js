import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import  Userpage from '../views/Userpage.vue'
import  Adminpage from '../views/Adminpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userpage',
    name: 'Userpage',
    component: Userpage
  },
  {
    path: '/adminpage',
    name: 'Adminpage',
    component: Adminpage
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
