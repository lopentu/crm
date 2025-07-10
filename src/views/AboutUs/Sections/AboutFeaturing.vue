<script setup>
// example component
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
import ilo from "@/assets/img/aboutUsLogo/ILO.png";
</script>
<template>
  <section class="pt-4 pb-6" id="count-stats">
    <div class="container">
      <div class="row mb-7">
        <div class="col-lg-4 col-md-6 col-10 mb-4">
        <a
          href="https://iol2025.ioling.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="d-block"
        >
          <img
            :src="ilo"
            class="w-100 opacity-100"
            alt="International Linguistics Olympiad 2025 logo"
          />
        </a>
      </div>
      <div class="col-lg-4 col-md-6 col-10 mb-4">
        <a
          href="https://iol2025.ioling.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="d-block"
        >
          <img
            :src="i"
            class="w-100 opacity-100"
            alt="在想可以放做出來的App"
          />
        </a>
      </div>
      <div class="col-lg-4 col-md-6 col-10 mb-4">
        <a
          href="https://iol2025.ioling.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="d-block"
        >
          <img
            :src="i"
            class="w-100 opacity-100"
            alt="放寫出來的paper"
          />
        </a>
      </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-md-3">
          <DefaultCounterCard
            title="研究成果"
            description="Of “high-performing” level are led by a certified project manager"
            :count="5234"
            :duration="3000" />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard
            title="研究成果"
            description="That meets quality standards required by our users"
            :count="3400"
            suffix="+"
            :duration="3000" />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard
            title="研究成果"
            description="Actively engage team members that finishes on time"
            :count="24"
            suffix="/7"
            :duration="4000" />
        </div>
      </div>
    </div>
  </section>
</template>
