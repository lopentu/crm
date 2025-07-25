<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import justin from "@/assets/img/teamPhoto/Justin.png";
import una from "@/assets/img/teamPhoto/Una.png";
import jenny from "@/assets/img/teamPhoto/Jenny.png";
import peter from "@/assets/img/teamPhoto/Peter.png";
import richard from "@/assets/img/teamPhoto/Richard.png";
import riSheng from "@/assets/img/teamPhoto/Ri-Sheng.jpg";
import bruce from "@/assets/img/teamPhoto/Bruce.png";
import han from "@/assets/img/teamPhoto/Han.png";
import tyler from "@/assets/img/teamPhoto/Tyler.png";
import you from "@/assets/img/teamPhoto/You-Kuan.png";
</script>

<template>
  <section class="pb-5 position-relative">
    <div
      class="container bg-gradient-dark overflow-hidden py-5 px-4 shadow"
      style="border-radius: 16px">
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h3 class="text-white m-0">Members</h3>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-4"
            :image="una"
            :profile="{ name: 'Pin-Er Chen', link: 'https://github.com/cckk2913' }"
            :position="{ label: 'PhD', color: 'info' }"
            description="National Taiwan University" />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-4"
            :image="richard"
            :profile="{
              name: 'Da-Chen Lian',
              link: 'https://github.com/dachenlian'
            }"
            :position="{ label: 'PhD', color: 'info' }"
            description="National Taiwan University" />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="peter"
            :profile="{
              name: 'Pin-Cheng Chen',
              link: 'https://github.com/gPeterh'
            }"
            :position="{ label: 'Research Assistant', color: 'info' }"
            description="National Taiwan University" />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="jenny"
            :profile="{
              name: 'Zhen-Yu Lin',
              link: 'https://github.com/Lin-Zhen-Yu'
            }"
            :position="{ label: 'Research Assistant', color: 'info' }"
            description="National Taiwan University" />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="riSheng"
            :profile="{
              name: 'Ri-Sheng Huang',
              link: 'https://github.com/rszia'
            }"
            :position="{ label: 'MA', color: 'info' }"
            description="National Taiwan University" />
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="bruce"
            :profile="{
              name: 'Guan-Yu Tseng',
              link: 'https://github.com/bbrruu'
            }"
            :position="{ label: 'MA', color: 'info' }"
            description="National Taiwan University" />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="you"
            :profile="{
              name: 'You-Kuan Lin',
              link: 'https://github.com/Eskartur'
            }"
            :position="{
              label: 'Electrical Engineering Undergraduate',
              color: 'info'
            }"
            description="National Taiwan University" />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="han"
            :profile="{ name: 'Chih-Han Lin', link: 'william12995.github.io' }"
            :position="{ label: 'MA', color: 'info' }"
            description="National Taiwan University" />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="tyler"
            :profile="{
              name: 'Lang-Ching Yeh',
              link: 'https://github.com/confusedkernel'
            }"
            :position="{ label: 'MA', color: 'info' }"
            description="National Taiwan University" />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="justin"
            :profile="{
              name: 'Hung-Chi Chen',
              link: 'https://github.com/JustinChen516'
            }"
            :position="{ label: 'Intern', color: 'info' }"
            description="Washington University in St. Louis" />
        </div>
      </div>
    </div>
  </section>
</template>
