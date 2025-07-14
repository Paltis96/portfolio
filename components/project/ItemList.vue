<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    title: "Powerful platform for analyzing spatial data in the browser.",
    img: "/thumbnail-images/web-gis.png",
    demo: "https://dev-maps-f0cff.web.app/",
    tag: "PoC",
  },
  {
    title: "Repurposing of industrial zones for residential development",
    img: "/thumbnail-images/prom-zome.png",
    tag: "Data viz",
    demo: "https://data-viz-prom-zones.netlify.app",
    source: "https://github.com/Paltis96/data-viz-prom-zones",
  },
];
</script>

<style scoped></style>
