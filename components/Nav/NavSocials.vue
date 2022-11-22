<script lang="ts" setup>
import { socials } from '~~/data/socials'
</script>

<template>
  <menu flex items-center gap-1>
    <li
      v-for="(social, i) in socials"
      :key="i"
    >
      <a
        :href="social.href"
        target="_blank"
        :aria-label="social.label"
        p-2 flex items-center justify-center
        text-xl
        text-stone-3 dark:text-stone-5 hover:text-accent
        transition-base
      >
        <Icon
          :name="social.icon"
        />
      </a>
    </li>
  </menu>
</template>
