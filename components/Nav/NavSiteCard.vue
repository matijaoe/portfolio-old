<script lang="ts" setup>
import type { NavCard } from '~~/models'

defineProps<{
  card: NavCard
}>()
</script>

<template>
  <NuxtLink :to="card.to" block flex flex-col>
    <BaseCard flex-1>
      <div flex flex-col gap-5>
        <div flex items-center gap-3>
          <Icon :name="card.icon" text-3xl mb="1.5" />
          <h4 text-2xl font-display text-default>
            {{ card.title }}
          </h4>
        </div>

        <p text-sm text-dimmed>
          {{ card.description }}
        </p>
      </div>
    </BaseCard>
  </NuxtLink>
</template>
