<script lang="ts" setup>
import { navItems } from '~~/data/nav-items'

const pos = ref(0)
const pageScrolled = computed(() => pos.value > 48)

const { y } = useWindowScroll()
onMounted(() => {
  watchEffect(() => {
    pos.value = y.value
  })
})
</script>

<template>
  <nav
    relatives overflow-hidden
    flex justify-center
    px-3 rounded-full transition
    :class="{ 'bg-opaque backdrop-blur-md': pageScrolled }"
  >
    <menu font-medium lowercase flex items-center gap-3 sm:gap-0 w-max>
      <li v-for="(item, i) in navItems" :key="i">
        <!-- desktop -->
        <NuxtLink
          :to="item.to"
          hidden md:block
          py-2 px-4
          text-opaque hover:text-opaque-2
          relative z-2
          transition rounded-sm
          active-class="!text-default"
        >
          <span text-sm> {{ item.label }}</span>
        </NuxtLink>

        <!-- mobile -->
        <NuxtLink
          :to="item.to"
          block md:hidden p-2 transition text-opaque hover:text-opaque-2
          active-class="!text-default"
          :aria-label="item.label"
        >
          <Icon text-xl md:text-2xl :name="item.icon" />
        </NuxtLink>
      </li>
    </menu>
  </nav>
</template>
