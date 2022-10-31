<script lang="ts" setup>
useHead({
  title: 'Home | Matija Osrecki',
})
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

        <p text-3xl z-2 relative>
          Full Stack Developer
        </p>
      </div>

      <div max-w-xl space-y-4 text-dimmed leading-relaxed z-2>
        <p>
          Most passionate about building products, web design, clean code & bitcoin.
        </p>

        <div>
          Currently working as a Mid Frontend Developer at
          <a
            inline-flex items-center gap-2
            transition
            class="group"
            href="https://4ofthem.eu/"
            target="_blank"
            hyperlink
          >
            Four of them LLC.
            <Icon
              name="tabler:clover"
              text-2xl
              text="#FF8502"
              class="opacity-0 translate-x--2 transition scale-50 group-hover:(opacity-100 translate-x-0 rotate-120 scale-100)"
            />
          </a>
        </div>
      </div>
    </div>

    <div row grid md:grid-cols-2 gap-4>
      <article
        v-for="i in 4"
        :key="i"
        rounded="[0.625rem]"
        transition
        bg="hover:(stone-8 dark:yellow-5/80)"
        p="0.5"
        class="hover:(-translate-y-1)"
      >
        <div
          rounded-lg
          px-8 py-8
          flex flex-col gap-4
          bg-shade-2
        >
          <h4 text-lg font-display>
            Projects
          </h4>
          <p text-sm>
            View and try the personal and commercial applications I have worked on in the recent years.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
