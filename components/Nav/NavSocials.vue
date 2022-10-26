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
  >
    <BaseLine type="vertical" flex-1 />

    <ul
      font-mono
      flex flex-col items-center gap-5
    >
      <li v-for="(social, i) in SOCIALS" :key="i">
        <NuxtLink target="_blank" :href="social.href" py-1 px-2 opacity="80 hover:100">
          <Icon :name="social.icon" text-xl />
        </NuxtLink>
      </li>
    </ul>

    <BaseLine type="vertical" flex-1 />
  </div>
</template>
