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
  <nav flex items-center z-50>
    <ul font-semibold flex items-center gap-2 lowercase>
      <li v-for="(item, i) in items" :key="i">
        <NuxtLink
          :to="item.to"
          p-2
          hidden sm:block
          opacity="50 hover:100"
          class="opacity-50 hover:opacity-100"
          active-class="!opacity-100 !text-stone-2"
        >
          <span text-sm> {{ item.label }}</span>
        </NuxtLink>
        <NuxtLink
          :to="item.to"
          p-2
          block sm:hidden
          opacity="50 hover:100"
          active-class="!opacity-100 !text-stone-2"
        >
          <Icon text-2xl :name="item.icon" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
