<template>
  <article
    data-orientation="vertical"
    class="relative rounded-lg overflow-hidden flex flex-col bg-elevated/50 ring ring-default transition hover:bg-elevated hover:ring-accented"
  >
    <div
      class="relative overflow-hidden aspect-[16/9] w-full pointer-events-none"
    >
      <NuxtImg
        width="437"
        height="246"
        alt="Roadmap to v4 image"
        data-nuxt-img=""
        class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover/blog-post:scale-110"
        :src="post.img"
      />
    </div>
    <div class="min-w-0 flex-1 flex flex-col p-4 sm:p-6">
      <a
        :href="post.href"
        :aria-label="post.title"
        class="focus:outline-none"
        target="_blank"
      >
        <span class="absolute inset-0" aria-hidden="true" />
      </a>
      <div class="flex items-center gap-2 mb-2">
        <span
          v-for="(tag, tag_idx) in post.tags"
          :key="tag_idx"
          class="font-medium inline-flex items-center text-xs px-2 py-1 gap-1 rounded-md bg-primary/10 text-primary ring ring-inset ring-primary/25"
          ><span class="truncate">{{ tag }}</span></span
        >
        <div class="text-sm text-muted">
              {{ post.date }}</div>
      </div>
      <h2 class="text-xl text-pretty font-semibold text-highlighted">
        {{ post.title }}
      </h2>
      <div
        v-show="post.description"
        class="mt-1 text-base text-pretty text-toned"
      >
        {{ post.description }}
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface PostItem {
  title: string;
  description?: string;
  img: string;
  date: string;
  tags: string[];
  href: string;
}

defineProps<{ post: PostItem }>();
</script>

<style scoped></style>
