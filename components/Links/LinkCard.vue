<script lang="ts" setup>
import type { LinkModel } from '~~/composables/use-socials'

const props = defineProps<{
  social: LinkModel
  showKey?: boolean
}>()

let justCopied = $(refAutoReset(false, 750))
const copyUrl = (text: string) => {
  copy(text)
  justCopied = true
}

// Detect hover
const elem = ref()
const hovered = useElementHover(elem)

watch(hovered, (value) => {
  if (!value) {
    setTimeout(() => {
      if (justCopied)
        justCopied = false
    }, 500)
  }
})

// Recognize keypresses
let keyPressed = $(refAutoReset(false, 150))
const keys = useMagicKeys()
const key = computed(() => props.social.key ?? undefined)

whenever(keys?.[key.value], (v) => {
  keyPressed = true
})
</script>

<template>
  <NuxtLink
    ref="elem"
    select-none
    :external="!social.to"
    class="group col-span-3 sm:(col-span-2 row-span-1)"
    block
    :to="social?.to ?? social.href"
    @contextmenu.prevent="copyUrl(social.href)"
  >
    <Card
      ref="elem"
      class="!active:(scale-98) aspect-2/1 sm:aspect-square" no-padding
      :active="keyPressed"
    >
      <div p-5 flex-1 flex flex-col justify-between class="text-default">
        <Icon
          :style="{ color: social.color }"
          :name="social.icon"
          text-5xl sm:text-6xl
          text-stone-2 dark:text-stone-4
        />
        <div flex justify-between gap-4>
          <div
            v-show="showKey"
            v-tooltip="{
              content: `Press ${social.key?.toUpperCase()} to open`,
              theme: 'info-tooltip',
              placement: 'top',
            }"
            uppercase font-medium font-sans text-5xl
            text="stone-8/8 dark:stone-50/6"
            transition
            class="invisible md:visible"
            :class="{ '!text-accent scale-110': keyPressed }"
          >
            {{ social.key }}
          </div>

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
              text="#43aedc" dark:text-accent
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
