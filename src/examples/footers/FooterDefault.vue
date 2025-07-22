<script setup>
import logoDark from "@/assets/img/logo-ct-dark.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: String,
    default: () => ({
      name: "Cultural Reasoning Model",
      logo: logoDark,
      route: 'https://lope.linguistics.ntu.edu.tw/',
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => []
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => []
  }
});
</script>
<template>
  <footer class="footer pt-5 mt-5 text-center">
    <div class="container">
      <div class="row">
        <a
          :href="brand.route"
          target="_blank"
          rel="noopener"
          class="d-inline-flex flex-column align-items-center mb-4 text-decoration-none"
        >
          <h6 class="font-weight-bolder mb-0 text-center">
            {{ brand.name }}
          </h6>
        </a>

        <div class="text-center">
          <p class="text-dark my-4 text-sm font-weight-normal">
            All rights reserved. Copyright ©
            {{ new Date().getFullYear() }}
            LOPE Lab | Website Template by
            <a href="https://www.creative-tim.com" target="_blank"
              >Creative Tim</a
            >.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
