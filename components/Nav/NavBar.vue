<script lang="ts" setup>
import { navItems } from '~~/data/nav-items'

const { scrolled } = useWindowScrolled()
</script>

<template>
  <nav relative overflow-hidden flex justify-center transition-base duration-500 ease>
    <menu font-medium lowercase flex items-center gap-2 md:gap-0 w-max>
      <li v-for="(item, i) in navItems" :key="i">
        <!-- desktop -->
        <!-- TODO: fix color when scrolled and over bright image -->
        <NuxtLink
          :to="item.to"
          hidden md:block
          py="1.5" px-4
          text-opaque
          bg-transparent
          class="hover:text-default"
          :class="{ 'hover:(bg-opaque)': !scrolled }"
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
