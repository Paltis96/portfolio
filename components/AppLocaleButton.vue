<template>
  <UPopover>
    <UButton
      icon="lucide:languages"
      color="neutral"
      variant="ghost"
      size="xl"
      class="rounded-full px-4 hover:bg-accented"
    />
    <template #content>
      <UButtonGroup orientation="vertical">
        <UButton
          v-for="(locale, idx) in locales"
          :key="idx"
          :label="locale.code"
          :icon="'circle:flags-lang-'+ locale.code"
          color="neutral"
          variant="ghost"
          @click="setLocale(locale.code)"
        />
      </UButtonGroup>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
const { locales, setLocale } = useI18n();
</script>
