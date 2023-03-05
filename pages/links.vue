<script lang="ts" setup>
import gsap from 'gsap'
const { website, socialsIncludingBase } = useSocials()

const socials = computed(() => [website, ...socialsIncludingBase])

definePageMeta({
  layout: 'links',
})

useHead({
  title: 'Links | Matija Osrečki',
})

const container = ref<HTMLDivElement>()

onMounted(() => {
  gsap.from(container.value!.children, {
    delay: 0.15,
    duration: 0.5,
    y: '100',
    autoAlpha: 0,
    stagger: 0.125,
    ease: 'back.out(1.7)',
  })
})
</script>

<template>
  <div max-w-1600px mx-auto flex-1 flex flex-col w-full gap-20>
    <div
      ref="container"
      class="link-grid" gap-4
    >
      <LinksLinkCard
        v-for="(social) in socials"
        :key="social.label"
        monochrome
        class="group col-span-3 sm:(col-span-2 row-span-1)"
        :social="social"
      />
    </div>
    <div flex justify-center sm:justify-end mt-auto pb-12 sm:pb-0>
      <div text-opaque flex items-center gap-5 sm:divider-x>
        <p text-sm sm:text-base class="hidden sm:block">
          press corresponding key to open, right click to copy
        </p>
        <DarkToggle sm:pl-4 class="!text-3xl md:!text-2xl" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.link-grid {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}
</style>
