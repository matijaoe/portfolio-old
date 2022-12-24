<script lang="ts" setup>
defineProps<{
  icon?: string
  label?: string
}>()
</script>

<template>
  <button
    flex gap-2 items-center justify-center
    text="sm default"
    py="2" px-3
    bg-default-3
    transition-base rounded-lg
    class="hover:(ring-2 ring-stone-2 dark:ring-stone-7)"
  >
    <div v-if="$slots.icon || icon">
      <slot name="icon">
        <Icon v-if="icon" :name="icon" text-lg />
      </slot>
    </div>
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
