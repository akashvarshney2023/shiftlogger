import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/components/Home.vue"
import ReportView from '@/components/Report.vue';
import Login from '@/components/Login.vue';

// Mock function to check authentication
const isAuthenticated = () => {
  // Check localStorage or any other authentication state
  return !!localStorage.getItem('token');
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { auth: true } },
    { path: '/report', name: 'report', component: ReportView, meta: { auth: true } },
    { path: '/login', name: 'login', component: Login, meta: { auth: false } },
  ],
});

// Add a global beforeEach guard
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !isAuthenticated()) {
    // If route requires auth and user is not authenticated, redirect to login
    next({ path: '/login' });
  } else if (to.path === '/login' && isAuthenticated()) {
    // If user is already logged in, redirect away from login page
    next({ path: '/' });
  } else {
    // Otherwise, allow access
    next();
  }
});


export default router;
