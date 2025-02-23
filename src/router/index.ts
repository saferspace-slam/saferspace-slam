import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactPage from '@/pages/KontaktPage.vue'
import FeedbackPage from '@/pages/FeedbackPage.vue'
import MitmachenPage from '@/pages/MitmachenPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage, },
    {
      path: '/veranstaltungen',
      name: 'veranstaltungen',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/VeranstaltungenPage.vue'),
    },
    { path: "/mitmachen", name: "mitmachen", component: MitmachenPage, },
    { path: "/kontakt", name: "kontakt", component: ContactPage, },
    { path: "/feedback", name: "feedback", component: FeedbackPage, }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    return { top: 0, left: 0, behavior: "instant" }
  }
})

export default router
