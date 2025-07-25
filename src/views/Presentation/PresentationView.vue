<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import AboutInformation from "../AboutUs/Sections/AboutInformation.vue";
import AboutTeam from "../AboutUs/Sections/AboutTeam.vue";
import { ref } from "vue";

//images
import vueMkHeader from "@/assets/img/aboutUsLogo/CRM.png";
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
              class="lead text-white px-5 mt-3 w-90 text-center mx-auto"
              :style="{
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

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-8">
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
  </div>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-8">
    <h2 id="overview" class="text-center my-5">Overview</h2>
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
  </div>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-8">
    <h2 id="findings" class="text-center my-5 display-5 fw-bold">
      Research Findings
    </h2>

    <!-- ===== AI Answers (IOL Experiments) ===== -->
    <section id="ai-answers" class="mb-5">
      <h3 class="fw-bold text-center mb-4 display-6">
        AI Answers from IOL Experiments
      </h3>
      <p
        class="text-center text-muted mb-5"
        style="max-width: 70ch; margin: 0 auto">
        Below are the exact AI outputs (Answer + Explanation) for each 2025 IOL
        problem. Click to expand.
      </p>

      <div class="accordion" id="iolAccordion">
        <!-- ================= Problem 2025-1 ================= -->
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="p2025-1-head">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#p2025-1-body"
              aria-expanded="false"
              aria-controls="p2025-1-body">
              Problem 2025‑1 · Dzongkha Number Systems
            </button>
          </h2>
          <div
            id="p2025-1-body"
            class="accordion-collapse collapse"
            aria-labelledby="p2025-1-head"
            data-bs-parent="#iolAccordion">
            <div class="accordion-body">
              <h5 class="ai-section-title text-info">Answer</h5>
              <pre class="ai-pre">
a_X: sum    a_Y: ke sum da ɲi    a_Z: ɲiɕu ɲi da ke ʑi da ŋa

b_1:  13 + 70 = 83
b_2:  800 = 20 × 40
b_3:  469 = (50 × 9) + 19
b_4:  600 + 110 = 500 + 210
b_5:  (2 × 0.25) + 0.5 = 1
b_6:  (1100 × 0.5) + 50 = 600
b_7:  736 = (84 × 4) + 400
b_8:  2 × 609 = (3 × 400) + 18
b_9:  62 + 24 = 86
b_10: 885 + 115 = 1000

c_75_system_A: ke ko-da ʑi
c_75_system_B: dønŋa
c_570_system_A: ɲiɕu ci da ke ge da cutãm
c_570_system_B: ŋapɟa døn
            </pre
              >

              <h5 class="ai-section-title mt-4">Explanation</h5>
              <div class="ai-exp">
                <p>
                  <strong>What’s going on?</strong> Dzongkha names big numbers
                  in <em>two different ways</em>:
                </p>
                <ol>
                  <li>
                    <strong>System A (Base‑20 / “vigesimal”)</strong> – Uses 20
                    (<code>ke</code>) and 400 (<code>ɲiɕu</code>=20²) as
                    building blocks, then adds pieces together.
                  </li>
                  <li>
                    <strong>System B (Decimal)</strong> – Looks more like
                    English: special words for tens (20, 70) and “digit + tens”
                    patterns (e.g., 30 = <code>sumcu</code>).
                  </li>
                </ol>

                <p>
                  <strong>Basic digits (1–9):</strong> ci (1), ɲi (2), sum (3),
                  ʑi (4), ŋa (5), ɖu (6), dyn (7), ge (8), gu (9). Ten is
                  <code>cu</code> or <code>cutãm</code>. 11–19 = “10 + digit”
                  (e.g., <code>cuɲi</code> ‘12’).
                </p>

                <hr class="my-3" />

                <p><strong>System A details:</strong></p>
                <ul>
                  <li>
                    <code>M₁×ɲiɕu da M₂×ke da U</code> → “(M₁ × 400) and (M₂ ×
                    20) and Units”.
                  </li>
                  <li>
                    Multiplication is written by just putting words together
                    (e.g., <code>ke sum</code> = 20 × 3 = 60).
                  </li>
                  <li>
                    <em>Subtractive trick:</em> “Base X‑da Y” = Base × (Y − X).
                    From the equations we learn: <code>pɟe = 0.5</code> (half),
                    <code>ko = 0.25</code> (quarter). Example:
                    <code>ke pɟe-da ʑi</code> = 20 × (4 − 0.5) = 70.
                  </li>
                </ul>

                <p><strong>System B details:</strong></p>
                <ul>
                  <li>
                    Tens: some are unique (e.g., <code>tsa</code> ‘20’,
                    <code>døn</code> ‘70’); others are “digit + ‑cu/‑pcu” (e.g.,
                    <code>sumcu</code> ‘30’).
                  </li>
                  <li>Units just attach: <code>dønɖu</code> = 70 + 6 = 76.</li>
                  <li>
                    Hundreds: digit + <code>‑ɟa</code> (e.g.,
                    <code>sumɟa</code> ‘300’, <code>ŋapɟa</code> ‘500’).
                  </li>
                </ul>

                <hr class="my-3" />

                <p>
                  <strong
                    >Polysemous words (same form, different values):</strong
                  >
                </p>
                <ul>
                  <li>
                    <code>ɟa</code> = 100 as a suffix (‑ɟa), but 80 as a prefix
                    (ɟa‑) → numbers 81–89 (e.g., ɟagu = 89).
                  </li>
                  <li>
                    <code>ɲiɕu</code> = 400 in System A structures, but 20 in
                    straight arithmetic contexts.
                  </li>
                </ul>

                <p>
                  <strong>About equation (5):</strong> The printed right side is
                  <code>ɲi</code> (=2), giving 1 = 2. Likely a typo; it should
                  be <code>ci</code> (=1).
                </p>

                <p>
                  With these rules you can translate every equation, solve the
                  unknowns, and write each result in both numbering systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= Problem 2025-2 ================= -->
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="p2025-2-head">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#p2025-2-body"
              aria-expanded="false"
              aria-controls="p2025-2-body">
              Problem 2025‑2 · Gaahmg Possession System
            </button>
          </h2>
          <div
            id="p2025-2-body"
            class="accordion-collapse collapse"
            aria-labelledby="p2025-2-head"
            data-bs-parent="#iolAccordion">
            <div class="accordion-body">
              <h5 class="ai-section-title text-info">Answer</h5>
              <pre class="ai-pre">
a_1: S   a_2: G   a_3: Q   a_4: F   a_5: R   a_6: N   a_7: D   a_8: C   a_9: K   a_10: I
a_11: O  a_12: B  a_13: L  a_14: M  a_15: E  a_16: P  a_17: T  a_18: H  a_19: J  a_20: A

b_translation_ɛ̄_tááðà: his shoulder
b_translation_ɛ̄_mə̄ə̄ð: his grandmother
b_explanation: 'These phrases are unexpected for two main reasons. First, the prefix ɛ̄- is used in the data to mean "your singular" for a specific class of nouns (E-class), but here it appears to mean "his". Second, it attaches to nouns that do not belong to the E-class: tááðà "shoulder" is an A-class noun (taking prefixes like á-), and mə̄ə̄ð "grandmother" is related to an O-class/postposing noun. This usage of ɛ̄- as a "his" marker seems to be a special case that overrides the usual noun class and vowel harmony rules. Furthermore, for "grandmother", it uses a prefixing strategy on the stem mə̄ə̄ð, whereas the singular form in the data, ɖɔ̄ɔ̄r, uses a postposing strategy.'

c_21: his ribs
c_22: their grandmothers
c_23: your (sg.) ribs
c_24: his dogs
c_25: your (sg.) grindstone

d_26: á máàm
d_27: ʈɛ́ɛ̀l ə́nə̀g
d_28: ɛ̄g îl
d_29: āg ābɛ́ɛ́
d_30: ɔ́ tùndùlīīg
            </pre
              >

              <h5 class="ai-section-title mt-4">Explanation</h5>
              <div class="ai-exp">
                <p>
                  <strong>Big picture:</strong> Gaahmg shows possession in two
                  ways, and which one you use depends on the noun’s class.
                  Vowels in the prefixes “harmonize” with the noun’s vowels.
                </p>

                <ol>
                  <li>
                    <strong>Prefixing nouns (most of them):</strong> Three
                    classes with matching vowels in the possessive prefix.<br />
                    <ul>
                      <li>
                        <strong>A‑class</strong> (/a/): e.g.,
                        <em>máàm</em> ‘grindstone’, <em>tááðà</em> ‘shoulder’.
                        Prefixes: <code>á‑</code>, <code>ā‑</code>,
                        <code>āg‑</code>.
                      </li>
                      <li>
                        <strong>E‑class</strong> (/ɛ, i/): e.g.,
                        <em>îl</em> ‘anchor’. Prefixes: <code>ɛ̄‑</code>,
                        <code>ɛ̄g‑</code>.
                      </li>
                      <li>
                        <strong>O‑class</strong> (/ɔ, u/): e.g.,
                        <em>tùndùlīīg</em> ‘dogs’. Prefixes: <code>ɔ́‑</code>,
                        <code>ɔ̄‑</code>, <code>ɔ̄g‑</code>.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Postposing nouns (a smaller set):</strong> The noun
                    is followed by a separate pronoun: e.g.,
                    <em>ɖɔ̄ɔ̄r</em> ‘grandmother (sg.)’, <em>áðág</em> ‘hammer’,
                    <em>gùùr</em> ‘horn’, <em>ʈɛ́ɛ̀l</em> ‘cheeks’.
                  </li>
                </ol>

                <p>
                  <strong>Number & irregularity:</strong> Plurals can be formed
                  by suffixes (<em>gùùr → gùùrììg</em>), or suppletion (<em
                    >îl → pɛ̀bàrɛ̄ɛ̄g</em
                  >). Some nouns even switch strategy between singular and
                  plural (e.g., ‘grandmother’ is postposing in sg., prefixing in
                  pl.).
                </p>

                <p>
                  <strong>Syncretism (same form, different meanings):</strong>
                  The person/number you get from a prefix depends on the noun’s
                  number. Examples:<br />
                  <code>á‑</code> = ‘my’ (with plural noun) <em>or</em> ‘your
                  (sg)’ (with singular noun). <br />
                  <code>ɔ̄g‑</code> = ‘your (pl)’ <em>or</em> ‘their’.
                </p>

                <p>
                  <strong>Why the weird forms?</strong> The prefix
                  <code>ɛ̄‑</code> normally marks ‘your (sg)’ for E‑class
                  nouns—but the data show it marking ‘his’ on A‑ or O‑class
                  nouns. That’s a special override rule. Likewise, ‘grandmother’
                  flips from postposing (sg) to prefixing (pl).
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= Problem 2025-3 ================= -->
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="p2025-3-head">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#p2025-3-body"
              aria-expanded="false"
              aria-controls="p2025-3-body">
              Problem 2025‑3 · Kuria Verb Morphology
            </button>
          </h2>
          <div
            id="p2025-3-body"
            class="accordion-collapse collapse"
            aria-labelledby="p2025-3-head"
            data-bs-parent="#iolAccordion">
            <div class="accordion-body">
              <h5 class="ai-section-title text-info">Answer</h5>
              <pre class="ai-pre">
a_20: ahéétóka

b_21: They have rubbed (something).
b_22: We have ground the seeds.
b_23: I bite (something).
b_24: Indeed, he has sung (something).

c_25: torarya iʧíímbéɣo
c_26: mꞵína
c_27: ntooꞵiimá iritáárákímúra
c_28: torasáámba
c_29: aahéétóka
            </pre
              >

              <h5 class="ai-section-title mt-4">Explanation</h5>
              <div class="ai-exp">
                <p>
                  <strong>Recipe for a Kuria verb:</strong>
                  <code
                    >(Emphatic N‑) – Subject Prefix – TAM – Root – Final
                    -a</code
                  >
                </p>

                <ul>
                  <li>
                    <strong>Subject prefixes:</strong> n‑ ‘I’, a‑ ‘he’, to‑
                    ‘we’, ꞵa‑ ‘they’. <em>Sound tweak:</em> n‑ → m‑ before a
                    bilabial (e.g., <code>mꞵína</code>).
                  </li>

                  <li>
                    <strong>Tense/Aspect (TAM):</strong>
                    <ul>
                      <li><strong>Present:</strong> no marker.</li>
                      <li>
                        <strong>Perfect (“has/have V‑ed”):</strong> a vowel
                        <code>-a-</code> fuses with the subject prefix → long
                        vowel (naa‑, aa‑, too‑, ꞵaa‑).
                      </li>
                      <li>
                        <strong>Prospective (“about to V”):</strong> marker
                        <code>-ra-</code> after the subject prefix (toraroma =
                        ‘we are about to bite’).
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Emphatic Perfect (“Indeed, … has”):</strong> add a
                    nasal <code>N‑</code> before the perfect form: N + aa‑ →
                    naa‑; N + too‑ → ntoo‑; N + ꞵaa‑ → mbaa‑, etc.
                  </li>

                  <li>
                    <strong>Tone matters:</strong> roots are Low vs High.
                    <ul>
                      <li>
                        <strong>L‑roots</strong> (ry ‘eat’, sy ‘grind’, rom
                        ‘bite’, ꞵiim ‘measure’): perfect & prospective are low;
                        emphatic perfect puts a high tone on the final vowel;
                        present monosyllables get a high tone on the root vowel
                        (ndóma).
                      </li>
                      <li>
                        <strong>H‑roots</strong> (ꞵin ‘sing’, saamb ‘burn’,
                        sukur ‘rub’, heetok ‘remember’): present/prospective
                        have highs on all root vowels; perfect: short roots →
                        final high; long roots → highs across the root; emphatic
                        perfect → high on the first root vowel.
                      </li>
                    </ul>
                  </li>
                </ul>

                <p>
                  These pieces let you build every form in the problem and
                  decode what each sentence means.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= Problem 2025-4 ================= -->
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="p2025-4-head">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#p2025-4-body"
              aria-expanded="false"
              aria-controls="p2025-4-body">
              Problem 2025‑4 · Kewa Compounding & Polysemy
            </button>
          </h2>
          <div
            id="p2025-4-body"
            class="accordion-collapse collapse"
            aria-labelledby="p2025-4-head"
            data-bs-parent="#iolAccordion">
            <div class="accordion-body">
              <h5 class="ai-section-title text-info">Answer</h5>
              <pre class="ai-pre">
a_15: D  a_16: N  a_17: T  a_18: L  a_19: W  a_20: O  a_21: Y  a_22: H  a_23: I  a_24: G
a_25: A  a_26: Q  a_27: C  a_28: V  a_29: P  a_30: K  a_31: U  a_32: F  a_33: M  a_34: E
a_35: J  a_36: X  a_37: S  a_38: R  a_39: B

b_40:
• tree
• wood
• fire

b_41:
• mouth
• tooth
• tongue
• language
• talk
• beak

b_42:
• hair
• grass
• feather

b_43:
• jaw
• jawbone

b_44:
• I am not

b_45:
• feather

b_46:
• children

c_47: balina
c_48: uni
c_49: repena-aga
c_50: boke
c_51: ora adaa
c_52: aga-ini
c_53: pamoagaena ini
            </pre
              >

              <h5 class="ai-section-title mt-4">Explanation</h5>
              <div class="ai-exp">
                <p>
                  <strong>Two big ideas:</strong> (1) Words combine in a fixed
                  order to make new meanings. (2) Single roots can mean lots of
                  related things.
                </p>

                <ol>
                  <li>
                    <strong>Modifier–Head compounding:</strong> First word
                    narrows the second. <code>mena‑ada</code> = pig‑house → ‘pig
                    sty’; <code>ada‑mena</code> = house‑pig → ‘domesticated
                    pig’. Adjectives/adverbs also come first:
                    <em>ora adaa</em> ‘very big’.
                  </li>

                  <li>
                    <strong>Possession:</strong> add <code>‑na</code> to the
                    possessor and put it before what’s owned:
                    <code>naakina ini‑agaa</code> = boy‑GEN face (“boy’s face”).
                  </li>

                  <li>
                    <strong>Polysemy & metaphor chains:</strong>
                    <ul>
                      <li>
                        <strong>repena</strong> ‘tree/wood’ → ‘fire’ (made from
                        wood) → ‘light’ (made by fire). e.g.,
                        <em>repena‑ini</em> “fire‑eye” = coals,
                        <em>repena‑agaa</em> “fire‑tongue” = headlights.
                      </li>
                      <li>
                        <strong>agaa</strong> ‘mouth’ → tooth, tongue, language,
                        speech, beak. e.g., <em>adaa‑agaa</em> “main mouth” =
                        mother tongue; <em>yaa‑agaa</em> “bird‑mouth” = beak.
                      </li>
                      <li>
                        <strong>ini</strong> ‘eye’ → seed, kernel, ember (things
                        shaped like eyes). e.g., <em>aga‑ini</em> “pandanus‑eye”
                        = pandanus nut.
                      </li>
                      <li>
                        <strong>iri</strong> ‘hair’ → grass, feather (things
                        like hair). e.g., <em>mena‑iri</em> “pig‑hair” = stiff
                        grass.
                      </li>
                      <li>
                        <strong>ki</strong> general “limb/appendage” → arm,
                        hand, finger, thigh.
                      </li>
                      <li>
                        <strong>ora</strong> adjective “true” and adverb “very”.
                      </li>
                    </ul>
                  </li>
                </ol>

                <p>
                  By tracking these patterns you can infer each root meaning and
                  translate every phrase in the dataset.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= Problem 2025-5 ================= -->
        <div class="accordion-item mb-3">
          <h2 class="accordion-header" id="p2025-5-head">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#p2025-5-body"
              aria-expanded="false"
              aria-controls="p2025-5-body">
              Problem 2025‑5 · Kaqchikel Syntax & fMRI Mapping
            </button>
          </h2>
          <div
            id="p2025-5-body"
            class="accordion-collapse collapse"
            aria-labelledby="p2025-5-head"
            data-bs-parent="#iolAccordion">
            <div class="accordion-body">
              <h5 class="ai-section-title text-info">Answer</h5>
              <pre class="ai-pre">
a_A: q’ëq
a_B: ri
a_C: Xeroyoj
a_D: ri taq xar
a_E: Xkinïm ri taq käq
a_F: ri xar ri taq säq
a_G: Ri taq xar
a_H: ri käq
a_I: Ri säq xeruch’äy ri taq q’ëq

b_9:
• Two or more white stick figures pushing or lunging at a single black stick figure.

b_10:
• Two or more red stick figures punch two or more blue stick figures.
• Two or more blue stick figures punch two or more red stick figures.

c (all grammatical orders):
• Ri xar xroyoj ri säq
• Xroyoj ri säq ri xar
• Xroyoj ri xar ri säq
• Ri säq xroyoj ri xar

d_11_frontal_cortex: higher
d_11_auditory_cortex: higher
d_11_explanation: The sentence has a VAP (Verb-Agent-Patient) structure. This is a non-canonical word order, leading to higher frontal cortex activity (difficulty), and it is verb-initial, leading to higher auditory cortex activity (surprise).

d_12_frontal_cortex: lower
d_12_auditory_cortex: higher
d_12_explanation: The sentence has a VPA (Verb-Patient-Agent) structure. This is a canonical word order, leading to lower frontal cortex activity (ease of processing), but it is verb-initial, leading to higher auditory cortex activity (surprise).

d_13_frontal_cortex: cannot predict
d_13_auditory_cortex: lower
d_13_explanation: The sentence is NP-initial, which results in lower auditory activity. However, both the agent and patient are plural, and the verb is marked for both plural agent and plural patient. This makes the sentence ambiguous between the canonical AVP order (which would cause lower frontal activity) and the non-canonical PVA order (which would cause higher frontal activity). Therefore, the frontal cortex activity cannot be predicted.
            </pre
              >

              <h5 class="ai-section-title mt-4">Explanation</h5>
              <div class="ai-exp">
                <p>
                  <strong>The puzzle:</strong> You see Kaqchikel sentences
                  (colors + stick figures), and brain activity data. You must
                  figure out how the grammar works and why certain word orders
                  change brain responses.
                </p>

                <h6>1. Noun Phrases (NPs)</h6>
                <ul>
                  <li>
                    Structure: <code>ri</code> (definite article) + color.
                    Plural = <code>ri taq X</code> (“the X‑s”).
                  </li>
                </ul>

                <h6>2. Verb Morphology (completive aspect)</h6>
                <p>Template: <code>x‑[ABSOLUTIVE]‑[ERGATIVE]‑ROOT</code></p>
                <ul>
                  <li>
                    <strong>Absolutive (patient):</strong> Ø‑ (3sg),
                    <code>e‑</code> (3pl).
                  </li>
                  <li>
                    <strong>Ergative (agent):</strong> 3sg <code>u‑ / r‑</code>,
                    3pl <code>ki‑ / k‑</code> (allomorph depends on the next
                    sound).
                  </li>
                  <li>
                    <strong>Phonology:</strong> If plural ABS <code>e‑</code> is
                    followed by 3sg ERG <code>u‑</code>, an <code>r</code> is
                    inserted: <code>x‑e‑ru‑...</code>
                  </li>
                </ul>

                <h6>3. Word order & brain activity</h6>
                <p>
                  Kaqchikel allows several permutations of Verb (V), Agent (A),
                  Patient (P). Brain scans show:
                </p>
                <ul>
                  <li>
                    <strong>Auditory cortex (“surprise”):</strong> Higher when
                    the sentence starts with a verb (V‑initial). Lower when an
                    NP comes first.
                  </li>
                  <li>
                    <strong>Frontal cortex (“processing effort”):</strong> Lower
                    for canonical orders (AVP, VPA). Higher for non‑canonical
                    orders (VAP, PVA).
                  </li>
                </ul>

                <p><strong>Patterns recap:</strong></p>
                <ul>
                  <li><strong>AVP</strong> – Low Frontal, Low Auditory</li>
                  <li><strong>VPA</strong> – Low Frontal, High Auditory</li>
                  <li><strong>VAP</strong> – High Frontal, High Auditory</li>
                  <li><strong>PVA</strong> – High Frontal, Low Auditory</li>
                </ul>

                <p>
                  <strong
                    >Why d_13 is “can’t predict” for frontal cortex:</strong
                  >
                  The sentence starts with an NP (low auditory). But both NPs
                  are plural and the verb has both plural markers, so it’s
                  ambiguous between AVP (easy) and PVA (hard). Hence frontal
                  activity is uncertain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-8">
    <h2 id="paper" class="text-center my-5 mx-auto fw-bold">Our Paper</h2>
    <h4 class="text-center w-70 mx-auto mb-4">
      LingBench++: A Linguistically-Informed Benchmark and Reasoning Framework
      for Multi-Step and Cross-Cultural Inference with LLMs
    </h4>
    <p class="text-justify w-70 mx-auto lead mb-4">
      We propose LingBench++, a linguistically-informed benchmark and reasoning
      framework designed to evaluate large language models (LLMs) on complex
      linguistic tasks inspired by the International Linguistics Olympiad (IOL).
      Unlike prior benchmarks that focus solely on final answer accuracy,
      LingBench++ provides structured reasoning traces, stepwise evaluation
      protocols, and rich typological metadata across over 90 low-resource and
      cross-cultural languages. We further develop a multi-agent architecture
      integrating grammatical knowledge retrieval, tool-augmented reasoning, and
      deliberate hypothesis testing. Through systematic comparisons of baseline
      and our proposed agentic models, we demonstrate that models equipped with
      external knowledge sources and iterative reasoning outperform single-pass
      approaches in both accuracy and interpretability. LingBench++ offers a
      comprehensive foundation for advancing linguistically grounded, culturally
      informed, and cognitively plausible reasoning in LLMs.
    </p>
    <a
      class="btn btn-primary max-w-40 bg-gradient-info mx-auto mb-4"
      href="https://arxiv.org/abs/2409.17066"
      >Read the full paper on arXiv</a
    >
  </div>

  <div
    class="card card-body blur bg-gradient-dark shadow-blur mx-3 mx-md-4 mt-n6 mb-8">
    <h2 id="our-app" class="text-center text-white my-5 fw-bold">
      Download the App
    </h2>
    <div class="w-70 text-center items-center row mx-auto">
      <h5 class="text-center mb-3 text-white">For iOS users</h5>
      <p class="text-justify lead text-white mb-4">
        You can download the app directly using the link below, or simply search
        <b>“2025 IOL”</b> on App Store:
        <a
          class="text-light"
          href="https://apps.apple.com/us/app/2025-iol/id6748054270"
          >https://apps.apple.com/us/app/2025-iol/id6748054270</a
        >
      </p>
      <h5 class="text-center my-3 text-white">For Android users</h5>
      <p class="text-justify lead text-secondary mb-2 text-white">
        Please join the Google Group before downloading the app. Click
        <b>“Join group”</b> or <b>“Joining the group”</b> at
        <a class="text-light" href="https://groups.google.com/g/2025-iol"
          >https://groups.google.com/g/2025-iol</a
        >.
      </p>
      <p class="text-justify lead text-secondary mb-4 text-white">
        Once you’ve become a group member, you can download the app
        <a
          class="text-light"
          href="https://play.google.com/store/apps/details?id=com.william12995.iol2025"
          ><b>here</b></a
        >
      </p>
      <h5 class="text-white text-center my-3">For Web users</h5>
      <p class="text-white text-justify lead mb-5">
        You can access the web version (chatbot feature only) here:
        <a
          class="text-light"
          href="https://lopen.linguistics.ntu.edu.tw/iol2025/"
          >https://lopen.linguistics.ntu.edu.tw/iol2025/</a
        >
      </p>
    </div>
  </div>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-8">
    <h2 id="our-team" class="text-center my-5">Our Team</h2>
    <div class="row w-100">
      <div class="col-lg-4">
        <AboutInformation />
      </div>
      <div class="col-lg-8">
        <AboutTeam />
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>

<style scoped>
/* Accordion text blocks */
.ai-pre {
  white-space: pre-wrap;
  word-break: break-word;
  font-family: "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #102a43;
  background: #eef2f5;
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  margin: 0 0 1.5rem;
  overflow-x: auto;
}
.ai-exp {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #344767;
  background: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
}
.ai-section-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #344767;
}

/* Optional tweaks */
#ai-answers .accordion-button {
  font-weight: 600;
}
.table {
  table-layout: fixed;
}
.table th,
.table td {
  font-size: 1.05rem;
  vertical-align: top;
  word-wrap: break-word;
  white-space: pre-wrap;
  padding: 0.75rem 1rem;
}
section > p {
  font-size: 1.05rem;
  color: #374151;
}
.bg-cover {
  background-size: cover !important;
}
.bg-center {
  background-position: center center !important;
}
</style>
