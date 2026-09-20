<template>
  <div
    data-aos="fade-1n"
    data-aos-delay="500"
    data-aos-once="true"
    class="absolute container isolate md:top-15 left-1/2 -translate-x-1/2 inset-x-0 overflow-hidden z-0"
  >
    <div
      ref="tiles"
      class="transition-opacity duration-700"
      :class="ready ? 'opacity-100' : 'opacity-0'"
    >
    <InfiniteSlideBar class="flex pt-4">
      <div class="flex justify-between">
        <div
          v-for="i in 9"
          :key="i"
          class="flex m-auto mr-2 size-[86px] md:size-[156px] rounded-lg bg-muted border border-default dark:shadow-lg"
        >
          <NuxtImg
            :src="`/map-images/maps/maps_${i + 1}.webp`"
            alt=""
            aria-hidden="true"
            format="webp"
            fit="cover"
            quality="92"
            densities="2 3"
            width="156"
            height="156"
            sizes="86px md:156px"
            loading="lazy"
            decoding="async"
            class="img-reveal h-full w-full rounded-[inherit] object-cover"
          />
        </div>
      </div>
    </InfiniteSlideBar>
    <InfiniteSlideBar direction="reverse" class="flex pt-4">
      <div class="flex justify-between">
        <div
          v-for="i in 9"
          :key="i"
          class="flex m-auto mr-2 size-[86px] md:size-[156px] rounded-lg bg-muted border border-default dark:shadow-lg"
        >
          <NuxtImg
            :src="`/map-images/analysis/analysis_${i + 1}.webp`"
            alt=""
            aria-hidden="true"
            format="webp"
            fit="cover"
            quality="92"
            densities="2 3"
            width="156"
            height="156"
            sizes="86px md:156px"
            loading="lazy"
            decoding="async"
            class="img-reveal h-full w-full rounded-[inherit] object-cover"
          />
        </div>
      </div>
    </InfiniteSlideBar>
    </div>
    <div
      class="absolute left-0 top-0 h-[1000px] w-1/2 z-10 bg-linear-to-bl from-default/0 to-default to-50%"
    />
    <div
      class="absolute right-0 top-0 h-[1200px] w-1/2 z-10 bg-linear-to-br from-default/0 to-default to-50%"
    />
    <div
      class="absolute top-0 left-0 right-0 size-full z-10 bg-linear-to-t from-default to-default/15"
    />
  </div>
</template>

<script setup lang="ts">
const tiles = ref<HTMLElement | null>(null);
const { ready } = useImageReveal(tiles);
</script>
