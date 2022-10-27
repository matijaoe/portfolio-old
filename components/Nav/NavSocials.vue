<script lang="ts" setup>
import { SOCIALS } from '~~/constants/socials'
</script>

<template>
  <div
    class="hidden md:flex"
    flex-col items-center justify-center gap-6
    absolute right-4 top-4 bottom-0
    z-50
    pr-2
  >
    <!-- <BaseLine type="vertical" flex-1 /> -->

    <ul
      font-mono
      flex flex-col items-center gap-3
    >
      <li
        v-for="(social, i) in SOCIALS"
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
        <NuxtLink
          flex items-center justify-center
          block target="_blank" :href="social.href"
          p-2
        >
          <Icon :name="social.icon" text-xl opacity-80 hover:opacity-100 />
        </NuxtLink>
      </li>
    </ul>

    <!-- <BaseLine type="vertical" flex-1 /> -->
  </div>
</template>
