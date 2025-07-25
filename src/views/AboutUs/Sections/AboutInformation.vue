<script setup>
// example components
import CenteredBlogCard from "../../../examples/cards/blogCards/CenteredBlogCard.vue";
import prof from "@/assets/img/teamPhoto/prof.png";
</script>
<template>
  <section>
    <div class="container pb-5 w-full h-100">
      <div class="m-0 p-0">
        <CenteredBlogCard
          :image="prof"
          title="Prof. Dr. Shu-Kai Hsieh (謝舒凱)"
          description="Research Area: Corpus and Computational Linguistics, Writing Systems, Semantics and Cognition"
          :action="{
            label: 'Visit LOPE',
            color: 'bg-gradient-info',
            route: 'https://lope.linguistics.ntu.edu.tw/',
            titleRoute: 'https://loperntu.github.io/'
          }" />
      </div>
    </div>
  </section>
</template>
