import Vue from 'vue'
import Router from 'vue-router'
import landingLayout from '../src/components/Landing/landingLayout'
import Login from '../src/components/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landingLayout',
      name: 'landingLayout',
      component: landingLayout
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
