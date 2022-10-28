<script lang="ts" setup>
useHead({
  title: 'Home | Matija Osrecki',
})
definePageMeta({
  accent: 'to-indigo-9',
  bg: 'bg-indigo-9',
})
</script>

<template>
  <div flex flex-col gap-20 mt-30>
    <div row flex flex-col gap-8>
      <div font-display space-y-4>
        <p text-6xl md:text-8xl>
          Matija Osrečki
        </p>

        <p text-3xl>
          Full Stack Developer
        </p>
      </div>

      <div max-w-xl space-y-4 text-dimmed leading-relaxed>
        <p>
          Most passionate about building products, web design, clean code & bitcoin.
        </p>

        <div>
          Currently working as a Mid Frontend Developer at
          <a
            inline-flex items-center gap-2
            transition-all
            class="group"
            href="https://4ofthem.eu/"
            target="_blank"
            hyperlink
          >
            Four of them LLC.
            <Icon
              name="tabler:clover"
              text-2xl
              text-orange-5
              class="opacity-0 translate-x--2 transition-all scale-50 group-hover:(opacity-100 translate-x-0 rotate-120 scale-100)"
            />
          </a>
        </div>
      </div>
    </div>

    <div row grid grid-cols-2 gap-4>
      <article
        v-for="i in 4" :key="i"
        hover:gradient-warm
        rounded="[0.625rem]"
        transition-all
        p="0.5"
        class="hover:(-translate-y-1 hover:border-)"
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
