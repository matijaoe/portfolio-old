<script lang="ts" setup>
import gsap from 'gsap'
const { website, socialsIncludingBase } = $(useSocials())

const socials = computed(() => [website, ...socialsIncludingBase])

definePageMeta({
  layout: 'links',

})

useHead({
  title: 'Links | Matija Osrečki',
})

const { isDark } = $(useTheme())
const { shortcutsShown } = useSocialsShortcuts()

const art = computed(() => [
  isDark ? 'https://mdl.artvee.com/sftb/405063mt.jpg' : 'https://mdl.artvee.com/sftb/700854an.jpg',
  isDark ? 'https://mdl.artvee.com/sftb/800397ht.jpg' : 'https://mdl.artvee.com/sftb/515596ld.jpg',
  isDark ? 'https://mdl.artvee.com/sftb/403588mt.jpg' : 'https://mdl.artvee.com/sftb/603015sl.jpg',
  isDark ? 'https://mdl.artvee.com/sftb/602614sl.jpg' : 'https://mdl.artvee.com/sftb/800717ht.jpg',
])

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
  <div max-w-8xl mx-auto flex-1 flex flex-col w-full gap-20>
    <div
      ref="container"
      class="link-grid" gap-4
    >
      <div
        v-for="img in art.slice(0, 1)"
        :key="img"
        rounded-2xl
        select-none
        overflow-hidden
        class="col-span-3 sm:(col-span-2 row-span-1) aspect-2/1 sm:aspect-square filter-saturate-90"
        :style="{ backgroundImage: 'url(' + `'${img}'` + ')', backgroundSize: 'cover' }"
      />
      <LinksLinkCard
        v-for="(social, idx) in socials"
        :key="social.label"
        :social="social"
        :idx="idx"
        :show-key="shortcutsShown"
      />

      <div
        v-for="img in art.slice(1, 4)"
        :key="img"
        rounded-2xl
        select-none
        overflow-hidden
        class="col-span-3 sm:(col-span-2 row-span-1) aspect-2/1 sm:aspect-square filter-saturate-90"
        :style="{ backgroundImage: 'url(' + `'${img}'` + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
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
