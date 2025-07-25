<script setup>
// example components
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../examples/cards/blogCards/CenteredBlogCard.vue";
import prof from "@/assets/img/teamPhoto/prof.png";

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
            :image="prof"
            title="謝舒凱 教授"
            description="研究領域：語料庫及計算語言學 / 詞彙語意學與語用學 / 文字與構詞學 / 語言與認知"
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
