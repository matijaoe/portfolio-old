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
  <nav>
    <div
      rounded-full flex justify-center px-3 transition
      relative overflow-hidden
      :class="{ 'bg-opaque backdrop-blur-md': pageScrolled }"
    >
      <ul font-medium lowercase flex items-center gap-3 sm:gap-0 w-max>
        <li v-for="(item, i) in navItems" :key="i">
          <!-- desktop -->
          <NuxtLink
            :to="item.to"
            :aria-label="item.label"
            hidden md:block
            py-2 px-4 rounded-sm
            transition
            text-opaque hover:text-opaque-2
            relative
            z-2
            active-class="!text-default"
          >
            <span text-sm> {{ item.label }}</span>
          </NuxtLink>

          <!-- mobile -->
          <!-- <NuxtLink
            :to="item.to"
            block md:hidden
            p-2
            transition
            text-opaque hover:text-opaque-2
            active-class="!text-default"
            :aria-label="item.label"
          >
            <Icon text-lg md:text-2xl :name="item.icon" />
          </NuxtLink> -->
        </li>
      </ul>
    </div>
  </nav>
</template>
