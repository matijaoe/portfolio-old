<script lang="ts" setup>
const items = [
  {
    label: 'Home',
    to: '/',
    icon: 'tabler:home-2',
  },
  {
    label: 'About',
    to: '/about',
    icon: 'tabler:user',
  },
  {
    label: 'Projects',
    to: '/projects',
    icon: 'tabler:bulb',
  },
  {
    label: 'Uses',
    to: '/uses',
    icon: 'tabler:tools',
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'tabler:file-text',
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'tabler:pencil',
  },
  {
    label: 'Guestbook',
    to: '/guestbook',
    icon: 'tabler:book',
  },
]

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
      rounded-full flex justify-center px-3 transition-all
      relative overflow-hidden
      :class="{ 'bg-opaque backdrop-blur-md': pageScrolled }"
    >
      <ul font-medium lowercase flex items-center gap-3 sm:gap-0 w-max>
        <li v-for="(item, i) in items" :key="i">
          <!-- desktop -->
          <NuxtLink
            :to="item.to"
            hidden sm:block
            py-2 px-4 rounded-sm
            text-opaque hover:text-opaque-2
            relative
            z-2
            active-class="!text-default"
          >
            <span text-sm> {{ item.label }}</span>
          </NuxtLink>

          <!-- mobile -->
          <NuxtLink
            :to="item.to"
            block sm:hidden
            p-2
            text-opaque hover:text-opaque-2
            active-class="!text-default"
          >
            <Icon text-2xl :name="item.icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
