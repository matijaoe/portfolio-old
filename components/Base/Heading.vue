<script lang="ts" setup>
type Props = {
as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

withDefaults(defineProps<Props>(), {
  as: 'p',
})
</script>

<template>
  <component
    v-bind="$attrs"
    :is="as"
    m="0"
    font="display"
    class="text-secondary-500"
  >
    <slot />
  </component>
</template>
