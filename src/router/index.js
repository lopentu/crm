import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/AboutUs/AboutView.vue";
import Overview from "../views/Overview/OverviewView.vue";
import Findings from "../views/Findings/FindingsView.vue";
import Benchmarks from "../views/Benchmarks/BenchmarksView.vue";
import App from "../views/App/AppView.vue";
import Paper from "../views/Paper/PaperView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView
    },
    {
      path: "/paper",
      name: "paper",
      component: Paper
    },
    {
      path: "/app",
      name: "app",
      component: App
    },
    {
      path: "/about-us",
      name: "about",
      component: AboutView
    },
    {
      path: "/overview",
      name: "overview",
      component: Overview
    },
    {
      path: "/findings",
      name: "findings",
      component: Findings
    },
    {
      path: "/benchmarks",
      name: "benchmarks",
      component: Benchmarks
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // if we’re navigating to a hash, scroll to it smoothly
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }
    // otherwise scroll to top
    return { top: 0 };
  }
});

export default router;
