<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
    name: String,
    link: String,
  },
  position: {
    type: Object,
    label: String,
    color: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="text-center">
    <a :href="profile.link">
      <img
        :src="image"
        :alt="profile.name"
        class="rounded-circle shadow mb-3"
        style="width: 120px; height: 120px; object-fit: cover"
      />
    </a>
    <h6 class="mb-1 text-white">{{ profile.name }}</h6>
    <p :class="`text-${position.color} text-sm mb-1`">{{ position.label }}</p>
    <p class="text-white-50 text-sm">{{ description }}</p>
  </div>
</template>
