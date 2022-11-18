<script lang="ts" setup>
import gsap from 'gsap'
import { baseSocials } from '~~/data/socials'
import type { NavCard } from '~~/models'

useHead({
  title: 'Home | Matija Osrečki',
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

const container = ref<HTMLDivElement>()

onMounted(() => {
  gsap.from(container.value!.children, {
    delay: 0.15,
    duration: 0.5,
    y: '+100',
    autoAlpha: 0,
    stagger: 0.15,
    ease: 'back.out(1.7)',
  })
})
</script>

<template>
  <div flex flex-col gap-40 mt-12vh relative>
    <div ref="container" row flex flex-col gap-8>
      <div z-2 font-display space-y-4 relative>
        <SVGCloud z-1 aspect-square absolute top="-55" left="25vw md:50vw lg:120" />
        <p
          ref="name" text-6xl md:text-8xl
          z-2
          relative
        >
          Matija Osrečki
        </p>
      </div>

      <div max-w-xl space-y-4 text-stone-7 dark:text-stone-4 leading-relaxed z-2>
        <p title="its a stolen placeholder">
          I'm a Software Engineer who enjoys turning problems and opportunities into simple interfaces through design and code (STOLEN PLACEHOLDER)
        </p>

        <div>
          Working as a Frontend Developer at
          <div
            class="group"
            display="inline-block"
          >
            <a
              href="https://4ofthem.eu/"
              target="_blank"
              hyperlink
              inline-flex items-center gap-2
            >
              Four of them LLC
            </a>
            <Icon
              name="tabler:clover"
              text="#FF8502 xl"
              class="opacity-0 translate-x--1 transition-base scale-50 group-hover:(opacity-100 translate-x-1 rotate-120 scale-100)"
            />
          </div>
        </div>

        <div mt="!8" flex items-center gap-3 text-sm>
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-65" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p text-stone-5 dark:text-stone-5 flex items-center gap-2>
            Currently in Zagreb, Croatia
          </p>
        </div>
      </div>

      <div mt-4 flex items-center gap-4 divider-x>
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
              text-opaque dark:text-stone-5 hover:text-accent
              transition-base
              p-2
              rounded-full
            >
              <Icon
                :name="social.icon"
                text-2xl
              />
            </a>
          </li>
        </ul>

        <button pl-4 flex items-center gap="1.5">
          Press <div flex items-center gap-1>
            <BaseKbd>⌘</BaseKbd><BaseKbd>K</BaseKbd>
          </div> to start
        </button>
      </div>
    </div>

    <div row grid md:grid-cols-2 gap-4>
      <NavSiteCard
        v-for="(card, i) in cards"
        :key="i"
        :card="card"
      />
    </div>
  </div>
</template>
