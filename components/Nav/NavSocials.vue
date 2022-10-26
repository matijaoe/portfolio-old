<script lang="ts" setup>
import { SOCIALS } from '~~/constants/socials'
</script>

<template>
  <div
    class="hidden md:flex"
    flex-col items-center justify-center gap-6
    fixed right-4 top-0 bottom-0
    pt-3
    py-8
    z-50
  >
    <BaseLine type="vertical" flex-1 />

    <ul
      font-mono
      flex flex-col items-center gap-2
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
        class="hover:bg-zinc-4/10"
        rounded-full
      >
        <NuxtLink
          flex items-center justify-center
          block target="_blank" :href="social.href" py-2 px-2 opacity="80 hover:100"
        >
          <Icon :name="social.icon" text-xl />
        </NuxtLink>
      </li>
    </ul>

    <BaseLine type="vertical" flex-1 />
  </div>
</template>
