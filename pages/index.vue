<script lang="ts" setup>
useHead({
  title: 'Home | Matija Osrecki',
})
definePageMeta({
  accent: 'to-rose-9',
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

      <div max-w-xl opacity-80 space-y-4>
        <div space-y-1>
          <p>Highly ambitious full-stack developer with special attention to detail and a keen eye for UI/UX design.</p>
          <p>Most passionate about building products, web design, clean code & bitcoin.</p>
        </div>

        <div>
          Currently working as a Mid Frontend Developer at <a underline target="_blank" href="https://4ofthem.eu/">Four of them LLC</a>.
        </div>
      </div>
    </div>
  </div>
</template>
