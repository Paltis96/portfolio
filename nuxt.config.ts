// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portfolio',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  compatibilityDate: '2025-05-15',
  site: {
    url: 'https://dkov.xyz',
    name: 'Denys Kovshun — Fullstack GIS developer',
  },
  image: {
    // sources live in assets/ so the originals are never served or deployed
    dir: 'assets/images',
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-aos',
    '@nuxtjs/i18n',
    '@nuxt/content',
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
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
    baseUrl: 'https://dkov.xyz',
  }, icon: {
    serverBundle: {
      collections: ['lucide', 'ri', 'simple-icons', 'circle-flags', 'simple-line-icons']
    },
    clientBundle: {
      icons: [
        "lucide:moon",
        "lucide:sun",
        "circle-flags:lang-uk",
        "circle-flags:lang-en",
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
        "ri:github-line",
        'simple-line-icons:map',
        'simple-line-icons:rocket',
        'lucide:laptop',
        'lucide:github',
        'lucide:languages'
      ],
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    }
  }
})