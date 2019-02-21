import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'welcome', component: Welcome},
    { path: '/profile', name: 'profile', component: Profile}
  ]
})
