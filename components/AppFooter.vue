<template>
  <SectionWrapper class="py-0!">
    <div class="flex items-center justify-between w-full mb-18 md:mb-0">
      <span class="mt-0.5 text-muted text-sm"> Copyright © {{ year }}</span>
      <AppSocialButtons /></div
  ></SectionWrapper>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
