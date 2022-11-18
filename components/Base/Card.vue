<script lang="ts" setup>
defineProps<{
  as?: any
  noPadding?: boolean
}>()
</script>

<template>
  <div
    :as="as"
    text-left
    rounded="[0.625rem]"
    bg="hover:(stone-8 dark:stone-4)"
    p="0.5"
    class="hover:(-translate-y-1)"
    transition-base
    flex flex-col
  >
    <div
      :class="[noPadding ? 'p-0' : 'px-8 py-8']"
      flex-1
      flex
      flex-col
      rounded-lg
      overflow-hidden
      transition-smooth
      bg-default-3
    >
      <slot />
    </div>
  </div>
</template>
