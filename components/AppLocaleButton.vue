<template>
  <UPopover v-model:open="open">
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
          :icon="'circle-flags:lang-' + locale.code"
          :color="locale.code == curLocale ? 'primary' : 'neutral'"
          :variant="locale.code == curLocale ? 'soft' : 'ghost'"
          @click="swichLocale(locale.code)"
        />
      </UButtonGroup>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
const { locales, setLocale, localeProperties } = useI18n();
const open = ref(false);

function swichLocale(code: "en" | "uk") {
  setLocale(code);
  open.value = !open.value;
}
const curLocale = computed(() => localeProperties.value.code);
</script>
