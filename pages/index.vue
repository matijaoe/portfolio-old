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
            underline target="_blank"
            class="transition-all hyperlink" href="https://4ofthem.eu/"
          >
            Four of them LLC
          </a>.
        </div>
      </div>
    </div>
  </div>
</template>
