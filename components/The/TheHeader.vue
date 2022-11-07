<script lang="ts" setup>
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
  <header
    fixed top-0 left-0 w-screen
    flex-grow-1 flex-shrink-0
    py-4 md:py-6
    z-200
  >
    <!-- TODO: they are not fully vertically aligned on mobile -->
    <div
      row
      grid grid-cols-5 gap-2 items-center
    >
      <div :class="{ 'opacity-0 invisible': pageScrolled }" flex items-center>
        <NuxtLink to="/" aria-label="Logo" class="p-3 ml--3 lg:(p-2 ml--2)">
          <Icon transition name="tabler:seeding" text-xl md:text-2xl text-opaque hover:text-green-5 />
        </NuxtLink>
      </div>

      <!-- TODO: dont set whole header to fix because it blocks click around not used area on scrollk -->
      <div col-span-3 flex items-center>
        <NavBar w-max mx-auto />
      </div>

      <div
        :class="{ 'opacity-0 invisible': pageScrolled }"
        justify-self-end
        flex items-center gap-5
      >
        <!-- <button
          aria-label="Command prompt"
          py-1 transition flex items-center text-opaque hover:text-default text-xl md:text-2xl
        >
          <Icon name="tabler:command" />
        </button> -->

        <DarkToggle class="p-3 mr--3 lg:(p-2 mr--2)" />
      </div>
    </div>
  </header>
</template>

