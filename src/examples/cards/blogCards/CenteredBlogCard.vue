<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    color: String,
    route: String,
    label: String,
    titleRoute: String,
    default: () => ({
      color: "bg-gradient-success",
      label: "This is default",
      route: "https://lope.linguistics.ntu.edu.tw/",
      titleRoute: 'https://loperntu.github.io/'  // name link
    }),
  },
});
</script>
<template>
  <div class="card">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a
        :href="action.route"
        target="_blank"
        rel="noopener"
        class="d-block blur-shadow-image"
      >
        <img :src="image" :alt="title" class="img-fluid border-radius-lg" />
      </a>
    </div>

    <div class="card-body text-center">
      <h5 class="font-weight-normal">
        <a
          :href="action.titleRoute"
          target="_blank"
          rel="noopener"
          class="text-decoration-none"
        >
          {{ title }}
        </a>
      </h5>

      <p class="mb-0">{{ description }}</p>
      <a
        :href="action.route"
        target="_blank"
        rel="noopener"
        class="btn btn-sm mb-0 mt-3"
        :class="action.color"
        style="text-transform: none"
      >
        {{ action.label }}
      </a>
    </div>
  </div>
</template>
