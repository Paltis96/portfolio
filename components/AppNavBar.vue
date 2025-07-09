<template>
  <header class="fixed inset-x-0 max-sm:bottom-5 lg:top-5 z-50">
    <nav class="flex items-center justify-center">
      <div
        class="flex bg-muted/80 backdrop-blur-sm rounded-full border border-muted/50 shadow-lg shadow-neutral-950/5"
      >
        <UButtonGroup>
          <UButton
            v-for="item in navigation"
            :key="item.name"
            :to="localePath(item.to)"
            color="neutral"
            variant="ghost"
            size="xl"
            class="rounded-full hover:bg-accented"
            :label="item.name"
          />
          <UButton
            icon="lucide:file"
            color="neutral"
            variant="ghost"
            size="xl"
            class="rounded-full hover:bg-accented"
            :label="$t('navigation.resume')"
            :href="cv"
            target="_blank"
          />
          <AppLocaleButton />
          <AppColorModeButton />
        </UButtonGroup>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import cv from "~/public/files/D. Kovshun CV 2025.pdf";
const { t } = useI18n();
const localePath = useLocalePath();
const navigation = computed(() => [
  { name: t("navigation.home"), to: "index" },
  { name: t("navigation.projects"), to: "projects" },
]);
</script>

<style lang="scss" scoped></style>
