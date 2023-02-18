<script lang="ts" setup>
const { baseSocials: socials } = useSocials()

useHead({
  title: 'Home | Matija Osrečki',
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
</script>

<template>
  <div flex flex-col gap-40 mt-12vh relative>
    <div row flex flex-col gap-8>
      <div z-2 font-display space-y-4 relative>
        <SVGCloud z-1 aspect-square absolute top="-55" left="25vw md:50vw lg:120" />
        <p text-6xl md:text-8xl z-2 relative>
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

    <div row sm:px-8 w-full mx-auto max-w="1200px">
      <div class="grid md:grid-cols-2 gap-3">
        <div grid sm:grid-cols-5 gap-3 col-span-2>
          <LinksLinkCard
            v-for="social in socials"
            :key="social.label"
            :social="social"
          />
          <NavSiteCard
            col-span-2
            :card="cards.links"
          />
        </div>

        <NavSiteCard
          aspect="3/1"
          :card="cards.about"
        />

        <NavSiteCard
          aspect="3/1"
          :card="cards.projects"
        />

        <NavSiteCard
          aspect="3/1"
          :card="cards.uses"
        />

        <NavSiteCard
          aspect="3/1"
          :card="cards.contact"
        />
      </div>
    </div>
  </div>
</template>
