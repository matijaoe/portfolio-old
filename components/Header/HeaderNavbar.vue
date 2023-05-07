<script lang="ts" setup>
import { navItems } from '~~/data/nav-items'
</script>

<template>
  <nav relative overflow-hidden flex justify-center transition-base duration-500 ease>
    <menu font-medium lowercase flex items-center gap-2 w-max>
      <li v-for="(item, i) in navItems" :key="i">
        <NuxtLink
          :to="item.to"
          hidden md:block
          font-600
          py="3.25" px="4"
          class="link text-default bg-stone-2/50 dark:bg-stone-8"
          transition-base
          relative z-2
          rounded-8px
          active-class="!text-default"
        >
          <span text-sm> {{ item.label }}</span>
        </NuxtLink>

        <!-- mobile -->
        <NuxtLink
          :to="item.to"
          p-3 lg:p-2
          flex items-center
          block md:hidden text-opaque hover:text-opaque-hovered
          transition
          active-class="!text-default"
          :aria-label="item.label"
        >
          <Icon text-xl md:text-2xl :name="item.icon" />
        </NuxtLink>
      </li>
    </menu>
  </nav>
</template>

<style lang="postcss" scoped>
li:first-child {
  .link {
    @apply rounded-l-full rounded-r-8px pl-5;
  }
}
li:last-child {
  .link {
    @apply rounded-r-full rounded-l-8px pr-5;
  }
}
</style>
