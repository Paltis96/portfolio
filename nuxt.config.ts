// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-icons',
    '@nuxtjs/i18n',
    'nuxt-aos',
    '@nuxt/content'
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'uk', name: 'Ukrainian', file: 'uk.json' }
    ], bundle: {
      optimizeTranslationDirective: false,
    },
    defaultLocale: 'en',
  }, icon: {
    serverBundle: {
      collections: ['lucide', 'ri', 'simple-icons', "circle-flags"]
    },
    clientBundle: {
      icons: [
        "lucide:moon",
        "lucide:sun",
        "circle-flags:lang-uk",
        "circle-flags:lang-uk",
        "lucide:file",
        "lucide:arrow-right",
        "simple-icons:python",
        "simple-icons:javascript",
        "simple-icons:typescript",
        "simple-icons:geopandas",
        "simple-icons:gdal",
        "simple-icons:postgresql",
        "simple-icons:mysql",
        "simple-icons:duckdb",
        "simple-icons:googlebigquery",
        "simple-icons:fastapi",
        "simple-icons:react",
        "simple-icons:vuedotjs",
        "simple-icons:leaflet",
        "simple-icons:mapbox",
        "simple-icons:cesium",
        "simple-icons:qgis",
        "simple-icons:arcgis",
        "simple-icons:microsoftazure",
        "ri:linkedin-line",
        "ri:github-line"
      ],
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    }
  }
})