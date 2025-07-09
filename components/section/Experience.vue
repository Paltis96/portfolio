<template>
  <SectionWrapper :title="$t('section.experience')"
    >
    <UTabs color="neutral" :items="items" class="w-full min-w-2/3 lg:w-2/3">
      <template #work>
        <div class="p-4 bg-elevated/50 ring ring-default rounded-lg">
          <UTimeline :items="work as any" class="w-full mt-2">
            <template #description="{ item }">
              <ul class="list-disc ml-4">
                <li v-for="(descr, idx) in item.descriptions" :key="idx">
                  {{ descr }}
                </li>
              </ul>
            </template>
          </UTimeline>
        </div>
      </template>
      <template #educarion>
        <div class="p-4 bg-elevated/50 ring ring-default rounded-lg">
          <UTimeline :items="educarion" class="w-full mt-2" />
        </div>
      </template>
    </UTabs>
  </SectionWrapper>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
const { t, tm, rt } = useI18n();
const items = ref<TabsItem[]>([
  {
    label: t("tabs-experience.work"),
    slot: "work" as const,
  },
  {
    label: t("tabs-experience.educarion"),
    slot: "educarion" as const,
  },
]);

const work = computed(() =>
  tm("work").map((x) => {
    return {
      title: rt(x.title),
      date: rt(x.date),
      avatar: { src: rt(x.avatar) },
      descriptions: x.descriptions.map((y) => rt(y)),
    };
  })
);

const educarion = computed(() =>
  tm("educarion").map((x) => {
    return {
      title: rt(x.title),
      description: rt(x.description),
      avatar: { src: rt(x.avatar) },
    };
  })
);
onMounted(() => {
  console.log(educarion.value);
});
</script>
