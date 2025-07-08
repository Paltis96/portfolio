<template>
  <div
    :class="`border-t-1 border-zinc-900/10 dark:border-white/10 py-6 lg:py-12 ${bgClass}`"
  >
    <div
      class="container min-h-10 mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-6 lg:py-12 flex flex-col items-center"
    >
      <h2
        v-if="title"
        class="text-xl sm:text-2xl lg:text-3xl text-pretty tracking-tight font-bold text-highlighted mb-8"
      >
        {{ title }}
      </h2>

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  bgClass?: string;
}>();
</script>
