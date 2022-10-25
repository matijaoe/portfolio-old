<script lang="ts" setup>
const items = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
  {
    label: 'Guestlist',
    to: '/guestlist',
  },
]
</script>

<template>
  <nav flex items-center>
    <ul font-sans text-sm flex items-center gap-2>
      <li v-for="(item, i) in items" :key="i">
        <NuxtLink :to="item.to" py-1 px-2 class="lowercase opacity-80 hover:opacity-100" active-class="!opacity-100 !text-stone-2">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
