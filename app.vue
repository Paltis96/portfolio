<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
const { t } = useI18n();
const head = useLocaleHead();
const site = useSiteConfig();

// lang attribute, canonical, and hreflang alternates for the current route
useHead(() => ({
  htmlAttrs: head.value.htmlAttrs,
  link: head.value.link,
  meta: head.value.meta,
  titleTemplate: (title?: string) =>
    title ? `${title} | ${t("hero.name")}` : `${t("hero.name")} — ${t("hero.title")}`,
}));

useSeoMeta({
  description: () => t("seo.description"),
  ogType: "website",
  ogSiteName: () => t("hero.name"),
  ogTitle: () => `${t("hero.name")} — ${t("hero.title")}`,
  ogDescription: () => t("seo.description"),
  ogImage: `${site.url}/og.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => `${t("hero.name")} — ${t("hero.title")}`,
});
</script>
