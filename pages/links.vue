<script lang="ts" setup>
const { websiteSocial, socialsIncludingBase } = $(useSocials())

const socials = computed(() => [websiteSocial, ...socialsIncludingBase])

definePageMeta({
  layout: 'links',
})

const { shortcutsShown } = useSocialsShortcuts()
</script>

<template>
  <div max-w-8xl mx-auto flex-1 flex flex-col w-full gap-20>
    <div class="link-grid" gap-4>
      <LinksLinkCard
        v-for="(social, idx) in socials"
        :key="social.label"
        :social="social"
        :idx="idx"
        :show-key="shortcutsShown"
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
