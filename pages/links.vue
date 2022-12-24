<script lang="ts" setup>
import { stripUrl } from '~/utils'
const { matijaoSocial, socialsIncludingBase } = useSocials()
const { isDark } = useTheme()

const socials = computed(() => [
  matijaoSocial.value,
  ...socialsIncludingBase.value,
])
definePageMeta({
  layout: 'links',
})

useSocialsShortcuts()
</script>

<template>
  <div max-w-8xl mx-auto>
    <div class="link-grid" gap-4>
      <NuxtLink
        v-for="social in socials"
        :key="social.label"
        :external="!social.to"
        class="group col-span-3 sm:(col-span-2 row-span-1)"
        block
        :to="social?.to ?? social.href"
      >
        <Card aspect-square no-padding>
          <div p-5 flex-1 flex flex-col justify-between class="text-default">
            <Icon
              :style="{ color: social.color }"
              :class="{ 'filter-saturate-75': isDark }"
              :name="social.icon" text-6xl text-stone-2 dark:text-stone-4
            />
            <div ml-auto text-right>
              <div
                class=" translate-y-5.75 group-hover:(translate-y-0)"
                transition duration-400 font-medium
              >
                {{ social.label }}
              </div>
              <div
                class="invisible opacity-0 translate-y-2 group-hover:(visible opacity-100 translate-y-0 delay-100)"
                transition-all duration-400
                text="#43aedc" dark:text-accent
              >
                {{ stripUrl(social.href) }}
              </div>
            </div>
          </div>
        </Card>
      </NuxtLink>
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
