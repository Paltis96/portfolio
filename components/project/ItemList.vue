<template>
  <div
    v-if="projects?.length"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <ProjectCard
      v-for="(item, idx) in limit ? projects.slice(0, 3) : projects"
      :key="idx"
      :data="item"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ limit?: boolean }>();
const {  localeProperties } = useI18n();
const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection(`projects_${localeProperties.value.code}`).all();
});
</script>

<style scoped></style>
