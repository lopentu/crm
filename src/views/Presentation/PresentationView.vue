<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

// sections
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";

//images
import vueMkHeader from "@/assets/img/aboutUsLogo/Background.png";
//hooks
const body = document.getElementsByTagName("body")[0];
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
    loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div
            class="text-center mx-auto position-relative justify-content-center">
            <h1
              class="text-white pt-3 mt-n5 me-2 font-"
              :style="{ display: 'inline-block ' }">
              Cultural Reasoning Model
            </h1>
            <p
              class="lead text-white px-5 mt-3"
              :style="{ whiteSpace: 'nowrap', fontWeight: '500' }">
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
    <PresentationTestimonials />
  </div>
  <DefaultFooter />
</template>
<style>
.bg-cover  { background-size: cover !important; }
.bg-center { background-position: center center !important; }
</style>
