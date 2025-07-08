<template>
  <div class="max-sm:w-full max-sm:h-screen">
    <HerroBgCarusel />
    <div class="relative isolate px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-18 lg:py-48">
        <div class="flex items-center justify-center lg:mt-0 gap-4">
          <NuxtImg
            src="/avatar.png"
            class="size-16 lg:size-25 rounded-full shadow-xl"
          />
          <div class="relative">
            <div
              class="bg-[var(--ui-bg)]/50 absolute top-0 left-0 w-full h-full z-0 blur-xl"
            />
            <h3 class="text-highlighted relative font-bold text-xl mb-1">
              {{ $t("name") }}
            </h3>
            <UBadge
              icon="i-circle-flags-lang-uk"
              variant="solid"
              size="md"
              color="neutral"
              class="relative"
            >
              {{ $t("location") }}</UBadge
            >
          </div>
        </div>
        <div class="text-center">
          <h1
            class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted mt-8"
          >
            Fullstack
            <span
              class="text-primary"
              >GIS</span
            >
            developer
          </h1>
          <p class="text-lg text-muted mt-6 text-balance">
            {{ $t("hero-subtitle") }}
          </p>
          <div class="mt-10 flex flex-col items-center justify-center gap-y-6">
            <div class="flex gap-x-6">
              <UButton
                class="hover:cursor-pointer"
                :label="$t('menu-resume')"
                size="xl"
                icon="i-lucide-file"
                :href="cv"
                target="_blank"
              />
              <AppBanner />
            </div>
            <AppSocialButtons />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cv from "~/public/files/D. Kovshun CV 2025.pdf";
</script>
