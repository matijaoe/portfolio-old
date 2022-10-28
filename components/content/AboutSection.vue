<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>

<template>
  <section flex flex-col gap-5>
    <BaseHeading as="h3" text-3xl>
      <slot name="title">
        {{ title }}
      </slot>
    </BaseHeading>
    <slot />
  </section>
</template>
