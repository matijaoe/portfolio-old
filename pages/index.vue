<script lang="ts" setup>
import gsap from 'gsap'
import { marked } from 'marked'
const { baseSocials: socials } = useSocials()

useHead({
  title: 'Home | Matija Osrečki',
})

const NowMd = ref('')

import('~/content/2023-01-03.md').then((res) => {
  fetch(res.default)
    .then(response => response.text())
    .then(text => NowMd.value = marked.parse(text))
})

const cards = {
  about: {
    title: 'About me',
    description: 'What am I all about',
    to: '/about',
    icon: 'ph:user-duotone',
  },
  projects: {
    title: 'Projects',
    description: 'Some of projects I am proud of. Many more to come.',
    to: '/projects',
    icon: 'ph:lightbulb-filament-duotone',
  },
  contact: {
    title: 'Contact',
    description: 'Contact me via email or any of my socials',
    to: '/contact',
    icon: 'ph:chat-circle-dots-duotone',
  },
  uses: {
    title: 'My uses',
    description: 'The tools I use to get things done',
    to: '/uses',
    icon: 'ph:tray-duotone',
  },
  links: {
    title: 'Links',
    description: 'All my places on the web',
    to: '/links',
    icon: 'ph:globe-duotone',
  },
} as const

const hasMore = ref(false)
const { isDark } = useTheme()
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

      <div max-w-48ch space-y-4 text-stone-7 dark:text-stone-4 leading-relaxed z-2>
        <p>
          Self-motivated front-end oriented software developer, very much in love with all things web development.
        </p>

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
    </div>

    <div row sm:px-8 w-full max-w="1600px" mx-auto>
      <div class="grid md:grid-cols-2 gap-3">
        <Card>
          <div flex-1 flex flex-col gap-4>
            <!-- title -->
            <div flex items-end justify-between>
              <div flex items-center gap-3>
                <Icon name="ph:compass-duotone" text-3xl mb="1.5" />
                <h4 text-2xl font-display text-default>
                  Now
                </h4>
              </div>
              <div text-dimmed text-sm>
                <div>{{ Intl.DateTimeFormat('en-us', { dateStyle: 'medium' }).format(new Date('2023-01-03')) }}</div>
              </div>
            </div>

            <!-- TODO: temporary inline, convert to markdown in the future -->
            <!-- content -->
            <div prose v-html="NowMd" />

            <div>
              <button
                ml-auto text-sm py-2 px-3 rounded-lg flex gap-2 items-center justify-center transition-base
                class="group hover:(bg-stone-2/70 dark:(bg-stone-8))"
                @click="navigateTo('/2023-01-03')"
              >
                Read the rest
                <Icon
                  name="ph:arrow-right-duotone" text-md
                  transition-base
                  class="translate-x--0.5 group-hover:(translate-x-0.5)"
                />
              </button>
            </div>
          </div>

          <div mx--3 flex justify-between items-center>
            <button
              text-sm py-2 px-3 rounded-lg flex gap-2 items-center justify-center transition-base
              class="hover:(translate-x-3 bg-stone-2/70 dark:(bg-stone-8))"

              @click="hasMore = true"
            >
              <Icon name="ph:caret-left-duotone" text-lg />
              Older
            </button>
            <button
              v-if="hasMore"
              text-sm py-2 px-3 rounded-lg flex gap-2 items-center justify-center transition-base
              class="hover:(-translate-x-3 bg-stone-2/70 dark:(bg-stone-8))"
            >
              Newer
              <Icon name="ph:caret-right-duotone" text-lg />
            </button>
          </div>
        </Card>

        <div flex flex-col gap-3>
          <div grid sm:grid-cols-3 gap-3>
            <LinksLinkCard
              v-for="social in socials"
              :key="social.label"
              :social="social"
            />
          </div>

          <NavSiteCard
            :card="cards.about"
            aspect-ratio="3/1"
          />

          <NavSiteCard
            aspect-ratio="3/1"
            :card="cards.links"
          />

          <NavSiteCard
            aspect-ratio="3/1"
            :card="cards.projects"
          />

          <NavSiteCard
            aspect-ratio="3/1"
            :card="cards.uses"
          />

          <NavSiteCard
            aspect-ratio="3/1"
            :card="cards.contact"
          />
        </div>
      </div>
    </div>
  </div>
</template>
