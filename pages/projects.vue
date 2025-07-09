<template>
  <div
    class="min-h-[calc(100%-58px)] md:min-h-[calc(100%-92px)] lg:min-h-[calc(100%-142px)] lg:pt-[62px]"
  >
    <div
      class="w-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid gap-16 sm:gap-y-24 py-10 sm:py-20 lg:py-20"
    >
      <div class="text-center">
        <div class="">
          <h1
            class="text-5xl text-pretty tracking-tight font-bold text-highlighted sm:text-5xl"
          >
            {{ $t("project.title") }}
          </h1>
          <!-- <div class="text-lg sm:text-xl/8 text-muted text-balance mt-6">
            {{ $t("project.subtitle") }}
          </div> -->
        </div>
      </div>
    </div>
    <SectionWrapper><ProjectItemList /></SectionWrapper>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
