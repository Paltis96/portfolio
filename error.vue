<template>
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-primary">{{ error?.statusCode ?? 404 }}</p>
      <h1
        class="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl text-highlighted"
      >
        Page not found
      </h1>
      <p class="mt-6 text-lg font-medium text-pretty sm:text-xl/8  text-muted">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <UButton size="xl" label="Go back home" to="/" @click="clearError({ redirect: '/' })" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error?: NuxtError }>();
</script>
