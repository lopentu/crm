<script setup>
// example components
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              title="Goal"
              description="可能來寫我們是誰 怎麼組成的等等？會比較好 避免跟overview衝突到" />
            <DefaultInfoCard
              color="info"
              icon="payments"
              title="Payments functionality"
              description="2" />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="apps"
              title="Prebuilt components"
              description="3" />
            <DefaultInfoCard
              color="info"
              icon="3p"
              title="Improved platform"
              description="4" />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="謝舒凱 教授"
            description="經驗／履歷"
            :action="{
              label: 'Visit the LOPE Lab',
              color: 'bg-gradient-success',
              route: 'https://lope.linguistics.ntu.edu.tw/',
              titleRoute: 'https://loperntu.github.io/',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
