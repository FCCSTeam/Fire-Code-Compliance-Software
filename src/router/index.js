import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Userpage from '../views/Userpage.vue'
import Adminpage from '../views/Adminpage.vue'
import UserSettings from '../views/UserSettings.vue'
import PageNotFound from '../views/PageNotFound.vue'

import { getActiveUser } from "@/js/auth/userAuth.js";
import { adminStatus } from "@/js/auth/userAccess.js";

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

const requireAdmin = async (to, from, next) => {
  adminStatus(getActiveUser()).then(token => {
    let isAdmin = token.isAdmin
    if(isAdmin)
    {
      next()
    }
    else if (getActiveUser())
    {
      next({ name: "Userpage" });
    }
    else
    {
      next({ name: "Home" });
    }
  })
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
    beforeEnter: requireAdmin
  },
  {
    path: '/usersettings',
    name: 'UserSettings',
    component: UserSettings,
    beforeEnter: requireAuth
  },
  //make this the last one!
  {
    path: "*", 
    name: 'PageNotFound',
    component: PageNotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
