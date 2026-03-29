<template>
  <div
    class="min-h-[calc(100%-58px)] md:min-h-[calc(100%-92px)] lg:min-h-[calc(100%-142px)] lg:pt-15.5"
  >
    <div
      class="w-full container flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-8 lg:grid gap-8 sm:gap-y-12 py-10 sm:py-20 lg:py-20"
    >
      <div class="text-center">
        <h1
          class="text-5xl text-pretty tracking-tight font-bold text-highlighted sm:text-5xl"
        >
          {{ $t("project.title") }}
        </h1>
        <!-- <div class="text-lg sm:text-xl/8 text-muted text-balance mt-6">
            {{ $t("project.subtitle") }}
          </div> -->
      </div>
      <div class="flex md:max-w-l gap-4 justify-center">
        <UButton color="neutral" variant="outline"> All</UButton>
        <div v-for="(item, index) in tags" :key="index">
          <UButton color="neutral" variant="outline">
            <leadeng>
              <UIcon
                class="mr-2 flex align-middle justify-center"
                :name="item.icon"
              />
            </leadeng>
            {{ item.name }}</UButton
          >
        </div>
      </div>
    </div>
    <SectionWrapper><ProjectItemList /></SectionWrapper>
  </div>
</template>

<script setup lang="ts">
const tags = ref([
  { name: "GIS", icon: "simple-line-icons-map" },
  { name: "IoT", icon: "simple-icons-zigbee" },
  { name: "PoC", icon: "simple-line-icons-rocket" },
]);

useHead({
  title: "Portfolio: Projects",
});
</script>
