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
  <div grid content-center h-full flex-1 mt-20vh>
    <div
      flex flex-col gap-8
    >
      <div font-display space-y-4>
        <p text-6xl md:text-8xl>
          Matija Osrečki
        </p>

        <p text-3xl>
          Full-Stack Developer
        </p>
      </div>

      <div max-w-xl space-y-4 text-dimmed font-light leading-relaxed>
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
  </div>
</template>
