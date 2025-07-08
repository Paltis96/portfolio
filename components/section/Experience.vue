<template>
  <SectionWrapper :title="$t('title-experience')">
    <UTabs color="neutral" :items="items" class="lg:w-2/3">
      <template #work>
        <div class="p-4 bg-elevated/50 ring ring-default rounded-lg">
          <UTimeline :items="work" class="w-full mt-2">
            <template #date="{ item }">
              {{ item.datelocal[localeProperties.code] }}
            </template>
            <template #description="{ item }">
              <ul class="list-disc ml-4">
                <li
                  v-for="(descr, idx) in item.descriptions[localeProperties.code]"
                  :key="idx"
                >
                  {{ descr }}
                </li>
              </ul>
            </template>
          </UTimeline>
        </div>
      </template>
      <template #educarion>
        <div class="p-4 bg-elevated/50 ring ring-default rounded-lg">
          <UTimeline :items="educarion" class="w-full mt-2">
            <template #title="{ item }">
              {{ item.titlelocal[localeProperties.code] }}
            </template>
            <template #description="{ item }">
              {{ item.descriptions[localeProperties.code] }}
            </template>
          </UTimeline>
        </div>
      </template>
    </UTabs>
  </SectionWrapper>
</template>

<script setup lang="ts">
import type { TabsItem, TimelineItem } from "@nuxt/ui";
const { t, localeProperties } = useI18n();
const items = ref<TabsItem[]>([
  {
    label: t("tabs-experience-work"),
    slot: "work" as const,
  },
  {
    label: t("tabs-experience-educarion"),
    slot: "educarion" as const,
  },
]);

const work = ref<TimelineItem[]>([
  {
    date: "Jan 2025 – Present",
    datelocal: { en: "Jan 2025 – Present", uk: "Січень 2025 - теперішній час" },
    title: "Full Stack GIS Developer – JetSoftPro",
    descriptions: {
      en: [
        "Automated cultivation and maintenance workflows for agricultural fields.",
        "Designed and developed web-based mapping tools for field management and route optimization.",
        "Built a custom vector tiles generation and management service to support scalable map rendering.",
      ],
      uk: [
        "Автоматизація робочих процесів обробітку та обслуговування сільськогосподарських полів ",
        "Проектування та розробка веб-картографічних інструментів для управління полями та оптимізації маршрутів ",
        "Створення власного сервісу генерації та управління векторними плитками для підтримки масштабованого рендерингу мап",
      ],
    },
    avatar: {
      src: "/work-avatars/jsp.jpeg",
    },
  },
  {
    date: "Nov 2023 – Nov 2024",
    datelocal: {
      en: "Nov 2023 – Nov 2024",
      uk: "Листопад 2023 - Листопад 2024",
    },
    title: "GIS Analyst – Zoniq",
    descriptions: {
      en: [
        "Developed analytic solutions to identify profitable EV charger locations.Led geospatial data collection and ELT pipeline development.",
        "Built scouting and site evaluation algorithms for EV infrastructure planning.",
        "Optimized infrastructure and services for enhanced data processing efficiency.",
      ],
      uk: [
        "Розробка аналітичних рішень для визначення вигідних місць розташування зарядних станцій для електромобілів. Керівництво збором геопросторових даних та розробка трубопроводу ELT.",
        "Створення алгоритмів пошуку та оцінки місць для планування інфраструктури електромобілів.",
        "Оптимізація інфраструктури та послуг для підвищення ефективності обробки даних.",
      ],
    },
    avatar: {
      src: "/work-avatars/zoniq.jpeg",
    },
  },
  {
    date: "Nov 2022 – Nov 2023",
    datelocal: {
      en: "Nov 2022 – Nov 2023",
      uk: "Листопад 2022 - Листопад 2023",
    },
    title: "Backend GIS Developer – Jito",
    descriptions: {
      en: [
        "Worked with global property databases using machine vision and deep learning.",
        "Designed ELT pipelines and optimized geospatial databases.",
        "Developed services for high-volume geospatial data processing and web app prototypes.",
      ],
      uk: [
        "Працював з глобальними базами даних нерухомості з використанням машинного зору та глибинного навчання.",
        "Розробляв конвеєри ELT та оптимізував геопросторові бази даних.",
        "Розробляв сервіси для обробки великих обсягів геопросторових даних та прототипи веб-додатків.",
      ],
    },

    avatar: {
      src: "/work-avatars/jito.jpeg",
    },
  },
  {
    date: "Jul 2022 – Nov 2022",
    datelocal: { en: "Jul 2022 – Nov 2022", uk: "Липень 2022 - Листопад 2022" },
    title: "Full Stack GIS Developer – Upwork",
    descriptions: {
      en: [
        "Interfaced with clients to estimate tasks and select technologies.",
        "Developed serverless web GIS, routing services, and desktop GIS apps.",
        "Integrated geospatial tools into existing client platforms.",
      ],
      uk: [
        "Взаємодіяв з клієнтами для оцінки завдань і вибору технологій ",
        "Розробляв безсерверні веб-ГІС, сервіси маршрутизації та настільні ГІС-додатки",
        "Інтегрував геопросторові інструменти в існуючі клієнтські платформи",
      ],
    },

    avatar: {
      src: "/work-avatars/upwork.jpeg",
    },
  },
  {
    date: "Nov 2020 – Nov 2022",
    datelocal: {
      en: "Nov 2020 – Nov 2022",
      uk: "Листопад 2020 - Листопад 2022",
    },
    title: "GIS Analyst / Developer – M4U Estate",

    descriptions: {
      en: [
        "Delivered spatial analytics for real estate development and sales.",
        "Built and maintained geospatial databases and ELT pipelines.",
        "Developed network analysis tools and interactive web maps for client insights.",
      ],
      uk: [
        "Здійснював просторову аналітику для девелопменту та продажу нерухомості ",
        "Створював та підтримував геопросторові бази даних та конвеєри ELT ",
        "Розробляв інструменти мережевого аналізу та інтерактивні веб-карти для інсайтів клієнтів",
      ],
    },

    avatar: {
      src: "/work-avatars/m4u.jpeg",
    },
  },
]);

const educarion = ref<TimelineItem[]>([
  {
    title: "National University of Life and Environmental Sciences of Ukraine",
    titlelocal: {
      en: "National University of Life and Environmental Sciences of Ukraine",
      uk: "НУБіП України",
    },
    descriptions: {
      en: "Law",
      uk: "Право",
    },
    description: "Law",
    avatar: {
      src: "/education-avatars/nubip.jpeg",
    },
  },
  {
    title: "National University of Life and Environmental Sciences of Ukraine",
    titlelocal: {
      en: "National University of Life and Environmental Sciences of Ukraine",
      uk: "НУБіП України",
    },
    description: "Geography and Cartography",
    descriptions: {
      en: "Geodesy and land management",
      uk: "Геодезії та землеустрою",
    },
    avatar: {
      src: "/education-avatars/nubip.jpeg",
    },
  },
]);
</script>
