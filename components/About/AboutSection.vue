<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>

<template>
  <section space-y-4 relative>
    <BaseHeading as="h3" text-3xl>
      <slot name="title">
        {{ title }}
      </slot>
    </BaseHeading>
    <div z-2 flex flex-col gap-4>
      <slot />
    </div>
  </section>
</template>
