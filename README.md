# Portfolio — Denys Kovshun

Personal portfolio (Nuxt 4 + Nuxt UI + Nuxt Content), EN/UK.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # server output (.output)
npm run generate  # static output (.output/public)
```

## Structure

- `content/projects/{en,uk}/*.yml` — project entries, one file per project per locale
- `i18n/locales/*.json` — UI strings, work history, education
- `components/section/*` — homepage sections
- `public/` — source images; Nuxt Image generates resized/webp variants at build
