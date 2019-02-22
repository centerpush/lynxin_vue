import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import CatsIndex from './views/CatsIndex.vue'
import CatsShow from './views/CatsShow.vue'
import CatsNew from './views/CatsNew.vue'
import CatsEdit from './views/CatsEdit.vue'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'sign-up', component: SignUp },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/cats', name: 'cats-index', component: CatsIndex },
    { path: '/cats/new', name: 'cats-new', component: CatsNew },
    { path: '/cats/:id', name: 'cats-show', component: CatsShow },
    { path: '/cats/:id/edit', name: 'cats-edit', component: CatsEdit }
  ]
})
