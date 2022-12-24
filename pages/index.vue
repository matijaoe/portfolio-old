<script lang="ts" setup>
import gsap from 'gsap'
import type { NavCard } from '~~/models'

const { baseSocials: socials } = useSocials()

useHead({
  title: 'Home | Matija Osrečki',
})

const cards: NavCard[] = [
  {
    title: 'About me',
    description: 'What am I all about',
    to: '/about',
    icon: 'ph:user-duotone',
  },
  {
    title: 'Projects',
    description: 'Check out some of projects I am proud of. Many more are about to come. See ya on ProductHunt.',
    to: '/projects',
    icon: 'ph:lightbulb-filament-duotone',
  },
  {
    title: 'Contact',
    description: 'Contact me via email or any of my socials',
    to: '/contact',
    icon: 'ph:chat-circle-dots-duotone',
  },
  {
    title: 'My uses',
    description: 'The tools I use to get things done',
    to: '/uses',
    icon: 'ph:tray-duotone',
  },
  {
    title: 'Links',
    description: 'All my places on the web',
    to: '/links',
    icon: 'ph:globe-duotone',
  },
  // {
  //   title: 'Guestbook',
  //   description: 'Stop by and leave a message',
  //   to: '/guestbook',
  //   icon: 'ph:book-open-duotone',
  // },
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore voluptatem ab eligendi similique. Quam, obcaecati odit, modi
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

      <div mt-4>
        <button flex items-center gap="1.5" text-default>
          Press <div flex items-center gap-1>
            <BaseKbd>⌘</BaseKbd><BaseKbd>K</BaseKbd>
          </div> to start
        </button>
      </div>
    </div>

    <div px-8 w-full max-w-7xl mx-auto>
      <div class="grid grid-cols-6 grid-rows-4 sm:grid-cols-12 gap-3" auto-rows-max>
        <Card class="row-span-3 col-span-6">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum neque nam voluptatibus minus. Id, eum? Ipsa eum esse odio repudiandae, quisquam praesentium illo sunt, nemo autem cum vero veniam? Temporibus?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quaerat nihil mollitia harum nostrum quas tempore ad impedit! Corrupti perspiciatis in consequatur officia illo molestiae cupiditate veniam fugiat aspernatur. Corporis.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quam maiores. Ab culpa exercitationem sit sunt reiciendis hic, vitae corrupti distinctio numquam quas
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
        </Card>

        <a
          v-for="social in socials"
          :key="social.label"
          class="group col-span-3 sm:(col-span-2 row-span-1)" block
          :href="social.href" target="_blank"
        >
          <Card aspect-square no-padding>
            <div p-5 flex-1 flex flex-col justify-between class="text-default">
              <Icon
                :style="{ color: social.color }"
                :class="{ 'filter-saturate-75': isDark }"
                :name="social.icon" text-5xl text-stone-2 dark:text-stone-4
              />
              <div ml-auto>{{ social.username }}</div>
            </div>
          </Card>
        </a>

        <NavSiteCard
          :card="cards[1]"
          class="col-span-1 col-span-6"
        />

        <NavSiteCard
          :card="cards[0]"
          col-span-6
        />

        <NavSiteCard
          :card="cards[3]"
          col-span-6
        />

        <NavSiteCard
          :card="cards[4]"
          col-span-6
        />
      </div>
    </div>
  </div>
</template>
