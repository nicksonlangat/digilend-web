import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Reset from '../views/Reset.vue'
import Loan from '../views/Loan.vue'
import ApplyLoan from '../views/ApplyLoan.vue'
import Customers from '../views/Customers.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/new-loan',
    name: 'Ticket',
    component: Loan
  },
  {
    path: '/apply-loan',
    name: 'applyloan',
    component: ApplyLoan
  },
  {
    path: '/customers',
    name: 'customners',
    component: Customers
  },
  {
    path: '/reset-password',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
