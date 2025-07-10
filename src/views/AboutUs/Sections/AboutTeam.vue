<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
import justin from "@/assets/img/photo/Justin.jpg";
import una from "@/assets/img/photo/Una.png";
</script>

<template>
  <section class="pb-5 position-relative">
    <div class="container bg-gradient-dark overflow-hidden py-5 px-4 shadow" style="border-radius: 16px;">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">Members</h3>
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
            :image="justin"
            :profile="{ name: 'Justin Chen', link: 'https://github.com/JustinChen516' }"
            :position="{ label: '實習生', color: 'success' }"
            description="聖路易斯華盛頓大學"
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="william"
            :profile="{ name: 'William Pearce', link: 'javascript:;' }"
            :position="{ label: 'Boss', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="william"
            :profile="{ name: 'William Pearce', link: 'javascript:;' }"
            :position="{ label: 'Boss', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="william"
            :profile="{ name: 'William Pearce', link: 'javascript:;' }"
            :position="{ label: 'Boss', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="william"
            :profile="{ name: 'William Pearce', link: 'javascript:;' }"
            :position="{ label: 'Boss', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-2 col-6">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="ivana"
            :profile="{ name: 'Ivana Flow', link: 'javascript:;' }"
            :position="{ label: 'Athlete', color: 'success' }"
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
