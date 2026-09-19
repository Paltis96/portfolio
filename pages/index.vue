<template>
  <div>
    <SectionHero />
    <SectionExperience />
    <SectionTechStack />
    <SectionProjects />
  </div>
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: () => t('navigation.home'),
})

</script>

