<script lang="ts" setup>
import '@fontsource/ia-writer-mono'
import { email, github, linkedin, twitter } from '~~/data/socials'

const socials = [github, twitter, linkedin, email]

useGlobalShortcuts()

const { showGrain } = useGrain()
const { isDark } = useTheme()
</script>

<template>
  <Html lang="en">
    <Body text-default font-sans transition-smooth bg-default-1>
      <div min-h-screen flex flex-col w-screen overflow-x-hidden>
        <NuxtLayout />
      </div>
      <GrainCover v-show="showGrain" :opacity="isDark ? 10 : 4" />
      <div v-show="!isDark" id="texture" />

      <div class="text-ttb" fixed bottom-0 right-0 p-4>
        <ul flex flex-col>
          <li
            v-for="(social, i) in socials"
            :key="i"
            v-tooltip="{
              delay: 0,
              content: social.label,
              theme: 'info-tooltip',
              placement: 'left',
            }"
            p-2
          >
            <NuxtLink
              :to="social.href"
              target="_blank"
              external
              :aria-label="social.label"
              flex items-center justify-center
              text-xl
              text-default
              opacity-50
              hover:opacity-100
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
              placement: 'left',
            }"
            p-2
          >
            <NuxtLink
              to="/links"
              aria-label="Links"
              flex items-center justify-center
              text-xl
              text-default
              opacity-50
              hover:opacity-100
            >
              <Icon
                name="ph:link-duotone"
              />
            </NuxtLink>
          </li>
          <hr class="my-2 mx-1 border-stone-2 dark:border-stone-8">
          <DarkToggle p-2 />
        </ul>
      </div>
    </Body>
  </Html>
</template>

<style lang="postcss" scoped>
#texture {
  background-image: url('assets/images/white_wall_hash.webp');
  background-repeat: repeat;
  position: fixed;
  width: 100vw;
  inset: 0;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
}

.dark #texture {
  background-image: none;
}
</style>
