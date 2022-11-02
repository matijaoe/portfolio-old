<script lang="ts" setup>
import { socials } from '~~/data/socials'
</script>

<template>
  <ul flex items-center gap-1>
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
        :aria-label="social.label"
        :href="social.href"
        target="_blank"
        flex items-center justify-center
        p-2
      >
        <Icon
          :name="social.icon"
          text-xl
          text-opaque-2 hover:text-default
        />
      </a>
    </li>
  </ul>
</template>
