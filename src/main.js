import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {projectAuth} from '@/firebase/config'
import './plugins/bootstrap-vue.js'

Vue.config.productionTip = false

let app
projectAuth.onAuthStateChanged(() => 
{
  if(!app)
  {
    app = new Vue(
      {
        router,
        render: h => h(App)
      }).$mount('#app')
  }
})

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
