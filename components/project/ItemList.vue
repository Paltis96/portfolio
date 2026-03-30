<template>
  <div
    v-if="projects?.length"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <ProjectCard v-for="(item, idx) in projects" :key="item.source" :data="item" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ limit?: number; tag?: string }>();
const { localeProperties } = useI18n();

const key = computed(() =>
  `projects-${props.tag ?? 'all'}-${props.limit ?? 'no-limit'}-${localeProperties.value.code}`
)

const { data: projects } = await useAsyncData(
  key,
  async () => {
    let query = queryCollection(`projects_${localeProperties.value.code}`)

    if (props.limit) {
      query = query.limit(props.limit)
    }

    if (props.tag) {
      query = query.where("tag", "=", props.tag)
    }

    return query.all()
  }
)

</script>
