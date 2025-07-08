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
    'nuxt-aos'
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'uk', name: 'Ukrainian', file: 'uk.json' }
    ],
    defaultLocale: 'en',
  }, icon: {
    clientBundle: {
      icons: [
        "lucide:moon",
        "lucide:sun",
        "lucide:languages-uk",
        "lucide:languages-gb",
        "lucide:file",
        "lucide:arrow-right",
        "simple:icons-python",
        "simple:icons-javascript",
        "simple:icons-typescript",
        "simple:icons-geopandas",
        "simple:icons-gdal",
        "simple:icons-postgresql",
        "simple:icons-mysql",
        "simple:icons-duckdb",
        "simple:icons-googlebigquery",
        "simple:icons-fastapi",
        "simple:icons-react",
        "simple:icons-vuedotjs",
        "simple:icons-leaflet",
        "simple:icons-mapbox",
        "simple:icons-cesium",
        "simple:icons-qgis",
        "simple:icons-arcgis",
        "simple:icons-microsoftazure",
        "ri:linkedin-line",
        "iri:github-line"
      ],
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    }
  }
})