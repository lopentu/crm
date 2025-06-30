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
            <p class="lead mb-4 text-white opacity-8">
              Our implementation v.s. some existing benchmarks
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <h2 class="text-center my-3">IOLBENCH</h2>
    <p class="text-center mb-4 mx-3 font-weight-bold">
      <a href="https://arxiv.org/abs/2501.04249"><b>IOLBENCH</b></a> is a
      benchmark designed to assess the linguistic reasoning capabilities of
      large language models. Its dataset comprises linguistic problems curated
      from the International Linguistics Olympiad (IOL), covering 25 problem
      sets from 2003 to 2024. Each set consists of 6 core problems and multiple
      subproblems, totaling to approximately 1,500 tasks, including 1,198
      text-only problems and 52 multimodal problems. As with the International
      Linguistics Olympiad itself, each task is constructed so it can be solved
      without relying on prior lexical or grammatical knowledge.

      <br />
      <br />
      The evaluation metrics for each problem fall into one of three categories:
      Type 1 includes tasks requiring the production of a single word or a short
      phrase, which is evaluated using string matching against the official
      solution; Type 2 consists of tasks that require longer outputs, such as
      translations, evaluated using the lexical similarity metric BLEU along
      with an LLM-based scoring mechanism; and Type 3 covers complex tasks that
      involve explanatory reasoning, for which IOLBENCH employs human evaluators
      to manually grade solutions.

      <br />
      <br />
      For text-problems, Claude 3.5s performs best in Type 1 and 2 questions,
      while Gemini 1.5p outperforms the other models in Type 3 tasks. In
      multimodal-problems, GPT-4o and Gemini 1.5p outThe benchmarks of LLMs on
      IOLBENCH shows that while GPT-4 outperformed other models overall, tasks
      involving morphology and phonolgy (where rule induction and generalization
      are integral) pose significant challenges for large language models.
    </p>
    <h2 class="text-center my-3">Linguini</h2>
    <p class="text-center mb-4 mx-3 font-weight-bold">
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
      (converting between text and digit forms).
      <br />
      <br />
      Linguini stands out from other saturated benchmarks like MMLU by remaining
      difficult even for today’s top-performing language models—highlighting the
      gap in true reasoning capabilities. For example, the best proprietary
      model, Claude 3 Opus, achieves just 24.05% accuracy, while GPT-4o reaches
      14.65%. Experiments show that model performance drops steeply when context
      is removed, underscoring the benchmark’s emphasis on in-context reasoning.
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
