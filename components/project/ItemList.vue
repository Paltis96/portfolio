<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <ProjectCard
      v-for="(item, idx) in limit ? projects.slice(0, 3) : projects"
      :key="idx"
      :data="item"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ limit?: boolean }>();
const projects = [
  {
    title: "Serverless Web GIS",
    description: "111",
    img: "/thumbnail-images/web-gis.png",
    demo: "https://dev-maps-f0cff.web.app/",
  },
  {
    title: "Industrial zones conversion",
    description: "111",
    img: "/thumbnail-images/prom-zome.png",

  }
];
</script>

<style scoped></style>
