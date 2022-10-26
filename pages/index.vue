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
  <div grid content-center h-full flex-1 mt-15vh>
    <div flex flex-col gap-8>
      <div font-display space-y-4>
        <p text-7xl md:text-8xl>
          Matija Osrečki
        </p>
        <p text-3xl>
          Full-Stack Developer
        </p>
      </div>

      <!-- TODO: why light font not recognized -->
      <div max-w-xl space-y-4 class="text-stone-2/65">
        <div space-y-1>
          <p>Highly ambitious full-stack developer with special attention to detail and a keen eye for UI/UX design.</p>
          <p>Most passionate about building products, web design, clean code & bitcoin.</p>
        </div>

        <div>
          Currently working as a Mid Frontend Developer at
          <a
            underline target="_blank"
            class="transition-all hyperlink text-stone-3/85 hover:text-stone-3/100" href="https://4ofthem.eu/"
          >
            Four of them LLC
          </a>.
        </div>
      </div>
    </div>
  </div>
</template>
