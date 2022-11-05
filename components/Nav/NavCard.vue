<script lang="ts" setup>
import type { NavCard } from '~~/models'

defineProps<{
  card: NavCard
}>()
</script>

<template>
  <button
    text-left
    rounded="[0.625rem]"
    transition
    bg="hover:(stone-8 dark:stone-2)"
    p="0.5"
    class="hover:(-translate-y-1)"
    @click="navigateTo(card.to)"
  >
    <div
      flex flex-col gap-4
      px-8 py-8
      rounded-lg
      bg-default-3
    >
      <h4 text-xl font-display>
        {{ card.title }}
      </h4>
      <p text-sm text-dimmed>
        {{ card.description }}
      </p>
    </div>
  </button>
</template>
