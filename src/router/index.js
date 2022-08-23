import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp'
import FeedView from '../views/FeedView'

const routes = [

  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/FeedView',
    name: 'FeedView',
    component: FeedView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
