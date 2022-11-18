<script lang="ts" setup>
import { socials } from '~~/data/socials'
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
      >
        <Icon
          :name="social.icon"
          text-xl text-stone-5 hover:text-accent
          transition-base
        />
      </a>
    </li>
  </menu>
</template>
