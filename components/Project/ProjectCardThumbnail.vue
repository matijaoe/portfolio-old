<script lang="ts" setup>
defineProps<{
  shown: boolean
  thumbnail: string
}>()
</script>

<template>
  <div
    absolute
    top="50%"
    right="-80% sm:-60% md:-25% lg:-10% xl:-35"
    rounded-lg
    overflow-hidden
    transition
    class="-translate-y-20 scale-130 opacity-4 rotate-12 filter-saturate-0 z-1"
    :class="[
      { 'lg:(visible opacity-100 -rotate-3 -translate-x-20 -translate-y-35 scale-130 filter-saturate-100 z-10)': shown },
    ]"
  >
    <a relative :href="thumbnail" target="_blank">
      <img
        h-64
        :src="thumbnail"
      >
    </a>
  </div>
</template>
