<template>
  <div class="flex space-x-2">
    <UButton
      v-for="(v, idx) in social"
      :key="idx"
      class="p-2 hover:cursor-pointer"
      color="neutral"
      variant="ghost"
      :href="v.href"
      external
      target="_blank"
      
    >
      <template #leading>
        <UIcon :name="v.icon" class="size-6!" />
      </template>
    </UButton>
  </div>
</template>

<script setup lang="ts">
const social = [
  {
    name: "linkedin",
    icon: "ri:linkedin-line",
    href: "https://www.linkedin.com/in/dkovshun/",
  },
  {
    name: "github",
    icon: "iri:github-line",
    href: "https://github.com/Paltis96",
  },
];
</script>
