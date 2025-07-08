<template>
  <SectionWrapper :title="$t('title-tech-stack')" bg-class="bg-elevated/50">
    
    <div class="flex min-h-6 gap-4 flex-wrap lg:max-w-2/3" >
      <div
        v-for="(v, idx) in items"
        :key="idx"
        class="flex p-2 transition-colors bg-muted hover:bg-accented rounded-md items-center"
      >
        <UIcon v-show="v.icon" class="mr-2 size-6!" :name="v.icon" />
        {{ v.name }}
      </div>
    </div>
  </SectionWrapper>
</template>
<script setup lang="ts">
const items = [
  {
    name: "Python",
    icon: "simple:icons-python",
    tag: "Programming",
  },
  {
    name: "JavaScript",
    icon: "simple:icons-javascript",
    tag: "Programming",
  },
  {
    name: "TypeScript",
    icon: "simple:icons-typescript",
    tag: "Programming",
  },
  {
    name: "Geopandas",
    icon: "simple:icons-geopandas",
    tag: "Programming",
  },
  {
    name: "Shapely",
    icon: "",
    tag: "GIS Libraries",
  },
  {
    name: "GDAL",
    icon: "simple:icons-gdal",
    tag: "GIS Libraries",
  },
  {
    name: "Rasterio",
    icon: "",
    tag: "GIS Libraries",
  },
  {
    name: "Osmnx",
    icon: "",
    tag: "GIS Libraries",
  },
  {
    name: "OSRM",
    icon: "",
    tag: "GIS Libraries",
  },
  {
    name: "Valhalla",
    icon: "",
    tag: "GIS Libraries",
  },
  {
    name: "pgRouting",
    icon: "",
    tag: "GIS Libraries",
  },
  {
    name: "PostGIS",
    icon: "",
    tag: "GIS Libraries",
  },
  {
    name: "PostgreSQL",
    icon: "simple:icons-postgresql",
    tag: "Databases",
  },
  {
    name: "MySQL",
    icon: "simple:icons-mysql",
    tag: "Databases",
  },
  {
    name: "DuckDB",
    icon: "simple:icons-duckdb",
    tag: "Databases",
  },
  {
    name: "BigQuery",
    icon: "simple:icons-googlebigquery",
    tag: "Databases",
  },
  {
    name: "FastAPI",
    icon: "simple:icons-fastapi",
    tag: "Web Development",
  },
  {
    name: "React",
    icon: "simple:icons-react",
    tag: "Web Development",
  },
  {
    name: "Vue",
    icon: "simple:icons-vuedotjs",
    tag: "Web Development",
  },
  {
    name: "Leaflet.js",
    icon: "simple:icons-leaflet",
    tag: "Web Development",
  },
  {
    name: "Mapbox",
    icon: "simple:icons-mapbox",
    tag: "Web Development",
  },
  {
    name: "Cesium.js",
    icon: "simple:icons-cesium",
    tag: "Web Development",
  },
  {
    name: "Deck.gl",
    icon: "",
    tag: "Web Development",
  },
  {
    name: "QGIS",
    icon: "simple:icons-qgis",
    tag: "Tools & Platforms",
  },
  {
    name: "ArcGIS",
    icon: "simple:icons-arcgis",
    tag: "Tools & Platforms",
  },
  {
    name: "Azure",
    icon: "simple:icons-microsoftazure",
    tag: "Tools & Platforms",
  },
];
</script>
