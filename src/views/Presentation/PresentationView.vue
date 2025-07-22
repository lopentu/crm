<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import { ref } from "vue";

//images
import vueMkHeader from "@/assets/img/aboutUsLogo/Background.png";
//hooks
const body = document.getElementsByTagName("body")[0];

const blocks = ref([
  {
    title: "Primacy of Non‑Formal Logic",
    summary:
      "Both domains primarily rely on <em>informal or defeasible reasoning</em> rather than formal symbolic logic (e.g., first‑order logic).",
    iol: "Solutions hinge on discovering latent rules through pattern recognition, analogy, and abductive reasoning.",
    legal:
      "Arguments are built via interpretation, precedent, and balancing competing norms and values—not strict deductive validity."
  },
  {
    title: "Contextual and Normative Reasoning",
    summary:
      "These tasks are deeply embedded in <em>social, cultural, and normative frameworks</em>.",
    iol: "Students infer internal logic of a language system that reflects cultural or typological constraints.",
    legal:
      "Statutes or cases are interpreted in light of societal values, legal traditions, and institutional roles."
  },
  {
    title: "Multi‑step, Hypothetical, Non‑Monotonic Inference",
    summary:
      "Solutions typically involve <em>multi‑stage reasoning</em> with hypotheses that may be revised or retracted.",
    iol: "Students propose rules that fit examples but must revise them if contradictions arise.",
    legal:
      "Legal reasoning unfolds by weighing counter‑examples, exceptions, and competing interpretations—mirroring non‑monotonic logic where conclusions are defeasible."
  },
  {
    title: "Reasonableness over Mathematical Correctness",
    summary:
      "Evaluation prioritizes <em>plausibility, justification, and coherence</em> over formal provability.",
    iol: "Rewards include not only correct answers but clearly stated reasoning processes.",
    legal:
      "Judgments stress well‑supported argumentation, precedent, and principled application—rather than algorithmic precision."
  }
]);

onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75 bg-cover bg-center"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy">
      <div class="container">
        <div class="row">
          <div
            class="text-center mx-auto position-relative justify-content-center">
            <h1
              class="text-white pt-3 mt-n5 me-2 font-"
              :style="{
                display: 'inline-block ',
                textShadow: '0 0 15px rgba(20, 20, 20, 0.5)'
              }">
              Cultural Reasoning Model
            </h1>
            <p
              class="lead text-white px-5 mt-3"
              :style="{
                whiteSpace: 'nowrap',
                fontWeight: '500',
                textShadow: '0 0 10px rgba(20, 20, 20, 0.5)'
              }">
              A novel framework that integrates the inferential strengths of
              large-scale reasoning models with the contextual sensitivity of
              cultural logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <div class="container">
      <div class="row"></div>
    </div>
    <div class="row items-center">
      <div class="mx-auto w-70 text-center text-justify my-5">
        <p class="lead text-secondary lh-base text-justify m-0">
          Unlike traditional formal logic systems, Cultural Reasoning Model
          (CRM) is designed to handle
          <strong>complex, multi‑step reasoning tasks</strong>
          embedded in socio‑cultural contexts—such as those found in legal
          interpretation and linguistic pattern discovery (e.g., International
          Linguistics Olympiad (IOL) problems). It captures the non‑monotonic,
          defeasible and interpretive nature of human reasoning by aligning
          semantic inference with normative structures and cultural knowledge.
          CRM emphasizes not only logical validity but also interpretive
          plausibility, coherence, and cross‑cultural appropriateness. This
          makes it particularly suitable for applications where reasoning must
          reflect both internal structural rules (e.g., grammatical or legal
          systems) and external contextual norms (e.g., social conventions,
          legal precedent, pragmatic intent). As such, CRM provides a unified
          foundation for modeling reasoning tasks that require both symbolic
          abstraction and cultural alignment—bridging the gap between language,
          law, and human cognition.
        </p>
      </div>
    </div>
    <h2 id="overview" class="text-center mb-5">Overview</h2>
    <h3 class="text-center mb-5 fw-bold" style="font">
      Shared Core Characteristics of IOL and Legal Reasoning Models
    </h3>
    <section
      v-for="block in blocks"
      :key="block.title"
      class="mb-5 mx-auto w-70">
      <h4 class="fw-bold">{{ block.title }}</h4>
      <p class="mb-3" v-html="block.summary" />

      <table class="table w-100 mx-auto">
        <colgroup>
          <col style="width: 30%" />
          <col style="width: 70%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="bg-light mx-auto">In IOL Problems</th>
            <td class="text-start">{{ block.iol }}</td>
          </tr>
          <tr>
            <th class="bg-light text-start">In Legal Arguments</th>
            <td class="text-start">{{ block.legal }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2 id="app" class="text-center mb-5 fw-bold">App</h2>
    <h3 class="text-center mb-5 fw-bold">Download the App</h3>
    <div class="w-70 text-center items-center row mx-auto">
      <h5 class="text-center mb-3">For iOS users</h5>
      <p class="text-justify lead mb-4">
        You can download the app directly using the link below, or simply search
        "2025 IOL" on App Store:
        <a href="https://apps.apple.com/us/app/2025-iol/id6748054270"
          >https://apps.apple.com/us/app/2025-iol/id6748054270</a
        >
      </p>
      <h5 class="text-center my-3">For Android users</h5>
      <p class="text-justify lead text-secondary mb-4">
        Please join the Google Group before downloading the app. Click
        <b>“Join group”</b> or <b>"Joining the group"</b>at
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
      <h5 class="text-center my-3">For Web users</h5>
      <p class="text-justify lead mb-4">
        You can access the web version (chatbot feature only) here:
        <a href="https://lopen.linguistics.ntu.edu.tw/iol2025/"
          >https://lopen.linguistics.ntu.edu.tw/iol2025/</a
        >
      </p>
    </div>
  </div>
  <DefaultFooter />
</template>

<style scoped>
.bg-cover {
  background-size: cover !important;
}
.bg-center {
  background-position: center center !important;
}

.table {
  table-layout: fixed;
}

section > p {
  font-size: 1.05rem;
  color: #374151; /* darker gray (#374151 = tailwind gray‑700) */
  opacity: 1;
}

.table th,
.table td {
  font-size: 1.05rem;
  vertical-align: top;
  word-wrap: break-word;
  white-space: pre-wrap;
  padding: 0.75rem 1rem;
}
</style>
