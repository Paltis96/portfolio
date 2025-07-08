<template>
  <div
    data-aos="fade-1n"
    data-aos-delay="500"
    data-aos-once="true"
    class="absolute container isolate md:top-15 left-1/2 -translate-x-1/2 inset-x-0 overflow-hidden z-0"
  >
    <InfiniteSlideBar class="flex pt-4">
      <div class="flex justify-between">
        <div
          v-for="i in 9"
          :key="i"
          class="flex m-auto mr-2 size-[86px] md:size-[156px] rounded-lg bg-muted border border-default dark:shadow-lg"
        >
          <NuxtImg
            alt="wideangle"
            role="img"
            class="h-full w-full rounded-[inherit] object-cover"
            :src="`/map-images/maps/maps_${i + 1}.webp`"
            sizes="86px md:156px"
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
            alt="wideangle"
            role="img"
            class="h-full w-full rounded-[inherit] object-cover"
            :src="`/map-images/analysis/analysis_${i + 1}.webp`"
            sizes="86px md:156px"
          />
        </div>
      </div>
    </InfiniteSlideBar>
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