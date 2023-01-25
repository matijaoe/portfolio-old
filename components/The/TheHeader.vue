<script lang="ts" setup>
const { scrolled } = useWindowScrolled()

const { toggleGrain } = useGrain()
const { notificationShown } = useNotification()
</script>

<template>
  <header w-screen z-200>
    <!-- Notification -->
    <Notification v-if="notificationShown">
      Very much work in progress. Nothing to see here. Move along.
    </Notification>

    <!-- Header -->
    <div py-4 md:py-6 px-5 sm:px-8>
      <div hidden sm:flex items-center fixed class="left-50% -translate-x-50%">
        <NavBar
          px-4 py-1 w-max mx-auto rounded-full
          :class="{ 'bg-opaque backdrop-blur-md': scrolled }"
        />
      </div>

      <div class=" hidden sm:block">
        <div flex justify-between gap-2 items-center>
          <div flex items-center>
            <NuxtLink to="/" aria-label="Logo" class="p-3 ml--3 lg:(p-2 ml--2)" text-opaque hover:text-default>
              <Icon transition name="tabler:seeding" text-xl md:text-2xl />
            </NuxtLink>
          </div>

          <div justify-self-end flex items-center gap-5>
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

      <!-- mobile -->
      <div row sm:hidden w-full flex justify-center fixed class="left-50% -translate-x-50%" z-100>
        <div
          flex items-center justify-center rounded-full w-fit gap-2
          :class="{ 'bg-opaque backdrop-blur-md': scrolled }"
          px-4 py-1
        >
          <NavBar />
          <DarkToggle p-3 lg:p-2 />
        </div>
      </div>
    </div>
  </header>
</template>
