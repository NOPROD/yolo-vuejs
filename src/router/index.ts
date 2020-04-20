import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonnalResume from '@/views/PersonnalResume.vue'
import Yolo from '@/views/Yolo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PersonnalResume',
    component: PersonnalResume
  },
  {
    path: '/yolo',
    name: 'Yolo',
    component: Yolo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
