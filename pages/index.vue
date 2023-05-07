<script lang="ts" setup>
useHead({
  title: 'Home | Matija Osrečki',
})
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
          Self-motivated front-end oriented software developer, very much in love with all things web development. And Bitcoin.
        </p>

        <div mt="!8" flex items-center gap-3 text-sm>
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-65" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <p text-stone-5 dark:text-stone-5 flex items-center gap-2>
            Currently in Zagreb, Croatia
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
