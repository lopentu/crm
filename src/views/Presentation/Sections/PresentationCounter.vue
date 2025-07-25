<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="info"
                title="Individual Contest"
                description="14/0/9.5/18/19.5"
                :count="61"
                :duration="1000"
                divider="vertical" />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Design Blocks"
                description="Mix the sections, change the colors and unleash your
                  creativity"
                :count="15"
                suffix="+"
                :duration="3000"
                divider="vertical" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
