<script lang="ts" setup>
import gsap from 'gsap'
import { baseSocials as socials } from '~~/data/socials'
import type { NavCard } from '~~/models'

useHead({
  title: 'Home | Matija Osrečki',
})

const cards: NavCard[] = [
  {
    title: 'Get to know me',
    description: 'Who am I, what do I do, what have I done, what will I do.',
    to: '/about',
    icon: 'ph:user-duotone',
  },
  {
    title: 'Projects',
    description: 'Check out some of projects I am proud of. Many more are coming. ProductHunt here I come.',
    to: '/projects',
    icon: 'ph:lightbulb-filament-duotone',
  },
  {
    title: 'Contact',
    description: 'Contact me via email or any of my socials',
    to: '/contact',
    icon: 'ph:chat-circle-dots-duotone',
  },
]

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

      <div max-w-xl space-y-4 text-stone-7 dark:text-stone-4 leading-relaxed z-2>
        <p title="its a stolen placeholder">
          I'm a Software Engineer who enjoys turning problems and opportunities into simple interfaces through design and code (STOLEN PLACEHOLDER)
        </p>

        <!-- <div>
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
        </div> -->

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
        <!-- <ul flex items-center gap-1 ml--2>
          <li
            v-for="social in socials"
            :key="social.label"
            v-tooltip="{
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
              text-dimmed hover:text-accent
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
        </ul> -->

        <button flex items-center gap="1.5" text-default>
          Press <div flex items-center gap-1>
            <BaseKbd>⌘</BaseKbd><BaseKbd>K</BaseKbd>
          </div> to start
        </button>
      </div>
    </div>

    <div px-8 w-full max-w-7xl mx-auto>
      <div class="grid grid-cols-6 grid-rows-4 sm:grid-cols-12 gap-3" auto-rows-max>
        <BaseCard class="row-span-4 col-span-6">
          <div flex-1 flex flex-col gap-8>
            <!-- title -->
            <div flex items-end justify-between>
              <div flex items-center gap-3>
                <Icon name="ph:compass-duotone" text-3xl mb="1.5" />
                <h4 text-2xl font-display text-default>
                  Now
                </h4>
              </div>
              <div text-dimmed text-sm>
                <div>{{ Intl.DateTimeFormat('en-us', { dateStyle: 'medium' }).format(new Date(2022, 11, 18)) }}</div>
              </div>
            </div>
            <!-- content -->
            <div text-base text-dimmed space-y-3>
              <p>
                Building a platform for financial independence
              </p>
              <p>
                FAKE TEXT I've been working at Atlassian on the Trello team for a year now, but still kind of struggling to find my place on the Frontend Platform team. However, the company culture is so good, there's no reason to look elsewhere!
              </p>
              <p>
                I basically took the summer of 2022 off from coding and side projects, and disconnecting felt so good! I spent time traveling, doing home improvements, and picking up hobbies like reading and riding my OneWheel.
              </p>
              <p>
                Now that I'm off my break, I'm trying to get back on track with my goals for 2022. I've been learning Remix with the hope that it will be the foundation for the future products that I'll build.
              </p>
              <p>
                I've only been back a week or two, and I've already released three new projects, updated another, and published two blog posts. I hope to keep moving forward at a reasonable pace, probably not this fast, while still sprinkling in some enjoyment time here and there.
              </p>
            </div>

            <div>
              <button
                ml-auto text-sm py-2 px-3 rounded-lg flex gap-2 items-center justify-center transition-base
                class="group hover:(bg-stone-2/70 dark:(bg-stone-8))"
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
          <!-- controls -->
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
        </BaseCard>

        <a
          v-for="social in socials"
          :key="social.label"
          class="group col-span-3 sm:(col-span-2 row-span-1)" block
          :href="social.href" target="_blank"
        >
          <BaseCard aspect-square no-padding>
            <div p-5 flex-1 flex flex-col justify-between class="text-default">
              <Icon
                :style="isDark && social.label === 'Github' ? { color: '#a8a29e' } : { color: social.color }"
                :class="{ 'filter-saturate-75': isDark }"
                :name="social.icon" text-5xl text-stone-2 dark:text-stone-4
              />
              <div ml-auto>@{{ social.href.split('/').at(-1) }}</div>
            </div>
          </BaseCard>
        </a>

        <NavSiteCard
          :card="cards[1]"
          class="col-span-1 col-span-6"
        />

        <NavSiteCard
          :card="cards[0]"
          class="col-span-6"
        />

        <NavSiteCard
          :card="cards[2]"
          class="col-span-6"
        />
      </div>
    </div>
  </div>
</template>
