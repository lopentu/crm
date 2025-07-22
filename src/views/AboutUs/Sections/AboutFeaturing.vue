<script setup>
// example component
import iol from "@/assets/img/aboutUsLogo/ILO.png";
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
            :src="iol"
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
    </div>
  </section>
</template>
