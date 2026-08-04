import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {requiresAuth:false}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/',
      name: '/dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {requiresAuth: true}
    }
  ],
})

// route guard fe
router.beforeEach((to,from,next)=>{
  const token=localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    // jika rute butuh login dan tidak ada token, arahkan ke halaman login
    next({name:'login'});
  } else if (condition) {
    // jika sudah login lalu menuju halaman login, arahkan ke halaman dashboard
    next({name:'dashboard'});
  } else {
    next();
  }
});

export default router
