<script setup>
import logoDark from "@/assets/img/logo-ct-dark.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "IOL Reasoning Model",
      logo: logoDark,
      route: "/"
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
        <div>
          <a :href="brand.route"> </a>
          <h6 class="font-weight-bolder mb-4 text-center">
            {{ brand.name }}
          </h6>
        </div>

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
