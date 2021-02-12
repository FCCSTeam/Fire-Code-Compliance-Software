import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import  Userpage from '../views/Userpage.vue'
import  Adminpage from '../views/Adminpage.vue'

import { getActiveUser } from "@/js/auth/userAuth.js";


Vue.use(VueRouter)

const requireNoAuth = (to, from, next) => {
  if(!getActiveUser())
  {
    next();
  }
  else{
    next({ name: 'Userpage' })
  }
}

const requireAuth = (to, from, next) => {
  if(getActiveUser())
  {
    next()
  }
  else{
    next({ name: "Home" });
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireNoAuth
  },
  {
    path: '/userpage',
    name: 'Userpage',
    component: Userpage,
    beforeEnter: requireAuth
  },
  {
    path: '/adminpage',
    name: 'Adminpage',
    component: Adminpage,
    beforeEnter: requireAuth
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
