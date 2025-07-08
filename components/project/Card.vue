<template>
  <div
    class="relative flex rounded-lg bg-elevated/50 ring ring-default overflow-hidden"
  >
    <div
      class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-0 sm:p-0"
    >
      <div class="flex flex-col flex-1 items-start">
        <NuxtImg class="h-[350px] object-cover" width="600" height="400" densities="x1" :src="data.img" loading="lazy"  />
        <div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
          <div class="flex items-center gap-2 mb-2">
            <UBadge variant="subtle">{{ data.tag }}</UBadge>
          </div>
          <h2 class="text-xl text-pretty font-semibold text-highlighted">
            {{ data.title }}
          </h2>
          <UButtonGroup
            size="lg"
            class="relative inline-flex -space-x-px w-full mt-auto pt-4"
          >
            <UButton
              v-if="data.demo ? true : false"
              block
              :href="data.demo"
              target="_blank"
              icon="i-lucide-laptop"
              variant="subtle"
              label="Demo"
            />
            <UButton
              v-if="data.source ? true : false"
              block
              :href="data.source"
              target="_blank"
              icon="i-lucide-github"
              color="neutral"
              variant="subtle"
              label="Source"
            />
          </UButtonGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Translation {
  uk: string;
  en: string;
}

interface Card {
  title: string;
  img: string;
  date?: string;
  tag?: string;
  source?: string;
  demo?: string;
}
defineProps<{ data: Card }>();
</script>

<style scoped></style>
