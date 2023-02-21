<script lang="ts" setup>
import type { LinkModel } from '~~/composables/use-socials'

defineProps<{
  social: LinkModel
  monochrome?: boolean
}>()

const { isDark } = useTheme()

const justCopied = refAutoReset(false, 750)
const copyUrl = (text: string) => {
  copy(text)
  justCopied.value = true
}

// Detect hover
const elem = ref()
const hovered = useElementHover(elem)

watch(hovered, (value) => {
  if (!value) {
    setTimeout(() => {
      if (justCopied.value)
        justCopied.value = false
    }, 500)
  }
})
</script>

<template>
  <NuxtLink
    select-none block
    :external="!social.to"
    class="group"
    :to="social?.to ?? social.href"
    @contextmenu.prevent="copyUrl(social.href)"
  >
    <Card
      ref="elem"
      class="!active:(scale-98) aspect-2/1 sm:aspect-square" no-padding
    >
      <div p-5 flex-1 flex flex-col justify-between class="text-default">
        <!-- TODO: wrong color on dark mode first load -->
        <div flex items-center justify-between>
          <Icon
            :style="!monochrome ? { color: social.colorDark && isDark ? social.colorDark : social.color } : {}"
            transition ease-in-out
            :name="social.icon"
            text-5xl sm:text-6xl
          />
        </div>
        <div flex justify-between gap-4>
          <div ml-auto text-right overflow-hidden>
            <div
              class="translate-0 sm:translate-y-5.75 group-hover:(translate-y-0)"
              transition duration-400 font-medium
            >
              {{ social.label }}
            </div>

            <div
              v-tooltip="{
                content: stripUrl(social.href),
                theme: 'info-tooltip',
                placement: 'bottom',
              }"
              class="visible opacity-100 translate-y-0 sm:(invisible opacity-0 translate-y-2) sm:group-hover:(visible opacity-100 translate-y-0 delay-100)"
              transition-all duration-400
              text-opaque-hovered dark:text-accent
              truncate
            >
              {{ justCopied ? 'Copied link to clipboard' : stripUrl(social.href) }}
            </div>
          </div>
        </div>
      </div>
    </Card>
  </NuxtLink>
</template>
