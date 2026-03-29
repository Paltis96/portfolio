<template>
  <div class="relative flex rounded-lg bg-elevated/50 ring ring-default overflow-hidden">
    <div class="relative flex flex-col flex-1">
      <div class="relative w-full aspect-video overflow-hidden"> 
        <NuxtImg 
          :src="data.img" 
          class="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          alt="Card image"
        />
      </div>

      <div class="flex flex-col flex-1 p-4 sm:p-6">
        <div class="flex items-center gap-2 mb-2">
          <UBadge v-for="(t, idx) in data.tags" :key="idx" variant="subtle">
            {{ t }}
          </UBadge>
        </div>
        
        <h2 class="text-xl text-pretty font-semibold text-highlighted mb-4">
          {{ data.title }}
        </h2>

        <UButtonGroup
          size="lg"
          class="relative inline-flex -space-x-px w-full mt-auto"
        >
          <UButton
            v-if="data.demo"
            block
            :href="data.demo"
            target="_blank"
            icon="lucide:laptop"
            variant="subtle"
            label="Demo"
          />
          <UButton
            v-if="data.source"
            block
            :href="data.source"
            target="_blank"
            icon="lucide:github"
            color="neutral"
            variant="subtle"
            label="Source"
          />
        </UButtonGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Card {
  title: string;
  img: string;
  date?: string;
  tags?: string[];
  source?: string;
  demo?: string;
}
defineProps<{ data: Card }>();
</script>

<style scoped></style>
