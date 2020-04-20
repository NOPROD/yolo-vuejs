import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonnalResume from '@/views/PersonnalResume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PersonnalResume',
    component: PersonnalResume
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
