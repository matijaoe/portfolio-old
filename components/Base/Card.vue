<script lang="ts" setup>
withDefaults(defineProps<{
  as?: any
  noPadding?: boolean
  hoverable?: boolean
}>(), {
  hoverable: true,
})
</script>

<template>
  <div
    :as="as"
    flex flex-col
    transition-base
    rounded-2xl
    overflow-hidden
    ring-1 ring-transparent
    :class="{
      'hover:(translate-y--1 ring-2 ring-stone-8 dark:ring-stone-6)': hoverable,
    }"
  >
    <div
      bg-opaque
      :class="[noPadding ? 'p-0' : 'p-8']"
      flex-1 flex flex-col
      overflow-hidden
      transition-smooth
    >
      <slot />
    </div>
  </div>
</template>
