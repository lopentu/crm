<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

// sections
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";

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
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy">
      <div class="container">
        <div class="row">
          <div
            class="text-center mx-auto position-relative justify-content-center">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }">
              IOL Reasoning Model
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Solving International Olympiad in Linguistics problems with Large
              Reasoning Models.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationPages />
    <BuiltByDevelopers /> -->

    <div class="container">
      <div class="row"></div>
    </div>
    <PresentationTestimonials />

    <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }">
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${wavesWhite})`
        }"
        loading="lazy">
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 text-center">
                <h3 class="text-white">
                  How do we know that this is the best solution?
                </h3>
                <p class="text-white font-weight-normal text-lg">
                  Body text goes here
                </p>

                <RouterLink
                  to="/overview"
                  class="btn btn-sm mb-0 bg-gradient-info px-5 py-3 mt-4 text-md">
                  Project Overview</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-center p-5">
          <div class="col-lg-8 text-center">
            <h3 class="text-black">
              Compare our solution with other benchmarks...
            </h3>
            <p class="text-black font-weight-normal text-lg">
              Body text goes here
            </p>

            <RouterLink
              to="/benchmarks"
              class="btn btn-sm mb-0 bg-gradient-info px-5 py-3 mt-4 text-md">
              Read More</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
