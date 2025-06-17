import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/AboutUs/AboutView.vue";

import Overview from "../views/Overview/OverviewView.vue";
import Architecture from "../views/Architecture/ArchitectureView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView
    },
    {
      path: "/pages/landing-pages/about-us",
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
    }
  ]
});

export default router;
