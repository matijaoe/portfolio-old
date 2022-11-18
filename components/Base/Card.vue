<script lang="ts" setup>
defineProps<{
  as?: any
  noPadding?: boolean
  alwaysBordered?: boolean
}>()
</script>

<template>
  <div
    :as="as"
    text-left
    rounded="[0.625rem]"
    :class="{ 'bg-stone-8 dark:bg-stone-4': alwaysBordered }"
    bg="hover:(stone-8 dark:stone-4)"
    p="0.5"
    class="hover:(-translate-y-1)"
    transition-base
    flex flex-col
  >
    <div
      :class="[noPadding ? 'p-0' : 'p-8']"
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
