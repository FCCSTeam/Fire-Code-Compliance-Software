import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Userpage from '../views/Userpage.vue'
import Adminpage from '../views/Adminpage.vue'
import UserSettings from '../views/UserSettings.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ReportEditor from '../views/ReportEditor.vue'
import TypeOneGridView from '../views/TypeOneGridView.vue'
import ExportPage from '../views/ExportPage.vue'
import Credits from '../views/Credits.vue'

import TestView from '../views/TestView.vue'


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
  {
    path: '/reporteditor',
    name: 'ReportEditor',
    component: ReportEditor,
    beforeEnter: requireAuth
  },
  {
    path: '/exportpage',
    name: 'ExportPage',
    component: ExportPage,
  },
  {
    path: '/testview',
    name: 'TestView',
    component: TestView,
  },
  {
    path: '/credits',
    name: 'Credits',
    component: Credits,
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
