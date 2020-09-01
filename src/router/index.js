import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Grid from '../views/Grid.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  }]
  

const router = new VueRouter({
  routes
})

export default router
