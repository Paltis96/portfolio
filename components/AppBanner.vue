<template>
  <div
    class="flex items-center hover:bg-green-400/10 rounded-md px-3 py-1 text-sm/6 text-muted transition-all"
  >
    <UChip color="success" standalone inset class="absolute" />

    <UChip color="success" standalone inset class="animate-ping" />
    <span class="pl-2 text-green-500 dark:text-green-400">{{
      $t("open-work")
    }}</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
