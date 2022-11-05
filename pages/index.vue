<script lang="ts" setup>
import { baseSocials } from '~~/data/socials'
import type { NavCard } from '~~/models'

useHead({
  title: 'Home | Matija Osrecki',
})

const cards: NavCard[] = [
  {
    title: 'Get to know me',
    description: 'Who am I, what do I do, what have I done, what will I do.',
    to: '/about',
  },
  {
    title: 'Projects',
    description: 'Check out some of projects I am proud of.',
    to: '/projects',
  },
]
</script>

<template>
  <div flex flex-col gap-40 mt-30 relative>
    <div row flex flex-col gap-8>
      <div z-2 font-display space-y-4>
        <div relative>
          <SVGCloud z-1 aspect-square absolute top="-55" left="25vw md:50vw lg:120" />
          <p text-6xl md:text-8xl z-2 relative>
            Matija Osrečki
          </p>
        </div>
      </div>

      <div max-w-xl space-y-4 text-stone-6 dark:text-stone-4 leading-relaxed z-2>
        <p title="its a stolen placeholder">
          I'm a Software Engineer who enjoys turning problems and opportunities into simple interfaces through design and code (STOLEN PLACEHOLDER)
        </p>

        <div>
          Working as a Mid Frontend Developer at
          <a
            href="https://4ofthem.eu/"
            target="_blank"
            hyperlink
            inline-flex items-center gap-2 transition
            class="group"
          >
            Four of them LLC.
            <Icon
              name="tabler:clover"
              text="#FF8502 2xl"
              class="opacity-0 translate-x--2 transition scale-50 group-hover:(opacity-100 translate-x-0 rotate-120 scale-100)"
            />
          </a>
        </div>

        <div mt="!8" flex items-center gap-3 text-sm>
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-4 opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-green-5" />
          </span>
          <p text-stone-5 dark:text-stone-5 flex items-center gap-2>
            Currently in Zagreb, Croatia
          </p>
        </div>
      </div>

      <button title="its a stolen placeholder" flex items-center gap="1.5">
        Press <div flex items-center gap-1>
          <BaseKbd>⌘</BaseKbd><BaseKbd>K</BaseKbd>
        </div> to start
      </button>

      <div mt-4>
        <ul flex items-center gap-1 ml--2>
          <li
            v-for="(social, i) in baseSocials"
            :key="i"
            v-tooltip="{
              delay: 0,
              content: social.label,
              theme: 'info-tooltip',
              placement: 'bottom',
            }"
          >
            <a
              :href="social.href"
              target="_blank"
              :aria-label="social.label"
              flex items-center justify-center
              p-2
            >
              <Icon
                :name="social.icon"
                text-2xl
                text-dimmed hover:text-default
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div row grid md:grid-cols-2 gap-4>
      <HomeCard
        v-for="(card, i) in cards"
        :key="i"
        :card="card"
      />
    </div>
  </div>
</template>
