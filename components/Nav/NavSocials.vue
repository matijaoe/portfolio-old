<script lang="ts" setup>
import { email, github, linkedin, twitter } from '~~/data/socials'

const socials = [github, twitter, linkedin, email]
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
      <NuxtLink
        :to="social.href"
        target="_blank"
        external
        :aria-label="social.label"
        p-2 flex items-center justify-center
        text-xl
        class="text-stone-4 dark:text-stone-5 hover:!text-accent"
        transition-base
      >
        <Icon
          :name="social.icon"
        />
      </NuxtLink>
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
        class="text-stone-4 dark:text-stone-5 hover:!text-accent"
        transition-base
      >
        <Icon
          name="ph:arrow-right-bold"
        />
      </NuxtLink>
    </li>
  </menu>
</template>
