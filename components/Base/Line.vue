<script setup lang="ts">
withDefaults(defineProps<{
  type: 'vertical' | 'horizontal'
}>(), {
  type: 'horizontal',
})

const styles = 'w-full bg-stone-4 opacity-80'
</script>

<template>
  <div v-if="type === 'horizontal'" h="1px" :class="styles" />
  <div v-else-if="type === 'vertical'" w="1px" :class="styles" />
</template>
