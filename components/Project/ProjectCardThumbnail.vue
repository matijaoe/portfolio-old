<script lang="ts" setup>
defineProps<{
  shown: boolean
  thumbnail: string
  alt: string
}>()
</script>

<template>
  <div
    absolute
    top="50%"
    right="-80% sm:-60% md:-25% lg:-10% xl:-35"
    rounded-md
    overflow-hidden
    transition duration-250
    class="-translate-y-20 scale-130 opacity-4 rotate-9 filter-saturate-0 z-9"
    :class="[
      { 'lg:(visible opacity-100 -rotate-3 -translate-x-30 -translate-y-35 scale-130 filter-saturate-100 z-10)': shown },
    ]"
  >
    <NuxtLink
      relative
      :href="thumbnail" target="_blank" external
    >
      <NuxtImg
        loading="lazy"
        h-64
        format="webp"
        :height="822"
        :src="thumbnail"
        :alt="alt"
      />
    </NuxtLink>
  </div>
</template>
