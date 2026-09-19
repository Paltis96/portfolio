<template>
  <div class="relative flex rounded-lg bg-elevated/50 ring ring-default overflow-hidden">
    <div class="relative flex flex-col flex-1">
      <div class="relative w-full aspect-video overflow-hidden"> 
        <NuxtImg
          :src="data.img"
          :alt="data.title"
          format="webp"
          fit="cover"
          quality="92"
          width="400"
          height="225"
          sizes="sm:100vw md:50vw lg:400px"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col flex-1 p-4 sm:p-6">
        <div class="flex items-center gap-2 mb-2">
          <UBadge variant="subtle">
            {{ data.tag }}
          </UBadge>
          <span v-if="formattedDate" class="text-sm text-muted">
            {{ formattedDate }}
          </span>
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
  date?: string | Date;
  tag?: string;
  source?: string;
  demo?: string;
}

const props = defineProps<{ data: Card }>();
const { locale } = useI18n();

const formattedDate = computed(() => {
  if (!props.data.date) return "";
  const d = new Date(props.data.date);
  if (Number.isNaN(d.getTime())) return "";
  // formatToParts drops the locale's era/literal suffix (uk renders "бер. 2026 р.")
  return new Intl.DateTimeFormat(locale.value, { month: "short", year: "numeric" })
    .formatToParts(d)
    .filter((part) => part.type === "month" || part.type === "year")
    .map((part) => part.value)
    .join(" ");
});
</script>
