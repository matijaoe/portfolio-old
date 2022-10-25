<script lang="ts" setup>
const items = [
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
]
</script>

<template>
  <nav flex items-center>
    <ul font-sans-medium text-sm flex items-center gap-2>
      <li v-for="(item, i) in items" :key="i">
        <NuxtLink :to="item.to" py-1 px-2 class="lowercase opacity-90 hover:opacity-100">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
