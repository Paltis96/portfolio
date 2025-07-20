<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
useHead({
  title: "Portfolio | Denys Kovshun",
  link: [{ rel: "preload", as: "image", href: "/avatar.png" }],
   meta: [
    { name: 'description', content: 'Fullstack GIS developer.' }
  ],
});
</script>
