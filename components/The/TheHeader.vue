<script lang="ts" setup>
const pos = ref(0)
const pageScrolled = computed(() => pos.value > 48)

const { y } = useWindowScroll()
onMounted(() => {
  watchEffect(() => {
    pos.value = y.value
  })
})

const { toggleGrain } = useGrain()

const { notificationShown } = useNotification()
</script>

<template>
  <header fixed top-0 left-0 w-screen flex-grow-1 flex-shrink-0 z-200>
    <!-- Notification -->
    <Notification v-if="notificationShown">
      Very much work in progress. Nothing to see here. Move along.
    </Notification>

    <!-- Header -->
    <div py-4 md:py-6>
      <!-- TODO: they are not fully vertically aligned on mobile -->
      <div row grid grid-cols-5 gap-2 items-center>
        <div :class="{ 'opacity-0 invisible': pageScrolled }" flex items-center>
          <NuxtLink to="/" aria-label="Logo" class="p-3 ml--3 lg:(p-2 ml--2)" text-opaque hover:text-default>
            <Icon transition name="tabler:seeding" text-xl md:text-2xl />
          </NuxtLink>
        </div>

        <!-- TODO: dont set whole header to fix because it blocks click around not used area on scrollk -->
        <div col-span-3 flex items-center>
          <NavBar w-max mx-auto />
        </div>

        <div :class="{ 'opacity-0 invisible': pageScrolled }" justify-self-end flex items-center gap-5>
          <button
            aria-label="Command prompt" flex items-center text-xl md:text-2xl text-opaque hover:text-default
            @click="toggleGrain"
          >
            <Icon name="ph:command-duotone" />
          </button>

          <DarkToggle class="p-3 mr--3 lg:(p-2 mr--2)" />
        </div>
      </div>
    </div>
  </header>
</template>

