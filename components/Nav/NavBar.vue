<script lang="ts" setup>
import { navItems } from '~~/data/nav-items'

const { scrolled } = useWindowScrolled()
</script>

<template>
  <nav
    relative overflow-hidden
    flex justify-center
    transition duration-500 ease transition-base
  >
    <menu font-medium lowercase flex items-center gap-2 md:gap-0 w-max>
      <li v-for="(item, i) in navItems" :key="i">
        <!-- desktop -->
        <NuxtLink
          :to="item.to"
          hidden md:block
          py="1.5" px-4
          text-opaque
          bg-transparent
          class="hover:text-default"
          :class="{ 'hover:(bg-opaque)': !scrolled, 'text-opaque-hovered': scrolled }"
          transition-base
          relative z-2
          rounded-lg
          active-class="!text-default"
        >
          <span text-sm> {{ item.label }}</span>
        </NuxtLink>

        <!-- mobile -->
        <NuxtLink
          :to="item.to"
          flex items-center
          block md:hidden transition text-opaque hover:text-opaque-hovered
          active-class="!text-default"
          :aria-label="item.label"
          p-3 lg:p-2
        >
          <Icon text-xl md:text-2xl :name="item.icon" />
        </NuxtLink>
      </li>
    </menu>
  </nav>
</template>
