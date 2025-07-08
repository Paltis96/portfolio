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
    icon: "i-simple-icons-python",
    tag: "Programming",
  },
  {
    name: "JavaScript",
    icon: "i-simple-icons-javascript",
    tag: "Programming",
  },
  {
    name: "TypeScript",
    icon: "i-simple-icons-typescript",
    tag: "Programming",
  },
  {
    name: "Geopandas",
    icon: "i-simple-icons-geopandas",
    tag: "Programming",
  },
  {
    name: "Shapely",
    icon: "",
    tag: "GIS Libraries",
  },
  {
    name: "GDAL",
    icon: "i-simple-icons-gdal",
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
    icon: "i-simple-icons-postgresql",
    tag: "Databases",
  },
  {
    name: "MySQL",
    icon: "i-simple-icons-mysql",
    tag: "Databases",
  },
  {
    name: "DuckDB",
    icon: "i-simple-icons-duckdb",
    tag: "Databases",
  },
  {
    name: "BigQuery",
    icon: "i-simple-icons-googlebigquery",
    tag: "Databases",
  },
  {
    name: "FastAPI",
    icon: "i-simple-icons-fastapi",
    tag: "Web Development",
  },
  {
    name: "React",
    icon: "i-simple-icons-react",
    tag: "Web Development",
  },
  {
    name: "Vue",
    icon: "i-simple-icons-vuedotjs",
    tag: "Web Development",
  },
  {
    name: "Leaflet.js",
    icon: "i-simple-icons-leaflet",
    tag: "Web Development",
  },
  {
    name: "Mapbox",
    icon: "i-simple-icons-mapbox",
    tag: "Web Development",
  },
  {
    name: "Cesium.js",
    icon: "i-simple-icons-cesium",
    tag: "Web Development",
  },
  {
    name: "Deck.gl",
    icon: "",
    tag: "Web Development",
  },
  {
    name: "QGIS",
    icon: "i-simple-icons-qgis",
    tag: "Tools & Platforms",
  },
  {
    name: "ArcGIS",
    icon: "i-simple-icons-arcgis",
    tag: "Tools & Platforms",
  },
  {
    name: "Azure",
    icon: "i-simple-icons-microsoftazure",
    tag: "Tools & Platforms",
  },
];
</script>
