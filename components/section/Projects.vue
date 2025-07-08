<template>
  <SectionWrapper :title="$t('title-projects')" >
    <ProjectItemList limit />
    <UButton
      trailing-icon="lucide:arrow-right"
      class="mt-12"
      size="xl"
      label="See all projects"
      variant="link"
      to="/projects"
    />
  </SectionWrapper>
</template>

<script setup lang="ts"></script>
