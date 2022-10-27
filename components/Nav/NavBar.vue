<script lang="ts" setup>
const items = [
  {
    label: 'Home',
    to: '/',
    icon: 'tabler:home',
  },
  {
    label: 'About',
    to: '/about',
    icon: 'tabler:user',
  },
  {
    label: 'Projects',
    to: '/projects',
    icon: 'tabler:bulb',
  },
  {
    label: 'Uses',
    to: '/uses',
    icon: 'tabler:tools',
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'tabler:file-text',
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'tabler:pencil',
  },
  {
    label: 'Guestbook',
    to: '/guestbook',
    icon: 'tabler:book',
  },
]
</script>

<template>
  <nav>
    <ul font-medium flex items-center gap-0 lowercase>
      <li v-for="(item, i) in items" :key="i">
        <!-- desktop -->
        <NuxtLink
          :to="item.to"
          py-2 px-4
          rounded-sm
          hidden sm:block
          class="text-opaque hover:text-dimmed-2"
          active-class="!text-base"
        >
          <span text-sm> {{ item.label }}</span>
        </NuxtLink>

        <!-- mobile -->
        <NuxtLink
          :to="item.to"
          p-2
          block sm:hidden
          class="text-opaque hover:text-dimmed-2"
          active-class="!text-base"
        >
          <Icon text-2xl :name="item.icon" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
