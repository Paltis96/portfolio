<template>
  <div
    class="relative flex rounded-lg bg-elevated/50 ring ring-default overflow-hidden"
  >
    <div
      class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-0 sm:p-0"
    >
      <div class="flex flex-col flex-1 items-start">
        <div class="relative mb-0 aspect-video">
          <NuxtImg width="600" height="338" :src="data.img" />
        </div>

        <div class="flex-1 p-4 h-[105px]">
          <div
            class="text-base text-pretty font-semibold text-highlighted flex items-center w-full"
          >
            <div class="w-full grid grid-cols-[1fr_auto] items-center gap-2">
              <p class="truncate m-0">{{ data.title }}</p>
              <div class="flex shrink-0 gap-1" />
            </div>
          </div>
          <div class="text-[15px] text-pretty text-muted mt-1 line-clamp-2">
            {{ data.description }}
          </div>
        </div>
        <div class="pt-4 mt-0 px-4 pb-4 w-full">
          <UButtonGroup
            size="lg"
            class="relative inline-flex -space-x-px w-full"
          >
            <UButton
              block
              :href="data.demo"
              :disabled="data.demo ? false : true"
              target="_blank"
              icon="i-lucide-laptop"
              color="neutral"
              variant="subtle"
              label="Demo"
            />
            <UButton
              block
              :disabled="data.source ? false : true"
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
    uk:string,
    en:string
}

interface Card {
  title: string;
  description: string;
  img: string;
  date?: string;
  tags?: string[];
  source?: string;
  demo?: string;
}
defineProps<{ data: Card }>();
</script>

<style scoped></style>
