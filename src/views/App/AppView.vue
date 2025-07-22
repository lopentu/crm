<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">2025 IOL App</h1>
            <p class="lead mb-4 text-white opacity-8"></p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <h2 class="text-center my-3">Dowloads</h2>
    <h3 class="text-center my-3">For iOS users</h3>
    <p class="text-center mb-4 mx-3">
      You can download the app directly using the link below, or simply search
      "2025 IOL" on App Store:
      <a href="https://apps.apple.com/us/app/2025-iol/id6748054270"
        >https://apps.apple.com/us/app/2025-iol/id6748054270</a
      >
    </p>
    <h3 class="text-center my-3">For Android users</h3>
    <p class="text-center mb-4 mx-3">
      Please join the Google Group before downloading the app. Click
      <b>“Join group”</b> at
      <a href="https://groups.google.com/g/2025-iol"
        >https://groups.google.com/g/2025-iol</a
      >
      <br />
      Once you’ve become a group member, you can download the app
      <a
        href="https://play.google.com/store/apps/details?id=com.william12995.iol2025"
        >here</a
      >.
    </p>
    <h3 class="text-center my-3">For Web users</h3>
    <p class="text-center mb-4 mx-3">
      You can access the web version (chatbot feature only) here:
      <a href="https://lopen.linguistics.ntu.edu.tw/iol2025/"
        >https://lopen.linguistics.ntu.edu.tw/iol2025/</a
      >
    </p>
  </div>

  <DefaultFooter />
</template>
