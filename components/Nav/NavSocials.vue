<script lang="ts" setup>
const socials = [
  {
    label: 'Github',
    icon: 'tabler:brand-github',
    href: 'https://github.com/mat2ja',
  },
  {
    label: 'LinkedIn',
    icon: 'tabler:brand-linkedin',
    href: 'https://github.com/mat2ja',
  },
  {
    label: 'Twitter',
    icon: 'tabler:brand-twitter',
    href: 'https://github.com/mat2ja',
  },
  {
    label: 'Email',
    icon: 'tabler:mail',
    href: 'mailto:matija.osrecki@gmail.com',
  },
]
</script>

<template>
  <div
    absolute right-4 top-0 bottom-0
    flex flex-col items-center justify-center gap-6
    py-6
  >
    <BaseLine type="vertical" flex-1 />

    <ul
      font-mono
      flex flex-col items-center gap-5
    >
      <li v-for="(social, i) in socials" :key="i">
        <NuxtLink target="_blank" :href="social.href" py-1 px-2 class="lowercase font-semibold opacity-90 hover:opacity-100">
          <Icon :name="social.icon" text-xl />
        </NuxtLink>
      </li>
    </ul>

    <BaseLine type="vertical" flex-1 />
  </div>
</template>
