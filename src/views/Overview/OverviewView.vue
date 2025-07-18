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
            <h1 class="text-white">Overview</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  <!-- ░░ Content Card ░░ -->
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <h2 class="text-center my-5 fw-bold">
      Shared Core Characteristics of IOL and Legal Reasoning Models
    </h2>

    <!-- SECTION TEMPLATE -->
    <section v-for="block in blocks" :key="block.title" class="mb-5">
      <h4 class="fw-bold">{{ block.title }}</h4>
      <p class="mb-3" v-html="block.summary" />

      <table class="table w-100">
        <colgroup>
          <col style="width: 30%" />
          <col style="width: 70%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="bg-light text-start">In IOL Problems</th>
            <td class="text-start">{{ block.iol }}</td>
          </tr>
          <tr>
            <th class="bg-light text-start">In Legal Arguments</th>
            <td class="text-start">{{ block.legal }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>

  <!-- ░░ Footer ░░ -->
  <DefaultFooter />
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          title: "Primacy of Non‑Formal Logic",
          summary:
            "Both domains primarily rely on <em>informal or defeasible reasoning</em> rather than formal symbolic logic (e.g., first‑order logic).",
          iol:
            "Solutions hinge on discovering latent rules through pattern recognition, analogy, and abductive reasoning.",
          legal:
            "Arguments are built via interpretation, precedent, and balancing competing norms and values—not strict deductive validity.",
        },
        {
          title: "Contextual and Normative Reasoning",
          summary:
            "These tasks are deeply embedded in <em>social, cultural, and normative frameworks</em>.",
          iol:
            "Students infer internal logic of a language system that reflects cultural or typological constraints.",
          legal:
            "Statutes or cases are interpreted in light of societal values, legal traditions, and institutional roles.",
        },
        {
          title: "Multi‑step, Hypothetical, Non‑Monotonic Inference",
          summary:
            "Solutions typically involve <em>multi‑stage reasoning</em> with hypotheses that may be revised or retracted.",
          iol:
            "Students propose rules that fit examples but must revise them if contradictions arise.",
          legal:
            "Legal reasoning unfolds by weighing counter‑examples, exceptions, and competing interpretations—mirroring non‑monotonic logic where conclusions are defeasible.",
        },
        {
          title: "Reasonableness over Mathematical Correctness",
          summary:
            "Evaluation prioritizes <em>plausibility, justification, and coherence</em> over formal provability.",
          iol:
            "Rewards include not only correct answers but clearly stated reasoning processes.",
          legal:
            "Judgments stress well‑supported argumentation, precedent, and principled application—rather than algorithmic precision.",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
