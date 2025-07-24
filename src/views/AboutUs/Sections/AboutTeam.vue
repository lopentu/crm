<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
import justin from "@/assets/img/teamPhoto/Justin.jpg";
import una from "@/assets/img/teamPhoto/Una.png";
import jenny from "@/assets/img/teamPhoto/Jenny.png";
import peter from "@/assets/img/teamPhoto/Peter.png";
import richard from "@/assets/img/teamPhoto/Richard.png";
import riSheng from "@/assets/img/teamPhoto/Ri-Sheng.jpg";
import bruce from "@/assets/img/teamPhoto/Bruce.png";
import han from "@/assets/img/teamPhoto/Han.png";


</script>

<template>
  <section class="pb-5 position-relative">
    <div class="container bg-gradient-dark overflow-hidden py-5 px-4 shadow" style="border-radius: 16px;">
      <div class="row">
        <div class="col-lg-2 col-6 mb-4 d-flex justify-content-center">
          <h3 class="text-white z-index-1 m-0">Members</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-4"
            :image="una"
            :profile="{ name: 'Una Chen', link: 'https://github.com/cckk2913' }"
            :position="{ label: '博士生', color: 'success' }"
            description="國立臺灣大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-4"
            :image="richard"
            :profile="{ name: 'Richard Lian', link: 'https://github.com/dachenlian' }"
            :position="{ label: '博士生', color: 'success' }"
            description="國立臺灣大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="peter"
            :profile="{ name: 'Peter Chen', link: 'https://github.com/gPeterh' }"
            :position="{ label: '研究助理', color: 'success' }"
            description="國立臺灣大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="jenny"
            :profile="{ name: 'Jenny Lin', link: 'https://github.com/Lin-Zhen-Yu' }"
            :position="{ label: '研究助理', color: 'success' }"
            description="國立臺灣大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="riSheng"
            :profile="{ name: 'Ri-Sheng Huang', link: 'https://github.com/rszia' }"
            :position="{ label: '碩士生', color: 'success' }"
            description="國立臺灣大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="bruce"
            :profile="{ name: 'Guan-Yu Tseng', link: 'https://github.com/bbrruu' }"
            :position="{ label: '碩士生', color: 'success' }"
            description="國立臺灣大學"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="ivana"
            :profile="{ name: 'You-Kuan Lin', link: 'https://github.com/Eskartur' }"
            :position="{ label: '電機系學士班', color: 'success' }"
            description="國立臺灣大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="han"
            :profile="{ name: 'Chih-Han Lin', link: 'william12995.github.io' }"
            :position="{ label: '碩士生', color: 'success' }"
            description="國立臺灣大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="justin"
            :profile="{ name: 'Justin Chen', link: 'https://github.com/JustinChen516' }"
            :position="{ label: '實習生', color: 'success' }"
            description="聖路易斯華盛頓大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
      </div>
    </div>
  </section>
</template>
