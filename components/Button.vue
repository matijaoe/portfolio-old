<script lang="ts" setup>
const props = withDefaults(defineProps<{
  icon?: string
  label?: string
  to?: string
  external?: boolean
  variant: 'default' | 'accent'
  newTab?: boolean
}>(), {
  variant: 'default',
})
console.log({ props })

const variantClass = computed(() => {
  switch (props.variant) {
    case 'accent': {
      return 'bg-accent text-stone-8 font-medium hover:(ring-accentop)'
    }
    case 'default':
    default: {
      return 'bg-default-3 text-default hover:(ring-stone-2 dark:ring-stone-7)'
    }
  }
})
</script>

<template>
  <button
    v-if="!to"
    flex gap-2 items-center justify-center
    py="2" px-3
    transition-base rounded-lg
    class="text-sm hover:(ring-2) active:(scale-95)"
    :class="[variantClass]"
  >
    <div v-if="$slots.icon || icon" flex items-center>
      <slot name="icon">
        <Icon v-if="icon" :name="icon" text-lg />
      </slot>
    </div>
    <slot>
      {{ label }}
    </slot>
  </button>

  <NuxtLink
    v-else
    :to="to"
    :external="external"
    :target="newTab ? '_blank' : '_self'"
    flex gap-2 items-center justify-center
    py="2" px-3
    transition-base rounded-lg
    class="text-sm hover:(ring-2) active:(scale-95)"
    :class="[variantClass]"
  >
    <div v-if="$slots.icon || icon" flex items-center>
      <slot name="icon">
        <Icon v-if="icon" :name="icon" text-lg />
      </slot>
    </div>
    <slot>
      {{ label }}
    </slot>
  </NuxtLink>
</template>
