import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import CatsIndex from './views/CatsIndex.vue'
import CatsShow from './views/CatsShow.vue'
import CatsNew from './views/CatsNew.vue'
import CatsEdit from './views/CatsEdit.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'welcome', component: Welcome},
    { path: '/cats', name: 'cats-index', component: CatsIndex},
    { path: '/cats/:id', name: 'cats-show', component: CatsShow},
    { path: '/cats/new', name: 'cats-new', component: CatsNew},
    { path: '/cats/:id/edit', name: 'cats-edit', component: CatsEdit}
  ]
})
