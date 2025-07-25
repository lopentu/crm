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
    <h2 id="findings" class="text-center my-5">Research Findings</h2>

    <!-- ===== AI Answers (IOL Experiments) ===== -->
    <section id="ai-answers" class="mb-5">
      <h3 class="fw-bold text-center mb-4">AI Answers from IOL Experiments</h3>
      <p
        class="text-center text-muted mb-5"
        style="max-width: 70ch; margin: 0 auto">
        Below are the exact AI outputs (Answer + Explanation) for each 2025 IOL
        problem. Click to expand.
      </p>

      <div class="accordion" id="iolAccordion">
        <!-- Problem 2025-1 -->
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
              <h6 class="text-info fw-bold">Answer</h6>
              <pre
                class="bg-light p-3 rounded small"
                style="white-space: pre-wrap">
  a_X: sum a_Y: ke sum da ɲi a_Z: ɲiɕu ɲi da ke ʑi da ŋa
  b_1: 13 + 70 = 83
  b_2: 800 = 20 × 40
  b_3: 469 = (50 × 9) + 19
  b_4: 600 + 110 = 500 + 210
  b_5: (2 × 0.25) + 0.5 = 1
  b_6: (1100 × 0.5) + 50 = 600
  b_7: 736 = (84 × 4) + 400
  b_8: 2 × 609 = (3 × 400) + 18
  b_9: 62 + 24 = 86
  b_10: 885 + 115 = 1000
  c_75_system_A: ke ko-da ʑi
  c_75_system_B: dønŋa
  c_570_system_A: ɲiɕu ci da ke ge da cutãm
  c_570_system_B: ŋapɟa døn
              </pre>

              <h6 class="mt-4 fw-bold">Explanation</h6>
              <p class="small" style="white-space: pre-wrap">
                Dzongkha uses two numbering systems for numbers above 19, built
                upon a set of basic numerals. 1. Basic Numerals (1–19): The
                digits 1–9 are: ci(1), ɲi(2), sum(3), ʑi(4), ŋa(5), ɖu(6),
                dyn(7), ge(8), gu(9). The number 10 is cu or cutãm. Numbers from
                11–19 are formed by prefixing a variant of cu (10) to a digit,
                e.g., cuɲi (12 = 10+2), ceŋa (15), cygu (19). 2. System A
                (Vigesimal/Base‑20): This system is based on powers of 20. The
                bases are ke (20) and ɲiɕu (400, which is 20²). Numbers are
                constructed additively in a hierarchical structure: (M₁ × ɲiɕu)
                da (M₂ × ke) da U, where M₁, M₂, and U are multipliers (1–19),
                da means "and", and multiplication is shown by juxtaposition
                (e.g., ke sum = 20 × 3 = 60). A special subtractive form, Base
                X‑da Y, is used for non‑integer multipliers, calculating as Base
                × (Y − X). The data reveals pɟe = 0.5 (a half) and ko = 0.25 (a
                quarter). For example, ke pɟe‑da ʑi calculates to 20 × (4 − 0.5)
                = 70. This subtractive form is typically used when the number
                divided by the base results in a multiplier ending in .5 or .75,
                as it often produces a more concise expression. 3. System B
                (Decimal‑based): This system is largely decimal. Tens either
                have unique names (e.g., tsa = 20, døn = 70) or are formed by
                combining a digit root with ‑cu or ‑pcu (e.g., sumcu = 30, gepcu
                = 80). Units are appended directly (e.g., dønɖu = 70+6 = 76).
                Hundreds are formed by suffixing ‑ɟa (100) to a digit root,
                sometimes with phonetic changes (e.g., sumɟa = 300, ŋapɟa =
                500). 4. Key Polysemous Terms: • ɟa: This word's value depends
                on its position. As a suffix (‑ɟa), it means 100. As a prefix
                (ɟa‑), it means 80 and is used for numbers 81–89 (e.g., ɟagu =
                80+9 = 89). • ɲiɕu: This word also has two values. In the
                structure of System A, it represents the base 400. However, when
                used as a number in an arithmetic context (as on the right side
                of eq. 2), it means 20. 5. Problem Correction: Equation (5) as
                written, (ɲi × ko) + pɟe = ɲi, translates to the false statement
                1 = 2. The right‑hand side is assumed to be a typo for ci (1),
                making the equation (2 × 0.25) + 0.5 = 1. By applying these
                rules, all equations can be translated into their numerical
                equivalents, the unknowns can be solved for and written in the
                appropriate system, and new numbers can be generated in both
                systems.
              </p>
            </div>
          </div>
        </div>

        <!-- Problem 2025-2 -->
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
              <h6 class="text-info fw-bold">Answer</h6>
              <pre
                class="bg-light p-3 rounded small"
                style="white-space: pre-wrap">
  a_1: S  a_2: G  a_3: Q  a_4: F  a_5: R  a_6: N  a_7: D  a_8: C  a_9: K  a_10: I
  a_11: O a_12: B a_13: L a_14: M a_15: E a_16: P a_17: T a_18: H a_19: J a_20: A
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
              </pre>

              <h6 class="mt-4 fw-bold">Explanation</h6>
              <p class="small" style="white-space: pre-wrap">
                Possession in Gaahmg is marked through two primary strategies,
                which define different noun classes. 1. Prefixing Nouns: Most
                nouns take a possessive prefix. These are subdivided into three
                classes based on a vowel harmony system, where the prefix vowel
                generally matches the noun's class: • A-class (vowel /a/): e.g.,
                máàm 'grindstone', tááðà 'shoulder'. Prefixes: á-, ā-, āg-. •
                E-class (vowel /ɛ, i/): e.g., îl 'anchor', ìlə̄ə̄g 'grandfathers'.
                Prefixes: ɛ̄-, ɛ̄g-. • O-class (vowel /ɔ, u/): e.g., ābɛ́ɛ́ 'uncle',
                tùndùlīīg 'dogs'. Prefixes: ɔ́-, ɔ̄-, ɔ̄g-. 2. Postposing Nouns: A
                smaller group of nouns are followed by a separate possessive
                pronoun. This group includes áðág 'hammer', gùùr 'horn', ɖɔ̄ɔ̄r
                'grandmother' (sg.), ʈɛ́ɛ̀l 'cheeks', and ʈɛ́ɛ̀lààg 'aunts' (pl.).
                Noun Number & Irregularity: Plurality of the possessed noun is
                marked in various ways, including suffixation (gùùr → gùùrììg),
                suppletion (îl → pɛ̀bàrɛ̄ɛ̄g). Some nouns switch their possessive
                strategy between singular and plural forms. For example, ɖɔ̄ɔ̄r
                'grandmother' is postposing in the singular, but its plural
                mə̄ə̄ðə́ə̄d 'grandmothers' is prefixing. Similarly, fə̄ndə́g 'aunt' is
                prefixing in the singular, but its suppletive plural ʈɛ́ɛ̀lààg
                'aunts' is postposing. Possessive Markers & Syncretism: The
                system features significant syncretism, where one form has
                multiple meanings, often distinguished by the number
                (singular/plural) of the possessed noun. • Prefixes: ○ á-: 'my'
                (with plural noun) OR 'your sg.' (with singular noun). ○ ā- /
                āg-: 'our' (with singular noun). ○ āg-: 'his' (with plural
                noun). ○ ɛ̄-: 'your sg.' (for E-class nouns). It also has a
                special function meaning 'his' that overrides noun class. ○ ɔ́-:
                'your sg.' (for O-class nouns). ○ ɔ̄-: 'our' OR 'his' (both with
                plural nouns). ○ ɛ̄g-: 'your pl.' ○ ɔ̄g-: 'your pl.' OR 'their'. •
                Postposed Pronouns: ○ íìnī, úùn, ínìgī: allomorphs for 'my'
                (1sg). ○ ə̄yən, ūyùg: allomorphs for 'his' (3sg). ○ ə́nəg: 'their'
                (3pl).
              </p>
            </div>
          </div>
        </div>

        <!-- Problem 2025-3 -->
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
              <h6 class="text-info fw-bold">Answer</h6>
              <pre
                class="bg-light p-3 rounded small"
                style="white-space: pre-wrap">
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
              </pre>

              <h6 class="mt-4 fw-bold">Explanation</h6>
              <p class="small" style="white-space: pre-wrap">
                The structure of a Kuria verb is: (Emphatic Prefix) – Subject
                Prefix – Tense/Aspect Marker (TAM) – Verb Root – Final Vowel
                '-a'. 1. Morphemes & Phonology: • Subject Prefixes: n- 'I', a-
                'he', to- 'we', ꞵa- 'they'. • n- becomes m- before a bilabial
                consonant (e.g., mꞵína), and combines with the prospective
                marker -ra- to form nda-. In the present tense with root rom,
                n-rom-a becomes ndóma. • Tense/Aspect Markers (TAMs): ○ Present:
                No marker (Ø). ○ Perfect ('has/have V-ed'): A vowel -a- that
                fuses with the subject prefix vowel, creating a long vowel (naa-
                from n-a-, aa- from a-a-, too- from to-a-, ꞵaa- from ꞵa-a-). ○
                Prospective ('about to V'): Marker -ra- is inserted after the
                subject prefix. • Emphatic Prefix ('Indeed'): A homorganic nasal
                prefix N- is added to perfect tense forms. For example: N- + aa-
                (he has) → naa-; N- + too- (we have) → ntoo-; N- + ꞵaa- (they
                have) → mbaa-. 2. Tonal System: Verb roots are divided into two
                main classes based on their tonal behavior: L-roots and H-roots.
                • L-Roots (e.g., ry eat, sy grind, rom bite, ꞵiim measure):
                These roots generally have low tones. ○ Perfect & Prospective:
                All syllables have a low tone (e.g., naarya, toraroma,
                toraꞵiima). ○ Emphatic Perfect: The final vowel -a receives a
                high tone: -á (e.g., nnaasyá, ntooꞵiimá). ○ Present:
                Monosyllabic roots take a high tone on the root vowel (e.g.,
                ndóma). • H-Roots (e.g., ꞵin sing, saamb burn, sukur rub, heetok
                remember, turuuŋan welcome): ○ Present & Prospective: High tones
                appear on all vowels of the verb root (e.g., asáámba, ahéétóka,
                torasáámba). ○ Perfect: The tone pattern depends on the root's
                length (number of vowels). ■ Short roots (1–2 vowels): A high
                (-á) or rising (-ǎ) tone appears on the final vowel (e.g.,
                toosaambá, aaꞵinǎ, ꞵaasukurá). ■ Long roots (3+ vowels): High
                tones appear on the root vowels themselves (e.g., aahéétóka from
                heetok). ○ Emphatic Perfect: A high tone is placed on the first
                vowel of the root (e.g., mbaaꞵúna, naaꞵína).
              </p>
            </div>
          </div>
        </div>

        <!-- Problem 2025-4 -->
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
              <h6 class="text-info fw-bold">Answer</h6>
              <pre
                class="bg-light p-3 rounded small"
                style="white-space: pre-wrap">
  a_15: D  a_16: N  a_17: T  a_18: L  a_19: W  a_20: O  a_21: Y  a_22: H  a_23: I  a_24: G
  a_25: A  a_26: Q  a_27: C  a_28: V  a_29: P  a_30: K  a_31: U  a_32: F  a_33: M  a_34: E  a_35: J  a_36: X  a_37: S  a_38: R  a_39: B

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
              </pre>

              <h6 class="mt-4 fw-bold">Explanation</h6>
              <p class="small" style="white-space: pre-wrap">
                The Kewa language builds complex concepts primarily through
                compounding and exhibits extensive polysemy, where words have
                multiple, often metaphorically related, meanings. 1. Compounding
                and Word Order: Kewa uses a consistent Modifier‑Head word order
                for compounds. The first element modifies or specifies the
                second. This is evident in pairs like mena‑ada ('pig‑house' →
                pig sty) versus ada‑mena ('house‑pig' → domesticated pig).
                Adjectives and adverbs also precede the words they modify, as in
                adaa naaki (big boy) and ora adaa poripu ('very big wind' →
                tempest). 2. Possession: The genitive (possessive) case is
                marked by the suffix -na attached to the possessor, which
                precedes the possessed noun. For example, naakina ini‑agaa
                (boy's face) is formed from naaki (boy) + -na (possessive) and
                ini‑agaa (face). 3. Polysemy and Metaphor: A core feature of
                Kewa is that single root words cover a wide semantic field, with
                specific meanings determined by context, often through
                metaphorical extension. • repena: The core meaning is 'tree' or
                'wood'. This extends to 'fire' (made from wood) and 'light'
                (emitted by fire). Examples: repena ene (swelling on a tree),
                repena‑ini ('fire‑eye' → coals), repena‑agaa
                ('fire‑tongue/light' → headlights). • agaa: Related to 'mouth'
                and its functions, extending to 'tooth', 'tongue', 'language',
                'talk', and 'beak'. Examples: adaa‑agaa ('main language' →
                mother tongue), agaa nala (toothache), yaa‑agaa ('bird‑mouth' →
                bird's beak). • ini: Primary meaning 'eye'. Extended to things
                resembling an eye (seed, kernel, ember). Examples: ini apaa
                ('eye‑egg' → eyeball), repena‑ini ('fire‑eye' → coals), aga‑ini
                ('pandanus‑eye' → pandanus nut). • iri: Means 'hair', extended
                to fibrous things like 'grass' and 'feathers'. Examples:
                yagaa‑iri ('jaw‑hair' → beard), mena‑iri ('pig‑hair' → tough
                grass). • ki: General term for 'limb/appendage', can refer to
                'arm', 'hand', 'finger', or 'thigh'. Examples: adaa ki (middle
                finger), ki‑komaa (whole arm), mena‑ki (pig thigh). • ora:
                Functions as adjective 'true' (orada dia 'it is not true') and
                intensifying adverb 'very' (ora adaa 'very big'). 4. Vocabulary
                Derivation: By analyzing the compounds, meanings of numerous
                roots were determined: mena (pig), yaa (bird), uni (bone), ada
                (house/nest), naaki (boy), nogo (girl), pamoagae (old woman),
                balina (foreign/white man), poripu (wind), boke (hole), suku
                (bright/shiny), aga (seed/nut), nala (ache/pain), dia (not),
                nina (my), etc. These deductions allow translation of all
                phrases in the problem.
              </p>
            </div>
          </div>
        </div>

        <!-- Problem 2025-5 -->
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
              <h6 class="text-info fw-bold">Answer</h6>
              <pre
                class="bg-light p-3 rounded small"
                style="white-space: pre-wrap">
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

  c:
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
              </pre>

              <h6 class="mt-4 fw-bold">Explanation</h6>
              <p class="small" style="white-space: pre-wrap">
                The Kaqchikel sentences exhibit an ergative‑absolutive alignment
                system and flexible word order, which correlate with the
                observed brain activity. 1. Noun Phrase (NP) Structure: Noun
                phrases consist of a determiner and a noun (a color). The
                singular definite article is <em>ri</em> (e.g.,
                <em>ri xar</em> 'the blue one'). The plural is formed by adding
                <em>taq</em> after the article: <em>ri taq säq</em> ('the white
                ones'). 2. Verb Morphology: Transitive verbs in the completive
                aspect are marked with the prefix <em>x-</em> and agree with
                both the agent (ergative) and the patient (absolutive). The
                prefix structure is
                <code>x-[ABSOLUTIVE]-[ERGATIVE]-[VERB ROOT]</code>. • Absolutive
                prefixes (Patient): Ø- for 3sg, e- for 3pl. • Ergative prefixes
                (Agent): 3sg u- (before consonant) / r- (before vowel); 3pl ki-
                (before consonant) / k- (before vowel). • Phonological Rule:
                When plural absolutive <em>e-</em> is followed by singular
                ergative <em>u-</em>, an <em>r</em> is inserted (x-e-ru- ...).
                3. Word Order & Brain Activity Correlation: • Auditory Cortex
                (Surprise): Higher for verb‑initial sentences (VPA, VAP); lower
                for NP‑initial (AVP, PVA). • Frontal Cortex (Processing
                Difficulty): Lower for canonical AVP & VPA; higher for
                non‑canonical VAP & PVA. Summary of Patterns: • AVP: Lower
                Frontal, Lower Auditory (e.g., Sentence 2) • VPA: Lower Frontal,
                Higher Auditory (e.g., Sentence 1) • VAP: Higher Frontal, Higher
                Auditory (e.g., Sentence 3) • PVA: Higher Frontal, Lower
                Auditory (e.g., Sentence 4) These rules allow decoding of
                sentence structure, reconstruction of missing elements,
                interpretation of ambiguous sentences, and prediction of
                cognitive load based on syntax.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-8">
    <h2 id="paper" class="text-center my-5">Our Paper</h2>
    <h4 class="text-center w-70 mx-auto">
      LingBench++: A Linguistically-Informed Benchmark and Reasoning Framework
      for Multi-Step and Cross-Cultural Inference with LLMs
    </h4>
    <p class="text-justify lead mb-5 w-70 mx-auto">
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
      class="btn btn-md bg-gradient-info text-center min-w-20 mx-auto"
      rel="noopener"
      href="https://arxiv.org/abs/2507.16809">
      View our paper on Arxiv.org
    </a>
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
        <a class="text-light" href="https://groups.google.com/g/2025-iol">
          https://groups.google.com/g/2025-iol </a
        >.
      </p>
      <p class="text-justify lead text-secondary mb-4 text-white">
        Once you’ve become a group member, you can download the app
        <a
          class="text-light"
          href="https://play.google.com/store/apps/details?id=com.william12995.iol2025">
          <b>here</b>
        </a>
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
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <h2 id="our-team" class="text-center my-5">Our Team</h2>
    <div class="row justify-content-center w-100 mb-5">
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

<style>
/* Optional fine-tuning */
#ai-answers pre {
  overflow-x: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
#ai-answers .accordion-button {
  font-weight: 600;
}
</style>
