import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Inicio from '../components/Inicio.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Aplicacion',
    component: App
  },
  {
    path: '/Inico',
    name: 'Inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Inicio.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
