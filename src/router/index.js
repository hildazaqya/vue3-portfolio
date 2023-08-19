import { createRouter, createWebHistory } from "vue-router"; 
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("/src/views/About.vue"),
    meta: { title: 'About' }
  },
  {
    path: '/education',
    name: 'education',
    component: () => import("/src/views/Education.vue"),
    meta: { title: 'Education' }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import("/src/views/Project.vue"),
    meta: { title: 'Project' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("/src/views/Contact.vue"),
    meta: { title: 'Contact' }
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - hildaZaqya();';
  next();
});

export default router;
