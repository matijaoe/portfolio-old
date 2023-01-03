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
    description: 'Check out some of projects I am proud of. Many more to come.',
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

type Post = {
  date: Date
  content: string
}

const posts: Post[] = [
  {
    date: new Date(2023, 1, 3),
    content: 'fddsfdfs',
  },
]
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

      <div max-w-lg space-y-4 text-stone-7 dark:text-stone-4 leading-relaxed z-2>
        <p title="its a stolen placeholder">
          Ambitious and competitive front-end oriented software developer, very much in love all things web development.
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

      <!-- <div mt-4>
        <button flex items-center gap="1.5" text-default>
          Press <div flex items-center gap-1>
            <BaseKbd>⌘</BaseKbd><BaseKbd>K</BaseKbd>
          </div> to start
        </button>
      </div> -->
    </div>

    <div row sm:px-8 w-full max-w-7xl mx-auto>
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
                <div>{{ Intl.DateTimeFormat('en-us', { dateStyle: 'medium' }).format(new Date(2023, 1, 3)) }}</div>
              </div>
            </div>

            <!-- TODO: temporary inline, convert to markdown in the future -->
            <!-- content -->
            <div prose>
              <p>
                Currently polishing up my college final year project and getting ready to starting writing my thesis. I enjoyed building  <NuxtLink to="/projects/fare" underline>
                  {{ 'FARE'.trim() }}
                </NuxtLink> - <em>an app for attaining financial independence</em>, but the whole thing dragged out for bit too long. After five long months, it's time to accept the bugs, package it up, put a nice bow on it and move onto the next thing.
              </p>
              <p>
                Parallel to that, I spent last three months madly in love with web development, building and learning like never before. It all happened all of the sudden, but at just the right time. All throughout summer I was in a bit of a rut, desperately searching for something to do with my free time after work. One day, browsing GitHub, as one does, I came across a colleague of mine building something cool, and I felt a strong urge to do something of my own. He shall not be named, but he shall be <NuxtLink
                  to="https://github.com/MatijaNovosel"
                  target="_blank"
                  external
                >
                  {{ 'linked'.trim() }}
                </NuxtLink>. Newfound inspiration, coupled with my competitiveness, caused me to jump straight into building out my portfolio page. I bought my first ever domain (the most important part), and then promptly spent entire days iterating over all kind of designs, getting too stuck on each. That whole chaotic design process may just be my favorite part of building something new. All that took my focus off of the college project for bit too long though, so had to shift my focus back to that.
              </p>

              <p>
                Took two weeks vacation off work, spent it all on coding. Used the momentum to build most of Fare, with a new small side project every few days (I just couldn't help myself). Picked up Svelte along the way. All that time, my motivation and passion was fueled by the <NuxtLink to="https://syntax.fm/" target="_blank" external>
                  {{ 'SyntaxFM'.trim() }}
                </NuxtLink> podcast, which I discovered around that time. Finally found my people.
              </p>

              <p>
                Nowadays I spend my days brainstorming ideas, and then picking one and actually doing it. Spent last few weeks building out vscode extensions. Picked up <NuxtLink to="Deno" external target="_blank">
                  {{ 'Deno'.trim() }}
                </NuxtLink> along the way. Released <NuxtLink to="https://marketplace.visualstudio.com/items?itemName=matijao.modern-js-snippets" external target="_blank">
                  {{ 'Modern JavaScript Snippets'.trim() }}
                </NuxtLink>, built on a great base off of which I was able to quickly spin up my next extension, <NuxtLink to="https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets" external target="_blank">
                  {{ 'Vue Ecosystem Snippets'.trim() }}
                </NuxtLink>. Used all the knowledge from the previous one to do this one right. Finally learned how releases work. Just today, Johnson Chu from Volar  <NuxtLink to="https://twitter.com/matijao_/status/1610200146385534977" external target="_blank">
                  {{ 'recommended my extension on Twitter'.trim() }}
                </NuxtLink>, before I even tweeted about it myself. Feels like I'm on the right track.
              </p>

              <p>
                I'm finally getting more and more comfortable contributing to open source, albeit nothing too serious. Got access to <NuxtLink to="https://twitter.com/elk_zone" external target="_blank">
                  {{ 'Elk'.trim() }}
                </NuxtLink> (Mastodon client built on Nuxt 3 by some of the Vue & Nuxt core team members) private repo. This may be the thing I was looking for. Hope to find a way to contribute in a meaningful way. Figuring out how the hell to create a Mastodon account is a task in itself.
              </p>

              <p>
                As for the thesis, I have just over a month left. I keep telling myself, just finish that, and then you're free to do any project you want. Will I make it? Shall see. Tick, tock.
              </p>
            </div>

            <!-- <div>
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
            </div> -->
          </div>

          <!-- controls -->
          <!-- <div mx--3 flex justify-between items-center>
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
          </div> -->
        </Card>

        <div flex flex-col gap-3>
          <div grid sm:grid-cols-3 gap-3>
            <a
              v-for="social in socials"
              :key="social.label"
              class="group" block
              :href="social.href" target="_blank"
            >
              <Card aspect="2/1" sm:aspect-square no-padding>
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
          </div>

          <NavSiteCard
            aspect-ratio="3/1"
            :card="cards[4]"
          />

          <NavSiteCard
            aspect-ratio="3/1"
            :card="cards[1]"
          />

          <NavSiteCard
            aspect-ratio="3/1"
            :card="cards[0]"
          />

          <!-- <NavSiteCard
            :card="cards[3]"
            col-span-6
          /> -->

          <NavSiteCard
            aspect-ratio="3/1"
            :card="cards[2]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
