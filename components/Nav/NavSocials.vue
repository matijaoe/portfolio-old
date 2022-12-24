<script lang="ts" setup>
const { socials } = useSocials()
</script>

<template>
  <menu flex items-center gap-1>
    <li
      v-for="(social, i) in socials"
      :key="i"
      v-tooltip="{
        delay: 0,
        content: social.label,
        theme: 'info-tooltip',
        placement: 'top',
      }"
    >
      <a
        :href="social.href"
        target="_blank"
        :aria-label="social.label"
        p-2 flex items-center justify-center
        text-xl
        text-stone-4 dark:text-stone-5 hover:text-accent
        transition-base
      >
        <Icon
          :name="social.icon"
        />
      </a>
    </li>
    <li
      v-tooltip="{
        delay: 0,
        content: 'All links',
        theme: 'info-tooltip',
        placement: 'top',
      }"
    >
      <NuxtLink
        to="/links"
        aria-label="Links"
        p-2 flex items-center justify-center
        text-xl
        text-stone-4 dark:text-stone-5 hover:text-accent
        transition-base
      >
        <Icon
          name="ph:arrow-right"
        />
      </NuxtLink>
    </li>
  </menu>
</template>
