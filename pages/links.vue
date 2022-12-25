<script lang="ts" setup>
const { websiteSocial, socialsIncludingBase } = $(useSocials())

const socials = computed(() => [websiteSocial, ...socialsIncludingBase])

definePageMeta({
  layout: 'links',
})

const { shortcutsShown } = useSocialsShortcuts()

const bgImages = [
  'https://mdl.artvee.com/sftb/403901mt.jpg',
  'https://mdl.artvee.com/sftb/402633mt.jpg',
  'https://mdl.artvee.com/sftb/403588mt.jpg',
  'https://mdl.artvee.com/sftb/101906ab.jpg',
  'https://mdl.artvee.com/sftb/225614fg.jpg',
  'https://mdl.artvee.com/sftb/103885ab.jpg',
  'https://mdl.artvee.com/sftb/401074mt.jpg',
  'https://mdl.artvee.com/sftb/700854an.jpg',
  'https://mdl.artvee.com/sftb/501118ld.jpg',
  'https://mdl.artvee.com/sftb/600248sl.jpg',
  'https://mdl.artvee.com/sftb/401288mt.jpg',
  'https://mdl.artvee.com/sftb/515596ld.jpg',

]
</script>

<template>
  <div max-w-8xl mx-auto flex-1 flex flex-col w-full gap-20>
    <div class="link-grid" gap-4>
      <div
        v-for="img in bgImages.slice(0, 6)"
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
        v-for="img in bgImages.slice(6)"
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
