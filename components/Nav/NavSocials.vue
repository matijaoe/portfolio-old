<script lang="ts" setup>
import { socials } from '~~/data/socials'
</script>

<template>
  <div
    hidden md:flex flex-col justify-center
    pos="absolute right-4 top-4 bottom-0"
    pr-3 z-50
  >
    <ul flex flex-col items-center gap-1>
      <li
        v-for="(social, i) in socials"
        :key="i"
        v-tooltip="{
          delay: 0,
          content: social.label,
          theme: 'info-tooltip',
          placement: 'left',
        }"
        class="hover:bg-stone-50/5"
        rounded-full
      >
        <a
          :href="social.href"
          target="_blank"
          flex items-center justify-center
          p-3
        >
          <Icon :name="social.icon" text-xl opacity-80 hover:opacity-100 />
        </a>
      </li>
    </ul>
  </div>
</template>
