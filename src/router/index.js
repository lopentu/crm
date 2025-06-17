import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/AboutUs/AboutView.vue";
import Overview from "../views/Overview/OverviewView.vue";
import Architecture from "../views/Architecture/ArchitectureView.vue";
import Benchmarks from "../views/Benchmarks/BenchmarksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView
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
      path: "/architecture",
      name: "architecture",
      component: Architecture
    },
    {
      path: "/benchmarks",
      name: "benchmarks",
      component: Benchmarks
    }
  ]
});

export default router;
