<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>

<template>
  <section space-y-4 relative>
    <div flex items-center justify-between gap-4>
      <BaseHeading as="h3" text-3xl>
        <slot name="title">
          {{ title }}
        </slot>
      </BaseHeading>
      <slot name="right" />
    </div>
    <div z-2 flex flex-col gap-4>
      <slot />
    </div>
  </section>
</template>
