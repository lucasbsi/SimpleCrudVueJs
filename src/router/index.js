import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import UserCrud from '../components/UserCrud'
import Task from '../components/Task'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    component: UserCrud
    
  },
  {
    path: '/task',
    component: Task
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
