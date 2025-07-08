<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'lucide:moon' : 'lucide:sun'"
      color="neutral"
      variant="ghost"
      size="xl"
      class="rounded-full px-4 hover:bg-accented"
      @click="isDark = !isDark"
    />
  </ClientOnly>
</template>
<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>
