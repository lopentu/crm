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
            <h1 class="text-white">Benchmarks</h1>
            <p class="lead mb-4 text-white opacity-8">Subtitle goes here</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <h2 class="text-center my-3">IOLBENCH</h2>
    <p class="text-center mb-4 mx-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <h2 class="text-center my-3">Linguini</h2>
    <p class="text-center mb-4 mx-3">
      Linguini is a benchmark designed to evaluate the linguistic reasoning 
      abilities of language models without relying on prior knowledge of 
      specific languages. Developed from problems featured in the International 
      Linguistics Olympiad (IOL), Linguini includes 894 questions across 160 
      problems in 75 mostly low-resource languages. Each problem is crafted so 
      that all necessary information is presented in the context, allowing 
      models to solve them through reasoning rather than language familiarity. 
      The benchmark tests models on three main task types: sequence transduction 
      (e.g., translation or script conversion), fill-in-the-blank derivations 
      (e.g., verb conjugation or noun declension), and number transliteration 
      (converting between text and digit forms). Linguini stands out from other 
      saturated benchmarks like MMLU by remaining difficult even for today’s 
      top-performing language models—highlighting the gap in true reasoning 
      capabilities. For example, the best proprietary model, Claude 3 Opus, 
      achieves just 24.05% accuracy, while GPT-4o reaches 14.65%. Experiments 
      show that model performance drops steeply when context is removed, 
      underscoring the benchmark’s emphasis on in-context reasoning. 
      Additionally, models retain performance even when problem scripts are 
      changed (e.g., to Cyrillic or Georgian), further proving that the 
      benchmark measures reasoning rather than memorized knowledge. Linguini 
      offers a robust and language-agnostic way to assess the fundamental 
      reasoning skills of AI models.

    </p>
    <h2 class="text-center my-3">LingOly</h2>
    <p class="text-center mb-4 mx-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
  <DefaultFooter />
</template>
