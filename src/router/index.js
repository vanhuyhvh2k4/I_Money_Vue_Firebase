import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import Logout from '@/views/Logout.vue';
import Report from '@/views/Report.vue';
import Budget from '@/views/Budget.vue';
import Transaction from '@/views/Transaction.vue';
import { projectAuth } from '@/config/firebase';

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  if (!user) next({ name: 'login', params: {}});
  else next();
  
}

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: requireAuth,
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      layout: 'auth',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'auth',
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: requireAuth
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: requireAuth,
    component: Logout,
  },
  {
    path: '/report',
    name: 'report',
    beforeEnter: requireAuth,
    component: Report,
  },
  {
    path: '/budget',
    name: 'budget',
    beforeEnter: requireAuth,
    component: Budget,
  },
  {
    path: '/transaction',
    name: 'transaction',
    beforeEnter: requireAuth,
    component: Transaction,
    meta: {
      layout: 'onlyHeader',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
